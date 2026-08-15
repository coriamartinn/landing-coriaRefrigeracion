import { useWhatsAppPicker } from "./WhatsAppPickerContext";

const SERVICES = [
  {
    icon: "aire",
    title: "Aires acondicionados",
    desc: "Instalación, mantenimiento y reparación de equipos split, ventana y portátiles.",
    msg: "Hola! Quiero consultar sobre instalación/reparación de aire acondicionado.",
  },
  {
    icon: "heladera",
    title: "Heladeras y freezers",
    desc: "Diagnóstico y reparación de heladeras, freezers y equipos de frío comercial.",
    msg: "Hola! Quiero consultar sobre reparación de heladera o freezer.",
  },
  {
    icon: "camara",
    title: "Cámaras frigoríficas",
    desc: "Diagnóstico y reparación de cámaras frigoríficas y equipos de frío comercial y/o diseño de cámaras frigoríficas a medida desde cero.",
    msg: "Hola! Quiero consultar sobre reparación de cámara frigorífica.",
  },
  {
    icon: "lavarropas",
    title: "Lavarropas",
    desc: "Service técnico de lavarropas: fugas, ruidos, no centrifuga, no calienta.",
    msg: "Hola! Quiero consultar sobre reparación de lavarropas.",
  },
];

function Icon({ name }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "aire":
      return (
        <svg {...common}>
          <rect x="2" y="6" width="20" height="7" rx="2" />
          <path d="M6 13v2M10 13v3M14 13v2M18 13v3" />
        </svg>
      );
    case "heladera":
      return (
        <svg {...common}>
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="5" y1="10" x2="19" y2="10" />
          <line x1="8" y1="5" x2="8" y2="7" />
          <line x1="8" y1="13" x2="8" y2="15" />
        </svg>
      );
    case "camara":
      return (
        <svg {...common}>
          <rect x="2" y="5" width="20" height="15" rx="1.5" />
          <path d="M2 10h20" />
          <path d="M12 5v15" />
          <path d="M8 13l1.5 1.5L8 16M16 13l-1.5 1.5L16 16" />
        </svg>
      );
    case "lavarropas":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="12" cy="13" r="5" />
          <circle cx="7" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="10" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  const { openPicker } = useWhatsAppPicker();

  return (
    <section className="py-16 sm:py-24" id="servicios">
      <div className="wrap">
        <span className="eyebrow">Qué hacemos</span>
        <h2 className="mt-3.5 mb-12 max-w-[640px] text-[clamp(1.7rem,3.4vw,2.3rem)] text-grafito">
          Un técnico, todas las soluciones de frío y lavado
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              className="rounded-brand border border-azul-acero/12 bg-white p-6 px-6 py-7 transition duration-200 hover:-translate-y-1 hover:border-azul-hielo hover:shadow-[0_16px_32px_rgba(11,61,92,0.1)]"
              key={s.title}
            >
              <div className="mb-[18px] flex h-12 w-12 items-center justify-center rounded-[10px] bg-azul-acero text-azul-hielo-light">
                <Icon name={s.icon} />
              </div>
              <h3 className="mb-2 text-[1.1rem]">{s.title}</h3>
              <p className="mb-[18px] text-[0.9rem] leading-relaxed text-[#4A5568]">
                {s.desc}
              </p>
              <button
                type="button"
                onClick={() => openPicker(s.msg)}
                className="text-[0.86rem] font-semibold text-azul-acero transition-colors hover:text-verde-wpp-dark"
              >
                Consultar →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
