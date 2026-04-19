const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/recipes', (req, res) => {
  const recipes = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/recipes.json'), 'utf8'));
  const { meal } = req.query;
  const result = meal ? recipes.filter(r => r.mealType === meal) : recipes;
  res.json(result);
});

// Serve React build in production
const clientDist = path.join(__dirname, '../client/dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
