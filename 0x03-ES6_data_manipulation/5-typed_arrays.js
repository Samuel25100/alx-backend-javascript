export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8 = new Uint8Array(buffer);
  try {
    int8[position] = value;
  } catch (err) {
    throw new Error('Position outside range');
  }
  return int8;
}
