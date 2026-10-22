import React from 'react';
import {
  ShieldCheck,
  CheckCircle,
  MapPin,
  Clock,
  Sparkles,
  MessageCircle,
  FileText
} from 'lucide-react';
import { COMPANY_DATA, WORK_PROCESS_STEPS, buildWhatsAppLink } from '../data/companyData';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl = buildWhatsAppLink(
    COMPANY_DATA.phones.whatsapp1.clean,
    'Olá! Gostaria de agendar uma visita técnica gratuita com a Pires & Lins Pinturas.'
  );

  return (
    <section id="sobre" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top split: Story & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
              <span className="w-2 h-2 rounded-full bg-orange-600"></span>
              <span>QUEM SOMOS</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0B2545] leading-tight">
              SOBRE A PIRES & LINS PINTURAS E REVITALIZAÇÃO
            </h2>

            <p className="text-slate-700 text-base leading-relaxed">
              Com sede em Belém do Pará, a <strong>Pires & Lins Pinturas</strong> nasceu com o compromisso 
              de entregar serviços de alta qualidade em pintura predial, recuperação estrutural de fachadas 
              e impermeabilização para condomínios, empresas e indústrias.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Sabemos que o clima amazônico — com sol intenso e chuvas diárias — exige técnicas específicas, 
              materiais adequados e rigor na aplicação. Por isso, aliamos mão de obra capacitada, respeito 
              às normas de segurança (NR-35) e produtos de alto rendimento para garantir que seu investimento dure anos.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <ShieldCheck className="w-5 h-5 text-orange-600" />
                  <h3 className="font-heading text-lg font-bold uppercase text-[#0B2545]">
                    Atendimento Profissional
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Profissionais uniformizados, orientados e focados no respeito ao ambiente de convivência dos condôminos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Sparkles className="w-5 h-5 text-orange-600" />
                  <h3 className="font-heading text-lg font-bold uppercase text-[#0B2545]">
                    Satisfação do Cliente
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Acompanhamento próximo em cada fase da obra com entrega técnica e vistoria conjunta.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <h3 className="font-heading text-lg font-bold uppercase text-[#0B2545]">
                    Foco Regional Pará
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conhecimento profundo das patologias de fachadas causadas pela umidade de Belém e Ananindeua.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <FileText className="w-5 h-5 text-orange-600" />
                  <h3 className="font-heading text-lg font-bold uppercase text-[#0B2545]">
                    Orçamento Gratuito
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Visita técnica presencial e proposta transparente sem custos ou taxas ocultas.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com a Equipe no WhatsApp</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-colors cursor-pointer"
              >
                <span>Solicitar Vistoria Técnica</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual montage of team & safety */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/src/assets/images/servico_revitalizacao_1792683689905.jpg"
                  alt="Restauração de fachada com andaimes e tela fachadeira em Belém"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="col-span-4 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/src/assets/images/servico_manta_telhado_1792683690362.jpg"
                  alt="Aplicação técnica de impermeabilização com manta asfáltica"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bottom callout badge */}
              <div className="col-span-12 bg-[#0B2545] text-white p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading text-xl font-bold uppercase tracking-wide text-orange-400">
                    Sede Própria em Belém
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    {COMPANY_DATA.address.full}
                  </p>
                </div>
                <a
                  href={COMPANY_DATA.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Steps: Our Work Process */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 block mb-2">
              FLUXO TRANSPARENTE
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2545]">
              COMO TRABALHAMOS DO ORÇAMENTO À ENTREGA
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="font-heading text-4xl font-black text-orange-600/30 mb-3">
                    {step.number}
                  </div>
                  <h4 className="font-heading text-xl font-bold uppercase text-[#0B2545] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-orange-600 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Etapa garantida</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
