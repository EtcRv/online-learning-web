import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';


const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Xử lý logic khi người dùng submit form
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    // Reset form sau khi submit
    setRating(0);
    setFeedback('');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Form Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="rating" className="block font-semibold mb-2">
            Rating:
          </label>
          <div>
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={`mr-2 p-2 rounded-full ${
                  rating >= value ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => handleRatingChange(value)}
              >
                <FaStar
                  className={`text-gray-300 ${
                    rating >= value ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block font-semibold mb-2">
            Feedback:
          </label>
          <textarea
            id="feedback"
            className="w-full border border-gray-300 rounded p-2"
            value={feedback}
            onChange={handleFeedbackChange}
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
