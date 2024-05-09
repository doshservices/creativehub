import React, { useEffect, useRef } from "react";
import "./update.scss";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";
import { errorMessage, responseMessage } from "../../utils/toast";
import { updateCertificatesSchema } from "../../components/schemas";
import { useUpdateUser } from "../../apis/UpdateUserApi";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  // updateUser: () => Promise<void>;
}

export const UpdateCert: React.FC<Props> = ({ isOpen, onClose }) => {
  const token = useSelector((state: any) => state?.auth?.authToken);
  const user = useSelector((state: any) => state?.auth?.user);

  const { newUpdateUser } = useUpdateUser();

  const url =
    "https://creativehub-endpoints-production.up.railway.app/api/users/update-details";

  const onSubmit = async (values: any, actions: any) => {
    const updatedValues = {
      ...values,
      certificates: [...user.certificates, values.certificates],
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
      responseMessage("Certificate Link updated");
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
    // setValues,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      certificates: "",
    },
    onSubmit,
    validationSchema: updateCertificatesSchema
  });
  // useEffect(() => {
  //   setValues((prevValues) => ({
  //     ...prevValues,
  //     bio: user.bio,
  //   }));
  // }, [user.bio, setValues]);

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
        <h2>Update Certificate</h2>
        {/* Add form fields here */}
        <form className="update-form" onSubmit={handleSubmit}>
          <section className={errors.certificates && touched.certificates ? "input-error" : ""}>
            <input
              // type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.certificates}
              name="certificates"
              placeholder="Input Certificate Link"
            />
            {errors.certificates && touched.certificates && typeof errors.certificates === "string" && (
              <p className="error">{errors.certificates}</p>
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
