import { deterministicPartitionKey } from "./dpk";
import { createHash } from "crypto";

describe("deterministicPartitionKey", () => {

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey when provided in the event", () => {
    const event = { partitionKey: 'customPartitionKey' };
    const key = deterministicPartitionKey(event);
    expect(key).toBe('customPartitionKey');
  });

  it("Returns a hashed string when partitionKey is not provided in the event", () => {
    const event = { data: 'testData' };
    const dataHash = createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    const key = deterministicPartitionKey(event);
    expect(key).toBe(dataHash);
  });

  it("Returns a stringified object when partitionKey is a non-string", () => {
    const event = { partitionKey: { id: 1 } };
    const key = deterministicPartitionKey(event);
    expect(key).toBe(JSON.stringify({ id: 1 }));
  });

  it("Returns a hashed string when partitionKey is longer than 256 characters", () => {
    const event = { partitionKey: 'a'.repeat(257) };
    const dataHash = createHash("sha3-512").update(event.partitionKey).digest("hex");
    const key = deterministicPartitionKey(event);
    expect(key).toBe(dataHash);
  });

});