import React, { useEffect, useRef } from "react";
import "./update.scss";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";
import { errorMessage, responseMessage } from "../../utils/toast";
import { useUpdateUser } from "../../apis/UpdateUserApi";
import { updatePriceSchema } from "../../components/schemas";


interface Props {
  isOpen: boolean;
  onClose: () => void;
  // updateUser: () => Promise<void>;
}

export const UpdateHourlyRate: React.FC<Props> = ({ isOpen, onClose }) => {
  const token = useSelector((state: any) => state?.auth?.authToken);
  const user = useSelector((state: any) => state?.auth?.user);
  console.log("bio: ", user.bio);

  const { newUpdateUser } = useUpdateUser();

  const url =
    "https://creativehub-endpoints-production.up.railway.app/api/users/update-details";

  const onSubmit = async (values: any, actions: any) => {
    const updatedValues = {
      ...values,
      // "state": "Lagos",
      // "profilePicture": "{{$randomAbstractImage}}",
      // "certificates": [
      //     "https://jozzdev.vercel.app/",
      // ],
      // "urls": [
      //     "https://jozzdev.vercel.app/",
      // ],
      // "hourlyRate": "15",
      // "country": "Nigeria"
    };

    if (!navigator.onLine) {
      // Check if there is no internet connection
      errorMessage(
        "No internet connection. Please check your network settings."
      );
    }
    try {
      const response = await axios.post(url, updatedValues, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      responseMessage("Description updated succesfully");
      actions.resetForm();
      newUpdateUser(user._id);
      onClose();
    } catch (error: any) {
      console.log("error: ", error.response.data.message);
      errorMessage(error.response.data.message);
      onClose();
    }
  };

  const {
    values,
    errors,
    setValues,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      hourlyRate: user.hourlyRate,
    },
    onSubmit,
    validationSchema: updatePriceSchema
  });
  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      hourlyRate: user.hourlyRate,
    }));
  }, [user.hourlyRate, setValues]);

  const modalRef = useRef<HTMLDivElement>(null);

  const useOnClickOutside = (modalRef: any, handler: any) => {
    useEffect(() => {
      const listener = (event: any) => {
        if (!modalRef.current || modalRef.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [modalRef, handler]);
  };
  useOnClickOutside(modalRef, () => onClose());

  return (
    <div className={`language-modal ${isOpen ? "open" : ""}`}>
      <div ref={modalRef} className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {/* Add form fields and update skill experience_level */}
        <h2>Update HourlyRate</h2>
        {/* Add form fields here */}
        <form className="update-form" onSubmit={handleSubmit}>
          <section className={errors.hourlyRate && touched.hourlyRate ? "input-error" : ""}>
            <input
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hourlyRate}
              name="hourlyRate"
              placeholder="Edit HourlyRate"
            />
            {errors.hourlyRate && touched.hourlyRate && typeof errors.hourlyRate === "string" && (
              <p className="error">{errors.hourlyRate}</p>
            )}
          </section>

          <section className="submit-sec">
            <p onClick={onClose}>Cancel</p>
            <button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Updating..." : "Update"}
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};
