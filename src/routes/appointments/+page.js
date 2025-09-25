// src/routes/appointments/+page.js
import { PUBLIC_API_URL } from '$env/static/public';

export const load = async ({ fetch }) => {
  try {
    const response = await fetch(`${PUBLIC_API_URL}/timeslots`);
    if (!response.ok) throw new Error('Failed to fetch timeslots');

    const json = await response.json();
    const urls = json.data;

    const fetchPromises = urls.map((url) => fetch(`${PUBLIC_API_URL}${url}`));
    const dataJson = await Promise.all(fetchPromises.map((res) => res.json()));

    return { appointments: dataJson };
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
};
