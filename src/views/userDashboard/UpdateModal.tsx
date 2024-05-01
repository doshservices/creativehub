import React, { useEffect, useRef } from "react";
import "./update.scss";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";
import { errorMessage, responseMessage } from "../../utils/toast";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  updateUser: () => Promise<void>;
}

const UpdateModal: React.FC<Props> = ({ isOpen, onClose, updateUser }) => {
  const token = useSelector((state: any) => state?.auth?.authToken);
  // const user = useSelector((state: any) => state?.auth?.user);

  const url =
    "https://creativehub-endpoints-production.up.railway.app/api/users/add-languages";

    const onSubmit = async (values: any, actions: any) => {
      const updatedValues = {
        "newLanguages": [
          {
            ...values,
            proficiency: values.proficiency.toUpperCase(),
          }
        ]
      };
      try {
        const response = await axios.post(url, updatedValues, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        responseMessage("Bargain sent Succesful");
        actions.resetForm();
        updateUser();
        onClose();
      } catch (error: any) {
        console.log(error);
        errorMessage(error.response.data.message);
        onClose();
      }
    };


  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      language: "",
      proficiency: "",
    },
    onSubmit,
  });

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
    <div  className={`language-modal ${isOpen ? "open" : ""}`}>
      <div ref={modalRef} className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {/* Add form fields and update language proficiency */}
        <h2>Update Language</h2>
        {/* Add form fields here */}
        <form className="update-form" onSubmit={handleSubmit}>
          <section className={errors.language && touched.language ? "input-error" : ""}>
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.language}
              name='language'
              placeholder="Add Language"
            />
            {errors.language && touched.language && <p className="error">{errors.language}</p>}
          </section>
          <section className={errors.proficiency && touched.proficiency ? "input-error" : ""}>
  <select
    onChange={handleChange}
    onBlur={handleBlur}
    name="proficiency"
    value={values.proficiency}
  >
    <option value="" disabled>Select Language Level</option>
    <option value="BEGINNER">Beginner</option>
    <option value="ADVANCED">Advanced</option>
  </select>
  {errors.proficiency && touched.proficiency && <p className="error">{errors.proficiency}</p>}
</section>

  
          <section className="submit-sec">
            <p onClick={onClose}>Cancel</p>
          <button  disabled={isSubmitting} type="submit">{isSubmitting ? 'Bargaining...' : 'Bargain'}</button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
