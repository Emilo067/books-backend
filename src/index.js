const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обработки JSON и CORS
app.use(express.json());
app.use(cors());

// Регистрация маршрутов
app.use('/api/books', bookRoutes);
app.use('/api/user', authRoutes);

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});