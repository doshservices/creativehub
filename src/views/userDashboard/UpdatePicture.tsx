/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import "./update.scss";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";
import { errorMessage, responseMessage } from "../../utils/toast";
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
      profileImg: string
    } | null;
  };
}


const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dd3vdayww/image/upload';
const uploadPreset = 'uploadProfileImg';

export const UpdatePicture: React.FC<Props> = ({ isOpen, onClose }) => {
  const token = useSelector((state: AuthState) => state?.auth?.authToken);
  const user = useSelector((state: AuthState) => state?.auth?.user);
  // const [selectedFile, setSelectedFile] = useState<null>();

  const { newUpdateUser } = useUpdateUser();

  const url =
    "https://creativehub-endpoints-production.up.railway.app/api/users/update-details";

    // const convertFileToBase64 = (file: File): Promise<string> => {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => resolve(reader.result as string);
    //     reader.onerror = (error) => reject(error);
    //   });
    // };

    const uploadImageToCloudinary = (file: File): Promise<string> => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);
      return axios.post(cloudinaryUrl, formData)
        .then(response => response.data.secure_url)
        .catch(error => {
          console.error('Error uploading to Cloudinary:', error);
          throw error;
        });
    };

  const onSubmit = async (values: any, actions: any) => {
    if (!navigator.onLine) {
      // Check if there is no internet connection
      errorMessage(
        "No internet connection. Please check your network settings."
      );
    }
    const formData = new FormData();
    formData.append("profileImg", values.profileImg);
    // formData.append("bio", user?.bio || "");
    // console.log("formdata: ", formData);
    // console.log("updatedvalues: ", updatedValues);
    
    
    try {
      const updatedValues = {
        ...values,
        profileImg: user?.profileImg
      };
      // console.log("initial form with values:", updatedValues);

      if (values.profileImg) {
        updatedValues.profileImg = await uploadImageToCloudinary(values.profileImg);
        // console.log("Submitting form with values:", updatedValues?.profileImg);
      }
      const response = await axios.post(url, updatedValues, {
        headers: {
          "Content-Type": "application/json",
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      responseMessage("Picture updated succesfully");
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
    // values,
    errors,
    // setValues,
    setFieldValue,
    touched,
    isSubmitting,
    handleBlur,
    // handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      profileImg: "",
    },
    onSubmit,
    // validationSchema: updateBioSchema
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

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      const file = event.currentTarget.files[0];
      // const base64 = await convertFileToBase64(file);
      setFieldValue("profileImg", file);
      // console.log("File converted to file:", file);
    }
  };

  // console.log("selected: ", selectedFile)

  return (
    <div className={`language-modal ${isOpen ? "open" : ""}`}>
      <div ref={modalRef} className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Update Picture</h2>
        <form className="update-form" onSubmit={handleSubmit}>
          <section className={errors.profileImg && touched.profileImg ? "input-error" : ""}>
            <input
              type="file"
              onChange={handleFileChange}
              // value={selectedFile}
              // onChange={(e) => setSelectedFile(e.target.value)}
              onBlur={handleBlur}
              // value={values.profileImg}
              name="profileImg"
              // placeholder="Edit Description"
            />
            {errors.profileImg && touched.profileImg && typeof errors.profileImg === "string" && (
              <p className="error">{errors.profileImg}</p>
            )}
          </section>

          <section className="submit-sec">
            <p onClick={onClose}>Cancel</p>
            <button disabled={isSubmitting} className="picButton" type="submit">
              {isSubmitting ? "Updating..." : "Update"}
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};
