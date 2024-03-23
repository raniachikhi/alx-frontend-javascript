export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer);

  // if position outside range
  if (position >= length) throw new Error('Position outside range');
  //the new value in the desired position
  dv.setInt8(position, value);

  return dv;
}
