// scripts/createAdmin.js

const bcrypt = require('bcryptjs');
const sequelize = require('../config/database.js');
const User = require('../models/user.js');

const createAdmin = async () => {
    const username = 'admin';
    const password = 'admin123';

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await User.create({
            username,
            password: hashedPassword,
            is_admin: true
        });

        console.log('Admin user created:', admin);
    } catch (err) {
        console.error('Error creating admin user:', err);
    } finally {
        sequelize.close();
    }
};

createAdmin();
