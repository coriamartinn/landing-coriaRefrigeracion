import WhatsAppIcon from "./WhatsAppIcon";
import { useWhatsAppPicker } from "./WhatsAppPickerContext";

const FEATURES = [
  {
    icon: "camara",
    title: "Cámaras frigoríficas",
    desc: "Diseño, instalación y mantenimiento de cámaras de frío para comercios y depósitos.",
  },
  {
    icon: "comercial",
    title: "Refrigeración comercial",
    desc: "Vidrieras frías, exhibidoras y equipos de frío para gastronomía y retail.",
  },
  {
    icon: "mantenimiento",
    title: "Mantenimiento programado",
    desc: "Planes de mantenimiento preventivo para sistemas de gran escala.",
  },
];

function FeatureIcon({ name }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "camara":
      return (
        <svg {...common}>
          <rect x="2" y="5" width="20" height="15" rx="1.5" />
          <path d="M2 10h20" />
          <path d="M12 5v15" />
          <path d="M8 13l1.5 1.5L8 16M16 13l-1.5 1.5L16 16" />
        </svg>
      );
    case "comercial":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="12" rx="1.5" />
          <path d="M3 12h18" />
          <path d="M7 7V5a1 1 0 011-1h8a1 1 0 011 1v2" />
        </svg>
      );
    case "mantenimiento":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.5 1.5M7.1 16.9l-1.5 1.5M18.4 18.4l-1.5-1.5M7.1 7.1L5.6 5.6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ColdSystems() {
  const { openPicker } = useWhatsAppPicker();

  return (
    <section className="relative overflow-hidden bg-azul-acero-dark py-16 sm:py-[90px]">
      <div
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(90,169,201,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(90,169,201,0.12)_1px,transparent_1px)] [background-size:38px_38px] [mask-image:radial-gradient(ellipse_70%_90%_at_0%_50%,black_30%,transparent_85%)] [-webkit-mask-image:radial-gradient(ellipse_70%_90%_at_0%_50%,black_30%,transparent_85%)]"
        aria-hidden="true"
      />
      <div className="wrap relative z-[2] grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <span className="eyebrow mb-4 block">Instalaciones a gran escala</span>
          <h2 className="mb-[18px] max-w-[480px] text-[clamp(1.6rem,3.4vw,2.3rem)] text-white">
            Cámaras frigoríficas y sistemas de frío industrial
          </h2>
          <p className="mb-[30px] max-w-[460px] text-[1rem] leading-[1.65] text-azul-hielo-light">
            No solo trabajamos en casas: diseñamos e instalamos sistemas de
            refrigeración para comercios, depósitos e industria. Si tu proyecto
            necesita un equipo grande, lo armamos a medida.
          </p>
          <button
            type="button"
            onClick={() =>
              openPicker(
                "Hola! Quiero consultar por un proyecto de refrigeración industrial / cámara frigorífica."
              )
            }
            className="btn btn-primary"
          >
            <WhatsAppIcon size={20} />
            Consultar por un proyecto
          </button>
        </div>

        <div className="flex flex-col gap-[22px] rounded-2xl border border-white/10 bg-white/[0.04] p-[22px] sm:p-7">
          {FEATURES.map((f) => (
            <div className="flex items-start gap-4" key={f.title}>
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-azul-hielo/16 text-azul-hielo">
                <FeatureIcon name={f.icon} />
              </div>
              <div>
                <h3 className="mb-1 text-[1rem] text-white">{f.title}</h3>
                <p className="text-[0.86rem] leading-relaxed text-[#9FB4C4]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
