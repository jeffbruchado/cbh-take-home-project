import { createHash as _createHash } from "crypto";

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

function deterministicPartitionKey(event) {
  if (!event) return TRIVIAL_PARTITION_KEY;

  let candidate = event.partitionKey || createHash(JSON.stringify(event));

  candidate = (typeof candidate !== "string") ? JSON.stringify(candidate) : candidate;

  return (candidate.length > MAX_PARTITION_KEY_LENGTH) ? createHash(candidate) : candidate;
}

function createHash(data) {
  return _createHash("sha3-512").update(data).digest("hex");
}

export { deterministicPartitionKey };