const BASE_URL = 'http://localhost:8000/api';

function buildUrl(path: string): string {
  return path.startsWith('http') ? path : `${BASE_URL}/${path.replace(/^\/+/, '')}`;
}

export async function httpRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = buildUrl(path);

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const finalOptions: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, finalOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status} - ${response.statusText} - ${errorText}`);
    }

    return await response.json();
  } catch (error: unknown) {
    console.error('HTTP request failed:', error);
    throw new Error('An unexpected network error occurred.');
  }
}

export function httpGet<T>(path: string, headers: HeadersInit = {}): Promise<T> {
  return httpRequest<T>(path, { method: 'GET', headers });
}

export function httpPost<T>(path: string, body: any, headers: HeadersInit = {}): Promise<T> {
  return httpRequest<T>(path, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
}
