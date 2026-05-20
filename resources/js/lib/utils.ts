import type { InertiaLinkProps } from '@inertiajs/react';
import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
    const token = typeof document !== 'undefined' ? document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN='))?.split('=')[1] : null;
    
    const response = await fetch(endpoint, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...(token && { 'X-XSRF-TOKEN': decodeURIComponent(token) }),
            ...options.headers,
        },
        credentials: 'same-origin',
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'API request failed');
    }

    return response.json();
}
