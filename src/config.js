// Configuración central del sitio. Editá acá los datos de contacto y textos clave.

export const WHATSAPP_NUMBER_TITI = "541131515365"; // formato internacional sin "+"
export const WHATSAPP_NUMBER_COCO = "541121737187"; // formato internacional sin "+"
//export const WHATSAPP_NUMBER_PABLO = "541131515365"; // formato internacional sin "+"
//export const WHATSAPP_NUMBER_ADRIAN = "541131515365"; // formato internacional sin "+"

export function waLink(message, WHATSAPP_NUMBER) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const CONTACT = {
  zona: "CABA, GBA Norte, Zona Sur y alrededores",
  mensajePresupuesto: "Hola! Quisiera pedir un presupuesto para: ",
  mensajeConsulta:
    "Hola! Buenas, quisiera hacer una consulta sobre sus servicios.",
};
