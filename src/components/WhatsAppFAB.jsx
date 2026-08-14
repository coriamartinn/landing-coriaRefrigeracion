import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, CONTACT } from "../config";

export default function WhatsAppFAB() {
  return (
    <a
      href={waLink(CONTACT.mensajeConsulta)}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Contactar por WhatsApp"
    >
      <span className="wa-fab-ping" aria-hidden="true" />
      <WhatsAppIcon size={26} />

      <style>{`
        .wa-fab {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: var(--verde-wpp);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
          z-index: 60;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .wa-fab:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 12px 28px rgba(37, 211, 102, 0.55);
        }
        .wa-fab-ping {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: var(--verde-wpp);
          opacity: 0.55;
          animation: wa-pulse 2.2s ease-out infinite;
        }
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-fab-ping { animation: none; display: none; }
        }
        @media (max-width: 640px) {
          .wa-fab {
            width: 52px;
            height: 52px;
            right: 14px;
            bottom: 14px;
          }
        }
      `}</style>
    </a>
  );
}
