function AHHeroIds() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const { HeroIdCard, Card, Icon, Button, Input, Textarea } = DS;
  const [making, setMaking] = React.useState(false);
  const kids = [
    { name: 'Maya', age: '9', photo: 'assets/illustration-community-sunrise.png', superpower: 'Knows every Metro line', helps: 'Telling me what happens next and how long it will take.', hard: 'Sudden clapping. People asking me to look at them.', askMeAbout: 'The Gold Line. I can draw it from memory.' },
    { name: 'Kadence', age: '7', photo: 'assets/hero-child-portrait.png', superpower: 'Harmonizes any room', helps: 'Humming. Nobody minding that I hum.', hard: 'When the music stops in the middle.', askMeAbout: 'The low notes. You can feel them in your chest.' },
    { name: 'Theo', age: '11', photo: 'assets/character-kadence-harmonizer.png', superpower: 'Builds impossible bridges', helps: 'Having the whole hallway. Tape, not glue.', hard: 'People walking through before it is finished.', askMeAbout: 'Why the middle bit has to be triangles.' },
  ];

  return (
    <React.Fragment>
      <window.PageHeader title="Ausome IDs"
        lead="Not profiles written about children. Five questions, answered by the kid, printed on a card they can hand to anyone who needs to know."
        breadcrumb={[{ label: 'Home', href: '#' }, { label: 'Ausome IDs' }]} />

      <window.Section tone="card">
        <div className="ah-grid-3" style={{ alignItems: 'start' }}>
          {kids.map((k) => <HeroIdCard key={k.name} {...k} style={{ maxWidth: 'none' }} />)}
        </div>
        <Card tone="sky" padding="lg" style={{ marginTop: 'var(--space-10)', display: 'grid', gridTemplateColumns: '32px 1fr', gap: 'var(--space-4)' }}>
          <Icon name="info" size={26} color="var(--sky-700)" />
          <p style={{ margin: 0, maxWidth: '70ch' }}>
            The old version of this page was a form for adults to nominate a child and write a paragraph about them. We replaced it. A spotlight that a child cannot read, edit, or use is a spotlight pointed at the wrong person. Every card here was dictated, typed or drawn by the kid whose name is on it, published in their words including the grammar, with their family's consent — and the "what's hard for me" line is never softened, because that is the line that actually helps a teacher on a Tuesday.
          </p>
        </Card>
      </window.Section>

      <window.Section tone="sky">
        {making ? (
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <h2>Make your card</h2>
            <p style={{ marginBottom: 'var(--space-8)' }}>Five questions. Type them, say them out loud, or draw them — all three end up on the same card. A grown-up can help, but the words have to be yours.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <Input label="What is your name?" hint="First name only. A nickname is fine." required />
              <Input label="What are you good at?" hint="Anything. It does not have to be a school thing." required />
              <Textarea label="What helps you?" rows={2} hint="Things people can do so a place works for you." />
              <Textarea label="What is hard for you?" rows={2} hint="Say it plainly. This is the most useful part of the card." />
              <Input label="What should people ask you about?" hint="The thing you could talk about all day." />
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <Button size="lg" icon="mic" variant="secondary">Say it instead of typing</Button>
                <Button size="lg" icon="pencil" variant="secondary">Draw it instead</Button>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <Button size="lg" onClick={() => { setMaking(false); window.AHToast({ tone: 'success', title: 'Sent to your grown-up to check.', description: 'Nothing goes on the site until your family says yes.' }); }}>Make my card</Button>
                <Button size="lg" variant="quiet" onClick={() => setMaking(false)}>Not now</Button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <Icon name="badge-check" size={44} color="var(--sky-700)" />
            <h2 style={{ marginTop: 'var(--space-4)' }}>Make your own card</h2>
            <p>Five questions, in your words. Print it, keep it in a pocket, hand it to whoever needs it.</p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
              <Button size="lg" onClick={() => setMaking(true)}>Start my card</Button>
              <Button size="lg" variant="secondary" onClick={() => window.AHGo('Kid mode')}>I'd rather look around first</Button>
            </div>
          </div>
        )}
      </window.Section>
    </React.Fragment>
  );
}
Object.assign(window, { AHHeroIds });
