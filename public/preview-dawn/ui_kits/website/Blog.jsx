function AHBlog() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const { Card, Icon, Button, Badge, Tag, EmailCapture, SensoryProfile } = DS;
  const [filter, setFilter] = React.useState('Everything');
  const [open, setOpen] = React.useState(null);

  const KINDS = {
    'Room log': { tone: 'sky', icon: 'volume-2' },
    'What we got wrong': { tone: 'cape', icon: 'circle-alert' },
    'Method change': { tone: 'meadow', icon: 'badge-check' },
  };

  const entries = [
    {
      id: 'apple-jan',
      kind: 'Room log',
      title: 'Apple Del Amo, measured 29 January',
      date: '29 January 2026',
      venue: 'Apple Store, Del Amo Fashion Center',
      summary: 'Quietest room we have measured. 55 dB, twelve kids, mall still closed. The training room at the back has an independent light switch, which is rarer than it sounds.',
      body: [
        'We arrived at 8:20 with the sound meter and the mall was silent — that is the whole reason this one works. The store music was off before we asked.',
        'Sound peaked at 55 dB during the session and that was our own voices. Light is bright and even with no flicker; the back tables sit under a softer run of fittings. Twelve children and four staff in a space built for eighty.',
        'The one thing we could not resolve: Apple would like photographs for their own channels. We negotiated a decline-at-the-door option and they agreed in writing. If you say no, nobody follows it up.',
      ],
      changed: 'Added "photos taken" as a standing fact on every event page, because we had been treating it as a detail rather than a decision families make.',
      axes: [
        { key: 'sound', label: 'Sound', level: 1, note: '55 dB, mostly our own voices. Store music off.' },
        { key: 'light', label: 'Light', level: 2, note: 'Bright, even, no flicker. Back tables softer.' },
        { key: 'crowd', label: 'Crowd', level: 1, note: 'Twelve children, four staff, closed mall outside.' },
        { key: 'smell', label: 'Smell', level: 1, note: 'Nothing to speak of during our hour.' },
        { key: 'waiting', label: 'Waiting', level: 1, note: 'No fixed start. Doors open five minutes early.' },
        { key: 'space', label: 'Room to move', level: 2, note: 'Whole store plus the empty mall corridor.', inverted: true },
      ],
    },
    {
      id: 'wrong-quiet-room',
      kind: 'What we got wrong',
      title: 'We called a corridor a quiet room',
      date: '14 January 2026',
      venue: 'Carson community room',
      summary: 'For three events we listed a "quiet room" that was a corridor with a door at each end. Two families told us. They were right and we were wrong.',
      body: [
        'The space had a door, a chair and no overhead light, so we ticked the box. What it also had was two doors — meaning people walked through it, which makes it the opposite of a quiet room.',
        'A parent emailed after the second event. We did not change it. Another parent said the same thing after the third, and only then did we go back and stand in it for ten minutes, which is when it became obvious.',
        'The rule now: a quiet room has one entrance, or it is not a quiet room. We re-audited the four venues we had already published and downgraded one of them.',
      ],
      changed: 'A quiet room must have a single entrance. Re-audited all four published venues; one downgraded to "no quiet room".',
      correction: 'Corrected 14 January 2026 — the Carson listing said "quiet room: yes" from 2 November to 14 January. If you attended on the strength of that, we are sorry.',
    },
    {
      id: 'method-sound',
      kind: 'Method change',
      title: 'We stopped publishing average sound levels',
      date: '2 December 2025',
      venue: 'All venues',
      summary: 'An average tells you nothing about the moment a hand dryer goes off. We now publish the peak and name the specific loud surprise.',
      body: [
        'Our first six listings gave an average decibel reading across the session. It looked scientific and it was useless: a room that sits at 58 dB and spikes to 96 when the animatronic show starts is not a 62 dB room.',
        'Every listing now records the peak, and the "loud surprise" fact names the thing that causes it — the show, the dryer, the till printer, the fire door.',
        'We went back and re-measured all six. Two moved up a level. One moved down.',
      ],
      changed: 'Peak sound replaces average, and every venue must name its loud surprise or state that it does not have one.',
    },
  ];

  const shown = filter === 'Everything' ? entries : entries.filter((e) => e.kind === filter);
  const entry = entries.find((e) => e.id === open);

  if (entry) {
    const k = KINDS[entry.kind];
    return (
      <React.Fragment>
        <window.PageHeader title={entry.title}
          lead={`${entry.kind} · ${entry.venue} · ${entry.date}`}
          breadcrumb={[{ label: 'Home', href: '#' }, { label: 'The log', href: '#' }, { label: entry.venue }]} />
        <window.Section tone="card">
          <article style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
            <Badge tone={k.tone} icon={k.icon}>{entry.kind}</Badge>
            {entry.correction ? (
              <Card tone="plain" padding="md" style={{ borderColor: 'var(--cape-200)', background: 'var(--cape-50)', marginTop: 'var(--space-5)', display: 'grid', gridTemplateColumns: '24px 1fr', gap: 'var(--space-3)' }}>
                <Icon name="circle-alert" size={20} color="var(--cape-600)" />
                <span style={{ color: 'var(--cape-700)' }}>{entry.correction}</span>
              </Card>
            ) : null}
            {entry.body.map((p, i) => (
              <p key={i} style={{ fontSize: 'var(--text-lg)', marginTop: 'var(--space-5)' }}>{p}</p>
            ))}
            {entry.axes ? <SensoryProfile axes={entry.axes} measuredOn={entry.date} style={{ marginTop: 'var(--space-8)' }} /> : null}
            <Card tone="gold" padding="lg" style={{ marginTop: 'var(--space-8)' }}>
              <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-heading)', marginBottom: 6 }}>What changed because of this</strong>
              <p style={{ margin: 0 }}>{entry.changed}</p>
            </Card>
            <Button variant="tertiary" icon="arrow-left" style={{ marginTop: 'var(--space-8)' }} onClick={() => setOpen(null)}>Back to the log</Button>
          </article>
        </window.Section>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <window.PageHeader title="The log"
        lead="Not a blog. A running record of every room we measured, every thing we got wrong, and every rule that changed as a result. Dated, corrected in public, and never quietly edited."
        breadcrumb={[{ label: 'Home', href: '#' }, { label: 'The log' }]} />

      <window.Section tone="card">
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-8)' }}>
          {['Everything', 'Room log', 'What we got wrong', 'Method change'].map((t) => (
            <Tag key={t} icon={KINDS[t] ? KINDS[t].icon : undefined} selected={filter === t} onClick={() => setFilter(t)}>{t}</Tag>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          {shown.map((e) => {
            const k = KINDS[e.kind];
            return (
              <Card key={e.id} interactive padding="none" onClick={() => { setOpen(e.id); window.scrollTo(0, 0); }} style={{ cursor: 'pointer', display: 'grid', gridTemplateColumns: '160px 1fr', alignItems: 'stretch' }} className="ah-room-row">
                <div style={{ background: e.kind === 'What we got wrong' ? 'var(--cape-50)' : e.kind === 'Method change' ? 'var(--meadow-50)' : 'var(--sky-50)', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center' }}>
                  <Icon name={k.icon} size={26} color={e.kind === 'What we got wrong' ? 'var(--cape-600)' : e.kind === 'Method change' ? 'var(--meadow-600)' : 'var(--sky-700)'} />
                  <span style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: 'var(--text-sm)' }}>{e.kind}</span>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{e.date}</span>
                </div>
                <div style={{ padding: 'var(--space-6)' }}>
                  <h3 style={{ margin: 0, fontSize: 'var(--text-2xl)' }}>{e.title}</h3>
                  <p style={{ margin: '4px 0 var(--space-3)', color: 'var(--text-muted)' }}>{e.venue}</p>
                  <p style={{ margin: 0 }}>{e.summary}</p>
                  {e.correction ? (
                    <p style={{ margin: 'var(--space-3) 0 0', display: 'inline-flex', gap: 8, alignItems: 'center', color: 'var(--cape-700)', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                      <Icon name="circle-alert" size={16} /> Carries a published correction
                    </p>
                  ) : null}
                </div>
              </Card>
            );
          })}
        </div>

        <Card tone="sky" padding="lg" style={{ marginTop: 'var(--space-10)', display: 'grid', gridTemplateColumns: '32px 1fr', gap: 'var(--space-4)' }}>
          <Icon name="info" size={26} color="var(--sky-700)" />
          <p style={{ margin: 0, maxWidth: '70ch' }}>
            This replaced the founder's blog. Reflections were pleasant to write and did nothing for a parent deciding about a Tuesday. A log is useful: it is the audit trail behind every sensory profile on this site, it shows the method being corrected in public, and when we get something wrong the correction stays on the page with the date we published the mistake.
          </p>
        </Card>
      </window.Section>

      <window.Section tone="cream">
        <EmailCapture title="Get the log by email" body="One note a month: rooms measured, things corrected, rules changed. No appeals, no campaigns." />
      </window.Section>
    </React.Fragment>
  );
}
Object.assign(window, { AHBlog });
