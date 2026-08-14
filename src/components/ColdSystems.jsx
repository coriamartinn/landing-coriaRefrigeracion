import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, CONTACT } from "../config";

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
  return (
    <section className="coldsys">
      <div className="coldsys-grid-bg" aria-hidden="true" />
      <div className="container coldsys-inner">
        <div className="coldsys-copy">
          <span className="eyebrow coldsys-eyebrow">Instalaciones a gran escala</span>
          <h2 className="coldsys-title">
            Cámaras frigoríficas y sistemas de frío industrial
          </h2>
          <p className="coldsys-text">
            No solo trabajamos en casas: diseñamos e instalamos sistemas de
            refrigeración para comercios, depósitos e industria. Si tu proyecto
            necesita un equipo grande, lo armamos a medida.
          </p>
          <a
            href={waLink("Hola! Quiero consultar por un proyecto de refrigeración industrial / cámara frigorífica.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary coldsys-cta"
          >
            <WhatsAppIcon size={20} />
            Consultar por un proyecto
          </a>
        </div>

        <div className="coldsys-features">
          {FEATURES.map((f) => (
            <div className="coldsys-feature" key={f.title}>
              <div className="coldsys-feature-icon">
                <FeatureIcon name={f.icon} />
              </div>
              <div>
                <h3 className="coldsys-feature-title">{f.title}</h3>
                <p className="coldsys-feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .coldsys {
          position: relative;
          overflow: hidden;
          background: var(--azul-acero-dark);
          padding: 90px 0;
        }
        .coldsys-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(90, 169, 201, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(90, 169, 201, 0.12) 1px, transparent 1px);
          background-size: 38px 38px;
          -webkit-mask-image: radial-gradient(ellipse 70% 90% at 0% 50%, black 30%, transparent 85%);
          mask-image: radial-gradient(ellipse 70% 90% at 0% 50%, black 30%, transparent 85%);
        }
        .coldsys-inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .coldsys-eyebrow {
          display: block;
          margin-bottom: 16px;
        }
        .coldsys-title {
          color: white;
          font-size: clamp(1.6rem, 3.4vw, 2.3rem);
          margin-bottom: 18px;
          max-width: 480px;
        }
        .coldsys-text {
          color: var(--azul-hielo-light);
          font-size: 1rem;
          line-height: 1.65;
          max-width: 460px;
          margin-bottom: 30px;
        }
        .coldsys-features {
          display: flex;
          flex-direction: column;
          gap: 22px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 28px;
        }
        .coldsys-feature {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .coldsys-feature-icon {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(90, 169, 201, 0.16);
          color: var(--azul-hielo);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .coldsys-feature-title {
          color: white;
          font-size: 1rem;
          margin-bottom: 4px;
        }
        .coldsys-feature-desc {
          color: #9FB4C4;
          font-size: 0.86rem;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .coldsys-inner { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 560px) {
          .coldsys { padding: 64px 0; }
          .coldsys-features { padding: 22px; }
        }
      `}</style>
    </section>
  );
}
