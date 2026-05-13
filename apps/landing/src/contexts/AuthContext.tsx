'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api';

interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    roles: Array<{ slug: string; name: string }>;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    loading: boolean;
    login: (phone: string, password: string) => Promise<void>;
    register: (data: any) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    hasRole: (roleSlug: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem('nhonguista_token');
        const storedUser = localStorage.getItem('nhonguista_user');

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (phone: string, password: string) => {
        const data = await apiFetch('/login', {
            method: 'POST',
            body: JSON.stringify({ phone, password }),
        });

        const { user, token } = data;
        setToken(token);
        setUser(user);
        localStorage.setItem('nhonguista_token', token);
        localStorage.setItem('nhonguista_user', JSON.stringify(user));
    };

    const register = async (formData: any) => {
        const data = await apiFetch('/register', {
            method: 'POST',
            body: JSON.stringify(formData),
        });

        const { user, token } = data;
        setToken(token);
        setUser(user);
        localStorage.setItem('nhonguista_token', token);
        localStorage.setItem('nhonguista_user', JSON.stringify(user));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('nhonguista_token');
        localStorage.removeItem('nhonguista_user');
    };

    const hasRole = (roleSlug: string) => {
        return user?.roles.some(role => role.slug === roleSlug) || false;
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            token, 
            loading, 
            login, 
            register, 
            logout, 
            isAuthenticated: !!token,
            hasRole
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}
