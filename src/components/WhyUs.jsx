const POINTS = [
  {
    title: "Presupuesto sin cargo",
    desc: "Te decimos el costo antes de arrancar. Sin sorpresas en la factura.",
  },
  {
    title: "Garantía y Calidad asegurada",
    desc: "Cada reparación sale con garantía sobre el trabajo realizado.",
  },
  {
    title: "+40 años de trayectoria",
    desc: "Décadas de experiencia instalando y reparando equipos de frío y lavado.",
  },
  {
    title: "Zona amplia",
    desc: "Cobrimos CABA, GBA Norte, Zona Sur y alrededores.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-grafito py-16 sm:py-[90px]">
      <div className="wrap">
        <span className="eyebrow mb-8 block">Por qué elegirnos</span>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <div className="border-t border-white/14 pt-5" key={p.title}>
              <span className="font-mono text-[0.85rem] font-semibold text-azul-hielo">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="my-2.5 mt-2.5 mb-2 text-[1.08rem] text-white">{p.title}</h3>
              <p className="text-[0.9rem] leading-[1.55] text-[#A8B3C2]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
