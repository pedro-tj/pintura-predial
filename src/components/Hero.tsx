import React from 'react';
import {
  MessageCircle,
  ShieldCheck,
  Building,
  Award,
  ChevronRight,
  PhoneCall,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/companyData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl1 = buildWhatsAppLink(
    COMPANY_DATA.phones.whatsapp1.clean,
    'Olá! Vi o site da Pires & Lins e gostaria de solicitar um orçamento gratuito para pintura predial / revitalização de fachada.'
  );

  return (
    <section className="relative bg-gradient-to-b from-[#08172E] via-[#0B2545] to-[#0A1D36] text-white pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
      {/* Subtle decorative grid lines for architectural blueprint feel */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & High Conversion Trigger */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Regional kicker */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-semibold tracking-wider text-orange-400 uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0"></span>
              <span>Belém, Ananindeua e Região Metropolitana do Pará</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4 text-balance">
              PINTURA PREDIAL E REVITALIZAÇÃO DE FACHADAS EM BELÉM
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-bold text-orange-400 mb-4 tracking-tight">
              Proteja, renove e valorize seu patrimônio.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Atendimento técnico especializado para condomínios residenciais, prédios comerciais e indústrias. 
              Tratamento definitivo de infiltrações, reposição de pastilhas soltas e tintas de alta resistência 
              às chuvas e umidade amazônica.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href={whatsappUrl1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold text-base tracking-wide uppercase shadow-lg shadow-orange-950/40 transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Solicitar Orçamento pelo WhatsApp</span>
                <ChevronRight className="w-5 h-5 text-orange-200" />
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-semibold text-base border border-white/20 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>Simular Custos do Meu Imóvel</span>
              </button>
            </div>

            {/* Key direct trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/15 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Orçamento Gratuito in loco</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Norma NR-35 e Segurança</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Equipe Própria e Uniformizada</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Real Photography & Callout Badge Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/hero_fachada_predial_1792683688910.jpg"
                alt="Pintores profissionais da Pires & Lins revitalizando fachada predial com balancim e segurança NR-35 em Belém"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07172C] via-transparent to-black/20" />

              {/* Float badge in bottom corner */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0B2545]/90 backdrop-blur-md p-4 rounded-xl border border-white/15 flex items-center justify-between gap-3 shadow-lg">
                <div>
                  <p className="text-xs uppercase tracking-wider text-orange-400 font-bold">
                    Trabalho em Altura Seguro
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Equipamentos certificados e pintura de alto padrão
                  </p>
                </div>
                <a
                  href={`tel:${COMPANY_DATA.phones.whatsapp1.clean}`}
                  className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center text-white shrink-0 hover:bg-orange-500 transition-colors shadow"
                  aria-label="Ligar para a Pires & Lins"
                >
                  <PhoneCall className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Feature Trust Badges Bar inspired directly by Flex Painters Reference */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-[#0e2c52] border border-white/10 rounded-xl p-5 flex items-start gap-4 hover:border-orange-500/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
                SEGURANÇA & NR-35
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Linhas de vida, balancins inspecionados e EPIs completos para total conformidade legal.
              </p>
            </div>
          </div>

          <div className="bg-[#0e2c52] border border-white/10 rounded-xl p-5 flex items-start gap-4 hover:border-orange-500/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
                PINTORES EXPERIENTES
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Profissionais qualificados para condomínios, centros empresariais e indústrias no Pará.
              </p>
            </div>
          </div>

          <div className="bg-[#0e2c52] border border-white/10 rounded-xl p-5 flex items-start gap-4 hover:border-orange-500/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
                MÍNIMO IMPACTO
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Isolamento planejado e rotina organizada para não incomodar moradores e clientes.
              </p>
            </div>
          </div>

          <div className="bg-[#0e2c52] border border-white/10 rounded-xl p-5 flex items-start gap-4 hover:border-orange-500/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
                MATERIAIS PREMIUM
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Tintas elastoméricas e impermeabilizantes feitos para resistir à alta umidade de Belém.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
