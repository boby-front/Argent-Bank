import axios from "axios";
import { loginFailure, userInfos } from "../slices/authSlice";

// Ton action pour récupérer les informations utilisateur avec le token
export const fetchUserInfo = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const userInfoResponse = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const userName = userInfoResponse.data.body.userName;
      const firstName = userInfoResponse.data.body.firstName;
      const lastName = userInfoResponse.data.body.lastName;
      dispatch(
        userInfos({
          userName: userName,
          firstName: firstName,
          lastName: lastName,
        })
      );
    } catch (error) {
      dispatch(
        loginFailure({
          error: "Impossible de récupérer les informations de l'utilisateur",
        })
      );
    }
  }
};
