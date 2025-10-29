import React from 'react';
import { Smartphone, Users, CheckCircle2, FileSearch } from 'lucide-react';

const steps = [
  {
    role: 'Beneficiary',
    icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
    items: [
      'Login with mobile OTP',
      'Capture asset photo with GPS + timestamp',
      'Auto-sync when online and track status',
    ],
  },
  {
    role: 'Data Entry Operator',
    icon: <Users className="h-5 w-5 text-cyan-400" />,
    items: [
      'Create beneficiary profile and loan details',
      'Assign asset category and location',
      'Activate access for mobile login',
    ],
  },
  {
    role: 'Review Officer',
    icon: <FileSearch className="h-5 w-5 text-cyan-400" />,
    items: [
      'Review submissions with map + media',
      'See AI checks: object, geo, tampering',
      'Approve, reject with reason, or escalate',
    ],
  },
];

const Workflow = () => {
  return (
    <section id="workflow" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Simple, trusted workflow</h2>
          <p className="mt-3 text-slate-300">Designed for real-world conditions with offline-first capture and AI-assisted review.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-cyan-500/10 ring-1 ring-cyan-400/30">
                  {s.icon}
                </div>
                <h3 className="text-lg font-medium">{s.role}</h3>
              </div>
              <ul className="mt-3 space-y-2">
                {s.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <span className="text-sm leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
