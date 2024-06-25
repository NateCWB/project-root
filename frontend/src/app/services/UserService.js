// src/app/services/UserService.js

const UserRepository = require('../repositories/UserRepository');

class UserService {
  async listUsers() {
    return await UserRepository.findAll();
  }

  async getUserById(id) {
    return await UserRepository.findById(id);
  }

  async createUser(user) {
    return await UserRepository.create(user);
  }

  async updateUser(id, user) {
    return await UserRepository.update(id, user);
  }

  async deleteUser(id) {
    await UserRepository.delete(id);
  }
}

module.exports = new UserService();
