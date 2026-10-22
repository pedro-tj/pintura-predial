import React, { useState } from 'react';
import { MessageCircle, Phone, X, ChevronRight, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mainUrl = buildWhatsAppLink(
    COMPANY_DATA.phones.whatsapp1.clean,
    'Olá! Vim pelo site da Pires & Lins e gostaria de solicitar um orçamento para pintura predial.'
  );

  const secondUrl = buildWhatsAppLink(
    COMPANY_DATA.phones.whatsapp2.clean,
    'Olá! Gostaria de falar com o plantão de orçamentos da Pires & Lins Pinturas.'
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2.5rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-scaleUp">
          
          {/* Card Header */}
          <div className="bg-[#0B2545] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold uppercase leading-none">
                  Pires & Lins Pinturas
                </h4>
                <p className="text-[11px] text-emerald-400 font-medium mt-0.5">
                  Atendimento Online em Belém
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar popover do WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Notice */}
          <div className="p-3 bg-slate-50 border-b border-slate-100 text-xs text-slate-600 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0" />
            <span>Orçamento gratuito para condomínios e empresas.</span>
          </div>

          {/* Number Choices */}
          <div className="p-3 space-y-2">
            <a
              href={mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-slate-800 transition-colors group"
            >
              <div>
                <div className="font-bold text-xs text-emerald-900 group-hover:text-emerald-950">
                  WhatsApp Principal
                </div>
                <div className="text-xs text-slate-600 font-mono">
                  {COMPANY_DATA.phones.whatsapp1.number}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={secondUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-colors group"
            >
              <div>
                <div className="font-bold text-xs text-[#0B2545]">
                  WhatsApp Plantão de Orçamentos
                </div>
                <div className="text-xs text-slate-600 font-mono">
                  {COMPANY_DATA.phones.whatsapp2.number}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={`tel:${COMPANY_DATA.phones.additional.clean}`}
              className="flex items-center gap-2 p-2.5 rounded-lg text-xs text-slate-600 hover:text-slate-900 justify-center font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              <span>Ou ligue: {COMPANY_DATA.phones.additional.number}</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl hover:shadow-emerald-500/40 transition-all transform hover:scale-105 cursor-pointer border-2 border-white"
        aria-label="Abrir opções de WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        <span className="hidden sm:inline">Orçamento no WhatsApp</span>
      </button>

    </div>
  );
};
