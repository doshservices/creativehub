/* eslint-disable react-hooks/exhaustive-deps */
import "./dashboard.scss";
// import dp from "./assets/dp.svg";
import male from "./assets/male.webp";
import pencil from "./assets/pencil.svg";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { UpdateLanguage } from "./UpdateLanguage";
import { UpdateSkills } from "./UpdateSkills";
import { Link } from "react-router-dom";
import { UpdateBio } from "./UpdateBio";
import { UpdateCert } from "./UpdateCert";
import { UpdateUrls } from "./UpdateUrls";
import { UpdateHourlyRate } from "./UpdateHourlyRate";
import { useUpdateUser } from "../../apis/UpdateUserApi";
import { IoCameraOutline } from "react-icons/io5";
import { errorMessage, responseMessage } from "../../utils/toast";
import axios from "axios";
import { useFormik } from "formik";
import { UpdateName } from "./UpdateName";
import { UpdatePicture } from "./UpdatePicture";

interface Language {
  language: string | null;
  proficiency: string | null;
}

interface Skill {
  skill: string | null;
  experience_level: string | null;
}
interface AuthState {
  auth: {
    authToken: string | null;
    user: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      _id: any;
      firstName: string;
      email: string;
      lastName: string;
      profilePicture: string;
      country: string;
      state: string;
      hourlyRate: number;
      status: string;
      skills: Skill[];
      languages: Language[];
      certificates: string[];
      urls: string[];
      bio: string;
      createdAt: string;
    } | null;
  };
}

