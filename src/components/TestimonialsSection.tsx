import React, { useState } from 'react';
import {
  MessageSquare,
  ShieldCheck,
  Star,
  Send,
  CheckCircle2,
  Building,
  UserCheck
} from 'lucide-react';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  const [reviewName, setReviewName] = useState('');
  const [reviewRole, setReviewRole] = useState('Síndico(a)');
  const [reviewCondo, setReviewCondo] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewText.trim()) return;

    const message = `*Nova Avaliação de Cliente - Pires & Lins Pinturas*\n` +
      `*Nome:* ${reviewName}\n` +
      `*Função:* ${reviewRole}\n` +
      `*Condomínio / Imóvel:* ${reviewCondo || 'Não informado'}\n` +
      `*Depoimento:* "${reviewText}"`;

    const whatsappUrl = buildWhatsAppLink(COMPANY_DATA.phones.whatsapp1.clean, message);
    window.open(whatsappUrl, '_blank');
    setSubmittedFeedback(true);
  };

  return (
    <section id="depoimentos" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 block mb-2">
            CONFIANÇA & TRANSPARÊNCIA
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0B2545] leading-none mb-4">
            COMPROMISSO COM GESTORES E SÍNDICOS
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Trabalhamos com transparência ética absoluta: não inventamos avaliações fictícias. 
            Nossa melhor propaganda é a tranquilidade do síndico e a valorização das unidades.
          </p>
        </div>

        {/* 3 Quality & Transparency Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-[#0B2545] mb-2">
                Tranquilidade para a Gestão
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Fornecemos toda a documentação necessária para assembleias de condomínio, memorial descritivo dos materiais e planejamento claro de etapas.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Conformidade com a administração</span>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-[#0B2545] mb-2">
                Respeito à Rotina dos Moradores
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Horários de trabalho rigorosamente cumpridos, sinalização de segurança nas garagens e proteção de veículos e áreas comuns durante toda a pintura.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Convivência pacífica</span>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-[#0B2545] mb-2">
                Vistoria Técnica de Entrega
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                O serviço só é considerado concluído após inspeção minuciosa junto ao responsável pelo imóvel, garantindo que cada detalhe foi entregue com perfeição.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Validação presencial</span>
            </div>
          </div>

        </div>

        {/* Client feedback invitation box */}
        <div className="bg-[#0B2545] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                <MessageSquare className="w-4 h-4" />
                <span>Canal Aberto ao Cliente</span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white leading-tight">
                É Síndico ou Gestor Parceiro da Pires & Lins?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Sua opinião é fundamental para mantermos o mais alto padrão de atendimento em Belém. 
                Envie seu depoimento para publicação em nosso mural e redes sociais oficiais.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-orange-400 font-semibold">
                  <Star className="w-4 h-4 fill-orange-400" />
                  <span>Avaliações Verificadas</span>
                </div>
                <p>
                  Todas as avaliações recebidas são encaminhadas à nossa diretoria e validadas diretamente 
                  com o contrato do cliente antes de serem fixadas.
                </p>
              </div>
            </div>

            {/* Form to submit feedback */}
            <div className="lg:col-span-6 bg-white text-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200">
              {submittedFeedback ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold uppercase text-[#0B2545]">
                    Obrigado pelo seu Depoimento!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Sua mensagem foi enviada à nossa equipe de relacionamento no WhatsApp. 
                    Agradecemos a confiança na Pires & Lins Pinturas.
                  </p>
                  <button
                    onClick={() => setSubmittedFeedback(false)}
                    className="text-xs text-orange-600 font-bold hover:underline pt-2 cursor-pointer"
                  >
                    Enviar outra avaliação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <h4 className="font-heading text-xl font-bold uppercase text-[#0B2545]">
                    Envie sua Avaliação
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={reviewName}
                        onChange={(e) => setReviewName(e.target.value)}
                        placeholder="Ex: Carlos Ferreira"
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Sua Função / Cargo
                      </label>
                      <select
                        value={reviewRole}
                        onChange={(e) => setReviewRole(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-white"
                      >
                        <option value="Síndico(a)">Síndico(a)</option>
                        <option value="Subsíndico(a)">Subsíndico(a)</option>
                        <option value="Membro do Conselho">Membro do Conselho</option>
                        <option value="Administrador Predial">Administrador Predial</option>
                        <option value="Proprietário(a)">Proprietário(a)</option>
                        <option value="Diretor Comercial">Diretor Comercial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nome do Condomínio / Empresa (Opcional)
                    </label>
                    <input
                      type="text"
                      value={reviewCondo}
                      onChange={(e) => setReviewCondo(e.target.value)}
                      placeholder="Ex: Edifício Solar das Mangueiras, Umarizal"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Seu Comentário ou Experiência *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Conte como foi o atendimento, cumprimento do prazo e qualidade da pintura..."
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Depoimento para a Equipe</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
