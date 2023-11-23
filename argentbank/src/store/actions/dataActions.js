import axios from "axios";

// Action pour mettre à jour le nom d'utilisateur dans la base de données

export const updateUserInDatabase = async (newUserName) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      { userName: newUserName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      console.log(
        "Nom d'utilisateur mis à jour avec succès dans la base de données !"
      );
    } else {
      console.error(
        "Échec de la mise à jour du nom d'utilisateur dans la base de données"
      );
    }
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour du nom d'utilisateur dans la base de données",
      error
    );
  }
};
