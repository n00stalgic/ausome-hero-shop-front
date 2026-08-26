function AHVolunteer() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const { Card, Icon, Button, Badge, Input, Toast } = DS;
  const [picked, setPicked] = React.useState(null);
  const [sent, setSent] = React.useState(false);

  const shifts = [
    { id: 's1', role: 'Door', date: 'Fri 27 Feb', time: '2:30–4:15 PM', venue: 'Chuck E. Cheese, Carson', slots: 1, with: 'Marisol', does: 'Stand at the side door, tick names off a list, hand out ear defenders. No small talk required.' },
    { id: 's2', role: 'Quiet-room cover', date: 'Fri 27 Feb', time: '3:00–4:00 PM', venue: 'Chuck E. Cheese, Carson', slots: 2, with: 'Dee', does: 'Sit in the quiet room. Say nothing unless spoken to. This is the easiest and most important job we have.' },
    { id: 's3', role: 'Set-up', date: 'Thu 26 Mar', time: '8:15–9:00 AM', venue: 'Apple Del Amo, Torrance', slots: 3, with: 'Allie', does: 'Move four tables, put out the signage, tape down two cables. Done before anyone arrives.' },
    { id: 's4', role: 'From home — printing', date: 'Any evening this week', time: 'About 40 minutes', venue: 'Your kitchen table', slots: 4, with: 'nobody', does: 'Print and fold thirty Ausome ID cards. We post you the card stock.' },
  ];

  if (sent) {
    const s = shifts.find((x) => x.id === picked);
    return (
      <React.Fragment>
        <window.PageHeader title="You're on the rota" lead={`${s.role} · ${s.date} · ${s.time}`} />
        <window.Section tone="card">
          <Card padding="lg" style={{ maxWidth: 660, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
            <Icon name="circle-check" size={38} color="var(--meadow-600)" />
            <h2 style={{ margin: 0 }}>That's the whole process</h2>
            <p style={{ margin: 0 }}>
              {s.with === 'nobody' ? 'The card stock goes in the post today.' : `${s.with} will text you the day before with where to stand and what she'll be wearing.`} You are paired with someone experienced the first time, always.
            </p>
            <p style={{ margin: 0 }}>
              If something comes up, reply to that text. Cancelling is completely fine and nobody will ask why — the same rule we give the families applies to you.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <Button variant="secondary" onClick={() => window.AHGo('Rooms')}>See the room I'll be in</Button>
              <Button variant="tertiary" onClick={() => { setSent(false); setPicked(null); }}>Take another shift</Button>
            </div>
          </Card>
        </window.Section>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <window.PageHeader title="Take one shift"
        lead="Not an application form. Pick a real slot on a real date, tell us your name and number, and you are on the rota. Two hours, once, is genuinely useful."
        breadcrumb={[{ label: 'Home', href: '#' }, { label: 'Volunteer' }]} />

      <window.Section tone="card">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {shifts.map((s) => {
            const on = picked === s.id;
            return (
              <Card key={s.id} padding="none" interactive onClick={() => setPicked(s.id)}
                style={{ cursor: 'pointer', display: 'grid', gridTemplateColumns: '150px 1fr auto', alignItems: 'stretch', borderColor: on ? 'var(--gold-500)' : undefined, borderWidth: on ? 2 : undefined }}
                className="ah-room-row">
                <div style={{ background: on ? 'var(--surface-gold-soft)' : 'var(--surface-sunken)', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-xl)', color: 'var(--text-heading)', lineHeight: 1.1 }}>{s.date}</span>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{s.time}</span>
                </div>
                <div style={{ padding: 'var(--space-6)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
                    <h3 style={{ margin: 0, fontSize: 'var(--text-2xl)' }}>{s.role}</h3>
                    <Badge tone={s.slots > 2 ? 'meadow' : 'cape'}>{s.slots} {s.slots === 1 ? 'place' : 'places'} left</Badge>
                  </div>
                  <p style={{ margin: '4px 0 var(--space-3)', color: 'var(--text-muted)' }}>{s.venue}{s.with === 'nobody' ? '' : ` · with ${s.with}`}</p>
                  <p style={{ margin: 0 }}>{s.does}</p>
                </div>
                <div style={{ padding: 'var(--space-6)', display: 'grid', placeItems: 'center', borderLeft: '1.5px solid var(--cream-200)' }}>
                  <Icon name={on ? 'circle-check' : 'plus'} size={30} color={on ? 'var(--gold-600)' : 'var(--cocoa-300)'} />
                </div>
              </Card>
            );
          })}
        </div>

        {picked ? (
          <Card tone="sky" padding="lg" style={{ marginTop: 'var(--space-8)', maxWidth: 620 }}>
            <h3 style={{ marginTop: 0 }}>Two fields and you're done</h3>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); window.scrollTo(0, 0); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <Input label="Your name" required placeholder="First name is fine" />
              <Input label="Mobile" type="tel" required icon="phone" hint="Only used to text you the day before. Never shared, never added to a list." />
              <Button type="submit" size="lg">Put me on this shift</Button>
              <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                No CV, no interview, no references for this role. Anything involving unsupervised time with children needs a background check and we will walk you through it separately.
              </p>
            </form>
          </Card>
        ) : (
          <p style={{ marginTop: 'var(--space-8)', fontSize: 'var(--text-lg)', color: 'var(--text-muted)' }}>Pick a shift above and two fields will appear.</p>
        )}
      </window.Section>

      <window.Section tone="cream">
        <div className="ah-split">
          <div>
            <h2>Why we stopped asking for your superpowers</h2>
            <p style={{ fontSize: 'var(--text-lg)' }}>
              The old form had four steps: name, contact, a grid of skills, a grid of availability, and a made-up superhero name. Twenty-two people started it and nine finished.
            </p>
            <p>
              None of that told us anything we needed. What we actually need is a body at a door on the 27th of February. So the form is the rota, and the rota is what you are looking at.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {[['clock', 'Under a minute', 'Two fields, on a phone, on a bus.'], ['users', 'Paired the first time', 'You are never the only person who knows what happens next.'], ['hand', 'Cancelling is fine', 'Same rule we give families. No explanation needed.']].map(([i, t, d]) => (
              <div key={t} style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <Icon name={i} size={24} color="var(--gold-600)" />
                <span><strong style={{ display: 'block', color: 'var(--text-heading)', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)' }}>{t}</strong>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </window.Section>
    </React.Fragment>
  );
}
Object.assign(window, { AHVolunteer });
