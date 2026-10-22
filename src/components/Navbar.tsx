import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Shield, Clock } from 'lucide-react';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/companyData';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainWhatsAppUrl = buildWhatsAppLink(
    COMPANY_DATA.phones.whatsapp1.clean,
    'Olá! Gostaria de solicitar um orçamento para pintura e revitalização predial com a Pires & Lins.'
  );

  return (
    <>
      {/* Top emergency / quick contact notice bar */}
      <div className="bg-[#07172C] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-orange-500" />
              Atendimento em Belém, Ananindeua e Região Metropolitana
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              Seg - Sex: 08h às 18h
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_DATA.phones.whatsapp1.clean}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-orange-400" />
              <span>(91) 98198-6761</span>
            </a>
            <span className="text-slate-600">/</span>
            <a
              href={`tel:${COMPANY_DATA.phones.whatsapp2.clean}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>(91) 99170-4839</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar strictly obeying the 3-zone contract */}
      <header className="sticky top-0 z-40 bg-[#0B2545]/95 backdrop-blur-md border-b border-white/10 text-white transition-all shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
          {/* Zone 1: Brand Wordmark (Single text element in display face) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl sm:text-2xl font-heading font-extrabold tracking-wide uppercase text-white hover:text-orange-400 transition-colors whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-white shadow-inner">
              P&L
            </div>
            <span>Pires & Lins Pinturas</span>
          </a>

          {/* Zone 2: 4-5 concise navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            <a href="#servicos" className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0">
              Sobre a Empresa
            </a>
            <a href="#propriedades" className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0">
              Tipos de Imóveis
            </a>
            <a href="#galeria" className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0">
              Obras & Resultados
            </a>
            <a href="#contato" className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0">
              Contato
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs md:text-sm font-semibold tracking-wide uppercase bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-lg transition-all shadow-md hover:shadow-orange-600/30 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Orçamento Gratuito</span>
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
              aria-label="Abrir menu principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07172C] border-b border-slate-800 px-4 pt-3 pb-5 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-2 text-sm font-medium">
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
              >
                Serviços de Pintura e Revitalização
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
              >
                Sobre a Pires & Lins
              </a>
              <a
                href="#propriedades"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
              >
                Tipos de Edifícios Atendidos
              </a>
              <a
                href="#galeria"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
              >
                Galeria de Fotos
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
              >
                Depoimentos & Avaliações
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
              >
                Fale Conosco
              </a>
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={mainWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-sm text-center"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: (91) 98198-6761
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-2.5 px-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg text-sm uppercase tracking-wide"
              >
                Simular Orçamento Online
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
