import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, CONTACT, WHATSAPP_NUMBER } from "../config";

const displayNumber = "+" + WHATSAPP_NUMBER.replace(/(\d{2})(\d{2,4})(\d{4})(\d{4})/, "$1 $2 $3-$4");

export default function Footer() {
  return (
    <footer className="bg-azul-acero-dark py-12 pb-8">
      <div className="wrap flex flex-col gap-6">
        <div>
          <Logo variant="light" />
          <p className="mt-2.5 text-[0.88rem] text-azul-hielo-light">{CONTACT.zona}</p>
        </div>

        <div>
          <a
            href={waLink(CONTACT.mensajeConsulta)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-t border-white/12 pt-5 font-mono text-[0.92rem] font-medium text-white transition-colors hover:text-verde-wpp"
          >
            <WhatsAppIcon size={18} />
            {displayNumber}
          </a>
        </div>

        <p className="border-t border-white/12 pt-5 text-[0.78rem] text-white/50">
          © {new Date().getFullYear()} Coria Refrigeración. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
