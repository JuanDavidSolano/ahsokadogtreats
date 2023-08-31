import { UserRepository } from "../user.repository";

export const deleteUser = async (userId: string): Promise<string> => {
  const userRepository = new UserRepository();
  const result = await userRepository.delete(parseInt(userId));
  if (result.affected && result.affected > 0) return "User deleted";
  return "Problem during deletion of user";
};
