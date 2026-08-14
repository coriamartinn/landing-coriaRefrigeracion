import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, CONTACT } from "../config";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" aria-label="Ir al inicio">
          <Logo variant="dark" />
        </a>

        <nav className="nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a
          href={waLink(CONTACT.mensajePresupuesto)}
          target="_blank"
          rel="noopener noreferrer"
          className="header-cta"
        >
          <WhatsAppIcon size={18} />
          Pedir presupuesto
        </a>
      </div>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(244, 247, 250, 0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--linea);
        }
        .header-inner {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .nav {
          display: flex;
          gap: 28px;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--grafito);
        }
        .nav a {
          position: relative;
          padding: 4px 0;
        }
        .nav a:hover {
          color: var(--azul-acero);
        }
        .header-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--verde-wpp);
          color: white;
          font-weight: 600;
          font-size: 0.88rem;
          padding: 10px 18px;
          border-radius: 999px;
          white-space: nowrap;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .header-cta:hover {
          background: var(--verde-wpp-dark);
          transform: translateY(-1px);
        }
        @media (max-width: 780px) {
          .nav { display: none; }
          .header-cta span { display: none; }
        }
        @media (max-width: 480px) {
          .header-cta {
            padding: 10px 12px;
          }
        }
      `}</style>
    </header>
  );
}
