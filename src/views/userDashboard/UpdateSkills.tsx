import React, { useEffect, useRef } from "react";
import "./update.scss";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";
import { errorMessage, responseMessage } from "../../utils/toast";
import { useUpdateUser } from "./UpdateUserApi";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  // updateUser: () => Promise<void>;
}

export const UpdateSkills: React.FC<Props> = ({ isOpen, onClose }) => {
  const token = useSelector((state: any) => state?.auth?.authToken);
  const user = useSelector((state: any) => state?.auth?.user);
  const { newUpdateUser } = useUpdateUser();

  const url =
    "https://creativehub-endpoints-production.up.railway.app/api/users/add-skills";

    const onSubmit = async (values: any, actions: any) => {
      const updatedValues = {
        "newSkills": [
          {
            ...values,
            experience_level: values.experience_level.toUpperCase(),
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
        responseMessage("Skill updated succesfully");
        actions.resetForm();
        newUpdateUser(user._id);
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
      skill: "",
      experience_level: "",
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
        {/* Add form fields and update skill experience_level */}
        <h2>Update Skills</h2>
        {/* Add form fields here */}
        <form className="update-form" onSubmit={handleSubmit}>
          <section className={errors.skill && touched.skill ? "input-error" : ""}>
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.skill}
              name='skill'
              placeholder="Add Skills"
            />
            {errors.skill && touched.skill && <p className="error">{errors.skill}</p>}
          </section>
          <section className={errors.experience_level && touched.experience_level ? "input-error" : ""}>
  <select
    onChange={handleChange}
    onBlur={handleBlur}
    name="experience_level"
    value={values.experience_level}
  >
    <option value="" disabled>Select Skills Level</option>
    <option value="BEGINNER">Beginner</option>
    <option value="ADVANCED">Advanced</option>
  </select>
  {errors.experience_level && touched.experience_level && <p className="error">{errors.experience_level}</p>}
</section>

  
          <section className="submit-sec">
            <p onClick={onClose}>Cancel</p>
          <button  disabled={isSubmitting} type="submit">{isSubmitting ? 'Updating...' : 'Update'}</button>
          </section>
        </form>
      </div>
    </div>
  );
};

