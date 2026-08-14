import { waLink } from "../config";

const SERVICES = [
  {
    icon: "aire",
    title: "Aires acondicionados",
    desc: "Instalación, mantenimiento y reparación de equipos split e inverter.",
    msg: "Hola! Quiero consultar sobre instalación/reparación de aire acondicionado.",
  },
  {
    icon: "heladera",
    title: "Heladeras y freezers",
    desc: "Diagnóstico y reparación de heladeras, freezers y equipos de frío comercial.",
    msg: "Hola! Quiero consultar sobre reparación de heladera o freezer.",
  },
  {
    icon: "lavarropas",
    title: "Lavarropas",
    desc: "Service técnico de lavarropas: fugas, ruidos, no centrifuga, no calienta.",
    msg: "Hola! Quiero consultar sobre reparación de lavarropas.",
  },
];

function Icon({ name }) {
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
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
  return (
    <section className="services" id="servicios">
      <div className="container">
        <span className="eyebrow">Qué hacemos</span>
        <h2 className="services-title">Un técnico, todas las soluciones de frío y lavado</h2>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">
                <Icon name={s.icon} />
              </div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <a href={waLink(s.msg)} target="_blank" rel="noopener noreferrer" className="service-link">
                Consultar →
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services {
          padding: 96px 0;
        }
        .services-title {
          font-size: clamp(1.7rem, 3.4vw, 2.3rem);
          color: var(--grafito);
          margin: 14px 0 48px;
          max-width: 640px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .service-card {
          background: white;
          border: 1px solid var(--linea);
          border-radius: var(--radius);
          padding: 28px 24px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(11, 61, 92, 0.1);
          border-color: var(--azul-hielo);
        }
        .service-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: var(--azul-acero);
          color: var(--azul-hielo-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .service-name {
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        .service-desc {
          font-size: 0.9rem;
          color: #4A5568;
          line-height: 1.5;
          margin-bottom: 18px;
        }
        .service-link {
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--azul-acero);
        }
        .service-link:hover {
          color: var(--verde-wpp-dark);
        }
        @media (max-width: 980px) {
          .services-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .services { padding: 64px 0; }
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
