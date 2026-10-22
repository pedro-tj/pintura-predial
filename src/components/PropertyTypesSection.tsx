import React from 'react';
import {
  CheckCircle2,
  Clock,
  DollarSign,
  Award,
  ArrowRight,
  MessageCircle,
  Building,
  Store,
  Warehouse,
  Home
} from 'lucide-react';
import { PROPERTY_TYPES, COMPANY_DATA, buildWhatsAppLink } from '../data/companyData';

interface PropertyTypesSectionProps {
  onOpenQuoteModal: () => void;
}

export const PropertyTypesSection: React.FC<PropertyTypesSectionProps> = ({ onOpenQuoteModal }) => {
  const getPropertyIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Building className="w-8 h-8 text-orange-500" />;
      case 1:
        return <Store className="w-8 h-8 text-orange-500" />;
      case 2:
        return <Warehouse className="w-8 h-8 text-orange-500" />;
      case 3:
        return <Home className="w-8 h-8 text-orange-500" />;
      default:
        return <Building className="w-8 h-8 text-orange-500" />;
    }
  };

  const getPropertyImage = (index: number) => {
    switch (index) {
      case 0:
        return '/src/assets/images/galeria_fachada_renovada_1792683689951.jpg';
      case 1:
        return '/public/assets/aistudio/Commercial_Painting_Solutions_for_Modern_Businesses_e4b753b6.jpeg';
      case 2:
        return '/src/assets/images/servico_manta_telhado_1792683690362.jpg';
      case 3:
        return '/src/assets/images/servico_revitalizacao_1792683689905.jpg';
      default:
        return '/src/assets/images/galeria_fachada_renovada_1792683689951.jpg';
    }
  };

  const mainWhatsAppUrl = buildWhatsAppLink(
    COMPANY_DATA.phones.whatsapp1.clean,
    'Olá! Gostaria de falar sobre pintura predial para o meu condomínio/empresa com a Pires & Lins.'
  );

  return (
    <section id="propriedades" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 block mb-2">
            ESPECIALIZAÇÃO EM EDIFICAÇÕES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0B2545] leading-none mb-4">
            SOLUÇÕES PARA CADA TIPO DE PATRIMÔNIO
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Metodologia ajustada para atender as exigências de condomínios verticais, comércios,
            empresas e indústrias em toda a Região Metropolitana de Belém.
          </p>
        </div>

        {/* 4 Cards Grid - Building types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROPERTY_TYPES.map((prop, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={getPropertyImage(idx)}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#0B2545]/90 text-orange-400 text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-sm border border-white/10">
                  {prop.badge}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight leading-tight">
                    {prop.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-1.5">
                    {prop.subtitle}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {prop.desc}
                  </p>
                </div>

                <a
                  href={buildWhatsAppLink(
                    COMPANY_DATA.phones.whatsapp1.clean,
                    `Olá! Gostaria de consultar orçamento para ${prop.title} em Belém/Região.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2545] hover:text-orange-600 transition-colors uppercase tracking-wider pt-3 border-t border-slate-200"
                >
                  <span>Consultar Condições</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Banner Split Section: "WE PAINT. YOU IMPRESS." style from reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50">
          
          {/* Left Column: "PINTAMOS. SEU PATRIMÔNIO VALORIZA." */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span>Padrão Profissional Pires & Lins</span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0B2545] mb-2 leading-none">
                PINTAMOS. <span className="text-orange-600">SEU PATRIMÔNIO VALORIZA.</span>
              </h3>

              <p className="text-slate-700 font-semibold text-sm sm:text-base mb-6">
                Feito para resistir ao sol forte e às chuvas de Belém. Acabamento que dura anos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                <div className="flex items-center gap-2.5 text-slate-800 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                  <span>Pintura Interna e Externa</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-800 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                  <span>Edifícios & Condomínios</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-800 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                  <span>Centros Comerciais & Lojas</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-800 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                  <span>Galpões e Estruturas Industriais</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-800 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                  <span>Tratamento de Infiltrações & Lajes</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-800 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                  <span>Reposição de Pastilhas com NR-35</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Atendimento rápido para síndicos, administradoras e diretores prediais.
              </div>
              <a
                href={mainWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 hover:text-orange-700 uppercase tracking-wider"
              >
                <span>Falar com especialista agora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High-conversion Orange CTA Box inspired by reference */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#EA580C] to-[#C2410C] p-8 sm:p-10 text-white flex flex-col justify-between shadow-inner">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-orange-200 block mb-2">
                TRANSFORME SUA EDIFICAÇÃO
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none mb-4">
                VAMOS DAR VIDA E PROTEÇÃO AO SEU IMÓVEL.
              </h3>
              <p className="text-orange-100 text-sm leading-relaxed mb-8">
                Envie fotos ou solicite uma visita técnica presencial em Belém e Ananindeua. 
                Elaboramos seu laudo inicial e orçamento sem custos.
              </p>

              <button
                onClick={onOpenQuoteModal}
                className="w-full py-4 px-6 rounded-xl bg-[#0B2545] hover:bg-[#07172C] active:bg-black text-white font-extrabold uppercase tracking-wider text-sm sm:text-base transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
                <span>SOLICITAR ORÇAMENTO GRATUITO</span>
              </button>
            </div>

            {/* 3 Pillars in the box: ON TIME, ON BUDGET, ON POINT */}
            <div className="grid grid-cols-3 gap-2 pt-8 border-t border-orange-400/40 text-center mt-8">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-1.5">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  NO PRAZO
                </span>
                <span className="text-[10px] text-orange-200">Cronograma rígido</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-1.5">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
                <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  NO ORÇAMENTO
                </span>
                <span className="text-[10px] text-orange-200">Sem surpresas</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-1.5">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  IMPECÁVEL
                </span>
                <span className="text-[10px] text-orange-200">Acabamento fino</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
