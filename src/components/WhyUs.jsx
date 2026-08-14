const POINTS = [
  {
    title: "Presupuesto sin cargo",
    desc: "Te decimos el costo antes de arrancar. Sin sorpresas en la factura.",
  },
  {
    title: "Garantía por escrito",
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
    <section className="whyus">
      <div className="container">
        <span className="eyebrow">Por qué elegirnos</span>
        <div className="whyus-grid">
          {POINTS.map((p, i) => (
            <div className="whyus-item" key={p.title}>
              <span className="whyus-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="whyus-title">{p.title}</h3>
              <p className="whyus-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .whyus {
          background: var(--grafito);
          padding: 90px 0;
        }
        .whyus .eyebrow {
          display: block;
          margin-bottom: 32px;
        }
        .whyus-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .whyus-item {
          border-top: 1px solid rgba(255,255,255,0.14);
          padding-top: 20px;
        }
        .whyus-num {
          font-family: var(--font-mono);
          color: var(--azul-hielo);
          font-size: 0.85rem;
          font-weight: 600;
        }
        .whyus-title {
          color: white;
          font-size: 1.08rem;
          margin: 10px 0 8px;
        }
        .whyus-desc {
          color: #A8B3C2;
          font-size: 0.9rem;
          line-height: 1.55;
        }
        @media (max-width: 900px) {
          .whyus-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .whyus { padding: 64px 0; }
          .whyus-grid { grid-template-columns: 1fr; gap: 24px; }
        }
      `}</style>
    </section>
  );
}
