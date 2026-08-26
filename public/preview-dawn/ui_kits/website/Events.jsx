function AHEvents() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const { Card, Button, Icon, SensoryProfile, Badge, Tag } = DS;
  const events = window.AH_EVENTS || [];
  const [quietOnly, setQuietOnly] = React.useState(false);
  const [maxSound, setMaxSound] = React.useState(3);
  const shown = events.filter((e) => e.axes[0].level <= maxSound && (!quietOnly || e.facts[0].yes));

  return (
    <React.Fragment>
      <window.PageHeader title="Every room, measured"
        lead="We visit each venue before we publish it and record the same six things. Nothing here is described as magical, unforgettable or life-changing — it is described accurately."
        breadcrumb={[{ label: 'Home', href: '#' }, { label: 'Rooms' }]} />

      <window.Section tone="card">
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-8)', alignItems: 'center' }}>
          <span style={{ fontWeight: 700, color: 'var(--text-heading)' }}>Show me</span>
          {[[1, 'Quiet rooms only'], [2, 'Up to medium'], [3, 'Any volume']].map(([lvl, label]) => (
            <Tag key={label} selected={maxSound === lvl} onClick={() => setMaxSound(lvl)}>{label}</Tag>
          ))}
          <Tag icon="headphones" selected={quietOnly} onClick={() => setQuietOnly(!quietOnly)}>With a quiet room</Tag>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {shown.map((e) => (
            <Card key={e.id} padding="none" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', alignItems: 'stretch' }} className="ah-room-row">
              <div style={{ padding: 'var(--space-6) 0 var(--space-6) var(--space-6)' }}>
                <window.RoomPhoto label="Photo of the room" note="Taken on the measuring visit — not the venue's poster." ratio="16 / 10" style={{ maxHeight: 220 }} />
              </div>
              <div style={{ padding: 'var(--space-6)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 'var(--text-2xl)' }}>{e.title}</h3>
                    <p style={{ margin: '4px 0 0', color: 'var(--text-muted)' }}>{e.venue} · {e.date} · {e.time}</p>
                  </div>
                  <Badge tone={e.give.startsWith('Free') ? 'meadow' : 'gold'}>{e.give}</Badge>
                </div>
                <SensoryProfile compact axes={e.axes} style={{ margin: 'var(--space-5) 0' }} />
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {e.facts.map((f) => (
                    <li key={f.label} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 'var(--text-base)' }}>
                      <Icon name={f.yes ? 'circle-check' : 'circle-alert'} size={18} color={f.yes ? 'var(--meadow-600)' : 'var(--cape-600)'} style={{ marginTop: 3 }} />
                      <span><strong style={{ color: 'var(--text-heading)' }}>{f.label}</strong> — {f.note}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)', flexWrap: 'wrap' }}>
                  <Button onClick={() => window.AHGoEvent(e.id)}>See the whole room</Button>
                  <Button variant="secondary" icon="mic" onClick={() => window.AHGo('Kid mode')}>Kid's version</Button>
                </div>
              </div>
            </Card>
          ))}
          {!shown.length ? (
            <Card tone="plain" padding="lg" style={{ textAlign: 'center' }}>
              <p style={{ margin: '0 auto' }}>Nothing matches that yet. We would rather show you an empty page than talk you into a loud room.</p>
            </Card>
          ) : null}
        </div>
      </window.Section>

      <window.Section tone="sky">
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2>Are you a venue?</h2>
          <p style={{ fontSize: 'var(--text-lg)' }}>
            The six measurements are a standard, not a review. We will come and take them for free, brief your staff on three rules, and publish the result — including the parts you cannot fix. Nine venues in LA have done it; four kept the quiet room permanently afterwards.
          </p>
          <Button size="lg" variant="secondary" onClick={() => window.AHToast({ tone: 'info', title: 'Venue form opens here.', description: 'Four questions and a date for the visit.' })}>Get your room measured</Button>
        </div>
      </window.Section>
    </React.Fragment>
  );
}
Object.assign(window, { AHEvents });
