import React, { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../context/AuthContext";
import MyReviewItem from "../MyReviewItem/MyReviewItem";

const MyReviews = () => {
  const { user } = useContext(AuthProvider);
  const [myReviews, setMyReviews] = useState([]);

  const handleDeleteReview = (id) => {
    const confirmDelete = window.confirm("Do you want to delete?");
    if (confirmDelete) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            const remaining = myReviews.filter((rw) => rw._id !== id);
            setMyReviews(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);

  return (
    <div className="my-10">
      <small className="text-primary font-bold uppercase  font-sans text-lg">
        My Reviews
      </small>
      <hr className="w-10  h-1 mx-auto " />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-16 mt-8">
        {myReviews.map((reviewItem) => (
          <MyReviewItem
            key={reviewItem._id}
            reviewItem={reviewItem}
            handleDeleteReview={handleDeleteReview}
          ></MyReviewItem>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
