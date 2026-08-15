import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, CONTACT } from "../config";

export default function CTABand() {
  return (
    <section
      className="bg-[linear-gradient(120deg,var(--color-verde-wpp-dark),var(--color-verde-wpp))] py-12 sm:py-16"
      id="contacto"
    >
      <div className="wrap flex flex-wrap items-center justify-between gap-8">
        <div>
          <h2 className="mb-2 text-[clamp(1.5rem,3vw,2rem)] text-white">¿Necesitás presupuesto ya?</h2>
          <p className="text-[1rem] text-white/90">
            Contanos qué equipo tenés y te respondemos por WhatsApp en el momento.
          </p>
        </div>
        <a
          href={waLink(CONTACT.mensajePresupuesto)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-[17px] font-bold whitespace-nowrap text-verde-wpp-dark shadow-[0_10px_26px_rgba(0,0,0,0.18)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.22)]"
        >
          <WhatsAppIcon size={22} />
          Pedir presupuesto por WhatsApp
        </a>
      </div>
    </section>
  );
}
