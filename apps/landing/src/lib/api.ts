const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

interface RequestOptions extends RequestInit {
    token?: string;
}

export async function apiFetch(endpoint: string, options: RequestOptions = {}) {
    const { token, ...rest } = options;
    
    const headers = new Headers(rest.headers || {});
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...rest,
        headers,
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Ocorreu um erro inesperado.' }));
        throw new Error(error.message || 'Erro na requisição');
    }

    return response.json();
}
