import { prisma } from "../../../prisma";
import { hash } from "bcryptjs";
import { UserDTO } from "../dtos/user.dto";

class UserService {
  async create(userDTO: UserDTO) {
    const { login, password } = userDTO;
    try {
      const userExists = await prisma.user.findUnique({
        where: { login },
        select: {
          id: true,
          login: true,
          password: false,
          createdAt: true,
          updatedAt: true,
        },
      });
      if (userExists) {
        throw new Error("User already exists");
      }
      const hashedPassword = await hash(password, 10);
      const user = await prisma.user.create({
        data: {
          login,
          password: hashedPassword,
        },
        select: {
          id: true,
          login: true,
          password: false,
          createdAt: true,
          updatedAt: true,
        },
      });
      return user;
    } catch (error) {
      console.error(`Error creating user ${error}`);
      throw error;
    }
  }

  async getAll() {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          login: true,
          password: false,
          createdAt: true,
          updatedAt: true,
        },
      });
      return users;
    } catch (error) {
      console.error(`Error getting users ${error}`);
      throw error;
    }
  }

  async getById(id: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          login: true,
          password: false,
          createdAt: true,
          updatedAt: true,
        },
      });
      return user;
    } catch (error) {
      console.error(`Error finding user by id ${error}`);
      throw error;
    }
  }

  async update(id: string, userDTO: UserDTO) {
    const { login, password } = userDTO;
    try {
      const hashedPassword = await hash(password, 10);
      const user = await prisma.user.update({
        where: { id },
        data: {
          login,
          password: hashedPassword,
        },
        select: {
          id: true,
          login: true,
          password: false,
          createdAt: true,
          updatedAt: true,
        },
      });
      return user;
    } catch (error) {
      console.error(`Error updating user ${error}`);
      throw error;
    }
  }

  async delete(id: string) {
    try {
      await prisma.user.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error(`Error deleting user ${error}`);
      throw error;
    }
  }
}

export { UserService };
