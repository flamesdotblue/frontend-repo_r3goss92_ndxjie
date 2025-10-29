import React from 'react';
import { ShieldCheck, MapPin, Camera, UploadCloud, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Camera className="h-6 w-6 text-cyan-400" />,
    title: 'Geo-tagged, time-stamped media',
    desc: 'Capture proof with embedded GPS coordinates and secure timestamps for trust you can verify.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-cyan-400" />,
    title: 'AI validation engine',
    desc: 'Detects correct asset type, flags tampering, and highlights low-confidence submissions for review.',
  },
  {
    icon: <MapPin className="h-6 w-6 text-cyan-400" />,
    title: 'Geo-fenced compliance',
    desc: 'Automatically verifies the media location against registered beneficiary coordinates.',
  },
  {
    icon: <UploadCloud className="h-6 w-6 text-cyan-400" />,
    title: 'Offline-first sync',
    desc: 'Works without internet. Submissions sync securely once connectivity returns.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-cyan-400" />,
    title: 'Agency dashboard',
    desc: 'Role-based portal with queues, maps, and exportable reports for audit-ready oversight.',
  },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why SatyaVerify</h2>
          <p className="mt-3 text-slate-300">
            Built for scale, trust, and speed—reduce fraud, cut verification time, and improve compliance with a single platform.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="group relative rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-cyan-500/40 hover:bg-slate-900/60">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30">
                {f.icon}
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
