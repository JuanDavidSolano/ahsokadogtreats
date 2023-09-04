import { User } from "../user.model";
import { IUser } from "../interfaces/user.interface";
import { UserRepository } from "../user.repository";

export const updateUser = async (
  userId: string,
  body: Partial<IUser>,
): Promise<string> => {
  const userRepository = new UserRepository();

  return userRepository.update(parseInt(userId), body);
};
