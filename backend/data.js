import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "admin",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("1111", 8),
      isAdmin: true,
    },
    {
      name: "user",
      email: "user@gmail.com",
      password: bcrypt.hashSync("1111", 8),
      isAdmin: false,
    },
  ],
 };
 export default data;