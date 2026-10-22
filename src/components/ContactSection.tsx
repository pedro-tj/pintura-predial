import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/companyData';

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('Revitalização de Fachadas');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMsg = `*Contato via Formulário do Site - Pires & Lins Pinturas*\n\n` +
      `*Nome:* ${formName}\n` +
      `*Telefone / WhatsApp:* ${formPhone}\n` +
      `*Assunto / Serviço:* ${formSubject}\n` +
      `*Mensagem:* ${formMessage || 'Solicito contato para orçamento.'}`;

    const url = buildWhatsAppLink(COMPANY_DATA.phones.whatsapp1.clean, fullMsg);
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 block mb-2">
            FALE COM NOSSA EQUIPE TÉCNICA
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0B2545] leading-none mb-4">
            CANAIS DE ATENDIMENTO E ORÇAMENTO
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Estamos prontos para atender seu condomínio ou empresa em Belém, Ananindeua 
            e toda a região metropolitana. Entre em contato pelo canal de sua preferência.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          
          {/* Card 1: WhatsApp Comercial 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-500/50 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                WhatsApp Principal
              </span>
              <h3 className="font-heading text-xl font-bold text-[#0B2545] mb-1">
                {COMPANY_DATA.phones.whatsapp1.number}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Atendimento rápido para novos orçamentos, vistorias e laudos de fachadas.
              </p>
            </div>
            <a
              href={buildWhatsAppLink(
                COMPANY_DATA.phones.whatsapp1.clean,
                'Olá! Gostaria de falar sobre pintura predial com a Pires & Lins.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Card 2: WhatsApp Comercial 2 & Telefone */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-orange-500/50 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block mb-1">
                Segundo WhatsApp & Ligação
              </span>
              <h3 className="font-heading text-xl font-bold text-[#0B2545] mb-0.5">
                {COMPANY_DATA.phones.whatsapp2.number}
              </h3>
              <p className="text-xs font-semibold text-slate-600 mb-2">
                Tel. Adicional: {COMPANY_DATA.phones.additional.number}
              </p>
              <p className="text-xs text-slate-500 mb-4">
                Canal direto para dúvidas técnicas e acompanhamento de obras em andamento.
              </p>
            </div>
            <a
              href={buildWhatsAppLink(
                COMPANY_DATA.phones.whatsapp2.clean,
                'Olá! Gostaria de um orçamento para serviços de pintura e revitalização.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar Linha 2</span>
            </a>
          </div>

          {/* Card 3: E-mail Corporativo */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-500/50 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                E-mail Comercial
              </span>
              <h3 className="font-heading text-lg font-bold text-[#0B2545] break-all mb-1">
                {COMPANY_DATA.email}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Envio de editais, termos de referência, convites de licitação e concorrências.
              </p>
            </div>
            <a
              href={`mailto:${COMPANY_DATA.email}?subject=Solicitacao%20de%20Orcamento%20Pintura%20Predial`}
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0B2545] hover:bg-[#07172C] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar E-mail</span>
            </a>
          </div>

          {/* Card 4: Endereço & Sede */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-orange-500/50 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0B2545] flex items-center justify-center mb-4 group-hover:bg-[#0B2545] group-hover:text-white transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Sede Belém - Pará
              </span>
              <h3 className="font-heading text-base font-bold text-[#0B2545] leading-tight mb-1">
                {COMPANY_DATA.address.full}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {COMPANY_DATA.workingHours}
              </p>
            </div>
            <a
              href={COMPANY_DATA.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir no Mapa</span>
            </a>
          </div>

        </div>

        {/* Split Section: Quick Form + Local Map / Coverage Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Fast Request Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
                MENSAGEM DIRETA
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-[#0B2545]">
                SOLICITE UMA VISITA TÉCNICA OU PROPOSTA
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Preencha os campos abaixo e receba resposta com agilidade.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading text-2xl font-bold uppercase text-[#0B2545]">
                  Mensagem Pronta para Envio!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Seu navegador abriu a conversa no WhatsApp oficial da Pires & Lins. 
                  Basta clicar em "Enviar" na janela do WhatsApp para falar com nosso consultor.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-orange-600 text-white font-bold text-xs uppercase rounded-xl hover:bg-orange-700 transition-colors cursor-pointer"
                >
                  Enviar Outra Solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Nome / Responsável *
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Ex: Ana Souza (Síndica)"
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Telefone com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="(91) 98000-0000"
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Serviço de Maior Interesse *
                  </label>
                  <select
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-white"
                  >
                    <option value="Revitalização de Fachadas">Revitalização Completa de Fachadas</option>
                    <option value="Pintura Interna e Externa">Pintura Predial Interna / Externa</option>
                    <option value="Aplicação de Manta Asfáltica">Impermeabilização com Manta Asfáltica</option>
                    <option value="Reposição de Pastilhas Soltas">Reposição e Teste de Pastilhas Soltas</option>
                    <option value="Reforma de Telhados">Reforma e Vedação de Telhados</option>
                    <option value="Revitalização de Cisternas">Revitalização de Cisternas e Reservatórios</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Detalhes do Imóvel / Cidade e Bairro
                  </label>
                  <textarea
                    rows={3}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Informe o bairro em Belém ou Ananindeua, tipo de edifício e qualquer detalhe relevante..."
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold uppercase tracking-wider text-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitação no WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenQuoteModal}
                    className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Simulador Completo
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Regional Map & Location Overview */}
          <div className="lg:col-span-5 bg-[#0B2545] text-white p-8 rounded-3xl border border-white/10 shadow-lg flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
                <MapPin className="w-4 h-4" />
                <span>Localização Estratégica</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white mb-3">
                BELÉM, ANANINDEUA E REGIÃO
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Nossa base está localizada na Cabanagem em Belém, permitindo rápido deslocamento 
                para todas as regiões da capital e do município de Ananindeua:
              </p>

              {/* Coverage checklist */}
              <div className="space-y-2 mb-6">
                {COMPANY_DATA.coverageAreas.slice(0, 5).map((area, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Siga a Pires & Lins nas Redes:
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_DATA.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>@pireselins</span>
                  </a>

                  <a
                    href={COMPANY_DATA.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-blue-400" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>CNPJ e dados cadastrais sob consulta.</span>
              <a
                href={COMPANY_DATA.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 font-bold underline"
              >
                Abrir Rota GPS
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
