// index.js

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Sincronize os modelos com o banco de dados
sequelize.sync({ force: false }) // force: true recria as tabelas a cada inicialização
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch((err) => console.error('Error creating database tables:', err));
