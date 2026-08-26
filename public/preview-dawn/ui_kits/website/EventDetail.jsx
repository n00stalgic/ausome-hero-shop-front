function AHEventDetail({ id }) {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const { SensoryProfile, ArrivalPlan, StoryStrip, Badge, Button, Input, Textarea, Checkbox, Card, Icon } = DS;
  const e = (window.AH_EVENTS || []).find((x) => x.id === id) || window.AH_EVENTS[0];
  const [needs, setNeeds] = React.useState(['A quiet room']);
  const [sent, setSent] = React.useState(false);
  const toggle = (v) => setNeeds(needs.includes(v) ? needs.filter((x) => x !== v) : [...needs, v]);

  return (
    <React.Fragment>
      <section style={{ background: 'var(--gradient-dawn)', padding: 'var(--space-12) 0 var(--space-16)' }}>
        <div className="ah-container">
          <button onClick={() => window.AHGo('LA Events')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-link)', fontWeight: 700, fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', display: 'inline-flex', gap: 8, alignItems: 'center', marginBottom: 'var(--space-6)' }}>
            <Icon name="arrow-left" size={18} /> All events
          </button>
          <div className="ah-split">
            <div>
              <Badge tone="gold" icon="calendar">{e.date}</Badge>
              <h1 style={{ marginTop: 'var(--space-4)' }}>{e.title}</h1>
              <p style={{ fontSize: 'var(--text-xl)', margin: 0 }}>{e.venue} · {e.time}</p>
              <p style={{ color: 'var(--gold-800)', fontWeight: 700, marginTop: 'var(--space-2)' }}>{e.give}</p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
                <Button size="lg" href="#rsvp">Tell us you're coming</Button>
                <Button size="lg" variant="secondary" icon="mic" onClick={() => window.AHGo('Kid mode')}>Read the kid's version</Button>
              </div>
            </div>
            <window.RoomPhoto ratio="16 / 10" label="Photo of the room" note="A wide shot of the actual space, taken on the measuring visit, plus one of the quiet room." style={{ maxHeight: 320 }} />
          </div>
        </div>
      </section>

      <window.Section tone="card">
        <SensoryProfile axes={e.axes} facts={e.facts} measuredOn={e.measuredOn} />
        <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
          Every venue gets the same six measurements, taken in person by one of us standing in the room. If something changes on the day, we update this page and email everyone who said they were coming.
        </p>
      </window.Section>

      <window.Section tone="cream">
        <ArrivalPlan steps={e.arrival} />
      </window.Section>

      <window.Section tone="card">
        <StoryStrip title="What will happen — the version to read with your child" frames={e.story} />
        <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
          Each frame gets a photograph of the real place. Kids are checking whether the picture matches the room, so illustration does not do the job here.
        </p>
      </window.Section>

      <window.Section tone="cream">
        <div className="ah-split">
          <div>
            <h2>The venue's own flyer</h2>
            <p>Kept separate on purpose. The venue's artwork is theirs and it is loud — it belongs here, next to the terms, rather than standing in for a photo of the room.</p>
            <p style={{ color: 'var(--gold-800)', fontWeight: 700 }}>{e.give}</p>
          </div>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1.5px solid var(--border-soft)', maxWidth: 420 }}>
            <img src={e.image} alt={e.venue + ' fundraiser flyer'} style={{ width: '100%' }} />
          </div>
        </div>
      </window.Section>

      <window.Section tone="sky" id="rsvp">
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          {sent ? (
            <Card padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
              <Icon name="circle-check" size={36} color="var(--meadow-600)" />
              <h2 style={{ margin: 0 }}>You're on the list</h2>
              <p style={{ margin: 0 }}>We'll email the arrival plan and a photo of the quiet room. If anything about the room changes before the day, you'll hear from us first.</p>
              <Button variant="tertiary" onClick={() => setSent(false)}>Change something</Button>
            </Card>
          ) : (
            <form onSubmit={(ev) => { ev.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <div>
                <h2 style={{ margin: '0 0 var(--space-2)' }}>Tell us you're coming</h2>
                <p style={{ margin: 0 }}>Four questions. None of them are about your child's diagnosis.</p>
              </div>
              <Input label="Your name" required placeholder="First name is fine" />
              <Input label="Email" type="email" icon="mail" required placeholder="you@email.com" />
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-heading)', margin: '0 0 var(--space-2)' }}>What would help on the day?</p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '0 0 var(--space-3)' }}>Pick anything. We'll have it ready without mentioning it.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                  {['A quiet room', 'Ear defenders to borrow', 'Nobody speaking to my child', 'A photo of the room beforehand', 'Arriving before everyone else', 'Somewhere to leave a buggy'].map((n) => (
                    <Checkbox key={n} label={n} checked={needs.includes(n)} onChange={() => toggle(n)} />
                  ))}
                </div>
              </div>
              <Textarea label="Anything else we should know?" optional rows={3} hint="In your words. We read every one of these." />
              <Button type="submit" size="lg">We'll be there</Button>
            </form>
          )}
        </div>
      </window.Section>
    </React.Fragment>
  );
}
Object.assign(window, { AHEventDetail });
