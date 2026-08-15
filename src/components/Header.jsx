import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, CONTACT } from "../config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-azul-acero/12 bg-blanco-frio/92 backdrop-blur-md">
      <div className="wrap flex h-[72px] items-center justify-between gap-6">
        <a href="#top" aria-label="Ir al inicio">
          <Logo variant="dark" />
        </a>

        <nav
          className="hidden gap-7 text-[0.92rem] font-medium text-grafito md:flex"
          aria-label="Navegación principal"
        >
          <a href="#servicios" className="relative py-1 transition-colors hover:text-azul-acero">
            Servicios
          </a>
          <a href="#nosotros" className="relative py-1 transition-colors hover:text-azul-acero">
            Nosotros
          </a>
          <a href="#contacto" className="relative py-1 transition-colors hover:text-azul-acero">
            Contacto
          </a>
        </nav>

        <a
          href={waLink(CONTACT.mensajePresupuesto)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-verde-wpp px-4.5 py-2.5 text-[0.88rem] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-verde-wpp-dark max-[480px]:px-3"
        >
          <WhatsAppIcon size={18} />
          <span className="hidden sm:inline">Pedir presupuesto</span>
        </a>
      </div>
    </header>
  );
}
