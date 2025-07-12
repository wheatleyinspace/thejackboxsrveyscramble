const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api/v2/app-configs/bigsurvey', (req, res) => {
  const filePath = path.join(__dirname, 'bigsurvey.json');
  res.sendFile(filePath);
});

app.use('/massive-survey', express.static(path.join(__dirname, 'massive-survey')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
