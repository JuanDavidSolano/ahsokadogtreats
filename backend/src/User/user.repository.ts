import { DeleteResult } from "typeorm";
import dataSource from "../config/database";
import { User } from "./user.model";
import { IUser } from "./interfaces/user.interface";

export class UserRepository {
  userRepository = dataSource.getRepository(User);

  async create(user: IUser): Promise<User> {
    return await this.userRepository.save(user);
  }

  async get(userId: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id: userId });
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async update(userId: number, body: Partial<IUser>): Promise<string> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (user) {
      this.userRepository.merge(user, body);
      const result = await this.userRepository.save(user);

      return result ? "User updated" : "Error during updating process";
    } else {
      return "Error during updating process";
    }
  }

  async delete(userId: number): Promise<DeleteResult> {
    return this.userRepository.delete(userId);
  }
}
