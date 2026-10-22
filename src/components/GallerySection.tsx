import React, { useState } from 'react';
import {
  Maximize2,
  X,
  MessageCircle,
  MapPin,
  Sparkles,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, COMPANY_DATA, buildWhatsAppLink } from '../data/companyData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isComparing, setIsComparing] = useState<boolean>(true);

  const categories = [
    { id: 'todos', label: 'Todos os Trabalhos' },
    { id: 'fachada', label: 'Revitalização de Fachadas' },
    { id: 'impermeabilizacao', label: 'Manta Asfáltica & Lajes' },
    { id: 'comercial', label: 'Obras Comerciais' }
  ];

  const filteredItems = activeCategory === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 block mb-2">
            PORTFÓLIO EM FOCO
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0B2545] leading-none mb-4">
            OBRAS E RESULTADOS DE ANTES E DEPOIS
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Veja a transformação estética e a proteção estrutural entregue pela Pires & Lins.
            Clique em qualquer imagem para ampliar em alta definição.
          </p>
        </div>

        {/* Interactive Before & After Showcase Box */}
        <div className="mb-16 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-6 sm:p-8 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Comparativo de Revitalização</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase">
                Edifício Residencial – Recuperação e Nova Paleta
              </h3>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <SlidersHorizontal className="w-4 h-4 text-orange-400" />
              <span>Arraste a barra para comparar</span>
            </div>
          </div>

          {/* Interactive Comparison Container */}
          <div className="relative h-[320px] sm:h-[480px] rounded-2xl overflow-hidden select-none cursor-ew-resize">
            {/* After Image (Full width background) */}
            <img
              src="/src/assets/images/galeria_fachada_renovada_1792683689951.jpg"
              alt="Fachada revitalizada após pintura e recuperação predial"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow">
              DEPOIS (Revitalizado)
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/src/assets/images/servico_revitalizacao_1792683689905.jpg"
                alt="Fachada antes da revitalização com andaimes e restauração de reboco"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', minWidth: '100%' }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#0B2545]/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow">
                ANTES (Em Obras)
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-orange-500 shadow-[0_0_10px_rgba(242,100,25,0.8)] flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-lg border-2 border-white pointer-events-auto cursor-ew-resize">
                <div className="flex items-center -space-x-1">
                  <ChevronLeft className="w-4 h-4" />
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Invisible Range Input for Smooth Dragging */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              aria-label="Controle de arraste antes e depois"
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-3">
            <p>
              * Tratamento de trincas estruturais, remoção de fungos, lavagem técnica e pintura de alta durabilidade.
            </p>
            <a
              href={buildWhatsAppLink(
                COMPANY_DATA.phones.whatsapp1.clean,
                'Olá! Gostei do comparativo de antes e depois da fachada no site. Gostaria de uma avaliação para meu prédio.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Solicitar orçamento semelhante</span>
            </a>
          </div>
        </div>

        {/* Filter categories tabs (Button elements) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0B2545] text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-orange-500/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-slate-900">
                <img
                  src={item.afterImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                    <span>Clique para Ampliar</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-orange-400 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between gap-4">
                <p className="text-xs text-slate-600 line-clamp-2">
                  {item.description}
                </p>
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0B2545] text-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-white/20 animate-scaleUp">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block">
                  {selectedPhoto.location}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Fechar foto ampliada"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.afterImage}
                alt={selectedPhoto.title}
                className="max-h-[60vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer & Actions */}
            <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#07172C]">
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {selectedPhoto.description}
              </p>
              <a
                href={buildWhatsAppLink(
                  COMPANY_DATA.phones.whatsapp1.clean,
                  `Olá! Gostaria de um orçamento para um serviço igual a este que vi na galeria: *${selectedPhoto.title}* (${selectedPhoto.location}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow transition-colors whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir Orçamento Deste Serviço</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
