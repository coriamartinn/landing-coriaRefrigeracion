// Configuración central del sitio. Editá acá los datos de contacto y textos clave.

export const WHATSAPP_NUMBER = "541131515365"; // formato internacional sin "+"

export function waLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const CONTACT = {
  zona: "CABA, GBA Norte, Zona Sur y alrededores",
  mensajePresupuesto: "Hola! Quiero pedir un presupuesto para mi equipo.",
  mensajeConsulta: "Hola! Tengo una consulta sobre sus servicios.",
};