const UserDashboard = () => {
  const user = useSelector((state: AuthState) => state?.auth?.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isUrlsModalOpen, setIsUrlsModalOpen] = useState(false);
  const [isHourlyRateModalOpen, setIsHourlyRateModalOpen] = useState(false);
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isPictureModalOpen, setIsPictureModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openPictureModal = () => {
    setIsPictureModalOpen(true);
  };

  const closePictureModal = () => {
    setIsPictureModalOpen(false);
  };
  const openNameModal = () => {
    setIsNameModalOpen(true);
  };

  const closeNameModal = () => {
    setIsNameModalOpen(false);
  };
  const openHourlyRateModal = () => {
    setIsHourlyRateModalOpen(true);
  };

  const closeHourlyRateModal = () => {
    setIsHourlyRateModalOpen(false);
  };

  const openUrlsModal = () => {
    setIsUrlsModalOpen(true);
  };

  const closeUrlsModal = () => {
    setIsUrlsModalOpen(false);
  };

  const openCertModal = () => {
    setIsCertModalOpen(true);
  };

  const closeCertModal = () => {
    setIsCertModalOpen(false);
  };

  const openBioModal = () => {
    setIsBioModalOpen(true);
  };

  const closeBioModal = () => {
    setIsBioModalOpen(false);
  };

  const openSkillsModal = () => {
    setIsSkillsModalOpen(true);
  };

  const closeSkillsModal = () => {
    setIsSkillsModalOpen(false);
  };

  // Timestamp from the API
  console.log("user: ", user);
  const apiTimestamp = user?.createdAt;

  // Convert the timestamp string to a Date object
  const dateObj = new Date(apiTimestamp || 0);

  // Format the Date object as desired
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  function addCommasToNumber(number: number) {
    // Convert number to string
    let strNumber = number.toString();
    // Split the string into groups of three digits from the right
    const parts = [];
    while (strNumber.length > 3) {
      parts.unshift(strNumber.slice(-3));
      strNumber = strNumber.slice(0, -3);
    }
    // Add the remaining digits
    parts.unshift(strNumber);
    // Join the parts with commas
    return parts.join(",");
  }
  const { newUpdateUser } = useUpdateUser();
  useEffect(() => {
    // updateUser();
    newUpdateUser(user?._id || 0);
  }, []);


  return (
    <section id="users__dashboard">
      <section id="users__dashboard__profile">
        <div className=" dp-sec ">
          {user?.profilePicture && user?.profilePicture !== "" ? (
            <img className="dp" src={user.profilePicture} alt="profile" />
          ) : (
            <img className="dp" src={male} alt="profile" />
          )}
          <div className=" text-sec ">
            <IoCameraOutline className=" text " onClick={openPictureModal} />
            <UpdatePicture
            isOpen={isPictureModalOpen}
            onClose={closePictureModal}
          />
          </div>

        </div>
        {user?.firstName && user?.lastName ? (
         <div className="flex">
           <h3>
            <span>
              {user?.firstName} {user?.lastName}
            </span>
           
          </h3>
          <section >
           <img src={pencil} onClick={openNameModal} alt="edit profile" />
            <UpdateName
            isOpen={isNameModalOpen}
            onClose={closeNameModal}
          />
           </section>
         </div>
        ) : (
          ""
        )}

        {user?.email ? <a className="email">{user?.email}</a> : ""}

        {user?.country && user?.state ? (
          <address>
            {user?.state}, {user?.country}
          </address>
        ) : user?.country ? (
          <address>{user?.country}</address>
        ) : (
          <address>No address yet</address>
        )}
        {user?.status ? <p className="status">{user?.status}</p> : ""}

        <button className="button">Preview Profile</button>
        {user?.createdAt && (
          <p className="member">
            Member since <span>{formattedDate}</span>
          </p>
        )}
      </section>
      <div id="users__dashboard__about">
        <section className="description">
          <h4>Description</h4>
          {user?.bio && user?.bio !== "" ? (
            <p>{user?.bio}</p>
          ) : (
            <p>No bio yet</p>
          )}
          <button onClick={openBioModal}>Edit Description</button>
          <UpdateBio isOpen={isBioModalOpen} onClose={closeBioModal} />
        </section>
        <section className="pricing">
          <h4>Hourly Rate</h4>
          {user?.hourlyRate && user?.hourlyRate ? (
            <p>
              Hourly Rate -{" "}
              <span>₦{addCommasToNumber(user?.hourlyRate)}/hr</span>
              {/* <img src={pencil} alt="" /> */}
            </p>
          ) : (
            <p>No Hourly Rate available</p>
          )}
          <button onClick={openHourlyRateModal}>Edit HourlyRate</button>
          <UpdateHourlyRate
            isOpen={isHourlyRateModalOpen}
            onClose={closeHourlyRateModal}
          />
        </section>
        <section className="languages">
          <h4>Languages</h4>
          {user?.languages.length !== 0 ? (
            <div>
              {user?.languages.map((language) => (
                <div>
                  {language.language && (
                    <p>
                      {language.language} - <span>{language.proficiency}</span>
                      {/* <img src={pencil}  alt="" /> */}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>No languages are available.</p>
          )}
          <button onClick={openModal}>Add New Language</button>
          <UpdateLanguage
            isOpen={isModalOpen}
            onClose={closeModal}
            // updateUser={updateUser}
          />
        </section>
        <section className="skills">
          <h4>Skills</h4>
          {user?.skills.length !== 0 ? (
            <div>
              {user?.skills.map((skill) => (
                <div>
                  {skill.skill && (
                    <p>
                      {skill.skill} - <span>{skill.experience_level}</span>
                      {/* <img src={pencil} alt="" /> */}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>No skills are available.</p>
          )}

          <button onClick={openSkillsModal}>Add New Skill</button>
          <UpdateSkills isOpen={isSkillsModalOpen} onClose={closeSkillsModal} />
        </section>
        <section className="awards">
          <h4>Certification and Awards</h4>
          {user?.certificates.length !== 0 ? (
            <div>
              {user?.certificates.map((cert) => (
                <Link to={cert} target="_blank">
                  <p>
                    {cert}
                    {/* <img src={pencil} alt="" /> */}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p>No certificates are available.</p>
          )}
          <button onClick={openCertModal}>Add New Certificate</button>
          <UpdateCert isOpen={isCertModalOpen} onClose={closeCertModal} />
        </section>
        {/* <section className="media">
          <h4>Media</h4>
          <p>
            Media 1 - <span>Screams of Shalazah</span>
            <img src={pencil} alt="" />
          </p>
          <p>
            Media 2 - <span>Big Boy Tune</span>
            <img src={pencil} alt="" />
          </p>
          <p>
            Music Producer - <span>Intermediate</span>
            <img src={pencil} alt="" />
          </p>
          <button>Add New</button>
        </section> */}
        <section className="urls">
          <h4>URLs</h4>
          {user?.urls.length !== 0 ? (
            <div>
              {user?.urls.map((url) => (
                <Link to={url} target="_blank">
                  <p>
                    {url}
                    {/* <img src={pencil} alt="" /> */}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p>No urls are available.</p>
          )}
          <button onClick={openUrlsModal}>Add New Urls</button>
          <UpdateUrls isOpen={isUrlsModalOpen} onClose={closeUrlsModal} />
        </section>
      </div>
    </section>
  );
};

export default UserDashboard;
