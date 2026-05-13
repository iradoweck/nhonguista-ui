import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-white dark:bg-black shadow-sm">
        <div className="text-2xl font-bold text-orange-600 dark:text-orange-500 tracking-tight">
          Nhonguista
        </div>
        <nav className="hidden sm:flex gap-6 text-sm font-medium">
          <Link href="#servicos" className="hover:text-orange-600 transition-colors">Serviços</Link>
          <Link href="#como-funciona" className="hover:text-orange-600 transition-colors">Como Funciona</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col flex-1">
        <section className="flex flex-col items-center justify-center text-center px-6 py-20 sm:py-32 bg-gradient-to-b from-orange-50 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950">
          <h1 className="max-w-2xl text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            A arte de vender e prestar serviços em Nampula.
          </h1>
          <p className="max-w-xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-10">
            Conectamos profissionais de confiança a clientes que buscam qualidade. Mais rápido, mais seguro e com a garantia da nossa comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
            <a
              href="https://wa.me/258800000000?text=Olá! Quero saber mais sobre o Nhonguista."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors shadow-lg"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center h-12 px-8 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shadow-sm"
            >
              Explorar Serviços
            </a>
          </div>
        </section>

        {/* Features/Categories */}
        <section id="servicos" className="px-6 py-20 max-w-5xl mx-auto w-full">
          <h2 className="text-3xl font-bold text-center mb-12">Serviços Populares</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Limpeza', 'Manutenção', 'Transporte', 'Design', 'Fotografia', 'Aulas', 'Beleza', 'Eventos'].map((cat) => (
              <div key={cat} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:border-orange-500 transition-colors cursor-pointer">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">{cat}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
        <p>© 2026 Nhonguista. Todos os direitos reservados.</p>
        <p className="mt-2">Desenvolvido pelos Irmãos Muacigarro & ZEDECK'S IT em Nampula 🇲🇿</p>
      </footer>
    </div>
  );
}
