import { deterministicPartitionKey } from "./dpk.js";

// Test Case: No input
console.log(deterministicPartitionKey());

// Test Case: Event with partitionKey
console.log(deterministicPartitionKey({ partitionKey: 'customPartitionKey' }));

// Test Case: Event without partitionKey, but with data
console.log(deterministicPartitionKey({ data: 'testData' }));

// Test Case: Event with non-string partitionKey
console.log(deterministicPartitionKey({ partitionKey: { id: 1 } }));

// Test Case: Event with partitionKey longer than 256 characters
console.log(deterministicPartitionKey({ partitionKey: 'a'.repeat(257) }));