import { useSelector } from "react-redux";
import { errorMessage, responseMessage } from "../utils/toast";
import axios from "axios";
import { FormikHelpers } from "formik";

interface AuthState {
  auth: {
    authToken: string | null;
    user: {
      _id: string;
    } | null;
  };
}
interface FormValues {
  skill: string;
  projectDescription: string;
  proposedPrice: number;
  // Add more fields as needed
}

export default function BargainSubmitApi() {
  const token = useSelector((state: AuthState) => state?.auth?.authToken);
  const user = useSelector((state: AuthState) => state?.auth?.user);
  const url =
    "https://creativehub-endpoints-production.up.railway.app/api/creatives/bargain";
  type RecieverId = string | undefined;

  const bargainApi = async (
    recieverId: RecieverId,
    values: FormValues,
    actions: FormikHelpers<FormValues>,
    onClose: () => void
  ) => {
    const updatedValues = {
      ...values,
      senderId: user?._id,
      recieverId: recieverId,
    };
    try {
      const response = await axios.post(url, updatedValues, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      responseMessage("Bargain sent succesfully");
      actions.resetForm();
      // window.location.reload();
      onClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      errorMessage(error.response.data.message);
      onClose();
    }
  };
  return { bargainApi };
}
