import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShieldCheck, Rocket, Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"></div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-10 pb-16 sm:pt-16 lg:px-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30">
              <ShieldCheck className="h-5 w-5 text-cyan-300" />
            </div>
            <span className="text-lg font-semibold tracking-tight">SatyaVerify</span>
          </div>
          <div className="hidden gap-3 sm:flex">
            <a href="#features" className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-white">Features</a>
            <a href="#workflow" className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-white">How it works</a>
            <a href="#cta" className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-white">Get started</a>
          </div>
        </div>
        <div className="mt-20 text-center sm:mt-28">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1">
            <Rocket className="h-4 w-4 text-cyan-300" />
            <span className="text-xs text-cyan-200">AI-powered loan utilization verification</span>
          </div>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Verify assets with trust, speed, and transparency
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
            Replace costly field visits with a secure, mobile-first process that validates purchases using geo-tagged media, timestamps, and on-device intelligence.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Request a demo
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-200 hover:border-slate-600"
            >
              <Phone className="h-4 w-4" /> Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
