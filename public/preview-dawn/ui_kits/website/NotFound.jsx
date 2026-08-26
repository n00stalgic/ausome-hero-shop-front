function AHNotFound() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const { Button, Card, Icon, Input } = DS;
  const [told, setTold] = React.useState(false);
  const badPath = '/hero-spotlight/nominate';
  const guesses = [
    ['badge-check', 'Ausome IDs', 'This moved. Nominating is now the child filling in five questions themselves.', 'Ausome IDs'],
    ['volume-2', 'Rooms', 'Every event with its measured sound, light, crowd and quiet-room status.', 'Rooms'],
    ['hand-helping', 'Volunteer', 'Pick one shift. Two fields.', 'Volunteer'],
  ];
  return (
    <section style={{ background: 'var(--gradient-dawn)', padding: 'var(--space-20) var(--gutter)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <Icon name="feather" size={52} color="var(--gold-500)" />
        <h1 style={{ marginTop: 'var(--space-5)' }}>That page moved, and we should have redirected you</h1>
        <p style={{ fontSize: 'var(--text-xl)' }}>
          You asked for <code style={{ background: 'var(--cream-200)', padding: '3px 8px', borderRadius: 6 }}>{badPath}</code>. That was a real page until January. It is our broken link, not your mistake.
        </p>

        <h2 style={{ fontSize: 'var(--text-2xl)', marginTop: 'var(--space-10)' }}>Where it went</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {guesses.map(([icon, title, why, page]) => (
            <Card key={title} interactive padding="md" onClick={() => window.AHGo(page)}
              style={{ cursor: 'pointer', display: 'grid', gridTemplateColumns: '44px 1fr 24px', gap: 'var(--space-4)', alignItems: 'center' }}>
              <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-pill)', background: 'var(--surface-sky)', display: 'grid', placeItems: 'center' }}>
                <Icon name={icon} size={22} color="var(--sky-700)" />
              </span>
              <span>
                <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-heading)' }}>{title}</strong>
                <span style={{ color: 'var(--text-muted)' }}>{why}</span>
              </span>
              <Icon name="arrow-right" size={20} color="var(--cocoa-300)" />
            </Card>
          ))}
        </div>

        <Card tone="sky" padding="lg" style={{ marginTop: 'var(--space-10)' }}>
          {told ? (
            <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
              <Icon name="circle-check" size={26} color="var(--meadow-600)" />
              <p style={{ margin: 0 }}>Logged, with the link that sent you here. Broken links get fixed on Fridays and the fix shows up in <button onClick={() => window.AHGo('The log')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-link)', fontWeight: 700, fontFamily: 'var(--font-body)', fontSize: 'inherit' }}>the log</button>.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setTold(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div>
                <h3 style={{ margin: '0 0 4px' }}>None of those? Tell us in one line.</h3>
                <p style={{ margin: 0 }}>It goes on a list a person reads, not into an analytics dashboard.</p>
              </div>
              <Input label="What were you looking for?" placeholder="e.g. the February Chuck E. Cheese details" />
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <Button type="submit">Send it</Button>
                <Button variant="quiet" onClick={() => window.AHGo('Home')}>Just take me home</Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
Object.assign(window, { AHNotFound });
