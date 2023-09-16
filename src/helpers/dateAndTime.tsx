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