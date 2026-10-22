import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectVersionsCommand,
} from "@aws-sdk/client-s3";

const requiredEnv = [
  "B2_KEY_ID",
  "B2_APPLICATION_KEY",
  "B2_BUCKET_NAME",
  "B2_ENDPOINT",
];

for (const name of requiredEnv) {
  if (!process.env[name]) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
}

const s3 = new S3Client({
  endpoint: process.env.B2_ENDPOINT,
  region: "eu-central-003",
  credentials: {
    accessKeyId: process.env.B2_KEY_ID,
    secretAccessKey: process.env.B2_APPLICATION_KEY,
  },
});

const bucket = process.env.B2_BUCKET_NAME;

export async function uploadObject({
  key,
  body,
  contentType,
  contentLength,
}) {
  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
      ContentLength: contentLength,
    }),
  );
}

export async function getObject(key) {
  return s3.send(
    new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    }),
  );
}

export async function deleteObject(key) {
  // Collect every version and delete marker for this exact object.
  const versionsToDelete = [];
  let KeyMarker;
  let VersionIdMarker;

  do {
    const result = await s3.send(
      new ListObjectVersionsCommand({
        Bucket: bucket,
        Prefix: key,
        KeyMarker,
        VersionIdMarker,
      }),
    );

    for (const item of [
      ...(result.Versions ?? []),
      ...(result.DeleteMarkers ?? []),
    ]) {
      if (item.Key === key && item.VersionId) {
        versionsToDelete.push(item.VersionId);
      }
    }

    if (!result.IsTruncated) {
      break;
    }

    KeyMarker = result.NextKeyMarker;
    VersionIdMarker = result.NextVersionIdMarker;
  } while (true);

  // Permanently delete each version and delete marker.
  for (const versionId of versionsToDelete) {
    await s3.send(
      new DeleteObjectCommand({
        Bucket: bucket,
        Key: key,
        VersionId: versionId,
      }),
    );
  }
}