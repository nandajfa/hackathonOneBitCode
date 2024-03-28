const express = require('express');
const corsMiddleware = require('./middlewares/corsMiddleware');
const errorHandler = require('./middlewares/errorMiddleware');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(corsMiddleware);
app.use(errorHandler);

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
