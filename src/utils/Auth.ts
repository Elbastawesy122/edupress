export interface User {
  username: string;
  email: string;
  password: string;
}
export const registerUser = (user: User): void => {
  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
  
  const exists = users.find(
    (u) => u.email === user.email || u.username === user.username
  );
  if (exists) {
    throw new Error("Email or username already registered");
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const loginUser = (
  emailOrUsername: string,
  password: string
): void => {
  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find(
    (u) =>
      (u.email === emailOrUsername || u.username === emailOrUsername) &&
      u.password === password
  );

  if (!user) {
    throw new Error("Invalid email/username or password");
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = (): User | null => {
  return JSON.parse(localStorage.getItem("currentUser") || "null");
};

export const logoutUser = (): void => {
  localStorage.removeItem("currentUser");
};
