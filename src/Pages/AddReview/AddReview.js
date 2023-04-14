import React from "react";

const AddReview = ({ setReviews, reviews }) => {
  const handleAddReviewForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const picture = form.image.value;
    const rating = form.number.value;
    const Date_of_experience = form.date.value;
    const review = form.review.value;

    const customersReview = {
      name,
      picture,
      rating,
      Date_of_experience,
      review,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customersReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          const allReviews = [customersReview, ...reviews];
          setReviews(allReviews);
          form.reset();
        }
      });
  };

  return (
    <div className="my-10">
      <h2 className="text-2xl">Add Your Review</h2>
      <hr className="w-12 mx-auto  bg-primary h-1" />
      <form onSubmit={handleAddReviewForm} className="hero ">
        <div className="hero-content w-1/2">
          <div className="card  w-full max-w-md shadow-md bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input border border-gray-300 focus:outline-none border-b-1 border-r-0 border-l-0 border-t-0 rounded-none border:hover-none"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="image"
                  placeholder="PhotoURL"
                  className="input border border-gray-300 focus:outline-none border-b-1 border-r-0 border-l-0 border-t-0 rounded-none border:hover-none"
                />
              </div>
              <div className="form-control">
                <input
                  type="number"
                  name="number"
                  placeholder="Rating"
                  className="input border border-gray-300 focus:outline-none border-b-1 border-r-0 border-l-0 border-t-0 rounded-none border:hover-none"
                />
              </div>

              <div className="form-control">
                <input
                  type="date"
                  name="date"
                  placeholder="Date Issue"
                  className="input border border-gray-300 focus:outline-none border-b-1 border-r-0 border-l-0 border-t-0 rounded-none border:hover-none"
                />
              </div>
              <div className="form-control">
                <textarea
                  className="textarea  border focus:outline-none border-gray-300 border-b-1 border-r-0 border-l-0 border-t-0 rounded-none border:hover-none"
                  placeholder="Review"
                  name="review"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary text-white font-bold"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
