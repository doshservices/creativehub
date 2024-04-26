/* eslint-disable @typescript-eslint/no-explicit-any */
import "./modal.scss";
// import upload from "../../assets/Vector.svg";
import { FaTimes } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { errorMessage, responseMessage } from "../../utils/toast";
import axios from "axios";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const BargainModal: React.FC<Props> = ({ isOpen, onClose }) => {
  // const [open, setOpen] = useState<boolean>(false)
  // const closeModal = () => setOpen(!open)

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

  //   form submission
  const token = useSelector((state: any) => state?.auth?.authToken);
  const url =
    "https://creativehub-endpoints-production.up.railway.app/api/creatives/bargain";

  const onSubmit = async (values: any, actions: any) => {
    try {
      const response = await axios.post(url, values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      //   dispatch(setUser(response?.data?.data?.user))
      //   dispatch(setAuthToken(response?.data?.data?.token))
      responseMessage("Bargain sent Succesful");
      actions.resetForm();
      window.location.reload();
      onClose();
    } catch (error: any) {
      console.log(error);
      errorMessage(error.response.data.message);
      onClose();
    }
  };

  //   formik
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
      skills: "",
      projectDescription: "",
      price: "",
    },
    onSubmit,
  });

  return (
    <div
      className={
        isOpen ? "project__modal" : "project__modal modal__show__false"
      }
    >
      <div ref={modalRef} className="project__modal__content">
        <section className="flex">
          <div ref={modalRef} onClick={onClose} className="close">
            <FaTimes size={20} color="#2d2d2d" />
          </div>
          <h3>
            Describe your project and Shazam Fred will reply to your message
          </h3>
        </section>
        <form onSubmit={handleSubmit}>
          <section className={errors.skills && touched.skills ? "input-error" : ""}>
            <label htmlFor="">What can I help you with?</label>
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.skills}
              placeholder="Need couple of songs produced"
            />
            {errors.skills && touched.skills && <p className="error">{errors.skills}</p>}
          </section>
          <section className={errors.projectDescription && touched.projectDescription ? "input-error" : ""}>
            <label htmlFor="">Tell me more about your project:</label>
            <textarea
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.projectDescription}
            ></textarea>
            {errors.projectDescription && touched.projectDescription && <p className="error">{errors.projectDescription}</p>}
          </section>
          <section className={errors.price && touched.price ? "input-error" : ""}>
            <label htmlFor="">Proposed Price</label>
            <input
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              placeholder="Input a value (in $)"
            />
            {errors.price && touched.price && <p className="error">{errors.price}</p>}
          </section>
          {/* <button className='upload'>
                        <img src={upload} alt="" />
                        <span>Upload MP3(Optional)</span>
                    </button> */}   
          <button  disabled={isSubmitting} type="submit">{isSubmitting ? 'Bargaining...' : 'Bargain'}</button>
        </form>
      </div>
    </div>
  );
};
