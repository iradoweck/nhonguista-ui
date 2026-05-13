'use client';

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, User as UserIcon } from "lucide-react";

export function Header() {
    const { user, logout, isAuthenticated } = useAuth();

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-900">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-600/20 group-hover:scale-110 transition-transform">
                        N
                    </div>
                    <div className="text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
                        Nhonguista
                    </div>
                </Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                <Link href="/servicos" className="hover:text-orange-600 transition-colors">Explorar</Link>
                <Link href="#como-funciona" className="hover:text-orange-600 transition-colors">Como Funciona</Link>
                <Link href="/sobre" className="hover:text-orange-600 transition-colors">Sobre</Link>
            </nav>

            <div className="flex items-center gap-4">
                {isAuthenticated ? (
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex flex-col items-end">
                            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">{user?.name}</span>
                            <span className="text-[10px] text-orange-600 font-black uppercase tracking-widest">
                                {user?.roles[0]?.name || 'Membro'}
                            </span>
                        </div>
                        <Link 
                            href="/perfil" 
                            className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                            <UserIcon className="w-5 h-5" />
                        </Link>
                        <button 
                            onClick={logout}
                            className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                            title="Sair"
                        >
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                ) : (
                    <>
                        <Link 
                            href="/login" 
                            className="text-sm font-bold text-zinc-900 dark:text-zinc-50 hover:text-orange-600 transition-colors"
                        >
                            Entrar
                        </Link>
                        <Link 
                            href="/registo" 
                            className="h-10 px-6 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-bold hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white transition-all shadow-xl shadow-zinc-900/10 dark:shadow-white/5"
                        >
                            Criar Conta
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}
