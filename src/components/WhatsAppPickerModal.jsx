import { useEffect } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, CONTACTS } from "../config";

function displayNumber(number) {
  return (
    "+" + number.replace(/(\d{2})(\d{2,4})(\d{4})(\d{4})/, "$1 $2 $3-$4")
  );
}

export default function WhatsAppPickerModal({ open, message, onClose }) {
  // Cierra con la tecla Escape y bloquea el scroll de fondo mientras está abierto.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-grafito/60 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wa-picker-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[420px] rounded-t-2xl bg-white p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.25)] sm:rounded-2xl sm:p-7 sm:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <span className="eyebrow">Elegí con quién hablar</span>
            <h3
              id="wa-picker-title"
              className="mt-2 text-[1.2rem] text-grafito"
            >
              ¿A quién le escribís?
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#4A5568] transition-colors hover:bg-azul-acero/10 hover:text-grafito"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          {CONTACTS.map((c) => (
            <a
              key={c.number}
              href={waLink(message, c.number)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center gap-3.5 rounded-brand border border-azul-acero/12 px-4 py-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-verde-wpp hover:bg-verde-wpp/5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-verde-wpp/12 text-verde-wpp-dark">
                <WhatsAppIcon size={20} />
              </span>
              <span className="flex flex-col">
                <span className="text-[0.98rem] font-semibold text-grafito">
                  {c.name}
                </span>
                <span className="font-mono text-[0.8rem] text-[#4A5568]">
                  {displayNumber(c.number)}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
