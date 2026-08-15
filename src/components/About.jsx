import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, CONTACT } from "../config";

export default function About() {
  return (
    <section className="border-y border-azul-acero/12 bg-white py-16 sm:py-24" id="nosotros">
      <div className="wrap grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">Quiénes somos</span>
          <h2 className="my-3.5 mb-[22px] text-[clamp(1.7rem,3.2vw,2.2rem)]">Trabajo técnico serio, sin vueltas</h2>
          <p className="mb-4 max-w-[520px] text-[1rem] leading-[1.7] text-[#4A5568]">
            Con más de 40 años de trayectoria, en Coria Refrigeración brindamos
            soluciones integrales en refrigeración y climatización en{" "}
            {CONTACT.zona}, especializándonos en la instalación y reparación de
            aires acondicionados, heladeras y lavarropas, así como en el diseño
            y construcción de cámaras frigoríficas desde cero, adaptadas a las
            necesidades de cada proyecto. Realizamos diagnósticos precisos para
            identificar el problema real, te explicamos qué necesita tu equipo y
            llevamos a cabo cada trabajo con repuestos adecuados y mano de obra
            especializada.
          </p>
          <p className="mb-4 max-w-[520px] text-[1rem] leading-[1.7] text-[#4A5568]">
            Nada de esperas eternas ni presupuestos inflados: coordinamos la
            visita por WhatsApp y te confirmamos el costo antes de mover un
            tornillo.
          </p>

          <div className="mt-7">
            <a
              href={waLink(CONTACT.mensajeConsulta)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <WhatsAppIcon size={19} />
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-grafito px-7 py-2">
          <div className="flex flex-col gap-1 border-b border-white/10 py-[22px]">
            <span className="font-mono text-[0.72rem] tracking-[0.06em] text-azul-hielo uppercase">Zona de cobertura</span>
            <span className="text-[1rem] font-medium text-white">{CONTACT.zona}</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-white/10 py-[22px]">
            <span className="font-mono text-[0.72rem] tracking-[0.06em] text-azul-hielo uppercase">Presupuesto</span>
            <span className="text-[1rem] font-medium text-white">Sin cargo, por WhatsApp</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-white/10 py-[22px]">
            <span className="font-mono text-[0.72rem] tracking-[0.06em] text-azul-hielo uppercase">Calidad</span>
            <span className="text-[1rem] font-medium text-white">Asegurada en cada trabajo</span>
          </div>
          <div className="flex flex-col gap-1 py-[22px]">
            <span className="font-mono text-[0.72rem] tracking-[0.06em] text-azul-hielo uppercase">Experiencia</span>
            <span className="text-[1rem] font-medium text-white">+40 años en el rubro</span>
          </div>
        </div>
      </div>
    </section>
  );
}
