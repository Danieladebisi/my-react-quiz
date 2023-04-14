import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const QuizForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState(0);
  const [timeLimit, setTimeLimit] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to the backend API
    const formData = { title, description, points, timeLimit };
    // ...send the formData using an API request (e.g. axios)
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Quiz Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <TextField
        label="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <TextField
        label="Points"
        type="number"
        value={points}
        onChange={(event) => setPoints(event.target.value)}
        required
      />
      <TextField
        label="Time Limit"
        type="number"
        value={timeLimit}
        onChange={(event) => setTimeLimit(event.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Create Quiz
      </Button>
    </form>
  );
};

export default QuizForm;
