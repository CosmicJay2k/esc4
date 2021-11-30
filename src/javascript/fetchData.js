export default async function fetchData() {
  const response = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
  const data = await response.json();
  return data.challenges;
}