/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import "./update.scss";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";
import { errorMessage, responseMessage } from "../../utils/toast";
import { updateBioSchema } from "../../components/schemas";
import { useUpdateUser } from "../../apis/UpdateUserApi";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  // updateUser: () => Promise<void>;
}

interface AuthState {
  auth: {
    authToken: string | null;
    user: {
      _id: any;
      bio: string
      firstName: string
      lastName: string
    } | null;
  };
}

export const UpdateName: React.FC<Props> = ({ isOpen, onClose }) => {
  const token = useSelector((state: AuthState) => state?.auth?.authToken);
  const user = useSelector((state: AuthState) => state?.auth?.user);


  const { newUpdateUser } = useUpdateUser();

  const url =
    "https://creativehub-endpoints-production.up.railway.app/api/users/update-details";

  const onSubmit = async (values: any, actions: any) => {
    const updatedValues = {
      ...values,
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
      responseMessage("Names updated succesfully");
      actions.resetForm();
      newUpdateUser(user?._id || 0);
      onClose();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      bio: user?.bio,
      firstName: user?.firstName,
      lastName: user?.lastName,
    },
    onSubmit,
    validationSchema: updateBioSchema
  });
  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      firstName: user?.firstName,
    }));
  }, [user?.firstName, setValues]);

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
        <h2>Update Details</h2>
        {/* Add form fields here */}
        <form className="update-form" onSubmit={handleSubmit}>
          <section className={errors.firstName && touched.firstName ? "input-error" : ""}>
            <input
              // type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              name="firstName"
              placeholder="Edit First Name"
            />
            {errors.firstName && touched.firstName && typeof errors.firstName === "string" && (
              <p className="error">{errors.firstName}</p>
            )}
          </section>

          <section className={errors.lastName && touched.lastName ? "input-error" : ""}>
            <input
              // type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              name="lastName"
              placeholder="Edit Last Name"
            />
            {errors.lastName && touched.lastName && typeof errors.lastName === "string" && (
              <p className="error">{errors.lastName}</p>
            )}
          </section>

          <section className="submit-sec flex2">
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
