export default function signUpUser(firstName, lastName) {
  const mypro = Promise.resolve({
    firstName: `${firstName}`,
    lastName: `${lastName}`,
  });
  return mypro;
}
