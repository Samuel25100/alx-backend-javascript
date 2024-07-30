export default function cleanSet(set, start) {
  let result = '';
  try {
    if (!(start.length)) return result;
    for (const i of set) {
      if (i.includes(start)) {
        const re = i.replace(start, '');
        if (result) result += '-';
        result += re;
      }
    }
  } catch (err) {
    return '';
  }
  return result;
}
