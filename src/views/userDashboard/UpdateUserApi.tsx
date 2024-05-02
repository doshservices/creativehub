import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../state/slice/authSlice";

export const useUpdateUser = () => {
    const dispatch = useDispatch();

     const newUpdateUser = async (userId: string) => {
        const updatedUserDataUrl = `https://creativehub-endpoints-production.up.railway.app/api/users/${userId}`;
        try {
          // Fetch the updated user data from the API
          const updatedUserResponse = await axios.get(updatedUserDataUrl, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          const updatedUserData = updatedUserResponse.data.data.user;
          // Dispatch the setUser action with the updated user data
          dispatch(setUser(updatedUserData));
        } catch (error) {
          console.log(error);
        }
      };
      return { newUpdateUser }
}
