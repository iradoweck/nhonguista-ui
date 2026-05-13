import Link from "next/link";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FeaturedServices } from "@/components/FeaturedServices";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-orange-100 selection:text-orange-900">
      <Header />

      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedServices />

        {/* Call to Action for Providers */}
        <section className="px-6 py-24">
            <div className="max-w-6xl mx-auto rounded-[3rem] bg-orange-600 p-8 sm:p-20 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                
                <div className="flex-1 text-center md:text-left relative z-10">
                    <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
                        É profissional em Nampula?
                    </h2>
                    <p className="text-xl text-orange-50/80 mb-10 max-w-xl">
                        Aumente os seus rendimentos e alcance mais clientes na maior rede de serviços da cidade. Registe-se hoje como um Nhonguista.
                    </p>
                    <Link 
                        href="/registo?role=provider" 
                        className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-white text-orange-600 text-lg font-black hover:bg-orange-50 transition-all shadow-2xl shadow-black/10 hover:scale-105 active:scale-95"
                    >
                        Quero ser Nhonguista
                    </Link>
                </div>
                <div className="flex-1 relative z-10 hidden md:block">
                    {/* Placeholder for professional image */}
                    <div className="aspect-square rounded-[2rem] bg-orange-500/50 backdrop-blur-sm border border-white/20 p-4 rotate-3">
                        <img 
                            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=800" 
                            alt="Profissional Nhonguista"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 bg-zinc-950 text-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-black text-lg">N</div>
                    <span className="text-xl font-black tracking-tight">Nhonguista</span>
                </div>
                <p className="text-zinc-400 max-w-sm">
                    A plataforma líder em Nampula para conectar clientes e prestadores de serviços. Criando oportunidades e simplificando o dia-a-dia.
                </p>
            </div>
            <div>
                <h4 className="font-bold mb-6">Plataforma</h4>
                <ul className="space-y-4 text-zinc-400 text-sm">
                    <li><Link href="/servicos" className="hover:text-white">Explorar Serviços</Link></li>
                    <li><Link href="/categorias" className="hover:text-white">Categorias</Link></li>
                    <li><Link href="/como-funciona" className="hover:text-white">Como Funciona</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-6">Legal</h4>
                <ul className="space-y-4 text-zinc-400 text-sm">
                    <li><Link href="/termos" className="hover:text-white">Termos de Uso</Link></li>
                    <li><Link href="/privacidade" className="hover:text-white">Privacidade</Link></li>
                    <li><Link href="/contato" className="hover:text-white">Contacto</Link></li>
                </ul>
            </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4 text-center md:text-left">
            <p>© 2026 Nhonguista. Desenvolvido pelos Irmãos Muacigarro & ZEDECK'S IT.</p>
            <div className="flex items-center gap-4">
                <span>Nampula, Moçambique 🇲🇿</span>
            </div>
        </div>
      </footer>
    </div>
  );
}
