import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, CONTACT } from "../config";

export default function WhatsAppFAB() {
  return (
    <a
      href={waLink(CONTACT.mensajeConsulta)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-[60] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-verde-wpp text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition duration-200 hover:-translate-y-[3px] hover:scale-[1.04] hover:shadow-[0_12px_28px_rgba(37,211,102,0.55)] sm:right-5 sm:bottom-5 md:h-[58px] md:w-[58px]"
      aria-label="Contactar por WhatsApp"
    >
      <span
        className="absolute inset-0 rounded-full bg-verde-wpp opacity-55 animate-wa-pulse motion-reduce:hidden motion-reduce:animate-none"
        aria-hidden="true"
      />
      <WhatsAppIcon size={26} />
    </a>
  );
}
