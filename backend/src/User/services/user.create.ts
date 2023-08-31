import { User } from "../../models";
import { IUser } from "../interfaces/user.interface";
import { UserRepository } from "../user.repository";

export const createUser = (user: IUser): Promise<User> => {
  const userRepository = new UserRepository();
  return userRepository.create(user);
};
