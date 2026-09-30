import React, { useEffect } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { ServiceItem } from '../data/siteContent';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForInquiry: (optionValue: ServiceItem['formOptionValue'], serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForInquiry,
}) => {
  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111110]/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FAF9F6] border border-[#E2DDD5] rounded-xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Breadcrumb Navigation for SEO & Context */}
        <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-[#E2DDD5]">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-[#575550]">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <button
                  type="button"
                  onClick={onClose}
                  className="hover:text-[#111110] underline-offset-4 hover:underline"
                >
                  Home
                </button>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <button
                  type="button"
                  onClick={onClose}
                  className="hover:text-[#111110] underline-offset-4 hover:underline"
                >
                  Services
                </button>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#111110] font-medium" aria-current="page">
                {service.number} — {service.title}
              </li>
            </ol>
          </nav>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="p-2 rounded-lg text-[#575550] hover:text-[#111110] hover:bg-[#EBE8E0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Service Header */}
        <div className="mb-6">
          <div className="font-mono text-xs text-[#1D4ED8] font-medium mb-2">
            Service {service.number} · Site &amp; Search Capability
          </div>
          <h2
            id="service-modal-title"
            className="font-display text-2xl sm:text-3xl text-[#111110] tracking-tight mb-3"
          >
            {service.title}
          </h2>
          <p className="text-base text-[#3D3B37] leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Structured Details */}
        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-white border border-[#E2DDD5]">
            <h3 className="text-xs font-mono text-[#575550] mb-1.5">
              Who this is built for
            </h3>
            <p className="text-sm text-[#111110] leading-relaxed">
              {service.whoItIsFor}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#111110] mb-3">
              What is included in {service.title}
            </h3>
            <ul className="space-y-2.5">
              {service.whatWeDeliver.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#3D3B37]">
                  <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-white border border-[#E2DDD5]">
              <h4 className="text-xs font-mono text-[#1D4ED8] mb-1.5">
                How it helps you get found
              </h4>
              <p className="text-xs text-[#3D3B37] leading-relaxed">
                {service.searchImpact}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white border border-[#E2DDD5]">
              <h4 className="text-xs font-mono text-[#575550] mb-1.5">
                The mistake this prevents
              </h4>
              <p className="text-xs text-[#3D3B37] leading-relaxed">
                {service.commonMistakeAvoided}
              </p>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-8 pt-5 border-t border-[#E2DDD5] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#575550]">
            Need {service.title.toLowerCase()} for your business?
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-[#3D3B37] hover:text-[#111110] transition-colors whitespace-nowrap"
            >
              Back to Services
            </button>
            <button
              type="button"
              onClick={() => onSelectForInquiry(service.formOptionValue, service.title)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#111110] hover:bg-[#1D4ED8] rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Inquire About {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
