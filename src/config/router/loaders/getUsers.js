export default async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await response.json();
  return json;
}
