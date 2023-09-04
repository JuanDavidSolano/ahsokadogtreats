import { User } from "../user.model";
import { UserRepository } from "../user.repository";

export const getAllUsers = (): Promise<User[]> => {
  const userRepository = new UserRepository();
  return userRepository.getAll();
};
