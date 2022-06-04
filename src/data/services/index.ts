export const cropText = (text: string, length: number) => {
  return text.length >= length ? text.slice(0, length - 3) + "..." : text;
}