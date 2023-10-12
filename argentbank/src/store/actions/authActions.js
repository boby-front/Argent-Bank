import { loginSuccess, loginFailure, userInfos } from "../slices/authSlice";
import axios from "axios";

export const userLogin = (email, password) => async (dispatch) => {
  const userData = { email, password };

  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      userData
    );
    if (response.status === 200) {
      localStorage.setItem("token", response.data.body.token);
      dispatch(loginSuccess(userData));

      // Après une connexion réussie on récupère les informations de l'utilisateur à partir l'API
      const userInfoResponse = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        null,
        {
          headers: {
            Authorization: `Bearer ${response.data.body.token}`,
          },
        }
      );

      if (userInfoResponse.status === 200) {
        const userName = userInfoResponse.data.body.userName;
        dispatch(
          userInfos({
            userName: userName,
          })
        );
      } else {
        dispatch(
          loginFailure({
            error: "Impossible de récupérer les informations de l'utilisateur",
          })
        );
      }
    } else {
      dispatch(loginFailure({ error: "La connexion a échoué." }));
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 400) {
        dispatch(loginFailure({ error: "Email ou mot de passe incorrect" }));
      } else {
        dispatch(
          loginFailure({
            error: "Une erreur s'est produite lors de la connexion.",
          })
        );
      }
    }
  }
};
