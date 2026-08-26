// Shared layout helpers for the Ausome Heroes website kit.
const A = 'assets';

function Section({ tone = 'cream', children, style, id }) {
  const bg = { cream: 'var(--surface-page)', card: 'var(--surface-raised)', sky: 'var(--surface-sky)', gold: 'var(--surface-gold-soft)', dawn: 'var(--gradient-dawn)' }[tone];
  return (
    <section id={id} className="ah-section" style={{ background: bg, ...style }}>
      <div className="ah-container">{children}</div>
    </section>
  );
}

function SectionHead({ eyebrow, title, lead, align = 'center' }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? 720 : 'none', margin: align === 'center' ? '0 auto var(--space-12)' : '0 0 var(--space-10)' }}>
      {eyebrow ? <p style={{ margin: '0 0 var(--space-2)', color: 'var(--gold-700)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-label)' }}>{eyebrow}</p> : null}
      <h2 style={{ margin: 0 }}>{title}</h2>
      {lead ? <p style={{ margin: 'var(--space-4) auto 0', color: 'var(--text-body)', fontSize: 'var(--text-lg)', maxWidth: '56ch' }}>{lead}</p> : null}
    </div>
  );
}

function PageHeader({ title, lead, breadcrumb }) {
  const { Breadcrumb } = window.AusomeHeroesDesignSystem_0fb09e;
  return (
    <section style={{ background: 'var(--gradient-dawn)', padding: 'var(--space-16) 0 var(--space-16)' }}>
      <div className="ah-container">
        {breadcrumb ? <div style={{ marginBottom: 'var(--space-6)' }}><Breadcrumb items={breadcrumb} /></div> : null}
        <h1 style={{ margin: 0, maxWidth: '18ch' }}>{title}</h1>
        {lead ? <p style={{ marginTop: 'var(--space-5)', fontSize: 'var(--text-xl)', maxWidth: '52ch' }}>{lead}</p> : null}
      </div>
    </section>
  );
}

function RoomPhoto({ label = 'Photo of the room', note, ratio = '4 / 3', style }) {
  const { Icon } = window.AusomeHeroesDesignSystem_0fb09e;
  return (
    <div style={{
      aspectRatio: ratio, background: 'var(--surface-sky)', border: '1.5px dashed var(--sky-400)',
      borderRadius: 'var(--radius-xl)', display: 'grid', placeItems: 'center', textAlign: 'center',
      padding: 'var(--space-6)', ...style,
    }}>
      <div>
        <Icon name="image" size={30} color="var(--sky-600)" />
        <p style={{ margin: 'var(--space-3) 0 0', fontWeight: 'var(--weight-bold)', color: 'var(--sky-800)' }}>{label}</p>
        {note ? <p style={{ margin: '2px 0 0', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', maxWidth: '32ch' }}>{note}</p> : null}
      </div>
    </div>
  );
}

Object.assign(window, { A, Section, SectionHead, PageHeader, RoomPhoto });
