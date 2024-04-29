export default async function getAllJob(token: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/company`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch all job');
  }
  return await response.json();
}
