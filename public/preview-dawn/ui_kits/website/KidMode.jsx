function AHKidMode() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const { Icon, Button, HeroIdCard } = DS;
  const events = window.AH_EVENTS || [];
  const [step, setStep] = React.useState(0);
  const [chosen, setChosen] = React.useState(events[0]);
  const [frame, setFrame] = React.useState(0);
  const [answer, setAnswer] = React.useState(null);
  const [helps, setHelps] = React.useState([]);

  const Big = ({ children, style }) => (
    <h1 style={{ fontSize: 'var(--text-5xl)', lineHeight: 1.1, margin: '0 0 var(--space-6)', maxWidth: '22ch', ...style }}>{children}</h1>
  );
  const Choice = ({ icon, label, sub, onClick, tone = 'sky' }) => (
    <button type="button" onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-4)', width: '100%', textAlign: 'left',
      background: tone === 'gold' ? 'var(--surface-gold-soft)' : 'var(--surface-card)',
      border: `2px solid ${tone === 'gold' ? 'var(--gold-400)' : 'var(--sky-300)'}`,
      borderRadius: 'var(--radius-xl)', padding: 'var(--space-5) var(--space-6)', minHeight: 88, cursor: 'pointer',
      fontFamily: 'var(--font-body)',
    }}>
      <span style={{ width: 56, height: 56, flex: '0 0 auto', borderRadius: 'var(--radius-pill)', background: 'var(--surface-sky)', display: 'grid', placeItems: 'center' }}>
        <Icon name={icon} size={28} color="var(--sky-700)" />
      </span>
      <span>
        <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-2xl)', color: 'var(--text-heading)' }}>{label}</span>
        {sub ? <span style={{ display: 'block', fontSize: 'var(--text-base)', color: 'var(--text-muted)' }}>{sub}</span> : null}
      </span>
    </button>
  );

  const Wrap = ({ children, back }) => (
    <section style={{ background: 'var(--gradient-dawn)', minHeight: '78vh', padding: 'var(--space-16) var(--gutter)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        {back ? (
          <button onClick={back} style={{ background: 'none', border: 'none', padding: 0, marginBottom: 'var(--space-8)', cursor: 'pointer', color: 'var(--text-link)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-lg)', display: 'inline-flex', gap: 8, alignItems: 'center' }}>
            <Icon name="arrow-left" size={22} /> Go back
          </button>
        ) : null}
        {children}
      </div>
    </section>
  );

  if (step === 0) return (
    <Wrap>
      <p style={{ color: 'var(--gold-800)', fontWeight: 700, fontSize: 'var(--text-lg)' }}>This page is for you, not for a grown-up.</p>
      <Big>Something is happening. Do you want to know about it?</Big>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {events.map((e) => (
          <Choice key={e.id} icon="calendar" label={e.title} sub={`${e.venue} · ${e.date.replace(/,.*/, '')}`}
            onClick={() => { setChosen(e); setStep(1); setFrame(0); }} />
        ))}
      </div>
      <p style={{ marginTop: 'var(--space-8)', color: 'var(--text-muted)' }}>You can stop reading at any time. Nothing here signs you up for anything.</p>
    </Wrap>
  );

  if (step === 1) {
    const f = chosen.story[frame];
    const last = frame === chosen.story.length - 1;
    return (
      <Wrap back={() => (frame ? setFrame(frame - 1) : setStep(0))}>
        <p style={{ color: 'var(--gold-800)', fontWeight: 700, fontSize: 'var(--text-lg)' }}>
          {frame + 1} of {chosen.story.length}
        </p>
        <div style={{ background: 'var(--surface-card)', border: '2px solid var(--border-soft)', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', marginBottom: 'var(--space-6)' }}>
          <window.RoomPhoto ratio="16 / 9" label="Photo of this bit" note="A real photograph of the door, the room, or the person you will meet." style={{ borderRadius: 0, border: 'none', borderBottom: '1.5px dashed var(--sky-400)' }} />
          <p style={{ fontSize: 'var(--text-4xl)', fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1.2, color: 'var(--text-heading)', padding: 'var(--space-8)', margin: 0, maxWidth: 'none' }}>{f.text}</p>
        </div>
        <Button size="lg" iconRight={last ? undefined : 'arrow-right'} onClick={() => (last ? setStep(2) : setFrame(frame + 1))}>
          {last ? 'That is all of it' : 'Next'}
        </Button>
      </Wrap>
    );
  }

  if (step === 2) return (
    <Wrap back={() => { setStep(1); setFrame(chosen.story.length - 1); }}>
      <Big>Do you want to go?</Big>
      <p style={{ fontSize: 'var(--text-xl)' }}>Any answer is a real answer. We tell the grown-up what you said, and they listen to it.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
        <Choice icon="thumbs-up" tone="gold" label="Yes" sub="We will save you a place." onClick={() => { setAnswer('yes'); setStep(3); }} />
        <Choice icon="message-circle" label="I need to know more first" sub="We will show you the room and how long it lasts." onClick={() => { setAnswer('more'); setStep(3); }} />
        <Choice icon="x" label="No, not this one" sub="Nothing happens. Nobody will ask you again about this one." onClick={() => { setAnswer('no'); setStep(3); }} />
      </div>
    </Wrap>
  );

  if (step === 3 && answer === 'no') return (
    <Wrap back={() => setStep(2)}>
      <Icon name="feather" size={56} color="var(--gold-500)" />
      <Big style={{ marginTop: 'var(--space-5)' }}>Okay. That is the end of it.</Big>
      <p style={{ fontSize: 'var(--text-xl)' }}>We have told the grown-up that you said no to this one. You do not have to explain it, and nobody will bring it up again.</p>
      <Button size="lg" variant="secondary" onClick={() => setStep(0)}>See a different thing</Button>
    </Wrap>
  );

  if (step === 3 && answer === 'more') return (
    <Wrap back={() => setStep(2)}>
      <Big>Here is more about it.</Big>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', margin: '0 0 var(--space-8)' }}>
        {[['clock', 'It lasts one hour', 'You can leave before the end. Lots of people do.'],
          ['volume-2', chosen.axes[0].level === 3 ? 'It is loud' : 'It is fairly quiet', chosen.axes[0].note],
          ['users', `About ${chosen.axes[2].level === 1 ? 'fifteen' : 'forty'} people`, chosen.axes[2].note],
          ['headphones', chosen.facts[0].yes ? 'There is a quiet room' : 'There is no quiet room', chosen.facts[0].note]].map(([i, t, s]) => (
          <div key={t} style={{ display: 'flex', gap: 'var(--space-4)', background: 'var(--surface-card)', border: '1.5px solid var(--border-soft)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-5)' }}>
            <Icon name={i} size={26} color="var(--gold-600)" />
            <span>
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--text-heading)' }}>{t}</span>
              <span style={{ display: 'block', fontSize: 'var(--text-lg)' }}>{s}</span>
            </span>
          </div>
        ))}
      </div>
      <Button size="lg" onClick={() => setStep(2)}>Ask me again</Button>
    </Wrap>
  );

  const OPTIONS = ['Somewhere quiet to sit', 'Ear defenders', 'Nobody talking to me', 'Knowing when it ends', 'Someone I already know', 'Going in before it is busy'];
  if (step === 3) return (
    <Wrap back={() => setStep(2)}>
      <Big>What would help you?</Big>
      <p style={{ fontSize: 'var(--text-xl)' }}>Pick as many as you want. We will have them ready and we will not talk about it.</p>
      <div style={{ display: 'grid', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
        {OPTIONS.map((o) => {
          const on = helps.includes(o);
          return (
            <button key={o} type="button" onClick={() => setHelps(on ? helps.filter((x) => x !== o) : [...helps, o])}
              style={{
                display: 'flex', alignItems: 'center', gap: 'var(--space-4)', minHeight: 72, cursor: 'pointer', textAlign: 'left',
                background: on ? 'var(--surface-gold-soft)' : 'var(--surface-card)',
                border: `2px solid ${on ? 'var(--gold-500)' : 'var(--border-soft)'}`, borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-4) var(--space-6)', fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 'var(--text-2xl)', color: 'var(--text-heading)',
              }}>
              <Icon name={on ? 'check' : 'plus'} size={26} color={on ? 'var(--gold-700)' : 'var(--cocoa-300)'} />
              {o}
            </button>
          );
        })}
      </div>
      <Button size="lg" style={{ marginTop: 'var(--space-8)' }} onClick={() => setStep(4)}>Done</Button>
    </Wrap>
  );

  return (
    <Wrap>
      <Icon name="star" size={52} color="var(--gold-500)" />
      <Big style={{ marginTop: 'var(--space-5)' }}>Saved. Here is your card.</Big>
      <p style={{ fontSize: 'var(--text-xl)' }}>You can print this and keep it in a pocket. It says what helps you, so you do not have to explain it every time.</p>
      <HeroIdCard name="You" superpower="Knows what helps"
        helps={helps.length ? helps.join(', ').toLowerCase() : 'Being told what happens next.'}
        hard="Being asked to explain this out loud."
        askMeAbout="The thing I am into right now."
        style={{ marginTop: 'var(--space-6)' }} />
      <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
        <Button variant="secondary" icon="printer">Print my card</Button>
        <Button variant="tertiary" onClick={() => setStep(0)}>Start again</Button>
      </div>
    </Wrap>
  );
}
Object.assign(window, { AHKidMode });
