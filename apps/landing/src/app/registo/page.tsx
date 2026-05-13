'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { UserPlus, ArrowLeft, Loader2, User, HardHat } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function RegisterPage() {
    const searchParams = useSearchParams();
    const defaultRole = searchParams.get('role') || 'client';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        role: defaultRole
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const router = useRouter();
    const { register } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            await register(formData);
            router.push('/');
        } catch (err: any) {
            setError(err.message || 'Erro ao criar conta. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="absolute top-8 left-8">
                <Link 
                    href="/" 
                    className="flex items-center gap-2 text-zinc-500 hover:text-orange-600 transition-colors font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                </Link>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-orange-600/20">
                        N
                    </div>
                </div>
                <h2 className="text-center text-3xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
                    Criar a sua conta
                </h2>
                <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
                    Junte-se à comunidade Nhonguista em Nampula.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
                <div className="bg-white dark:bg-zinc-900 py-8 px-4 shadow-2xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800 sm:rounded-3xl sm:px-10">
                    
                    {/* Role Selection */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <button 
                            type="button"
                            onClick={() => setFormData({...formData, role: 'client'})}
                            className={cn(
                                "flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all",
                                formData.role === 'client' 
                                    ? "border-orange-600 bg-orange-50 dark:bg-orange-900/10 text-orange-600" 
                                    : "border-zinc-100 dark:border-zinc-800 text-zinc-400 hover:border-zinc-200"
                            )}
                        >
                            <User className="w-6 h-6 mb-2" />
                            <span className="font-bold text-sm">Quero contratar</span>
                        </button>
                        <button 
                            type="button"
                            onClick={() => setFormData({...formData, role: 'provider'})}
                            className={cn(
                                "flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all",
                                formData.role === 'provider' 
                                    ? "border-orange-600 bg-orange-50 dark:bg-orange-900/10 text-orange-600" 
                                    : "border-zinc-100 dark:border-zinc-800 text-zinc-400 hover:border-zinc-200"
                            )}
                        >
                            <HardHat className="w-6 h-6 mb-2" />
                            <span className="font-bold text-sm">Quero trabalhar</span>
                        </button>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-xl text-sm text-red-600 dark:text-red-400">
                                {error}
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                                    Nome Completo
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="block w-full h-12 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all"
                                    placeholder="Ex: João Silva"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                                    Telefone
                                </label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className="block w-full h-12 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all"
                                    placeholder="84 123 4567"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                                E-mail
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="block w-full h-12 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all"
                                placeholder="exemplo@email.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                                Senha
                            </label>
                            <input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                className="block w-full h-12 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all"
                                placeholder="No mínimo 6 caracteres"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex justify-center items-center gap-2 h-14 px-4 rounded-xl bg-orange-600 text-white font-black hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <>
                                    <UserPlus className="w-6 h-6" />
                                    Criar Minha Conta
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800 text-center">
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            Já tem uma conta?{' '}
                            <Link href="/login" className="font-bold text-orange-600 hover:text-orange-500">
                                Entrar agora
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
