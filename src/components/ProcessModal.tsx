import React from 'react';
import { X, Search, Server, ShieldCheck, CheckCircle, Cpu } from 'lucide-react';

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProcessModal: React.FC<ProcessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const steps = [
    {
      num: '01',
      title: 'Requirements & Site Assessment',
      icon: Search,
      description: 'Auditing existing physical & digital infrastructure, analyzing bandwidth demands, assessing perimeter security risks, and defining project scope.'
    },
    {
      num: '02',
      title: 'Architecture & Compliance Design',
      icon: Server,
      description: 'Designing structured Cisco LAN/WAN topologies, VLAN subnetting, CCTV camera field-of-view blueprints, and drafting technical tender compliance sheets.'
    },
    {
      num: '03',
      title: 'Deployment & Configuration',
      icon: Cpu,
      description: 'Installing network hardware, configuring routers/switches, mounting IP cameras & biometric access gates, and deploying custom Python/Java software tools.'
    },
    {
      num: '04',
      title: 'Testing, Commissioning & Maintenance',
      icon: ShieldCheck,
      description: 'Executing cable continuity tests, verifying failover protocols, conducting client sign-offs, and providing proactive 24/7 IT system administration.'
    }
  ];

  return (
    <div id="process-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        id="process-modal-container"
        className="bg-[#ffffff] rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl relative border border-[#e1e3e4] max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
      >
        <button
          id="process-modal-close-btn"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#76777b] hover:text-[#191c1d] hover:bg-[#f3f4f5] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Operations Framework</span>
          <h2 className="font-headline font-bold text-2xl md:text-3xl text-[#191c1d] mt-1">
            IT Operations Methodology
          </h2>
          <p className="text-sm text-[#46474a] mt-2">
            A battle-tested 4-stage framework ensuring high-availability network deployments, security integrity, and zero system downtime.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="p-5 rounded-2xl bg-[#f8f9fa] border border-[#e1e3e4] flex gap-4 items-start hover:border-[#0051d5]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0051d5]/10 text-[#0051d5] flex items-center justify-center font-bold font-headline shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-[#0051d5] tracking-widest">{step.num}</span>
                    <h3 className="font-headline font-bold text-base text-[#191c1d]">{step.title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-[#46474a] mt-1.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-[#e1e3e4] flex items-center justify-between">
          <span className="text-xs text-[#76777b] font-medium flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-[#0051d5]" /> Built for enterprise ICT & electromechanical environments
          </span>
          <button
            id="process-modal-got-it-btn"
            onClick={onClose}
            className="bg-[#191c1d] hover:bg-[#0051d5] text-[#ffffff] text-xs font-semibold px-6 py-2.5 rounded-full transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
