import axios from "axios";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/v1/ticket`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZkc2xhbGZmQGdtYWlsLmNvbSIsImlhdCI6MTY3MDI0NjA4OCwiZXhwIjoxNjcwMjQ2OTg4fQ.VZWKSD5nXbWcC0qCQf9ChWjstiaB3KD4TIf0IySw8Gk",
          },
        })
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};
