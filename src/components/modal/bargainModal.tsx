/* eslint-disable @typescript-eslint/no-explicit-any */
import "./modal.scss";
// import upload from "../../assets/Vector.svg";
import { FaTimes } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { bargainSchema } from "../schemas";
import BargainSubmitApi from "../../apis/BargainSubmitApi";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  recieverId?: string;
}

export const BargainModal: React.FC<Props> = ({
  isOpen,
  onClose,
  recieverId,
}) => {
  const user = useSelector((state: any) => state?.auth?.user);
  console.log("user: ", user._id);
  console.log("reciverId: ", recieverId);

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
  const { bargainApi } = BargainSubmitApi();

  const onSubmit = async (values: any, actions: any) => {
    await bargainApi(recieverId, values, actions, onClose);
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
      skill: "",
      projectDescription: "",
      proposedPrice: "",
    },
    onSubmit,
    validationSchema: bargainSchema,
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
          <section>
            <label htmlFor="">What can I help you with?</label>
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.skill}
              name="skill"
              placeholder="Need couple of songs produced"
              className={errors.skill && touched.skill ? "input-error" : ""}
            />
            {errors.skill && touched.skill && (
              <p className="error">{errors.skill}</p>
            )}
          </section>
          <section>
            <label htmlFor="">Tell me more about your project:</label>
            <textarea
              onChange={handleChange}
              onBlur={handleBlur}
              name="projectDescription"
              value={values.projectDescription}
              className={
                errors.projectDescription && touched.projectDescription
                  ? "input-error"
                  : ""
              }
            ></textarea>
            {errors.projectDescription && touched.projectDescription && (
              <p className="error">{errors.projectDescription}</p>
            )}
          </section>
          {/* <section>
            <input type="text" name="" id="" />
          </section> */}
          <section>
            <label htmlFor="">Proposed Price</label>
            <input
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              name="proposedPrice"
              value={values.proposedPrice}
              placeholder="Input a value (in ₦)"
              className={
                errors.proposedPrice && touched.proposedPrice
                  ? "input-error"
                  : ""
              }
            />
            {errors.proposedPrice && touched.proposedPrice && (
              <p className="error">{errors.proposedPrice}</p>
            )}
          </section>
          {/* <button className='upload'>
                        <img src={upload} alt="" />
                        <span>Upload MP3(Optional)</span>
                    </button> */}
          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Bargaining..." : "Bargain"}
          </button>
        </form>
      </div>
    </div>
  );
};
