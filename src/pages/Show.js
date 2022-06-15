import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Show(props) {
    // console.log('show...', props)
    const navigate = useNavigate()
    const { id } = useParams()
    const reviews = props.review
    const review = reviews.find(reviews => reviews._id === id)
    
    
    const [editForm, setEditForm] = useState(review)

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

  // handlesubmit for form
    const handleSubmit = event => {
        event.preventDefault()
        props.updateReviews(editForm, id)
        navigate('/reviews')
    }

    const removeReview = () => {
        props.deleteReviews(id)
        navigate("/reviews")
    }

    return (
        <div className="person">
            <h1>{reviews.name}</h1>
            <img src={reviews.image} alt={reviews.name} />
            <button id="delete" onClick={removeReview}>
                REMOVE
            </button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="NAME"
                    placeholder="NAME"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.month}
                    name="MONTH"
                    placeholder="MONTH"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.review}
                    name="REVIEW"
                    placeholder="REVIEW"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="IMAGE"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Review" />
            </form>
        </div>
    ) 
}

export default Show