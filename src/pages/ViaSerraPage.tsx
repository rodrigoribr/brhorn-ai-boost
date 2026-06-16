import { useState } from "react";
import { ArrowLeft, ArrowRight, BedDouble, CalendarDays, Gauge, ShieldCheck, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import logo from "@/assets/logo-original.png";

const ViaSerraPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modules = [
    {
      icon: CalendarDays,
      title: "Calendário de reservas",
      desc: "Visualize quartos por linha, reservas por período, status, check-ins e check-outs.",
    },
    {
      icon: BedDouble,
      title: "Quartos e tarifas",
      desc: "Controle tipo, capacidade, preço por pessoa/noite, leitos, comodidades e status.",
    },
    {
      icon: UsersRound,
      title: "Hóspedes",
      desc: "Cadastro com contato, documento, busca, paginação e histórico de hospedagens.",
    },
    {
      icon: Gauge,
      title: "Dashboard operacional",
      desc: "Ocupação, pessoas hospedadas, receita do mês, próximas chegadas e origem das reservas.",
    },
    {
      icon: ShieldCheck,
      title: "Privacidade e segurança",
      desc: "Supabase Auth, MFA disponível, aceite LGPD, exportação e exclusão de dados.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 px-4 backdrop-blur-md md:px-6">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden md:inline">Voltar</span>
          </Link>

          <div className="flex items-center gap-4">
            <img src={logo} alt="brhorn" className="h-6 w-auto" />
            <span className="text-zinc-600">|</span>
            <span className="font-brand text-2xl">ViaSerra</span>
          </div>

          <Button
            onClick={() => setIsModalOpen(true)}
            size="sm"
            className="rounded-sm bg-white text-xs font-bold uppercase tracking-wide text-black hover:bg-zinc-200"
          >
            Contato
          </Button>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pt-40">
          <div className="absolute right-0 top-0 h-[520px] w-[520px] translate-x-1/3 rounded-full bg-brand/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-brand">Produto brhorn</p>
              <h1 className="font-brand text-6xl leading-none md:text-8xl">ViaSerra</h1>
              <p className="mt-8 max-w-2xl text-2xl font-light leading-tight text-zinc-300">
                Gestão simples para pousadas pequenas que precisam controlar reservas, quartos e hóspedes sem planilha.
              </p>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500">
                O ViaSerra é um SaaS operacional em React, Vercel e Supabase. A camada de IA é visão futura; o produto
                atual foca na rotina real da pousada.
              </p>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="mt-10 h-14 rounded-sm bg-white px-9 text-base font-bold text-black hover:bg-zinc-200"
              >
                Conversar sobre ViaSerra <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>

            <div className="overflow-hidden rounded-sm border border-white/10 bg-white text-slate-950">
              <div className="border-b border-slate-200 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Operação da pousada</p>
                <p className="mt-1 font-brand text-3xl">Calendário de ocupação</p>
              </div>
              <div className="grid grid-cols-4 gap-px bg-slate-200">
                {[
                  ["78%", "ocupação hoje"],
                  ["12", "pessoas"],
                  ["4", "check-ins"],
                  ["2", "check-outs"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-white p-5">
                    <p className="font-brand text-3xl">{value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 p-5">
                {["Araucária", "Mantiqueira", "Pedra Azul", "Serra"].map((room, index) => (
                  <div key={room} className="grid grid-cols-[110px_1fr] items-center gap-3">
                    <span className="text-xs font-medium text-slate-600">{room}</span>
                    <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(14, minmax(0, 1fr))" }}>
                      {Array.from({ length: 14 }).map((_, day) => (
                        <span
                          key={day}
                          className={`h-7 rounded-sm ${
                            (day + index) % 6 === 0 ? "bg-amber-400" : (day + index) % 3 === 0 ? "bg-teal-600" : "bg-slate-100"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-zinc-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-brand">Módulos reais</p>
              <h2 className="font-brand text-5xl leading-none md:text-7xl">O que já existe no produto.</h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-5">
              {modules.map((module) => (
                <article key={module.title} className="bg-background p-7">
                  <module.icon className="mb-10 h-6 w-6 text-brand" />
                  <h3 className="text-lg font-bold text-white">{module.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-500">{module.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ViaSerraPage;
