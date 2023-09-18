const express = require('express');
const cors = require('cors');
const app = express();
const port = 3021; // You can change this port if needed

app.use(cors());
app.use(express.json());

app.post('/submit', (req, res) => {
  const formData = req.body;
  // Handle the submitted form data (e.g., save it to a database)
  console.log(formData);
  res.json({ message: 'Form submitted successfully' });
});

function getUserDataForUserId(userId) {
    
    const sampleData = {
      1: {
        marks: [90, 70, 80, 90, 88, 78, 83, 69, 85, 58],
        communicationScore: [30, 40, 30, 60, 58, 98, 83, 89, 85, 58],
        sportsScore: [70, 65, 40, 67, 30, 58, 43, 9, 65, 58],
        categories: ['Test-1', 'Test-2', 'Test-3', 'Test-4', 'Test-5', 'Test-6', 'Test-7', 'Test-8', 'Test-9', 'Test-10'],
      },
      2: {
        marks: [28, 70, 80, 30, 58, 78, 83, 39, 85, 58],
        communicationScore: [50, 70, 30, 70, 58, 98, 83, 89, 85, 58],
        sportsScore: [90, 60, 40, 87, 30, 98, 43, 89, 65, 88],
        categories: ['Test-1', 'Test-2', 'Test-3', 'Test-4', 'Test-5', 'Test-6', 'Test-7', 'Test-8', 'Test-9', 'Test-10'],
      },
      3: {
        marks: [60, 70, 80, 70, 58, 78, 73, 69, 85, 58],
        communicationScore: [90, 70, 30, 70, 98, 98, 83, 89, 85, 78],
        sportsScore: [70, 60, 40, 67, 30, 98, 43, 89, 65, 58],
        categories: ['Test-1', 'Test-2', 'Test-3', 'Test-4', 'Test-5', 'Test-6', 'Test-7', 'Test-8', 'Test-9', 'Test-10'],
      }
      
      
    };
  
    // Check if the user exists in the sampleData object
    if (sampleData[userId]) {
      return sampleData[userId];
    } else {
      return null; // Return null if the user doesn't exist
    }
  }
  

// Sample data
const lineChartData = {
  marks: [60, 70, 80, 90, 58, 78, 83, 69, 85, 58],
  communicationScore: [50, 70, 30, 70, 58, 98, 83, 89, 85, 58],
  sportsScore: [70, 60, 40, 67, 30, 98, 43, 89, 65, 58],
  categories: ['Test-1', 'Test-2', 'Test-3', 'Test-4', 'Test-5', 'Test-6', 'Test-7', 'Test-8', 'Test-9', 'Test-10'],
};

app.get('/api/line-chart-data', (req, res) => {
    
    const userId = req.query.userId;
  
   
    const userData = getUserDataForUserId(userId);
  
    if (!userData) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    
    res.send(userData);
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
