'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
    return (
        <div className="mb-4">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all text-left group"
            >
                <span className="font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-orange-600 transition-colors">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-zinc-400 group-hover:text-orange-600"
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQ() {
    const [openLeft, setOpenLeft] = useState<number | null>(null);
    const [openRight, setOpenRight] = useState<number | null>(null);

    const faqs = [
        { q: "O Nhonguista cobra comissões?", a: "Não. O Nhonguista é uma plataforma de conexão directa. Você negocia e paga directamente ao profissional sem intermediários. Não cobramos taxas sobre o serviço realizado." },
        { q: "Como sei se um profissional é de confiança?", a: "Pode verificar as avaliações e comentários de outros clientes de Nampula no perfil do profissional. Todos os Nhonguistas passam por uma verificação básica de identidade." },
        { q: "Posso encontrar serviços em qualquer bairro de Nampula?", a: "Sim! Cobrimos desde o centro da cidade até aos bairros periféricos como Muhala, Natikiri, Namicopo e Carrupeia." },
        { q: "Como entro em contacto com o profissional?", a: "Basta clicar no botão do WhatsApp no perfil do serviço. Será redirecionado directamente para uma conversa privada com o prestador." },
        { q: "O Nhonguista garante a qualidade do serviço?", a: "O Nhonguista é um marketplace. Embora verifiquemos os prestadores, a responsabilidade técnica é do profissional. Por isso, as avaliações da comunidade são fundamentais." },
        { q: "Como posso registar-me como profissional?", a: "É simples! Clique no botão 'Quero ser Nhonguista', preencha os seus dados e descreva os seus serviços. Após validação, o seu perfil ficará visível para toda a cidade." }
    ];

    const midIndex = Math.ceil(faqs.length / 2);
    const leftCol = faqs.slice(0, midIndex);
    const rightCol = faqs.slice(midIndex);

    return (
        <section className="px-6 py-24 bg-zinc-50 dark:bg-zinc-900/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Perguntas Frequentes</h2>
                    <p className="text-zinc-500 dark:text-zinc-400">Tudo o que precisa de saber para começar a usar a maior plataforma de Nampula.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-start">
                    <div>
                        {leftCol.map((faq, idx) => (
                            <FAQItem 
                                key={idx} 
                                question={faq.q} 
                                answer={faq.a} 
                                isOpen={openLeft === idx}
                                onClick={() => setOpenLeft(openLeft === idx ? null : idx)}
                            />
                        ))}
                    </div>
                    <div>
                        {rightCol.map((faq, idx) => (
                            <FAQItem 
                                key={idx} 
                                question={faq.q} 
                                answer={faq.a} 
                                isOpen={openRight === idx}
                                onClick={() => setOpenRight(openRight === idx ? null : idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
