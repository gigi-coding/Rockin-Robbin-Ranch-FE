import { useState } from "react"
// import { Link } from "react-router-dom"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import axios from 'axios';

function Review() {
const [name, setName] = useState("");
const [review, setReview] = useState("");


const addToReviews = () => {
  console.log(name + review);
  try {
    axios.post('http://localhost:4000/reviews', {
      name: name, 
      review: review, 
    });
  } catch (error) {
    console.log(error.response)
  }
  // axios.post('https://rockin-robbins-ranch.herokuapp.com/', {
  // axios.post('http://localhost:4000/reviews', {
  //   name: name, 
  //   review: review, 
  // });
};

  return(
    <div className=" bg-gray-500">
      <NavBar />
      <div className="flex flex-col justify-center text-center items-center py-40">
          <h1>If you'd like to leave us a Review, leave one below!</h1>
          <label>Name </label>
          <input className=" w-52 h-9 text-xl m-1" 
            type='text'
            placeholder="Your Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <label>How was your stay?</label>
          <input className=" w-52 h-9 text-xl m-1" 
            type='text'
            placeholder="Your Review"
            onChange={(event) => {
              setReview(event.target.value);
            }}
          />
          <button onClick={addToReviews}>Submit Review</button>
      </div>
      <Footer />
    </div>
  )
}
export default Review