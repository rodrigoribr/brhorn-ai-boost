import { ArrowRight, BedDouble, CalendarDays, Hotel, ShieldCheck, UsersRound } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface ViaSerraSectionProps {
  onContactClick?: () => void;
}

export const ViaSerraSection = ({ onContactClick }: ViaSerraSectionProps) => {
  const days = Array.from({ length: 14 }, (_, index) => index + 1);
  const rooms = ["Araucária", "Mantiqueira", "Pedra Azul", "Serra"];
  const features = [
    { icon: CalendarDays, text: "Calendário visual de ocupação e reservas" },
    { icon: BedDouble, text: "Controle de quartos, leitos, status e comodidades" },
    { icon: UsersRound, text: "Cadastro de hóspedes com histórico de hospedagem" },
    { icon: ShieldCheck, text: "Privacidade, MFA e fluxos LGPD documentados" },
  ];

  return (
    <section className="border-y border-white/10 bg-zinc-950 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="order-2 overflow-hidden rounded-sm border border-white/10 bg-white text-slate-950 shadow-[0_40px_100px_rgba(0,0,0,0.45)] lg:order-1">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div className="flex items-center gap-3">
              <Hotel className="h-5 w-5 text-teal-600" />
              <span className="font-bold">ViaSerra</span>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
              ao vivo
            </span>
          </div>

          <div className="grid grid-cols-4 gap-px bg-slate-200">
            {[
              ["78%", "ocupação"],
              ["12", "hóspedes"],
              ["4", "check-ins"],
              ["R$ 18,4k", "mês"],
            ].map(([value, label]) => (
              <div key={label} className="bg-white p-5">
                <p className="font-brand text-3xl text-slate-950">{value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">calendário de reservas</p>
                <p className="mt-1 text-sm text-slate-600">14 dias de ocupação por quarto</p>
              </div>
              <CalendarDays className="h-5 w-5 text-slate-400" />
            </div>

            <div className="overflow-hidden rounded-sm border border-slate-200">
              <div className="grid grid-cols-[120px_repeat(14,minmax(28px,1fr))] bg-slate-50 text-[10px] font-bold uppercase text-slate-400">
                <div className="border-r border-slate-200 p-2">Quarto</div>
                {days.map((day) => (
                  <div key={day} className="border-r border-slate-200 p-2 text-center last:border-r-0">
                    {day}
                  </div>
                ))}
              </div>
              {rooms.map((room, rowIndex) => (
                <div key={room} className="grid grid-cols-[120px_repeat(14,minmax(28px,1fr))] border-t border-slate-200">
                  <div className="border-r border-slate-200 p-2 text-xs font-medium text-slate-700">{room}</div>
                  {days.map((day) => {
                    const active = (rowIndex === 0 && day >= 2 && day <= 5) || (rowIndex === 1 && day >= 7 && day <= 11) || (rowIndex === 2 && day >= 4 && day <= 8) || (rowIndex === 3 && day >= 10 && day <= 13);
                    const pending = (rowIndex === 0 && day === 9) || (rowIndex === 3 && day === 4);
                    return (
                      <div key={day} className="border-r border-slate-100 p-1 last:border-r-0">
                        <div className={`h-6 rounded-sm ${active ? "bg-teal-600" : pending ? "bg-amber-400" : "bg-slate-100"}`} />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-brand">Produto 02</p>
          <h2 className="font-brand text-6xl leading-none text-white md:text-8xl">ViaSerra</h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-zinc-400">
            Sistema de gestão para pousadas pequenas: reservas, quartos, hóspedes, dashboard e operação diária em uma
            interface objetiva.
          </p>

          <div className="mt-10 grid gap-4">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-start gap-4 border-l border-white/10 pl-4">
                <feature.icon className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <span className="text-zinc-300">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/viaserra">
              <Button className="h-14 rounded-sm bg-white px-8 font-bold text-black hover:bg-zinc-200">
                Conhecer ViaSerra
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
            <Button
              onClick={onContactClick}
              variant="outline"
              className="h-14 rounded-sm border-white/15 bg-transparent px-8 font-bold text-white hover:bg-white hover:text-black"
            >
              Conversar sobre gestão
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
