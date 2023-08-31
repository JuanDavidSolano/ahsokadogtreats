import { User } from "../../models";
import { UserRepository } from "../user.repository";

export const getUser = (userId: string): Promise<User | null> => {
  const userRepository = new UserRepository();
  return userRepository.get(parseInt(userId));
};
