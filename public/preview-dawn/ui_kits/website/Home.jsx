function AHHome() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const { Button, Badge, Card, Icon, SensoryProfile, FundARoom, HeroIdCard, EmailCapture, StatCounter } = DS;
  const events = window.AH_EVENTS || [];
  const [maxSound, setMaxSound] = React.useState(3);
  const [needQuiet, setNeedQuiet] = React.useState(false);
  const matches = events.filter((e) => e.axes[0].level <= maxSound && (!needQuiet || e.facts[0].yes));

  return (
    <React.Fragment>
      <section style={{ background: 'var(--gradient-dawn)' }}>
        <div className="ah-container" style={{ padding: 'var(--space-16) var(--gutter) var(--space-12)' }}>
          <div className="ah-split">
            <div>
              <Badge tone="gold" icon="sunrise">Los Angeles · 501(c)(3) nonprofit</Badge>
              <h1 style={{ marginTop: 'var(--space-5)', fontSize: 'var(--text-6xl)' }}>
                Giving every child <span style={{ color: 'var(--cape-500)' }}>wings</span>
              </h1>
              <p style={{ fontSize: 'var(--text-xl)', maxWidth: '42ch' }}>
                We run sensory-friendly events for autistic kids in LA — and we tell you exactly what every room will be like before you decide to come.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
                <Button size="lg" href="#rooms" iconRight="arrow-right">Find a room that works</Button>
                <Button size="lg" variant="secondary" icon="hand-heart" onClick={() => window.AHDonate()}>Donate</Button>
              </div>
              <p style={{ marginTop: 'var(--space-6)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                Nothing on this site autoplays, flashes, or moves unless you ask it to.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-12% -8%', background: 'var(--gradient-first-light)', borderRadius: '50%' }} />
              <img src={window.A + '/hero-flying-heroes.png'} alt="Children in capes flying through morning light"
                style={{ position: 'relative', width: '100%', filter: 'drop-shadow(0 20px 40px rgba(59,46,40,.14))' }} />
            </div>
          </div>
        </div>
      </section>

      <window.Section tone="card" id="rooms">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--space-6)', flexWrap: 'wrap', marginBottom: 'var(--space-8)' }}>
          <div>
            <h2 style={{ margin: 0 }}>Three rooms coming up</h2>
            <p style={{ margin: 'var(--space-3) 0 0', fontSize: 'var(--text-lg)' }}>
              Each one measured in person. Filter by the two things that usually decide it.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            {[[1, 'Quiet only'], [2, 'Up to medium'], [3, 'Any volume']].map(([lvl, label]) => (
              <button key={label} onClick={() => setMaxSound(lvl)} aria-pressed={maxSound === lvl} style={{
                minHeight: 44, padding: '10px 18px', borderRadius: 999, cursor: 'pointer', fontFamily: 'var(--font-body)',
                fontWeight: 700, fontSize: 'var(--text-sm)',
                background: maxSound === lvl ? 'var(--gold-100)' : 'var(--surface-card)',
                border: `1.5px solid ${maxSound === lvl ? 'var(--gold-500)' : 'var(--border-soft)'}`,
                color: maxSound === lvl ? 'var(--gold-800)' : 'var(--text-body)',
              }}>{label}</button>
            ))}
            <button onClick={() => setNeedQuiet(!needQuiet)} aria-pressed={needQuiet} style={{
              minHeight: 44, padding: '10px 18px', borderRadius: 999, cursor: 'pointer', fontFamily: 'var(--font-body)',
              fontWeight: 700, fontSize: 'var(--text-sm)', display: 'inline-flex', alignItems: 'center', gap: 8,
              background: needQuiet ? 'var(--sky-100)' : 'var(--surface-card)',
              border: `1.5px solid ${needQuiet ? 'var(--sky-500)' : 'var(--border-soft)'}`,
              color: needQuiet ? 'var(--sky-800)' : 'var(--text-body)',
            }}><Icon name="headphones" size={16} /> Must have a quiet room</button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          {matches.map((e) => (
            <Card key={e.id} padding="none" interactive style={{ display: 'grid', gridTemplateColumns: '150px 1fr auto', gap: 0, alignItems: 'stretch' }} className="ah-room-row">
              <div style={{ background: 'var(--surface-gold-soft)', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--gold-800)', fontSize: 'var(--text-sm)' }}>{e.date.split(',')[0]}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-3xl)', color: 'var(--text-heading)', lineHeight: 1 }}>{e.date.match(/\w+ \d+/)[0].split(' ')[1]}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--gold-800)', lineHeight: 1 }}>{e.date.match(/\w+ \d+/)[0].split(' ')[0]}</span>
              </div>
              <div style={{ padding: 'var(--space-6)' }}>
                <h3 style={{ margin: 0, fontSize: 'var(--text-2xl)' }}>{e.title}</h3>
                <p style={{ margin: '4px 0 var(--space-4)', color: 'var(--text-muted)' }}>{e.venue} · {e.time}</p>
                <SensoryProfile compact axes={e.axes} />
                <p style={{ margin: 'var(--space-4) 0 0', display: 'inline-flex', gap: 8, alignItems: 'center', fontWeight: 700, color: e.facts[0].yes ? 'var(--meadow-600)' : 'var(--cape-600)' }}>
                  <Icon name={e.facts[0].yes ? 'circle-check' : 'circle-alert'} size={18} />
                  {e.facts[0].yes ? 'Quiet room, open the whole time' : 'No quiet room — outdoor bench instead'}
                </p>
              </div>
              <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--space-3)', borderLeft: '1.5px solid var(--cream-200)' }}>
                <Button onClick={() => window.AHGoEvent(e.id)}>See the whole room</Button>
                <Button variant="tertiary" icon="mic" onClick={() => window.AHGo('Kid mode')}>Kid's version</Button>
              </div>
            </Card>
          ))}
          {!matches.length ? (
            <Card tone="plain" padding="lg" style={{ textAlign: 'center' }}>
              <p style={{ margin: '0 auto' }}>Nothing matches that yet — and we would rather say so than sell you a loud room. Join the monthly note below and we'll tell you when a quiet one is booked.</p>
            </Card>
          ) : null}
        </div>
      </window.Section>

      <window.Section tone="sky">
        <div className="ah-split">
          <div>
            <Badge tone="solid" icon="mic">For kids</Badge>
            <h2 style={{ marginTop: 'var(--space-4)' }}>Are you the kid? This part is yours.</h2>
            <p style={{ fontSize: 'var(--text-lg)' }}>
              A version of every event written for you, not your parent: what will happen, in order, with pictures of the actual room. At the end it asks whether you want to go — and <strong>no is a real answer</strong> that we pass on and nobody argues with.
            </p>
            <Button size="lg" onClick={() => window.AHGo('Kid mode')} iconRight="arrow-right">Open the kid's version</Button>
          </div>
          <Card padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {[['circle-check', 'One thing on the screen at a time'], ['volume-2', 'Says out loud when a room is loud'], ['thumbs-up', 'Yes, no, or "I need to know more"'], ['printer', 'Makes you a card of what helps you']].map(([i, t]) => (
              <div key={t} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                <Icon name={i} size={24} color="var(--sky-700)" />
                <span style={{ fontSize: 'var(--text-lg)', color: 'var(--text-heading)' }}>{t}</span>
              </div>
            ))}
          </Card>
        </div>
      </window.Section>

      <window.Section tone="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
          <div>
            <h2 style={{ margin: 0 }}>Ausome IDs</h2>
            <p style={{ margin: 'var(--space-3) 0 0', fontSize: 'var(--text-lg)', maxWidth: '56ch' }}>
              Five questions, answered by the kid. Printed on a card they can hand to a teacher, a dentist, or a birthday-party host.
            </p>
          </div>
          <Button variant="secondary" iconRight="arrow-right" onClick={() => window.AHGo('Ausome IDs')}>See all the cards</Button>
        </div>
        <div className="ah-grid-3" style={{ alignItems: 'start' }}>
          <HeroIdCard name="Maya" age="9" superpower="Knows every Metro line" helps="Telling me what happens next and how long it will take." hard="Sudden clapping. People asking me to look at them." askMeAbout="The Gold Line. I can draw it from memory." printable={false} style={{ maxWidth: 'none' }} />
          <HeroIdCard name="Kadence" age="7" superpower="Harmonizes any room" helps="Humming. Nobody minding that I hum." hard="When the music stops in the middle." askMeAbout="The low notes. You can feel them in your chest." printable={false} style={{ maxWidth: 'none' }} />
          <HeroIdCard name="Theo" age="11" superpower="Builds impossible bridges" helps="Having the whole hallway. Tape, not glue." hard="People walking through before it is finished." askMeAbout="Why the middle bit has to be triangles." printable={false} style={{ maxWidth: 'none' }} />
        </div>
      </window.Section>

      <window.Section tone="cream">
        <div className="ah-grid-3">
          <StatCounter icon="door-open" value="25" label="Rooms measured" note="Every one visited in person before we published a word about it." />
          <StatCounter icon="users" value="150+" label="Families through the door" note="Sixty-one of them said it was the first event they had not left early." />
          <StatCounter icon="badge-check" value="9" label="Venues briefed" note="Staff trained on three rules. Four have kept the quiet room permanently." />
        </div>
      </window.Section>

      <window.Section tone="gold">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center' }}>Fund a room</h2>
          <p style={{ textAlign: 'center', margin: '0 auto var(--space-8)', fontSize: 'var(--text-lg)' }}>
            We publish what things cost, because "support our mission" tells you nothing.
          </p>
          <FundARoom onGive={(a) => window.AHToast({ tone: 'info', title: `Givebutter opens at $${a}.`, description: 'The overlay opens on this page — you never leave the site.' })}
            note="91¢ of every dollar reaches a room. The rest is card fees, and we will show you the numbers if you ask."
            tiers={[
              { amount: 35, icon: 'headphones', buys: 'Ear defenders for six kids', detail: 'Kept in the quiet-room box and borrowed at any event.' },
              { amount: 120, icon: 'door-open', buys: 'A quiet room for one event', detail: 'Room hire, a volunteer to staff it, and the box of tools inside.' },
              { amount: 400, icon: 'sunrise', buys: 'A whole sensory-friendly hour', detail: 'Venue, staff briefing, dimmed lights, eleven families in the door.' },
            ]} />
        </div>
      </window.Section>

      <window.Section tone="card">
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ color: 'var(--gold-700)', fontWeight: 700, letterSpacing: 'var(--tracking-label)', margin: '0 0 var(--space-4)' }}>What changed</p>
          <blockquote style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-5)' }}>
            I read the sound level, saw the pizza-smell warning, and went anyway with a plan. We stayed fifty minutes. Before, we would not have gone at all.
          </blockquote>
          <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>— Parent, Carson · first event, February 2026</p>
        </div>
      </window.Section>

      <window.Section tone="cream">
        <EmailCapture title="One note a month" body="Which rooms are booked, what they measured, and nothing else. No campaigns, no appeals, no emergencies." />
      </window.Section>
    </React.Fragment>
  );
}
Object.assign(window, { AHHome });
