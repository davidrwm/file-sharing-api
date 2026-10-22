import path from "node:path";

const storageDirectory = path.resolve("storage");

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function resolveStoragePath(storageKey) {
  if (
    typeof storageKey !== "string" ||
    !UUID_PATTERN.test(storageKey)
  ) {
    return null;
  }

  const filePath = path.resolve(storageDirectory, storageKey);

  if (!filePath.startsWith(`${storageDirectory}${path.sep}`)) {
    return null;
  }

  return filePath;
}