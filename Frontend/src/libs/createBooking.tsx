export default async function createBooking({
  company,
  date,
  token,
  resume,
}: {
  company: string;
  date: string;
  token: string;
  resume: File;
}) {
  const formData = new FormData();
  formData.append('company', company);
  formData.append('date', date);
  formData.append('resume', resume);

  const response = await fetch('http://localhost:5000/sessions', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Create company failed');
  }

  console.log(response);

  return response.json();
}
