import { v4 as uuid } from "uuid";

let users = [
  {
    firstName: "test",
    lastName: "test",
    age: 10,
    id: "9b8685c1-a8b4-46d6-8d8e-61433f760aca",
  },
];

export const getUsers = (req, res) => {
  res.status(200).send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  const id = uuid();
  users.push({ ...user, id });
  // console.log(`User [${user.username}] added to the database.`);
  res.status(201).send(id);
};

export const getUser = (req, res) => {
  // const user = req.body;
  const founduser = users.find((user) => user.id === req.params.id);
  res.status(200).send(founduser);
};

export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.status(204).send(`${req.params.id} has been deleted`);
  // res.send(users);
};

export const updateUser = (req, res) => {
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === req.params.id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.status(202).send(`${req.params.id} has been updated`);
};
