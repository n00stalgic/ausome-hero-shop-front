function AHAbout() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const { Card, Icon, Button, Badge } = DS;
  const [ledger, setLedger] = React.useState(false);

  const RULES = [
    { n: '1', rule: 'Do not crouch down to talk to a child unless they invite you.', why: 'It puts an adult face inside a kid’s personal space and demands eye contact to end it.' },
    { n: '2', rule: 'Do not offer a high five, a fist bump, or a hand to shake.', why: 'A refused greeting becomes a small public failure. Nod, or say nothing at all.' },
    { n: '3', rule: 'If a child walks away mid-sentence, let them go.', why: 'They have finished the conversation. Following it up teaches them that leaving does not work.' },
  ];

  const SPEND = [
    ['Venue hire and quiet rooms', 41, '$18,400'],
    ['Kit — ear defenders, fidgets, signage, printed cards', 22, '$9,900'],
    ['Measuring visits — mileage, sound meter, staff time', 17, '$7,600'],
    ['Payment and admin fees', 9, '$4,050'],
    ['Website, email, insurance', 11, '$4,900'],
  ];

  const REFUSALS = [
    'Awareness campaigns. Everyone is aware. Awareness has never got a family through a door.',
    'Puzzle-piece imagery, blue lighting, and anything that frames autism as a mystery to be solved.',
    'Cure, recovery, or "overcoming autism" language, in copy or in a grant application.',
    'Photographing a child without the child agreeing, separately from the parent agreeing.',
    'Describing a room as calm, magical or unforgettable when we have not measured it.',
    'Naming a child’s diagnosis on this site. We ask what helps, never what they have.',
  ];

  return (
    <React.Fragment>
      <window.PageHeader title="How we work"
        lead="We are a small Los Angeles nonprofit with one method: go to the room, measure it, brief the staff, publish what we found — including the parts nobody can fix."
        breadcrumb={[{ label: 'Home', href: '#' }, { label: 'How we work' }]} />

      <window.Section tone="card">
        <div style={{ maxWidth: 900 }}>
          <Badge tone="gold" icon="badge-check">The staff briefing</Badge>
          <h2 style={{ marginTop: 'var(--space-4)' }}>Three rules. That is the entire training.</h2>
          <p style={{ fontSize: 'var(--text-lg)' }}>
            Every venue that hosts us gets a fifteen-minute briefing on the morning of the event. Nine venues in LA have had it. It is three sentences long, and it is the single thing that changes a room most.
          </p>
        </div>
        <div className="ah-grid-3" style={{ marginTop: 'var(--space-8)' }}>
          {RULES.map((r) => (
            <Card key={r.n} padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-5xl)', fontWeight: 800, color: 'var(--gold-300)', lineHeight: 1 }}>{r.n}</span>
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-heading)' }}>{r.rule}</strong>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>{r.why}</p>
            </Card>
          ))}
        </div>
        <p style={{ marginTop: 'var(--space-6)' }}>
          Take these and use them. They are not ours to licence — <a href="#">download the one-page briefing sheet</a> and hand it to any venue you deal with, with or without us.
        </p>
      </window.Section>

      <window.Section tone="sky">
        <div className="ah-split">
          <div>
            <h2>What we measure, and what we will not say</h2>
            <p style={{ fontSize: 'var(--text-lg)' }}>
              Six readings, the same six every time, taken standing in the room with a sound meter and a notebook: sound, light, crowd, smell, waiting, and room to move. Plus the three facts that decide most visits — is there a quiet room, are the staff briefed, and what is the loud surprise nobody warned you about.
            </p>
            <p>
              A venue cannot pay to be listed and cannot ask us to soften a reading. If the pizza ovens are five metres from the tables, the page says so.
            </p>
            <Button variant="secondary" iconRight="arrow-right" onClick={() => window.AHGo('Rooms')}>See every room we have measured</Button>
          </div>
          <Card padding="lg">
            <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-heading)', marginBottom: 'var(--space-4)' }}>Things we refuse to do</strong>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {REFUSALS.map((r) => (
                <li key={r} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                  <Icon name="x" size={18} color="var(--cape-500)" style={{ marginTop: 4 }} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </window.Section>

      <window.Section tone="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ margin: 0 }}>Where the money went</h2>
            <p style={{ margin: 'var(--space-3) 0 0', fontSize: 'var(--text-lg)' }}>Financial year 2025. Total spent: $44,850.</p>
          </div>
          <Button variant="tertiary" iconRight={ledger ? 'chevron-down' : 'chevron-right'} onClick={() => setLedger(!ledger)}>
            {ledger ? 'Hide the detail' : 'Show the line items'}
          </Button>
        </div>
        <div style={{ marginTop: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {SPEND.map(([label, pct, amount]) => (
            <div key={label} style={{ display: 'grid', gridTemplateColumns: '1fr 96px', gap: 'var(--space-5)', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontWeight: 700, color: 'var(--text-heading)' }}>{label}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{pct}%</span>
                </div>
                <div style={{ height: 12, borderRadius: 999, background: 'var(--cream-200)', overflow: 'hidden' }}>
                  <div style={{ width: pct + '%', height: '100%', background: label.startsWith('Payment') ? 'var(--cocoa-300)' : 'var(--gold-400)' }} />
                </div>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--text-heading)', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{amount}</span>
            </div>
          ))}
        </div>
        {ledger ? (
          <Card tone="sky" padding="lg" style={{ marginTop: 'var(--space-6)' }}>
            <p style={{ margin: 0 }}>
              The full ledger is a spreadsheet with 214 rows, including the $38 we spent on a sound meter that turned out to be inaccurate and had to be replaced. Email <a href="mailto:hello@ausomeheroes.com">hello@ausomeheroes.com</a> and we will send it, unredacted, to anyone who asks — donor or not.
            </p>
          </Card>
        ) : null}
      </window.Section>

      <window.Section tone="cream">
        <div className="ah-split">
          <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lifted)' }}>
            <img src={window.A + '/photo-founder-allie.jpeg'} alt="Allie, founder of Ausome Heroes, with her son Kadence" style={{ width: '100%' }} />
          </div>
          <div>
            <p style={{ color: 'var(--gold-700)', fontWeight: 700, letterSpacing: 'var(--tracking-label)' }}>Why the method exists</p>
            <h2>Nine minutes at a birthday party</h2>
            <p>Kadence was five. Bouncy castle, a speaker the size of a fridge, eleven children who all knew a song he had never heard. We lasted nine minutes.</p>
            <p>In the car afterwards I wrote down what would have made it work: a quieter hour, a room to step into, staff who had been told what to expect. None of it was expensive. None of it existed nearby.</p>
            <p>So the list became the method. Everything on this site is that list, applied to somebody else's room — because the problem was never my son.</p>
            <p style={{ fontWeight: 700, color: 'var(--text-heading)' }}>— Allie, founder</p>
          </div>
        </div>
      </window.Section>

      <window.Section tone="card">
        <h2>Who actually does this</h2>
        <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)' }}>Two paid part-time roles and a rota of volunteers. Nobody here has a title longer than their job.</p>
        <div className="ah-grid-3">
          {[
            ['Allie', 'Founder — does the measuring visits and the venue briefings.', 'sunrise'],
            ['Marisol', 'Runs the door at every LA event. The person you meet first.', 'hand'],
            ['A rota of 50-odd', 'Set-up, quiet-room cover, and the photography nobody is obliged to be in.', 'users'],
          ].map(([name, role, icon]) => (
            <Card key={name} padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Icon name={icon} size={28} color="var(--gold-600)" />
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-heading)' }}>{name}</strong>
              <p style={{ margin: 0 }}>{role}</p>
            </Card>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-10)', flexWrap: 'wrap' }}>
          <Button size="lg" icon="hand-heart" onClick={() => window.AHDonate()}>Fund a room</Button>
          <Button size="lg" variant="secondary" onClick={() => window.AHGo('Volunteer')}>Take a shift</Button>
        </div>
      </window.Section>
    </React.Fragment>
  );
}
Object.assign(window, { AHAbout });
