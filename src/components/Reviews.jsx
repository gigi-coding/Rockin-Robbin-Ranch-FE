import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Review from "../pages/Review";
import Show from "../pages/Show";

function Reviews(props) {
    const [reviews, setReviews] = useState(null);

    const URL = "https://rockin-robbins-ranch.herokuapp.com/";

    const getReviews = () => {
        fetch(URL)
        .then(response => response.json())
        .then((result) => setReviews(result))
    }

    const createReviews = async (review) => {
        // make post request to create
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        });
        // update list of reviews
        getReviews();
    };

    const updateReviews = async (review, id) => {
        // make put request to create 
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        })
        // update list
        getReviews()
    }

    const deleteReviews = async id => {
        // make delete request to create 
        await fetch(URL + id, {
            method: "delete",
            })
        // update list 
        getReviews()
    }

    useEffect(() => getReviews(), []);
    // console.log(reviews)

    return (
        <main>
            <Routes>
                <Route 
                    path='/reviews' 
                    element={<Review
                        // getReview={getReview} 
                        reviews={reviews}
                        createReviews={createReviews} 
                        deleteReviews={deleteReviews}
                        updateReviews={updateReviews}
                    />} 
                />
                <Route
                    path="/reviews/:_id"
                    element={<Show
                        reviews={reviews}
                        />}
                />
            </Routes>
        </main>
    );
}

export default Reviews;