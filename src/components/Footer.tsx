import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { COMPANY_DATA, SERVICES_LIST, buildWhatsAppLink } from '../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07172C] text-slate-300 border-t border-slate-800">
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              className="flex items-center gap-2.5 text-2xl font-heading font-extrabold tracking-wide uppercase text-white"
            >
              <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-white shadow-inner">
                P&L
              </div>
              <span>Pires & Lins Pinturas</span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed">
              Especialistas em revitalização de fachadas, pintura predial, impermeabilização 
              com manta asfáltica e reposição de pastilhas em Belém, Ananindeua e região metropolitana do Pará.
            </p>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <span>Compromisso com as normas de segurança NR-35</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_DATA.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-orange-600 text-white flex items-center justify-center transition-colors"
                aria-label="Instagram da Pires & Lins"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_DATA.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-orange-600 text-white flex items-center justify-center transition-colors"
                aria-label="Facebook da Pires & Lins"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Serviços */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white">
              Serviços Especializados
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#servicos"
                    className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-slate-400"
                  >
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navegação Rápida */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicos" className="hover:text-orange-400 transition-colors text-slate-400">
                  Soluções Técnicas
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-orange-400 transition-colors text-slate-400">
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a href="#propriedades" className="hover:text-orange-400 transition-colors text-slate-400">
                  Tipos de Imóveis
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-orange-400 transition-colors text-slate-400">
                  Antes e Depois
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-orange-400 transition-colors text-slate-400">
                  Canal do Síndico
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-orange-400 transition-colors text-slate-400">
                  Solicitar Proposta
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contatos Oficiais */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white">
              Atendimento Pará
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={buildWhatsAppLink(COMPANY_DATA.phones.whatsapp1.clean, 'Olá!')}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_DATA.phones.whatsapp1.number}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_DATA.phones.whatsapp2.clean}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_DATA.phones.whatsapp2.number}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Tel. Adicional: {COMPANY_DATA.phones.additional.number}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_DATA.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Pires & Lins Pinturas e Revitalização de Fachadas. Todos os direitos reservados.
          </p>
          <p className="text-slate-400">
            Belém • Ananindeua • Região Metropolitana do Pará
          </p>
        </div>

      </div>
    </footer>
  );
};
