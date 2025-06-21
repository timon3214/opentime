// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Отдаём текущую директорию как статическую
app.use(express.static(__dirname__));

// Все запросы возвращают index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname__, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
