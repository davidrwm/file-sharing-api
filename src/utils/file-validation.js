import fs from "node:fs/promises";

const signatures = {
  "application/pdf": Buffer.from("%PDF-"),
  "image/png": Buffer.from([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  ]),
  "image/jpeg": Buffer.from([0xff, 0xd8, 0xff]),
};

export async function validateFileContent(filePath, mimeType) {
  const buffer = await fs.readFile(filePath);

  // Verify known file signatures.
  for (const [type, signature] of Object.entries(signatures)) {
    if (buffer.subarray(0, signature.length).equals(signature)) {
      return type === mimeType;
    }
  }

  // Plain text has no universal signature.
  if (mimeType !== "text/plain") {
    return false;
  }

  // Reject binary content and invalid UTF-8.
  if (buffer.includes(0)) {
    return false;
  }

  try {
    new TextDecoder("utf-8", { fatal: true }).decode(buffer);
    return true;
  } catch {
    return false;
  }
}