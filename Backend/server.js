const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

let tasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1' },
  { id: 2, title: 'Task 2', description: 'Description for Task 2' },
  { id: 3, title: 'Task 3', description: 'Description for Task 3' },
];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
