const _apiBase ='http://localhost:3000';

export async function getResource(url: string) {
  
  const res = await fetch(`${_apiBase}${url}`, { method: 'GET' });

  if(!res.ok) {
    throw new Error(`Could not fetch`);
  }

  return await res.json();
}
