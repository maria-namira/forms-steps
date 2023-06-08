export default function dateValidation(str) {
  const regex = /^[0-3]\d\.[0-1]\d\.\d{2}$/;
  return regex.test(str);
}