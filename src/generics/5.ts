export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type NewUserRole = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: NewUserRole = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

export {};
