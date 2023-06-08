export default function sortingByDate(date1, date2) {
  const a = date1.split('.')
  const b = date2.split('.')
  return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
}