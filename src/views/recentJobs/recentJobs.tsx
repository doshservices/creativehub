/* eslint-disable @typescript-eslint/no-explicit-any */
import "./jobs.scss";
import stars from "../searchResult/assets/star.svg";
import { useEffect } from "react";
import GetReviewsApi from "../../apis/GetReviews";

// const reviews: Array<object> = [
//     {
//         review: "Awesome job as usual. I'll work with Wale in the future again for sure.",
//         name: "Job Completed by: Shatta Wale"
//     },
//     {
//         review: "I am a repeat client of Shai because of his top quality work and his personable demeanor which makes working him so...",
//         name: "Job Completed by: Shai Hulud"
//     },
//     {
//         review: "AThe creative hub is hands down one of the best resources for artists and designers in the area",
//         name: "Job Completed by: Peter Parker"
//     },
//     {
//         review: "I am a repeat client of Shai because of his top quality work and his personable demeanor which makes working him so...",
//         name: "Job Completed by: Shai Hulud"
//     },
//     {
//         review: "I am a repeat client of Shai because of his top quality work and his personable demeanor which makes working him so...",
//         name: "Job Completed by: Shatta Wale"
//     },
//     {
//         review: "Awesome job as usual. I'll work with Wale in the future again for sure.",
//         name: "Job Completed by: Shatta Wale"
//     },
//     {
//         review: "The creative hub is hands down one of the best resources for artists and designers in the area",
//         name: "Job Completed by: Peter Parker"
//     },
//     {
//         review: "Awesome job as usual. I'll work with Wale in the future again for sure.",
//         name: "Job Completed by: Shatta Wale"
//     },
//     {
//         review: "I am a repeat client of Shai because of his top quality work and his personable demeanor which makes working him so...",
//         name: "Job Completed by: Shai Hulud"
//     },
//     {
//         review: "I am a repeat client of Shai because of his top quality work and his personable demeanor which makes working him so...",
//         name: "Job Completed by: Shai Hulud"
//     },
//     {
//         review: "The creative hub is hands down one of the best resources for artists and designers in the area",
//         name: "Job Completed by: Peter Parker"
//     },
//     {
//         review: "Awesome job as usual. I'll work with Wale in the future again for sure.",
//         name: "Job Completed by: Shatta Wale"
//     },
// ]

const RecentJobs = () => {
  const { searchReviews, getReviews, loading, error } = GetReviewsApi();

  useEffect(() => {
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log("new reviews: ", searchReviews);

  return (
    <section id="recent__jobs">
      <section id="recent__jobs__intro">
        <div>
          <h2>Not Creative Right Now</h2>
          <p>
            Hire top-notch mixing and mastering engineers, singers, songwriters,
            producers, studio musicians etc.
          </p>
        </div>
      </section>
      <section id="recent__jobs__reviews">
        <h3>RECENT REVIEWS</h3>
        <div className="stars">
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
        </div>
        <div className="reviews">
          {loading ? (
            <div>Loading....</div>
          ) : error ? (
            <div> There is an error </div>
          ) : searchReviews && searchReviews.length !== 0 ? (
            <div>
              {searchReviews.map((review: any, index: number) => {
                return (
                  <div key={index}>
                    {review.comment && <p>{review.comment}</p>}
                    {review.userId.firstName && (
                      <p>
                        Job completed by: {review.userId.firstName}{" "}
                        {review.userId.lastName}{" "}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div>No reviews</div>
          )}
        </div>
      </section>
    </section>
  );
};

export default RecentJobs;
