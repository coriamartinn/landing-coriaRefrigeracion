import WhatsAppIcon from "./WhatsAppIcon";
import { CONTACT } from "../config";
import { useWhatsAppPicker } from "./WhatsAppPickerContext";

export default function Hero() {
  const { openPicker } = useWhatsAppPicker();

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(160deg,var(--color-azul-acero)_0%,var(--color-azul-acero-dark)_55%,var(--color-grafito)_100%)] pt-[100px] pb-[70px] sm:pt-[120px] sm:pb-[90px]"
      id="top"
    >
      <div
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(90,169,201,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(90,169,201,0.14)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:radial-gradient(ellipse_80%_60%_at_60%_20%,black_40%,transparent_90%)] [-webkit-mask-image:radial-gradient(ellipse_80%_60%_at_60%_20%,black_40%,transparent_90%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-[120px] -right-20 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(90,169,201,0.35)_0%,transparent_70%)] blur-[10px]"
        aria-hidden="true"
      />

      <div className="wrap relative z-[2] max-w-[700px]">
        <span className="eyebrow mb-[22px] block">
          Instalación · Reparación · Service técnico
        </span>

        <h1 className="mb-[22px] text-[clamp(2.4rem,5.2vw,3.6rem)] font-bold text-white">
          Frío que funciona,
          <br />
          cuando lo necesitás.
        </h1>

        <p className="mb-9 max-w-[540px] text-[1.12rem] leading-relaxed text-azul-hielo-light">
          Instalamos y reparamos aires acondicionados, heladeras y lavarropas en{" "}
          {CONTACT.zona}. Presupuesto sin cargo, directo por WhatsApp.
        </p>

        <div className="mb-14 flex flex-wrap gap-3.5">
          <button
            type="button"
            onClick={() => openPicker(CONTACT.mensajePresupuesto)}
            className="btn btn-primary max-sm:px-5 max-sm:py-3.5 max-sm:text-[0.92rem]"
          >
            <WhatsAppIcon size={20} />
            Pedir presupuesto ahora
          </button>
          <a
            href="#servicios"
            className="btn btn-ghost max-sm:px-5 max-sm:py-3.5 max-sm:text-[0.92rem]"
          >
            Ver servicios
          </a>
        </div>

        <div className="flex items-center gap-7 border-t border-white/14 pt-7 max-[640px]:flex-wrap max-[640px]:gap-[18px]">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[1.3rem] font-semibold text-white">
              +40
            </span>
            <span className="text-[0.8rem] text-azul-hielo-light">
              Años de experiencia
            </span>
          </div>
          <div className="h-8 w-px bg-white/16" />
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[1.3rem] font-semibold text-white">
              $0
            </span>
            <span className="text-[0.8rem] text-azul-hielo-light">
              Costo del presupuesto
            </span>
          </div>
          <div className="h-8 w-px bg-white/16" />
        </div>
      </div>
    </section>
  );
}
