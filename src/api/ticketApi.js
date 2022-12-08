import axios from "axios";

const getAllTicketsUrl = `${process.env.REACT_APP_BACKEND_URL}/v1/ticket`;
const getSingleTicketUrl = `${process.env.REACT_APP_BACKEND_URL}/v1/ticket/`;
const closeTicketUrl = `${process.env.REACT_APP_BACKEND_URL}/v1/ticket/close_ticket/`;

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await axios
        .get(getAllTicketsUrl, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}`,
          },
        })
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

export const getSingleTicket = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(getSingleTicketUrl + _id, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}`,
        },
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateReplyTicket = (_id, msgObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.put(getSingleTicketUrl + _id, msgObj, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}`,
        },
      });

      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateTicketStatusClosed = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        closeTicketUrl + _id,
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}`,
          },
        }
      );
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};
