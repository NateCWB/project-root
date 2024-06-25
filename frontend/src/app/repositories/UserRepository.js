// src/app/repositories/UserRepository.js

const pool = require('../config/database');
const User = require('../models/User');

class UserRepository {
  async findAll() {
    const { rows } = await pool.query('SELECT * FROM users');
    return rows.map(row => new User(row));
  }

  async findById(id) {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return rows.length > 0 ? new User(rows[0]) : null;
  }

  async create(user) {
    const { name, email } = user;
    const { rows } = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    return new User(rows[0]);
  }

  async update(id, user) {
    const { name, email } = user;
    const { rows } = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
    return rows.length > 0 ? new User(rows[0]) : null;
  }

  async delete(id) {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
  }
}

module.exports = new UserRepository();
