import React from 'react';
import { Mail, Lock } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-900/60 px-6 py-12 shadow-2xl lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1">
            <Lock className="h-4 w-4 text-cyan-300" />
            <span className="text-xs text-cyan-200">Secure by design • Audit-ready</span>
          </div>
          <h3 className="text-2xl font-semibold sm:text-3xl">Bring SatyaVerify to your program</h3>
          <p className="mt-3 text-slate-300">
            See how agencies and banks reduce fraud and accelerate disbursements with AI-powered verification.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-6 flex max-w-xl flex-col items-stretch gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Work email"
              className="w-full rounded-md border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              <Mail className="h-4 w-4" /> Request demo
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-400">No spam. We’ll reach out within 1–2 business days.</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-5xl px-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SatyaVerify. All rights reserved.
      </div>
    </section>
  );
};

export default CTA;
