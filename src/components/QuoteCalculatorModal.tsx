import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  Building,
  CheckSquare,
  Square,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  Copy,
  Check
} from 'lucide-react';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/companyData';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  if (!isOpen) return null;

  const [propertyType, setPropertyType] = useState('Condomínio Residencial Vertical');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ['Revitalização de Fachadas']
  );
  const [cityArea, setCityArea] = useState('Belém');
  const [neighborhood, setNeighborhood] = useState('');
  const [contactName, setContactName] = useState('');
  const [urgency, setUrgency] = useState('Próximas semanas');
  const [details, setDetails] = useState('');
  const [selectedWhatsApp, setSelectedWhatsApp] = useState<string>('whatsapp1');
  const [copied, setCopied] = useState(false);

  const availableServices = [
    'Revitalização de Fachadas',
    'Pintura Interna e Externa',
    'Aplicação de Manta Asfáltica (Infiltrações)',
    'Reposição de Pastilhas Soltas',
    'Reforma e Manutenção de Telhados',
    'Revitalização de Cisternas / Caixas-d’Água'
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const generateMessage = () => {
    return (
      `*Solicitação de Orçamento Gratuito - Pires & Lins Pinturas*\n\n` +
      `*Nome:* ${contactName || 'Não informado'}\n` +
      `*Tipo de Imóvel:* ${propertyType}\n` +
      `*Serviços Selecionados:*\n${selectedServices.map(s => `• ${s}`).join('\n')}\n` +
      `*Localização:* ${cityArea} ${neighborhood ? `- Bairro ${neighborhood}` : ''}\n` +
      `*Previsão / Urgência:* ${urgency}\n` +
      (details ? `*Observações:* ${details}\n\n` : '\n') +
      `_Gostaria de agendar uma visita técnica gratuita ou receber estimativa preliminar._`
    );
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = selectedWhatsApp === 'whatsapp1'
      ? COMPANY_DATA.phones.whatsapp1.clean
      : COMPANY_DATA.phones.whatsapp2.clean;

    const url = buildWhatsAppLink(phone, generateMessage());
    window.open(url, '_blank');
    onClose();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-200 animate-scaleUp">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#0B2545] text-white p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulador de Orçamento Sem Compromisso</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white leading-none">
              SOLICITAR ORÇAMENTO GRATUITO
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar simulador de orçamento"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 sm:p-8 space-y-6">
          
          {/* Step 1: Property Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
              1. Qual é o tipo de imóvel?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                'Condomínio Residencial Vertical',
                'Prédio Comercial / Empresarial',
                'Galpão / Indústria',
                'Loja / Ponto Comercial',
                'Condomínio Horizontal',
                'Outro Imóvel'
              ].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setPropertyType(type)}
                  className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                    propertyType === type
                      ? 'bg-orange-50 border-orange-500 text-orange-800 font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Services needed */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2">
              2. Quais serviços são necessários? (Selecione um ou mais)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {availableServices.map((srv) => {
                const isSelected = selectedServices.includes(srv);
                return (
                  <div
                    key={srv}
                    onClick={() => toggleService(srv)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-orange-500/10 border-orange-500 text-[#0B2545] font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {isSelected ? (
                      <CheckSquare className="w-4 h-4 text-orange-600 shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                    <span>{srv}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-1.5">
                3. Cidade / Região
              </label>
              <select
                value={cityArea}
                onChange={(e) => setCityArea(e.target.value)}
                className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white font-medium focus:ring-1 focus:ring-orange-500 focus:outline-none"
              >
                <option value="Belém">Belém (PA)</option>
                <option value="Ananindeua">Ananindeua (PA)</option>
                <option value="Marituba">Marituba (PA)</option>
                <option value="Benevides">Benevides (PA)</option>
                <option value="Castanhal">Castanhal (PA)</option>
                <option value="Ilha de Mosqueiro">Mosqueiro (PA)</option>
                <option value="Outra cidade do Pará">Outro Município do Pará</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-1.5">
                Bairro do Imóvel
              </label>
              <input
                type="text"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                placeholder="Ex: Umarizal, Nazaré, Cidade Nova..."
                className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:ring-1 focus:ring-orange-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Step 4: Contact & Urgency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-1.5">
                Seu Nome ou Cargo (Síndico, Gerente, etc.)
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Ex: Roberto - Síndico"
                className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:ring-1 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-1.5">
                Previsão de Início
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white font-medium focus:ring-1 focus:ring-orange-500 focus:outline-none"
              >
                <option value="Urgente (Infiltração ou risco iminente)">Urgente (Infiltração ou pastilhas caindo)</option>
                <option value="Próximas 2 semanas">Próximas 2 semanas</option>
                <option value="Próximo mês">Próximo mês</option>
                <option value="Orçamento para Assembleia / Futuro">Orçamento para Assembleia / Previsão</option>
              </select>
            </div>
          </div>

          {/* Details */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-1.5">
              Observações Adicionais (Número de andares, estado da pintura, etc.)
            </label>
            <textarea
              rows={2}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Ex: Prédio de 12 andares com pontos de pastilhas soltando na lateral norte..."
              className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:ring-1 focus:ring-orange-500 focus:outline-none resize-none"
            />
          </div>

          {/* WhatsApp Destination Selector */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="block text-xs font-bold text-slate-700">
              Escolha para qual número enviar no WhatsApp:
            </span>
            <div className="flex flex-col sm:flex-row gap-2">
              <label className="flex items-center gap-2 p-2.5 rounded-xl border bg-white text-xs cursor-pointer flex-1">
                <input
                  type="radio"
                  name="wppSelect"
                  checked={selectedWhatsApp === 'whatsapp1'}
                  onChange={() => setSelectedWhatsApp('whatsapp1')}
                  className="text-orange-600 focus:ring-orange-500"
                />
                <div>
                  <div className="font-bold text-[#0B2545]">WhatsApp Comercial 1</div>
                  <div className="text-[11px] text-slate-500">(91) 98198-6761 (Principal)</div>
                </div>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl border bg-white text-xs cursor-pointer flex-1">
                <input
                  type="radio"
                  name="wppSelect"
                  checked={selectedWhatsApp === 'whatsapp2'}
                  onChange={() => setSelectedWhatsApp('whatsapp2')}
                  className="text-orange-600 focus:ring-orange-500"
                />
                <div>
                  <div className="font-bold text-[#0B2545]">WhatsApp Comercial 2</div>
                  <div className="text-[11px] text-slate-500">(91) 99170-4839 (Orçamentos)</div>
                </div>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-extrabold uppercase tracking-wider text-sm shadow-lg shadow-orange-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Enviar Orçamento no WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full sm:w-auto py-4 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copiar Mensagem</span>
                </>
              )}
            </button>
          </div>

          <p className="text-center text-[11px] text-slate-500">
            A Pires & Lins Pinturas não cobra por visitas técnicas em Belém e Ananindeua. Orçamento 100% gratuito.
          </p>

        </form>

      </div>
    </div>
  );
};
