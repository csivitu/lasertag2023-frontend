export const getTime = (date: string) => {
  const timestamp = Date.parse(date);
  const formattedDate = new Date(timestamp).toLocaleTimeString();
  return formattedDate;
};

export const getDate = (date: string) => {
  const timestamp = Date.parse(date);
  const formattedDate = new Date(timestamp).toLocaleDateString();
  return formattedDate;
};
export const getDayOfMonth = (date: string) => {
  const timestamp = Date.parse(date);
  const DateObject = new Date(timestamp);
  return DateObject.getDate();
};
