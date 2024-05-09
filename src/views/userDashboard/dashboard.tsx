/* eslint-disable react-hooks/exhaustive-deps */
import "./dashboard.scss";
import dp from "./assets/dp.svg";
// import pencil from "./assets/pencil.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { UpdateLanguage } from "./UpdateLanguage";
import { UpdateSkills } from "./UpdateSkills";
import { Link } from "react-router-dom";
import { UpdateBio } from "./UpdateBio";
import { UpdateCert } from "./UpdateCert";
import { UpdateUrls } from "./UpdateUrls";
import { UpdateHourlyRate } from "./UpdateHourlyRate";
import { useUpdateUser } from "../../apis/UpdateUserApi";
// import { responseMessage } from "../../utils/toast";
// import { useEffect } from "react";

const UserDashboard = () => {
  const user = useSelector((state: any) => state?.auth?.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isUrlsModalOpen, setIsUrlsModalOpen] = useState(false);
  const [isHourlyRateModalOpen, setIsHourlyRateModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
  const apiTimestamp = user.createdAt;

  // Convert the timestamp string to a Date object
  const dateObj = new Date(apiTimestamp);

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
    return parts.join(',');
  }
  const { newUpdateUser } = useUpdateUser();
  useEffect(() => {
    // updateUser();
    newUpdateUser(user._id);
  }, []);

  return (
    <section id="users__dashboard">
      <section id="users__dashboard__profile">
        <img className="dp" src={dp} alt="profile" />
        {user.firstName && user.lastName ? (
          <h3>
            <span>
              {user.firstName} {user.lastName}
            </span>
            {/* <img src={pencil} alt="edit profile" /> */}
          </h3>
        ) : (
          ""
        )}

        {user.email ? <a className="email">{user.email}</a> : ""}

        {user.country && user.state ? (
          <address>
            {user.state}, {user.country}
          </address>
        ) : user.country ? (
          <address>{user.country}</address>
        ) : (
          <address>No address yet</address>
        )}
        {user.status ? <p className="status">{user.status}</p> : ""}

        <button>Preview Profile</button>
        {user.createdAt && (
          <p className="member">
            Member since <span>{formattedDate}</span>
          </p>
        )}
      </section>
      <div id="users__dashboard__about">
        <section className="description">
          <h4>Description</h4>
          {user.bio && user.bio !== "" ? <p>{user.bio}</p> : <p>No bio yet</p>}
          <button onClick={openBioModal}>Edit Description</button>
          <UpdateBio isOpen={isBioModalOpen} onClose={closeBioModal} />
        </section>
        <section className="pricing">
          <h4>Hourly Rate</h4>
          {user.hourlyRate && user.hourlyRate !== "" ? (
            <p>
            Hourly Rate - <span>₦{addCommasToNumber(user.hourlyRate)}/hr</span>
            {/* <img src={pencil} alt="" /> */}
          </p>
          ) : (
            <p>
            No Hourly Rate available
          </p>
          )}
           <button onClick={openHourlyRateModal}>Edit HourlyRate</button>
          <UpdateHourlyRate isOpen={isHourlyRateModalOpen} onClose={closeHourlyRateModal} />
        </section>
        <section className="languages">
          <h4>Languages</h4>
          {user.languages.length !== 0 ? (
            <div>
              {user.languages.map((language: any) => (
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
          {user.skills.length !== 0 ? (
            <div>
              {user.skills.map((skill: any) => (
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
          {user.certificates.length !== 0 ? (
            <div>
              {user.certificates.map((cert: any) => (
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
          {user.urls.length !== 0 ? (
            <div>
              {user.urls.map((url: any) => (
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
