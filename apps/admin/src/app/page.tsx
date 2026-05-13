import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-zinc-200 dark:border-zinc-800">
          <span className="text-xl font-bold text-orange-600 dark:text-orange-500">Nhonguista Admin</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="#" className="flex items-center gap-3 px-3 py-2 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-500 rounded-md font-medium">
            Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md font-medium transition-colors">
            Profissionais
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md font-medium transition-colors">
            Verificações
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md font-medium transition-colors">
            Notificações
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
          <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Visão Geral</h1>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Usuários</h3>
              <p className="text-3xl font-bold mt-2 text-zinc-900 dark:text-zinc-100">1,248</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Verificações Pendentes</h3>
              <p className="text-3xl font-bold mt-2 text-orange-600 dark:text-orange-500">12</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Serviços Ativos</h3>
              <p className="text-3xl font-bold mt-2 text-zinc-900 dark:text-zinc-100">84</p>
            </div>
          </div>

          {/* Recent Verifications */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Verificações Recentes</h2>
            </div>
            <div className="p-0">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 dark:bg-zinc-800/50">
                    <th className="px-6 py-3 text-sm font-medium text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">Profissional</th>
                    <th className="px-6 py-3 text-sm font-medium text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">Documento</th>
                    <th className="px-6 py-3 text-sm font-medium text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">Data</th>
                    <th className="px-6 py-3 text-sm font-medium text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-900 dark:text-zinc-100">João Silva</td>
                    <td className="px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">BI (123456789)</td>
                    <td className="px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">Hoje, 10:45</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-500/20 dark:text-orange-400">
                        Pendente
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
