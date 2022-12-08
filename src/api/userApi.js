import axios from "axios";

const loginUrl = `${process.env.REACT_APP_BACKEND_URL}/v1/user/login`;
const userProfileUrl = `${process.env.REACT_APP_BACKEND_URL}/v1/user`;
const userLogoutUrl = `${process.env.REACT_APP_BACKEND_URL}/v1/user/logout`;
const newAccessJWT = `${process.env.REACT_APP_BACKEND_URL}/v1/token`;

export const userLogin = (frmData) => {
  console.log(frmData);
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginUrl, frmData);

      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
        localStorage.setItem(
          "crmSite",
          JSON.stringify({ refreshJWT: res.data.refreshJWT })
        );
      }
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");

      if (!accessJWT) {
        reject("Token not found!");
      }
      const result = await axios.get(userProfileUrl, {
        headers: {
          Authorization: `Bearer ${accessJWT}`,
        },
      });

      resolve(result.data);
    } catch (error) {
      console.log(error);
      reject(error.message);
    }
  });
};

export const userLogout = async () => {
  try {
    await axios.delete(userLogoutUrl, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessJWT")}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { accessJWT } = JSON.parse(localStorage.getItem("crmSite"));

      if (!accessJWT) {
        reject("Token not found");
      }

      const res = await axios.get(userProfileUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchNewAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("crmSite"));

      if (!refreshJWT) {
        reject("Token not found");
      }

      const res = await axios.get(newAccessJWT, {
        headers: {
          Authorization: refreshJWT,
        },
      });

      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
        resolve(true);
      }

      reject(false);
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("crmSite");
      }
      reject(false);
    }
  });
};
