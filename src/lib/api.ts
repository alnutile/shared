const API_BASE = '/api';

export async function createShare(content: string): Promise<string> {
  const response = await fetch(`${API_BASE}/create-share`, {
    method: 'POST',
    body: JSON.stringify({ content }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to create share');
  }

  const data = await response.json();
  return data.id;
}

export async function getShare(id: string) {
  const response = await fetch(`${API_BASE}/get-share/${id}`);

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error('Failed to get share');
  }

  return response.json();
}