import React, { useState } from 'react';
import {
  Building2,
  Paintbrush,
  Layers,
  Grid,
  Home,
  Droplet,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Info
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem, COMPANY_DATA, buildWhatsAppLink } from '../data/companyData';

interface ServicesSectionProps {
  onSelectServiceForEstimate: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForEstimate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-7 h-7 text-orange-500" />;
      case 'Paintbrush':
        return <Paintbrush className="w-7 h-7 text-orange-500" />;
      case 'Layers':
        return <Layers className="w-7 h-7 text-orange-500" />;
      case 'Grid':
        return <Grid className="w-7 h-7 text-orange-500" />;
      case 'Home':
        return <Home className="w-7 h-7 text-orange-500" />;
      case 'Droplet':
        return <Droplet className="w-7 h-7 text-orange-500" />;
      default:
        return <Building2 className="w-7 h-7 text-orange-500" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-slate-50 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 block mb-2">
            NOSSAS SOLUÇÕES TÉCNICAS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0B2545] leading-none mb-4">
            SERVIÇOS DE PINTURA E REVITALIZAÇÃO PREDIAL
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Soluções completas com mão de obra especializada para proteger a estrutura, eliminar infiltrações 
            e modernizar a estética de edifícios em Belém e Ananindeua.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service, idx) => {
            const whatsappServiceUrl = buildWhatsAppLink(
              COMPANY_DATA.phones.whatsapp1.clean,
              `Olá! Gostaria de um orçamento detalhado para o serviço de *${service.title}* em meu imóvel.`
            );

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Service Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                      <div className="group-hover:text-white transition-colors">
                        {getServiceIcon(service.iconName)}
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-[#0B2545] mb-3 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Key Benefits List */}
                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0B2545] transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                    <span>Ver Detalhes</span>
                  </button>

                  <a
                    href={whatsappServiceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Orçar</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout in the section */}
        <div className="mt-14 bg-[#0B2545] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white">
              Precisa de um diagnóstico na fachada do seu condomínio?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Agende uma visita técnica com nossos especialistas. Identificamos trincas, pastilhas soltas 
              e umidade antes que se tornem danos estruturais graves.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForEstimate('Revitalização de Fachadas')}
            className="px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold uppercase tracking-wide text-xs sm:text-sm whitespace-nowrap shadow-md transition-all shrink-0 cursor-pointer flex items-center gap-2"
          >
            <span>Agendar Vistoria Gratuita</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Modal for Service Technical Details */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-scaleUp">
            
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-orange-600">
                  Especificação Técnica
                </span>
                <h4 className="font-heading text-2xl sm:text-3xl font-black uppercase text-[#0B2545]">
                  {selectedService.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
              <p className="text-xs font-bold text-[#0B2545] uppercase tracking-wide mb-2">
                Destaques da Execução:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedService.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-500">
                <strong>Recomendado para:</strong> {selectedService.recommendedFor}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={buildWhatsAppLink(
                  COMPANY_DATA.phones.whatsapp1.clean,
                  `Olá! Gostaria de solicitar um orçamento para o serviço de ${selectedService.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wide transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir Orçamento no WhatsApp</span>
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
