// Configuración central del sitio. Editá acá los datos de contacto y textos clave.

export const WHATSAPP_NUMBER_TITI = "541131515365"; // formato internacional sin "+"
export const WHATSAPP_NUMBER_COCO = "541121737187"; // formato internacional sin "+"
export const WHATSAPP_NUMBER_PABLO = "541127558364"; // formato internacional sin "+"
export const WHATSAPP_NUMBER_ADRIAN = "541168858103"; // formato internacional sin "+"

// Lista de contactos disponibles para elegir a la hora de escribir por WhatsApp.
// El selector de contacto se arma automáticamente a partir de este array:
// para sumar o sacar a alguien, alcanza con editar esta lista.
export const CONTACTS = [
  { name: "Titi", number: WHATSAPP_NUMBER_TITI },
  { name: "Coco", number: WHATSAPP_NUMBER_COCO },
  { name: "Pablo", number: WHATSAPP_NUMBER_PABLO },
  { name: "Adrian", number: WHATSAPP_NUMBER_ADRIAN },
];

export function waLink(message, number) {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const CONTACT = {
  zona: "CABA, GBA Norte, Zona Sur y alrededores",
  mensajePresupuesto: "Hola! Quisiera pedir un presupuesto para: ",
  mensajeConsulta:
    "Hola! Buenas, quisiera hacer una consulta sobre sus servicios.",
};
