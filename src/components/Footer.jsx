import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, CONTACT, WHATSAPP_NUMBER } from "../config";

const displayNumber = "+" + WHATSAPP_NUMBER.replace(/(\d{2})(\d{2,4})(\d{4})(\d{4})/, "$1 $2 $3-$4");

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo variant="light" />
          <p className="footer-zone">{CONTACT.zona}</p>
        </div>

        <div className="footer-contact">
          <a href={waLink(CONTACT.mensajeConsulta)} target="_blank" rel="noopener noreferrer" className="footer-wa">
            <WhatsAppIcon size={18} />
            {displayNumber}
          </a>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} Coria Refrigeración. Todos los derechos reservados.</p>
      </div>

      <style>{`
        .footer {
          background: var(--azul-acero-dark);
          padding: 48px 0 32px;
        }
        .footer-inner {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .footer-zone {
          color: var(--azul-hielo-light);
          font-size: 0.88rem;
          margin-top: 10px;
        }
        .footer-wa {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-family: var(--font-mono);
          font-size: 0.92rem;
          font-weight: 500;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .footer-wa:hover {
          color: var(--verde-wpp);
        }
        .footer-copy {
          color: rgba(255,255,255,0.5);
          font-size: 0.78rem;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
      `}</style>
    </footer>
  );
}
