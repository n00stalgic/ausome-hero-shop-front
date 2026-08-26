/* @ds-bundle: {"format":4,"namespace":"AusomeHeroesDesignSystem_0fb09e","components":[{"name":"BlogCard","sourcePath":"components/content/BlogCard.jsx"},{"name":"EmailCapture","sourcePath":"components/content/EmailCapture.jsx"},{"name":"EventCard","sourcePath":"components/content/EventCard.jsx"},{"name":"ProductCard","sourcePath":"components/content/ProductCard.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"SpotlightCard","sourcePath":"components/content/SpotlightCard.jsx"},{"name":"StatCounter","sourcePath":"components/content/StatCounter.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"SensoryToggle","sourcePath":"components/forms/SensoryToggle.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"MobileNav","sourcePath":"components/navigation/MobileNav.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"ArrivalPlan","sourcePath":"components/planning/ArrivalPlan.jsx"},{"name":"FundARoom","sourcePath":"components/planning/FundARoom.jsx"},{"name":"HeroIdCard","sourcePath":"components/planning/HeroIdCard.jsx"},{"name":"SensoryProfile","sourcePath":"components/planning/SensoryProfile.jsx"},{"name":"StoryStrip","sourcePath":"components/planning/StoryStrip.jsx"}],"sourceHashes":{"components/content/BlogCard.jsx":"dbc81fa80517","components/content/EmailCapture.jsx":"4a11bd386ae6","components/content/EventCard.jsx":"415ee8dc9e49","components/content/ProductCard.jsx":"65bea4d56b93","components/content/PullQuote.jsx":"a460504b90e3","components/content/SpotlightCard.jsx":"6a535b59509c","components/content/StatCounter.jsx":"c8cf48628a21","components/core/Badge.jsx":"0cfbd4357367","components/core/Button.jsx":"fc34e62900c1","components/core/Card.jsx":"cd70bf815a57","components/core/Icon.jsx":"501bad9e5ca2","components/core/IconButton.jsx":"d0bdd6ed27f1","components/core/Logo.jsx":"3313e5500837","components/core/Tag.jsx":"ea99e41743ef","components/feedback/Modal.jsx":"8fe4d8cc1fe4","components/feedback/Toast.jsx":"874b812d1b53","components/forms/Checkbox.jsx":"6c808c89bf8e","components/forms/Input.jsx":"535235ac246c","components/forms/RadioGroup.jsx":"04ec6bd09f52","components/forms/SensoryToggle.jsx":"cd2183cdc253","components/forms/Textarea.jsx":"efb399b60380","components/navigation/Breadcrumb.jsx":"29a4f9c677b3","components/navigation/Footer.jsx":"e2b5f18369ac","components/navigation/MobileNav.jsx":"bf634bcd3d1a","components/navigation/Navbar.jsx":"53759a54ef35","components/planning/ArrivalPlan.jsx":"5298ecdc60bc","components/planning/FundARoom.jsx":"62f6f384e2f8","components/planning/HeroIdCard.jsx":"ff69608182c2","components/planning/SensoryProfile.jsx":"d498de368ab2","components/planning/StoryStrip.jsx":"1e615466cefd","ui_kits/website/About.jsx":"d18f90021534","ui_kits/website/Blog.jsx":"02d0eed8adb5","ui_kits/website/EventDetail.jsx":"982ff1ca164e","ui_kits/website/Events.jsx":"cd53c661dbff","ui_kits/website/HeroIds.jsx":"30e331b26d4b","ui_kits/website/Home.jsx":"a0f85a3a3d99","ui_kits/website/KidMode.jsx":"2b60125b8c0d","ui_kits/website/NotFound.jsx":"91551d48f03b","ui_kits/website/Shell.jsx":"a75866620702","ui_kits/website/Volunteer.jsx":"cfff75052885","ui_kits/website/data.js":"f084c9e9c904"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AusomeHeroesDesignSystem_0fb09e = window.AusomeHeroesDesignSystem_0fb09e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The base surface every content card sits on. */
function Card({
  tone = 'default',
  interactive = false,
  padding = 'md',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-soft)'
    },
    sky: {
      background: 'var(--surface-sky)',
      border: '1.5px solid var(--sky-200)'
    },
    gold: {
      background: 'var(--surface-gold-soft)',
      border: '1.5px solid var(--gold-200)'
    },
    plain: {
      background: 'transparent',
      border: '1.5px dashed var(--border-soft)'
    }
  };
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-xl)',
      padding: pads[padding],
      overflow: 'hidden',
      boxShadow: interactive && hover ? 'var(--shadow-lifted)' : 'var(--shadow-card)',
      transform: interactive && hover ? 'translateY(var(--lift-hover))' : 'none',
      transition: 'transform var(--duration-base) var(--ease-gentle), box-shadow var(--duration-base) var(--ease-gentle)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let cached = null;
function base() {
  if (typeof window !== 'undefined' && window.AH_ICON_BASE) return window.AH_ICON_BASE.replace(/\/$/, '');
  if (cached) return cached;
  if (typeof document === 'undefined') return '../../assets/icons';
  // Derive the design-system root from whichever DS file this page already loaded,
  // so icons resolve in kits, cards, templates and consuming projects alike.
  const src = document.querySelector('script[src*="_ds_bundle.js"]');
  const css = document.querySelector('link[rel="stylesheet"][href*="styles.css"]');
  const ref = src && src.src || css && css.href;
  try {
    cached = ref ? new URL('assets/icons', ref).href.replace(/\/$/, '') : '../../assets/icons';
  } catch (e) {
    cached = '../../assets/icons';
  }
  return cached;
}

/** Single-weight rounded line icon (Lucide set, softened to 1.75 stroke). */
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  title,
  style,
  ...rest
}) {
  const url = `${base()}/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: title ? 'img' : 'presentation',
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      background: color,
      WebkitMaskImage: `url("${url}")`,
      maskImage: `url("${url}")`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/BlogCard.jsx
try { (() => {
/** Blog index / preview card. */
function BlogCard({
  image,
  title,
  excerpt,
  date,
  readingTime,
  href = '#',
  layout = 'stacked',
  style
}) {
  const horizontal = layout === 'horizontal';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      textDecoration: 'none',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: "none",
    style: {
      display: 'flex',
      flexDirection: horizontal ? 'row' : 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: horizontal ? '0 0 38%' : 'none',
      aspectRatio: horizontal ? 'auto' : '16 / 9',
      background: 'var(--surface-sky)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar",
    size: 15
  }), date), readingTime ? /*#__PURE__*/React.createElement("span", null, "\xB7 ", readingTime) : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-2xl)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)'
    }
  }, excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 'var(--space-2)',
      color: 'var(--text-link)',
      fontWeight: 'var(--weight-bold)'
    }
  }, "Read the post ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 17
  })))));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/content/PullQuote.jsx
try { (() => {
/** Parent testimonial set in the serif. No photo needed. */
function PullQuote({
  quote,
  attribution,
  tone = 'cream',
  style
}) {
  const bg = {
    cream: 'transparent',
    sky: 'var(--surface-sky)',
    gold: 'var(--surface-gold-soft)'
  }[tone];
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      padding: tone === 'cream' ? 0 : 'var(--space-10)',
      background: bg,
      borderRadius: tone === 'cream' ? 0 : 'var(--radius-2xl)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-5)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "quote",
    size: 34,
    color: "var(--gold-400)"
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      maxWidth: '26ch',
      fontSize: 'var(--text-3xl)',
      fontStyle: 'italic'
    }
  }, quote), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, attribution) : null);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCounter.jsx
try { (() => {
/** Impact metric. Counts up once, gently, and only if motion is allowed. */
function StatCounter({
  icon = 'heart',
  value,
  label,
  note,
  animate = true,
  style
}) {
  const numeric = parseInt(String(value).replace(/\D/g, ''), 10);
  const suffix = String(value).replace(/[\d,]/g, '');
  const [shown, setShown] = React.useState(animate && numeric ? 0 : numeric);
  React.useEffect(() => {
    if (!animate || !numeric) {
      setShown(numeric);
      return;
    }
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShown(numeric);
      return;
    }
    let raf, start;
    const dur = 1400;
    const step = t => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      setShown(Math.round(numeric * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [numeric, animate]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-2)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-pill)',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--surface-gold-soft)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    color: "var(--gold-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-5xl)',
      fontWeight: 'var(--weight-display)',
      color: 'var(--text-heading)',
      lineHeight: 1
    }
  }, isNaN(numeric) ? value : shown.toLocaleString(), suffix), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-body)'
    }
  }, label), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      maxWidth: 220
    }
  }, note) : null);
}
Object.assign(__ds_scope, { StatCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCounter.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  gold: {
    background: 'var(--gold-100)',
    color: 'var(--gold-800)'
  },
  sky: {
    background: 'var(--sky-100)',
    color: 'var(--sky-800)'
  },
  meadow: {
    background: 'var(--meadow-100)',
    color: 'var(--meadow-700)'
  },
  cape: {
    background: 'var(--cape-50)',
    color: 'var(--cape-700)'
  },
  cocoa: {
    background: 'var(--cocoa-100)',
    color: 'var(--cocoa-700)'
  },
  solid: {
    background: 'var(--gold-400)',
    color: 'var(--text-on-gold)'
  }
};

/** Small status/label pill: "20% of sales donated", "Sensory friendly", "Past event". */
function Badge({
  tone = 'gold',
  icon,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.3,
      ...tones[tone],
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/SpotlightCard.jsx
try { (() => {
/** Hero Spotlight card — a child, by name, doing something. Dignity over pity. */
function SpotlightCard({
  photo,
  name,
  age,
  city,
  line,
  superpower,
  href = '#',
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      textDecoration: 'none',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: "none",
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      background: 'var(--gradient-dawn)'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: `${name}, ${age ? age + ', ' : ''}${city || ''}`,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null, superpower ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "solid",
    icon: "star",
    style: {
      position: 'absolute',
      left: 14,
      bottom: 14
    }
  }, superpower) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-2xl)'
    }
  }, name), age || city ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, [age, city].filter(Boolean).join(' · ')) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      color: 'var(--text-body)'
    }
  }, line), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 'var(--space-3)',
      color: 'var(--text-link)',
      fontWeight: 'var(--weight-bold)'
    }
  }, "Read ", name, "'s story ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 17
  })))));
}
Object.assign(__ds_scope, { SpotlightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SpotlightCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  fontFamily: 'var(--font-body)',
  fontWeight: 'var(--weight-bold)',
  textDecoration: 'none',
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  border: '2px solid transparent',
  transition: 'transform var(--duration-fast) var(--ease-gentle), background var(--duration-fast) var(--ease-gentle), box-shadow var(--duration-fast) var(--ease-gentle), color var(--duration-fast) var(--ease-gentle)'
};
const sizes = {
  sm: {
    fontSize: 'var(--text-sm)',
    padding: '10px 18px',
    minHeight: 40
  },
  md: {
    fontSize: 'var(--text-base)',
    padding: '13px 26px',
    minHeight: 48
  },
  lg: {
    fontSize: 'var(--text-lg)',
    padding: '17px 34px',
    minHeight: 56
  }
};
const variants = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--text-on-gold)',
    boxShadow: 'var(--shadow-gold)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--sky-800)',
    borderColor: 'var(--sky-500)'
  },
  tertiary: {
    background: 'transparent',
    color: 'var(--text-link)',
    padding: '10px 8px',
    boxShadow: 'none'
  },
  cape: {
    background: 'var(--cape-400)',
    color: '#FFF9F5',
    boxShadow: '0 6px 20px rgba(217,85,58,.26)'
  },
  quiet: {
    background: 'var(--cream-200)',
    color: 'var(--text-heading)'
  }
};
const hovers = {
  primary: {
    background: 'var(--action-primary-hover)'
  },
  secondary: {
    background: 'var(--sky-100)',
    borderColor: 'var(--sky-600)'
  },
  tertiary: {
    color: 'var(--text-link-hover)'
  },
  cape: {
    background: 'var(--cape-500)'
  },
  quiet: {
    background: 'var(--cream-300)'
  }
};

/** Primary action control. One clear primary per section. */
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth,
  disabled,
  href,
  children,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      width: fullWidth ? '100%' : undefined,
      opacity: disabled ? 0.45 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 22 : 18
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'lg' ? 22 : 18
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/EmailCapture.jsx
try { (() => {
/** Gentle newsletter block. Asks once, explains what arrives, easy to ignore. */
function EmailCapture({
  title = 'A quiet monthly note',
  body = "One email a month: what's coming up in LA, a new hero story, and nothing else.",
  cta = 'Sign me up',
  onSubmit,
  style
}) {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sky)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-12) var(--space-8)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 30,
    color: "var(--sky-700)"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)',
      maxWidth: '46ch'
    }
  }, body), done ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      color: 'var(--meadow-700)',
      fontWeight: 'var(--weight-bold)'
    }
  }, "Thank you \u2014 we'll write once a month, and never more.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
      if (onSubmit) onSubmit(email);
    },
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)',
      width: 'min(520px,100%)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: email,
    onChange: e => setEmail(e.target.value),
    "aria-label": "Email address",
    placeholder: "you@email.com",
    style: {
      flex: '1 1 220px',
      minHeight: 52,
      padding: '14px 18px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--sky-300)',
      borderRadius: 'var(--radius-md)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit"
  }, cta)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Unsubscribe in one click. We never share your address."));
}
Object.assign(__ds_scope, { EmailCapture });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EmailCapture.jsx", error: String((e && e.message) || e) }); }

// components/content/EventCard.jsx
try { (() => {
const Row = ({
  icon,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 'var(--text-base)',
    color: 'var(--text-body)'
  }
}, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
  name: icon,
  size: 18,
  color: "var(--gold-600)"
}), /*#__PURE__*/React.createElement("span", null, children));

/** Community event / fundraiser card with RSVP. */
function EventCard({
  image,
  title,
  venue,
  date,
  time,
  location,
  badge,
  past = false,
  ctaLabel = 'View details & RSVP',
  onRsvp,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: !past,
    padding: "none",
    style: {
      display: 'flex',
      flexDirection: 'column',
      opacity: past ? 0.72 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 10',
      background: 'var(--gradient-dawn)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: past ? 'grayscale(1)' : 'none'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 44,
    color: "var(--gold-500)"
  })), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: past ? 'cocoa' : 'solid',
    style: {
      position: 'absolute',
      top: 14,
      right: 14
    }
  }, badge) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: 0
    }
  }, title), venue ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-2)',
      color: 'var(--cape-600)',
      fontWeight: 'var(--weight-bold)'
    }
  }, venue) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, date ? /*#__PURE__*/React.createElement(Row, {
    icon: "calendar"
  }, date) : null, time ? /*#__PURE__*/React.createElement(Row, {
    icon: "clock"
  }, time) : null, location ? /*#__PURE__*/React.createElement(Row, {
    icon: "map-pin"
  }, location) : null), !past && onRsvp ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    fullWidth: true,
    onClick: onRsvp,
    style: {
      marginTop: 'var(--space-5)'
    }
  }, ctaLabel) : null));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductCard.jsx
try { (() => {
/** Storefront card: sensory-friendly and adaptive products. */
function ProductCard({
  image,
  name,
  blurb,
  price,
  badge,
  badgeTone = 'meadow',
  onAdd,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: "none",
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: 'var(--surface-sky)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null, badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone,
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, badge) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 'var(--text-base)'
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      marginTop: 'auto',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, price), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "shopping-bag",
    onClick: onAdd
  }, "Add"))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular icon-only control (menu, close, back-to-top). Always give it a label. */
function IconButton({
  icon,
  label,
  tone = 'quiet',
  size = 48,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    quiet: {
      background: hover ? 'var(--cream-200)' : 'transparent',
      color: 'var(--text-heading)'
    },
    gold: {
      background: hover ? 'var(--gold-500)' : 'var(--gold-400)',
      color: 'var(--text-on-gold)'
    },
    outline: {
      background: hover ? 'var(--sky-100)' : 'var(--surface-card)',
      color: 'var(--sky-800)',
      border: '1.5px solid var(--sky-300)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      minWidth: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-gentle)',
      ...tones[tone],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.46)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Machine-traced from the original artwork, rebuilt as flat vector geometry.
// The compact mark drops the orbit ring, which turns to mush below ~72px.
const MARK_FULL = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 200 200\" width=\"100%\" height=\"100%\" style=\"display:block\" role=\"img\" aria-label=\"Ausome Heroes\"><defs><linearGradient id=\"sg-m\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#F7CC8B\"></stop><stop offset=\".55\" stop-color=\"#F4B860\"></stop><stop offset=\"1\" stop-color=\"#E39C33\"></stop></linearGradient><clipPath id=\"rc-m\"><rect x=\"0\" y=\"116\" width=\"200\" height=\"84\"></rect></clipPath></defs><ellipse cx=\"100\" cy=\"120\" rx=\"86\" ry=\"30\" fill=\"none\" stroke=\"#C07A18\" stroke-width=\"12\" stroke-linecap=\"round\" transform=\"rotate(-14 100 120)\"></ellipse><path d=\"M88.59 12.80L115.96 63.98L173.70 58.05L133.48 99.90L156.96 152.99L104.73 127.67L61.50 166.40L69.44 108.90L19.25 79.76L76.38 69.54Z\" fill=\"url(#sg-m)\"></path><g transform=\"translate(45 50) scale(1.1)\"><path d=\"M58.44 0.33Q59.6 0.66 61.92 2.31Q64.24 3.97 64.73 3.81Q65.23 3.64 65.23 2.98Q65.23 2.32 66.39 2.65Q67.55 2.98 68.55 4.47Q69.54 5.96 69.87 9.11Q70.2 12.25 72.35 13.91Q74.5 15.56 74.50 17.05Q74.5 18.54 71.52 23.17Q68.54 27.81 68.71 28.31Q68.87 28.81 70.19 28.31Q71.52 27.81 74.34 25.66Q77.15 23.51 81.78 18.88Q86.42 14.24 86.75 11.92Q87.09 9.6 87.75 8.94Q88.41 8.28 88.91 8.45Q89.4 8.61 89.90 10.43Q90.4 12.25 93.38 10.43Q96.36 8.61 96.53 9.27Q96.69 9.93 95.86 11.42Q95.03 12.91 97.02 12.91Q99.01 12.91 99.50 13.41Q100 13.91 99.34 14.73Q98.68 15.56 97.02 16.23Q95.36 16.89 96.35 18.71Q97.35 20.53 95.36 20.53Q93.38 20.53 92.22 21.36Q91.06 22.19 87.75 26.83Q84.44 31.46 80.96 35.10Q77.48 38.74 79.14 45.70Q80.79 52.65 80.30 54.63Q79.8 56.62 80.80 56.62Q81.79 56.62 74.84 59.77Q67.88 62.91 59.10 66.22Q50.33 69.54 42.88 71.53Q35.43 73.51 28.48 74.84Q21.52 76.16 19.54 76.32Q17.55 76.49 18.05 74.34Q18.54 72.19 18.38 71.19Q18.21 70.2 13.74 69.70Q9.27 69.21 4.63 67.72Q0 66.23 6.46 66.56Q12.91 66.89 17.05 66.22Q21.19 65.56 26.66 62.58Q32.12 59.6 36.59 55.13Q41.06 50.66 42.72 48.51Q44.37 46.36 44.37 45.86Q44.37 45.36 43.55 44.70Q42.72 44.04 43.22 43.38Q43.71 42.72 40.23 41.06Q36.75 39.4 31.79 35.43Q26.82 31.46 23.18 31.46Q19.54 31.46 20.87 30.13Q22.19 28.81 22.19 28.31Q22.19 27.81 20.37 27.31Q18.54 26.82 17.38 25.82Q16.23 24.83 18.88 24.34Q21.52 23.84 20.03 22.35Q18.54 20.86 18.38 20.20Q18.21 19.54 21.86 20.53Q25.5 21.52 25.83 19.87Q26.16 18.21 26.66 17.88Q27.15 17.55 28.31 19.37Q29.47 21.19 33.28 24.34Q37.09 27.48 41.56 29.13Q46.03 30.79 50.66 31.29Q55.3 31.79 55.47 31.29Q55.63 30.79 54.97 30.30Q54.3 29.8 52.15 28.98Q50 28.15 48.67 28.31Q47.35 28.48 44.53 26.49Q41.72 24.5 41.06 23.34Q40.4 22.19 40.56 19.21Q40.73 16.23 40.06 15.89Q39.4 15.56 39.40 15.07Q39.4 14.57 40.06 12.75Q40.73 10.93 42.55 9.44Q44.37 7.95 43.71 6.96Q43.05 5.96 46.20 5.13Q49.34 4.3 49.17 3.64Q49.01 2.98 48.18 2.48Q47.35 1.99 47.68 1.66Q48.01 1.32 50.33 1.32Q52.65 1.32 54.97 2.15Q57.28 2.98 57.28 1.66Q57.28 0.33 57.28 0.17Z\" fill=\"#2A201C\"></path></g><g clip-path=\"url(#rc-m)\"><ellipse cx=\"100\" cy=\"120\" rx=\"86\" ry=\"30\" fill=\"none\" stroke=\"#F4B860\" stroke-width=\"12\" stroke-linecap=\"round\" transform=\"rotate(-14 100 120)\"></ellipse></g></svg>";
const MARK_COMPACT = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\" width=\"100%\" height=\"100%\" style=\"display:block\" role=\"img\" aria-label=\"Ausome Heroes\"><defs><linearGradient id=\"sgc\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#F7CC8B\"/><stop offset=\".55\" stop-color=\"#F4B860\"/><stop offset=\"1\" stop-color=\"#E39C33\"/></linearGradient></defs><path d=\"M86.64 4.93L118.78 64.68L186.28 57.92L139.39 106.95L166.69 169.06L105.57 139.61L54.93 184.76L64.05 117.53L5.46 83.33L72.21 71.23Z\" fill=\"url(#sgc)\"/><g transform=\"translate(37 52) scale(1.27)\"><path d=\"M58.44 0.33Q59.6 0.66 61.92 2.31Q64.24 3.97 64.73 3.81Q65.23 3.64 65.23 2.98Q65.23 2.32 66.39 2.65Q67.55 2.98 68.55 4.47Q69.54 5.96 69.87 9.11Q70.2 12.25 72.35 13.91Q74.5 15.56 74.50 17.05Q74.5 18.54 71.52 23.17Q68.54 27.81 68.71 28.31Q68.87 28.81 70.19 28.31Q71.52 27.81 74.34 25.66Q77.15 23.51 81.78 18.88Q86.42 14.24 86.75 11.92Q87.09 9.6 87.75 8.94Q88.41 8.28 88.91 8.45Q89.4 8.61 89.90 10.43Q90.4 12.25 93.38 10.43Q96.36 8.61 96.53 9.27Q96.69 9.93 95.86 11.42Q95.03 12.91 97.02 12.91Q99.01 12.91 99.50 13.41Q100 13.91 99.34 14.73Q98.68 15.56 97.02 16.23Q95.36 16.89 96.35 18.71Q97.35 20.53 95.36 20.53Q93.38 20.53 92.22 21.36Q91.06 22.19 87.75 26.83Q84.44 31.46 80.96 35.10Q77.48 38.74 79.14 45.70Q80.79 52.65 80.30 54.63Q79.8 56.62 80.80 56.62Q81.79 56.62 74.84 59.77Q67.88 62.91 59.10 66.22Q50.33 69.54 42.88 71.53Q35.43 73.51 28.48 74.84Q21.52 76.16 19.54 76.32Q17.55 76.49 18.05 74.34Q18.54 72.19 18.38 71.19Q18.21 70.2 13.74 69.70Q9.27 69.21 4.63 67.72Q0 66.23 6.46 66.56Q12.91 66.89 17.05 66.22Q21.19 65.56 26.66 62.58Q32.12 59.6 36.59 55.13Q41.06 50.66 42.72 48.51Q44.37 46.36 44.37 45.86Q44.37 45.36 43.55 44.70Q42.72 44.04 43.22 43.38Q43.71 42.72 40.23 41.06Q36.75 39.4 31.79 35.43Q26.82 31.46 23.18 31.46Q19.54 31.46 20.87 30.13Q22.19 28.81 22.19 28.31Q22.19 27.81 20.37 27.31Q18.54 26.82 17.38 25.82Q16.23 24.83 18.88 24.34Q21.52 23.84 20.03 22.35Q18.54 20.86 18.38 20.20Q18.21 19.54 21.86 20.53Q25.5 21.52 25.83 19.87Q26.16 18.21 26.66 17.88Q27.15 17.55 28.31 19.37Q29.47 21.19 33.28 24.34Q37.09 27.48 41.56 29.13Q46.03 30.79 50.66 31.29Q55.3 31.79 55.47 31.29Q55.63 30.79 54.97 30.30Q54.3 29.8 52.15 28.98Q50 28.15 48.67 28.31Q47.35 28.48 44.53 26.49Q41.72 24.5 41.06 23.34Q40.4 22.19 40.56 19.21Q40.73 16.23 40.06 15.89Q39.4 15.56 39.40 15.07Q39.4 14.57 40.06 12.75Q40.73 10.93 42.55 9.44Q44.37 7.95 43.71 6.96Q43.05 5.96 46.20 5.13Q49.34 4.3 49.17 3.64Q49.01 2.98 48.18 2.48Q47.35 1.99 47.68 1.66Q48.01 1.32 50.33 1.32Q52.65 1.32 54.97 2.15Q57.28 2.98 57.28 1.66Q57.28 0.33 57.28 0.17Z\" fill=\"#2A201C\"/></g></svg>";

/** Brand lockup: vector mark + live-text wordmark in the display face. */
function Logo({
  variant = 'horizontal',
  size = 56,
  style,
  ...rest
}) {
  const stacked = variant === 'stacked';
  const wordSize = Math.round(size * 0.44);
  const mark = size < 72 ? MARK_COMPACT : MARK_FULL;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: Math.round(size * 0.2),
      flexDirection: stacked ? 'column' : 'row',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": variant === 'mark' ? undefined : 'true',
    role: variant === 'mark' ? 'img' : undefined,
    "aria-label": variant === 'mark' ? 'Ausome Heroes' : undefined,
    style: {
      width: size,
      height: size,
      display: 'block',
      flex: '0 0 auto',
      lineHeight: 0
    },
    dangerouslySetInnerHTML: {
      __html: mark
    }
  }), variant === 'mark' ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: wordSize,
      lineHeight: 0.96,
      letterSpacing: '-0.02em',
      textAlign: stacked ? 'center' : 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--cocoa-800)'
    }
  }, "Ausome"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      background: 'linear-gradient(90deg,var(--gold-500),var(--meadow-400),var(--sky-500))',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "Heroes")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Filter / category chip. Selectable variant is used on the events and volunteer screens. */
function Tag({
  selected = false,
  icon,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = typeof onClick === 'function';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": interactive ? selected : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: interactive ? 'pointer' : 'default',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      padding: '9px 16px',
      minHeight: 40,
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid ' + (selected ? 'var(--gold-500)' : 'var(--border-soft)'),
      background: selected ? 'var(--gold-100)' : hover && interactive ? 'var(--cream-200)' : 'var(--surface-card)',
      color: selected ? 'var(--gold-800)' : 'var(--text-body)',
      transition: 'background var(--duration-fast) var(--ease-gentle), border-color var(--duration-fast) var(--ease-gentle)',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, children, selected ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15
  }) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/** Centred dialog on a warm scrim. Used for event details + RSVP. */
function Modal({
  open = true,
  title,
  subtitle,
  onClose,
  footer,
  width = 640,
  children,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-4)',
      background: 'rgba(59,46,40,.42)',
      backdropFilter: 'blur(3px)'
    },
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: width,
      maxHeight: '88vh',
      overflowY: 'auto',
      boxSizing: 'border-box',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-lifted)',
      padding: 'var(--space-8)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-3xl)'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      color: 'var(--text-muted)'
    }
  }, subtitle) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose,
    size: 44
  }) : null), children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  success: {
    bg: 'var(--meadow-100)',
    bd: 'var(--meadow-300)',
    fg: 'var(--meadow-700)',
    icon: 'circle-check'
  },
  info: {
    bg: 'var(--sky-100)',
    bd: 'var(--sky-300)',
    fg: 'var(--sky-800)',
    icon: 'info'
  },
  warning: {
    bg: 'var(--gold-100)',
    bd: 'var(--gold-300)',
    fg: 'var(--gold-800)',
    icon: 'circle-alert'
  },
  error: {
    bg: 'var(--cape-50)',
    bd: 'var(--cape-200)',
    fg: 'var(--cape-700)',
    icon: 'circle-alert'
  }
};

/** Quiet confirmation strip. Fades in, stays put, never slides across the screen. */
function Toast({
  tone = 'success',
  title,
  description,
  onDismiss,
  style
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      width: 'min(420px, 100%)',
      boxSizing: 'border-box',
      padding: 'var(--space-4) var(--space-5)',
      borderRadius: 'var(--radius-lg)',
      background: t.bg,
      border: `1.5px solid ${t.bd}`,
      boxShadow: 'var(--shadow-raised)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 22,
    color: t.fg,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-lg)',
      color: t.fg
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      marginTop: 2
    }
  }, description) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 6,
      borderRadius: 'var(--radius-pill)',
      color: t.fg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Large, forgiving checkbox — the whole row is the target. */
function Checkbox({
  label,
  description,
  checked = false,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      padding: 'var(--space-3)',
      borderRadius: 'var(--radius-md)',
      minHeight: 48,
      boxSizing: 'border-box',
      background: checked ? 'var(--gold-50)' : 'transparent',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--duration-fast) var(--ease-gentle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 26,
      height: 26,
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      marginTop: 1,
      border: `2px solid ${checked ? 'var(--gold-500)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--gold-400)' : 'var(--surface-card)'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 17,
    color: "var(--cocoa-800)"
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-heading)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const stateColor = {
  default: 'var(--border-strong)',
  error: 'var(--state-error)',
  success: 'var(--state-success)'
};

/** Labelled text field with visible help, error and success states. */
function Input({
  label,
  id,
  type = 'text',
  hint,
  error,
  success,
  required,
  optional,
  value,
  onChange,
  placeholder,
  icon,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const state = error ? 'error' : success ? 'success' : 'default';
  const fieldId = id || `f-${label ? label.toLowerCase().replace(/\W+/g, '-') : 'input'}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-heading)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cape-600)'
    }
  }, " *") : optional ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 400
    }
  }, " (optional)") : null) : null, hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, hint) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 19,
    color: "var(--text-muted)",
    style: {
      position: 'absolute',
      left: 16
    }
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    "aria-invalid": !!error,
    "aria-describedby": error ? fieldId + '-msg' : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      minHeight: 52,
      padding: icon ? '14px 16px 14px 46px' : '14px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${focus ? 'var(--border-focus)' : stateColor[state]}`,
      boxShadow: focus ? '0 0 0 4px var(--sky-100)' : 'none',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-gentle), box-shadow var(--duration-fast) var(--ease-gentle)'
    }
  }, rest))), error || success ? /*#__PURE__*/React.createElement("span", {
    id: fieldId + '-msg',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--text-sm)',
      color: error ? 'var(--state-error)' : 'var(--state-success)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: error ? 'circle-alert' : 'circle-check',
    size: 16
  }), error || success) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
/** Single-choice group rendered as generous rows. */
function RadioGroup({
  legend,
  hint,
  name,
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, legend ? /*#__PURE__*/React.createElement("legend", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-heading)',
      padding: 0
    }
  }, legend) : null, hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, hint) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-2)'
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    const on = value === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        cursor: 'pointer',
        minHeight: 48,
        padding: '10px var(--space-4)',
        boxSizing: 'border-box',
        borderRadius: 'var(--radius-md)',
        border: `1.5px solid ${on ? 'var(--gold-500)' : 'var(--border-soft)'}`,
        background: on ? 'var(--gold-50)' : 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: val,
      checked: on,
      onChange: () => onChange && onChange(val),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 1,
        height: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        flex: '0 0 auto',
        border: `2px solid ${on ? 'var(--gold-500)' : 'var(--border-strong)'}`,
        background: 'var(--surface-card)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, on ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: 'var(--gold-500)'
      }
    }) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-base)',
        color: 'var(--text-heading)'
      }
    }, label));
  })));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/SensoryToggle.jsx
try { (() => {
/**
 * Header control that switches the page into sensory-calm mode:
 * larger type, softened accents, no motion, no shadows.
 * Toggling adds/removes the `sensory-calm` class on <html>.
 */
function SensoryToggle({
  on = false,
  onChange,
  label = 'Calm mode',
  target,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const toggle = () => {
    const next = !on;
    const root = target || (typeof document !== 'undefined' ? document.documentElement : null);
    if (root) root.classList.toggle('sensory-calm', next);
    if (onChange) onChange(next);
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      minHeight: 44,
      padding: '8px 14px 8px 12px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      whiteSpace: 'nowrap',
      color: on ? 'var(--sky-800)' : 'var(--text-body)',
      background: on ? 'var(--sky-100)' : hover ? 'var(--cream-200)' : 'transparent',
      border: `1.5px solid ${on ? 'var(--sky-300)' : 'var(--border-soft)'}`,
      transition: 'background var(--duration-fast) var(--ease-gentle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: on ? 'headphones' : 'sun',
    size: 18
  }), label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      marginLeft: 4,
      position: 'relative',
      background: on ? 'var(--sky-500)' : 'var(--cocoa-200)',
      transition: 'background var(--duration-base) var(--ease-gentle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#FFFDF9',
      boxShadow: 'var(--shadow-hairline)',
      transition: 'left var(--duration-base) var(--ease-gentle)'
    }
  })));
}
Object.assign(__ds_scope, { SensoryToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SensoryToggle.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line field. Same anatomy as Input. */
function Textarea({
  label,
  id,
  hint,
  error,
  required,
  optional,
  rows = 4,
  value,
  onChange,
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || `t-${label ? label.toLowerCase().replace(/\W+/g, '-') : 'textarea'}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-heading)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cape-600)'
    }
  }, " *") : optional ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 400
    }
  }, " (optional)") : null) : null, hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, hint) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": !!error,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '14px 16px',
      resize: 'vertical',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${error ? 'var(--state-error)' : focus ? 'var(--border-focus)' : 'var(--border-strong)'}`,
      boxShadow: focus ? '0 0 0 4px var(--sky-100)' : 'none',
      outline: 'none'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--state-error)'
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** Trail of ancestor links. Sentence case, chevron separators. */
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-sm)',
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.label
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        color: 'var(--text-muted)',
        fontWeight: 'var(--weight-semibold)'
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      style: {
        color: 'var(--text-link)',
        fontWeight: 'var(--weight-semibold)',
        textDecoration: 'none'
      }
    }, it.label), last ? null : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 15,
      color: "var(--cocoa-300)"
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const ASSETS = () => typeof window !== 'undefined' && window.AH_ASSET_BASE || '../../assets';
const COLS = [{
  title: 'Explore',
  links: ['Home', 'About', 'Hero Spotlight', 'Blog']
}, {
  title: 'Get involved',
  links: ['Volunteer', 'Nominate a hero', 'LA events', 'Partner with us']
}];

/** Page footer on a sky field — contact, links, 501(c)(3) line. */
function Footer({
  columns = COLS,
  onDonate,
  logoSrc,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-sky)',
      borderTop: '1.5px solid var(--sky-200)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--gutter) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Ausome Heroes",
    style: {
      height: 56,
      width: 'auto',
      marginBottom: 'var(--space-4)'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 58,
    style: {
      marginBottom: 'var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      maxWidth: 320
    }
  }, "Giving every child wings. Community, resources and sensory-friendly events for autistic kids and their families."), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    icon: "hand-heart",
    onClick: onDonate,
    style: {
      marginTop: 'var(--space-2)'
    }
  }, "Donate")), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-lg)',
      marginBottom: 'var(--space-3)'
    }
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--sky-800)',
      textDecoration: 'none',
      fontWeight: 'var(--weight-semibold)'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-lg)',
      marginBottom: 'var(--space-3)'
    }
  }, "Say hello"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 18,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@ausomeheroes.com",
    style: {
      color: 'var(--sky-800)',
      textDecoration: 'none'
    }
  }, "hello@ausomeheroes.com")), /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 18,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("span", null, "Los Angeles, California")), /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external-link",
    size: 18,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--sky-800)',
      textDecoration: 'none'
    }
  }, "Instagram & Facebook"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1.5px solid var(--sky-200)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--gutter)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      maxWidth: 'none'
    }
  }, "\xA9 ", new Date().getFullYear(), " Ausome Heroes \xB7 501(c)(3) nonprofit \xB7 EIN 93-3634596")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MobileNav.jsx
try { (() => {
/** Full-screen mobile navigation sheet. */
function MobileNav({
  open = false,
  links = [],
  active,
  onClose,
  onDonate,
  calm,
  onCalmChange,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--space-5) var(--gutter)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close menu",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-6)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: e => {
      if (l.onClick) l.onClick(e);
      if (onClose) onClose();
    },
    "aria-current": active === l.label ? 'page' : undefined,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--weight-bold)',
      color: active === l.label ? 'var(--gold-800)' : 'var(--text-heading)',
      textDecoration: 'none',
      padding: '12px 0',
      borderBottom: '1.5px solid var(--border-soft)'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SensoryToggle, {
    on: calm,
    onChange: onCalmChange,
    style: {
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    fullWidth: true,
    icon: "hand-heart",
    onClick: onDonate
  }, "Donate")));
}
Object.assign(__ds_scope, { MobileNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MobileNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
const ASSETS = () => typeof window !== 'undefined' && window.AH_ASSET_BASE || '../../assets';
const DEFAULT_LINKS = [{
  label: 'Home',
  href: '#'
}, {
  label: 'Rooms',
  href: '#'
}, {
  label: 'Ausome IDs',
  href: '#'
}, {
  label: 'How we work',
  href: '#'
}, {
  label: 'The log',
  href: '#'
}];

/** Site header: logo, links, calm-mode switch, and an ever-present Donate. */
function Navbar({
  links = DEFAULT_LINKS,
  active,
  logoSrc,
  onDonate,
  onMenu,
  calm = false,
  onCalmChange,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(255,253,249,.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1.5px solid var(--border-soft)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '14px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      flexWrap: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      flex: '0 0 auto',
      textDecoration: 'none'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Ausome Heroes",
    style: {
      height: 52,
      width: 'auto'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 46
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      marginLeft: 'auto',
      flexWrap: 'nowrap'
    },
    className: "ah-nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    onClick: l.onClick,
    "aria-current": active === l.label ? 'page' : undefined,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-base)',
      whiteSpace: 'nowrap',
      color: active === l.label ? 'var(--gold-800)' : 'var(--text-heading)',
      textDecoration: 'none',
      paddingBottom: 3,
      borderBottom: `2.5px solid ${active === l.label ? 'var(--gold-400)' : 'transparent'}`
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    },
    className: "ah-nav-actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.SensoryToggle, {
    on: calm,
    onChange: onCalmChange
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    icon: "hand-heart",
    onClick: onDonate
  }, "Donate")), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "menu",
    label: "Open menu",
    onClick: onMenu,
    style: {
      display: 'none'
    },
    className: "ah-nav-burger"
  })));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/planning/ArrivalPlan.jsx
try { (() => {
/** The logistics that decide whether a family actually comes: park, door, greeter, exit. */
function ArrivalPlan({
  steps = [],
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sky)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-5)',
      fontSize: 'var(--text-2xl)'
    }
  }, "Getting in without the hard part"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s.title,
    className: "ah-arrival-step",
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 1fr',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      display: 'grid',
      placeItems: 'center',
      border: '1.5px solid var(--sky-200)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon || 'chevron-right',
    size: 21,
    color: "var(--sky-700)"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      color: 'var(--text-heading)'
    }
  }, i + 1, ". ", s.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 2
    }
  }, s.detail))))));
}
Object.assign(__ds_scope, { ArrivalPlan });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/planning/ArrivalPlan.jsx", error: String((e && e.message) || e) }); }

// components/planning/FundARoom.jsx
try { (() => {
/**
 * Donation as concrete units of room, not an abstract amount.
 * Each tier names the physical thing the money becomes.
 */
function FundARoom({
  tiers = [],
  selected,
  onSelect,
  onGive,
  note,
  style
}) {
  const [pick, setPick] = React.useState(selected || tiers[1] && tiers[1].amount);
  const choose = a => {
    setPick(a);
    if (onSelect) onSelect(a);
  };
  const current = tiers.find(t => t.amount === pick) || tiers[0];
  return /*#__PURE__*/React.createElement("section", {
    className: "ah-fund",
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah-fund-tiers",
    style: {
      '--ah-tiers': tiers.length
    }
  }, tiers.map(t => {
    const on = t.amount === pick;
    return /*#__PURE__*/React.createElement("button", {
      key: t.amount,
      type: "button",
      onClick: () => choose(t.amount),
      "aria-pressed": on,
      style: {
        textAlign: 'left',
        cursor: 'pointer',
        padding: 'var(--space-5)',
        borderRadius: 'var(--radius-xl)',
        background: on ? 'var(--surface-gold-soft)' : 'var(--surface-card)',
        border: `2px solid ${on ? 'var(--gold-500)' : 'var(--border-soft)'}`,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
        transition: 'background var(--duration-fast) var(--ease-gentle), border-color var(--duration-fast) var(--ease-gentle)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon || 'hand-heart',
      size: 26,
      color: on ? 'var(--gold-700)' : 'var(--sky-700)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-3xl)',
        fontWeight: 'var(--weight-display)',
        color: 'var(--text-heading)',
        lineHeight: 1
      }
    }, "$", t.amount), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 'var(--weight-bold)',
        color: 'var(--text-heading)'
      }
    }, t.buys), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, t.detail));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    icon: "hand-heart",
    onClick: () => onGive && onGive(pick)
  }, "Give $", pick, " \u2014 ", current ? current.buys.toLowerCase() : ''), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      maxWidth: '38ch'
    }
  }, note) : null));
}
Object.assign(__ds_scope, { FundARoom });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/planning/FundARoom.jsx", error: String((e && e.message) || e) }); }

// components/planning/HeroIdCard.jsx
try { (() => {
const Row = ({
  icon,
  label,
  value,
  color
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '26px 1fr',
    gap: 'var(--space-3)',
    alignItems: 'flex-start'
  }
}, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
  name: icon,
  size: 20,
  color: color,
  style: {
    marginTop: 3
  }
}), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'block',
    fontSize: 'var(--text-sm)',
    color: 'var(--text-muted)',
    fontWeight: 'var(--weight-bold)'
  }
}, label), /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'block',
    fontSize: 'var(--text-lg)',
    color: 'var(--text-heading)'
  }
}, value)));

/**
 * A hero card the child writes themselves. It is a celebration and, folded in a pocket,
 * a working accommodations card they can hand to a venue.
 */
function HeroIdCard({
  name,
  age,
  superpower,
  helps,
  hard,
  askMeAbout,
  photo,
  printable = true,
  style
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: 'var(--surface-card)',
      border: '2px solid var(--gold-300)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 420,
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--gradient-dawn)',
      padding: 'var(--space-5)',
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      flex: '0 0 auto',
      background: 'var(--surface-sky)',
      display: 'grid',
      placeItems: 'center'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 30,
    color: "var(--gold-600)"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--weight-display)',
      color: 'var(--text-heading)',
      lineHeight: 1.05
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--gold-800)',
      fontWeight: 'var(--weight-bold)'
    }
  }, age ? `${age} · ` : '', superpower))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    icon: "circle-check",
    label: "What helps me",
    value: helps,
    color: "var(--meadow-600)"
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "circle-alert",
    label: "What's hard for me",
    value: hard,
    color: "var(--cape-500)"
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "message-circle",
    label: "Ask me about",
    value: askMeAbout,
    color: "var(--sky-700)"
  })), printable ? /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1.5px solid var(--cream-200)',
      padding: 'var(--space-4) var(--space-5)',
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "printer",
    size: 17
  }), " Prints wallet-size"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "download",
    size: 17
  }), " Save as a card")) : null);
}
Object.assign(__ds_scope, { HeroIdCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/planning/HeroIdCard.jsx", error: String((e && e.message) || e) }); }

// components/planning/SensoryProfile.jsx
try { (() => {
const LEVELS = ['Low', 'Medium', 'High'];
const AXES = {
  sound: 'volume-2',
  light: 'sun',
  crowd: 'users',
  smell: 'wind',
  waiting: 'clock',
  space: 'move'
};
function Meter({
  level,
  inverted
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 4
    },
    "aria-hidden": "true"
  }, [1, 2, 3].map(i => {
    const on = i <= level;
    const hot = inverted ? level <= 1 : level >= 3;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 26,
        height: 8,
        borderRadius: 999,
        background: on ? hot ? 'var(--cape-300)' : level === 2 ? 'var(--gold-400)' : 'var(--meadow-400)' : 'var(--cream-300)'
      }
    });
  }));
}

/**
 * The honest pre-visit disclosure. Six axes, measured the same way at every event,
 * each with a plain sentence. This is the answer to "will this room hurt my kid?".
 */
function SensoryProfile({
  axes = [],
  facts = [],
  measuredOn,
  compact = false,
  style
}) {
  if (compact) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ah-sensory",
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-4)',
        ...style
      }
    }, axes.map(a => /*#__PURE__*/React.createElement("span", {
      key: a.label,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: AXES[a.key] || 'info',
      size: 17,
      color: "var(--cocoa-400)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        fontWeight: 'var(--weight-semibold)'
      }
    }, a.label), /*#__PURE__*/React.createElement(Meter, {
      level: a.level,
      inverted: a.inverted
    }))));
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "ah-sensory",
    style: {
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-soft)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-2xl)'
    }
  }, "What this room is like"), measuredOn ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Measured in person, ", measuredOn) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, axes.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.label,
    className: "ah-sensory-row",
    style: {
      padding: 'var(--space-3) 0',
      borderTop: i ? '1.5px solid var(--cream-200)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: AXES[a.key] || 'info',
    size: 22,
    color: "var(--cocoa-500)",
    className: "ah-s-icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ah-s-label",
    style: {
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, a.label), /*#__PURE__*/React.createElement("span", {
    className: "ah-s-meter",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Meter, {
    level: a.level,
    inverted: a.inverted
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, LEVELS[a.level - 1])), /*#__PURE__*/React.createElement("span", {
    className: "ah-s-note",
    style: {
      fontSize: 'var(--text-base)'
    }
  }, a.note)))), facts.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 'var(--space-5) 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, facts.map(f => /*#__PURE__*/React.createElement("li", {
    key: f.label,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: f.yes ? 'circle-check' : 'circle-alert',
    size: 20,
    color: f.yes ? 'var(--meadow-600)' : 'var(--cape-600)',
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-heading)'
    }
  }, f.label), " \u2014 ", f.note)))) : null);
}
Object.assign(__ds_scope, { SensoryProfile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/planning/SensoryProfile.jsx", error: String((e && e.message) || e) }); }

// components/planning/StoryStrip.jsx
try { (() => {
/**
 * A visual social story: what will happen, in order, in the child's own reading level.
 * Frames are large, one sentence each, and the last frame is always about leaving.
 */
function StoryStrip({
  title = 'What will happen',
  frames = [],
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "ah-story",
    style: style
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-2xl)',
      margin: '0 0 var(--space-5)'
    }
  }, title), /*#__PURE__*/React.createElement("ol", {
    className: "ah-story-frames",
    style: {
      '--ah-cols': Math.min(frames.length, 4)
    }
  }, frames.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: f.text,
    style: {
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-soft)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: 'var(--surface-sky)',
      display: 'grid',
      placeItems: 'center'
    }
  }, f.image ? /*#__PURE__*/React.createElement("img", {
    src: f.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: f.icon || 'image',
    size: 40,
    color: "var(--sky-600)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--gold-700)',
      fontSize: 'var(--text-lg)'
    }
  }, f.step || (i === 0 ? 'First' : i === frames.length - 1 ? 'Last' : 'Then')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-xl)',
      lineHeight: 1.45,
      color: 'var(--text-heading)',
      marginTop: 4
    }
  }, f.text))))));
}
Object.assign(__ds_scope, { StoryStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/planning/StoryStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
function AHAbout() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const {
    Card,
    Icon,
    Button,
    Badge
  } = DS;
  const [ledger, setLedger] = React.useState(false);
  const RULES = [{
    n: '1',
    rule: 'Do not crouch down to talk to a child unless they invite you.',
    why: 'It puts an adult face inside a kid\u2019s personal space and demands eye contact to end it.'
  }, {
    n: '2',
    rule: 'Do not offer a high five, a fist bump, or a hand to shake.',
    why: 'A refused greeting becomes a small public failure. Nod, or say nothing at all.'
  }, {
    n: '3',
    rule: 'If a child walks away mid-sentence, let them go.',
    why: 'They have finished the conversation. Following it up teaches them that leaving does not work.'
  }];
  const SPEND = [['Venue hire and quiet rooms', 41, '$18,400'], ['Kit — ear defenders, fidgets, signage, printed cards', 22, '$9,900'], ['Measuring visits — mileage, sound meter, staff time', 17, '$7,600'], ['Payment and admin fees', 9, '$4,050'], ['Website, email, insurance', 11, '$4,900']];
  const REFUSALS = ['Awareness campaigns. Everyone is aware. Awareness has never got a family through a door.', 'Puzzle-piece imagery, blue lighting, and anything that frames autism as a mystery to be solved.', 'Cure, recovery, or "overcoming autism" language, in copy or in a grant application.', 'Photographing a child without the child agreeing, separately from the parent agreeing.', 'Describing a room as calm, magical or unforgettable when we have not measured it.', 'Naming a child\u2019s diagnosis on this site. We ask what helps, never what they have.'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PageHeader, {
    title: "How we work",
    lead: "We are a small Los Angeles nonprofit with one method: go to the room, measure it, brief the staff, publish what we found \u2014 including the parts nobody can fix.",
    breadcrumb: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'How we work'
    }]
  }), /*#__PURE__*/React.createElement(window.Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    icon: "badge-check"
  }, "The staff briefing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "Three rules. That is the entire training."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)'
    }
  }, "Every venue that hosts us gets a fifteen-minute briefing on the morning of the event. Nine venues in LA have had it. It is three sentences long, and it is the single thing that changes a room most.")), /*#__PURE__*/React.createElement("div", {
    className: "ah-grid-3",
    style: {
      marginTop: 'var(--space-8)'
    }
  }, RULES.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.n,
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-5xl)',
      fontWeight: 800,
      color: 'var(--gold-300)',
      lineHeight: 1
    }
  }, r.n), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      color: 'var(--text-heading)'
    }
  }, r.rule), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)'
    }
  }, r.why)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, "Take these and use them. They are not ours to licence \u2014 ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "download the one-page briefing sheet"), " and hand it to any venue you deal with, with or without us.")), /*#__PURE__*/React.createElement(window.Section, {
    tone: "sky"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah-split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "What we measure, and what we will not say"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)'
    }
  }, "Six readings, the same six every time, taken standing in the room with a sound meter and a notebook: sound, light, crowd, smell, waiting, and room to move. Plus the three facts that decide most visits \u2014 is there a quiet room, are the staff briefed, and what is the loud surprise nobody warned you about."), /*#__PURE__*/React.createElement("p", null, "A venue cannot pay to be listed and cannot ask us to soften a reading. If the pizza ovens are five metres from the tables, the page says so."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => window.AHGo('Rooms')
  }, "See every room we have measured")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      color: 'var(--text-heading)',
      marginBottom: 'var(--space-4)'
    }
  }, "Things we refuse to do"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, REFUSALS.map(r => /*#__PURE__*/React.createElement("li", {
    key: r,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18,
    color: "var(--cape-500)",
    style: {
      marginTop: 4
    }
  }), /*#__PURE__*/React.createElement("span", null, r))))))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "Where the money went"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0',
      fontSize: 'var(--text-lg)'
    }
  }, "Financial year 2025. Total spent: $44,850.")), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    iconRight: ledger ? 'chevron-down' : 'chevron-right',
    onClick: () => setLedger(!ledger)
  }, ledger ? 'Hide the detail' : 'Show the line items')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, SPEND.map(([label, pct, amount]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 96px',
      gap: 'var(--space-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12,
      borderRadius: 999,
      background: 'var(--cream-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: label.startsWith('Payment') ? 'var(--cocoa-300)' : 'var(--gold-400)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-heading)',
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    }
  }, amount)))), ledger ? /*#__PURE__*/React.createElement(Card, {
    tone: "sky",
    padding: "lg",
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "The full ledger is a spreadsheet with 214 rows, including the $38 we spent on a sound meter that turned out to be inaccurate and had to be replaced. Email ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@ausomeheroes.com"
  }, "hello@ausomeheroes.com"), " and we will send it, unredacted, to anyone who asks \u2014 donor or not.")) : null), /*#__PURE__*/React.createElement(window.Section, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah-split"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lifted)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.A + '/photo-founder-allie.jpeg',
    alt: "Allie, founder of Ausome Heroes, with her son Kadence",
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gold-700)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-label)'
    }
  }, "Why the method exists"), /*#__PURE__*/React.createElement("h2", null, "Nine minutes at a birthday party"), /*#__PURE__*/React.createElement("p", null, "Kadence was five. Bouncy castle, a speaker the size of a fridge, eleven children who all knew a song he had never heard. We lasted nine minutes."), /*#__PURE__*/React.createElement("p", null, "In the car afterwards I wrote down what would have made it work: a quieter hour, a room to step into, staff who had been told what to expect. None of it was expensive. None of it existed nearby."), /*#__PURE__*/React.createElement("p", null, "So the list became the method. Everything on this site is that list, applied to somebody else's room \u2014 because the problem was never my son."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, "\u2014 Allie, founder")))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("h2", null, "Who actually does this"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      marginBottom: 'var(--space-8)'
    }
  }, "Two paid part-time roles and a rota of volunteers. Nobody here has a title longer than their job."), /*#__PURE__*/React.createElement("div", {
    className: "ah-grid-3"
  }, [['Allie', 'Founder — does the measuring visits and the venue briefings.', 'sunrise'], ['Marisol', 'Runs the door at every LA event. The person you meet first.', 'hand'], ['A rota of 50-odd', 'Set-up, quiet-room cover, and the photography nobody is obliged to be in.', 'users']].map(([name, role, icon]) => /*#__PURE__*/React.createElement(Card, {
    key: name,
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 28,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-heading)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, role)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-10)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "hand-heart",
    onClick: () => window.AHDonate()
  }, "Fund a room"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => window.AHGo('Volunteer')
  }, "Take a shift"))));
}
Object.assign(window, {
  AHAbout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Blog.jsx
try { (() => {
function AHBlog() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const {
    Card,
    Icon,
    Button,
    Badge,
    Tag,
    EmailCapture,
    SensoryProfile
  } = DS;
  const [filter, setFilter] = React.useState('Everything');
  const [open, setOpen] = React.useState(null);
  const KINDS = {
    'Room log': {
      tone: 'sky',
      icon: 'volume-2'
    },
    'What we got wrong': {
      tone: 'cape',
      icon: 'circle-alert'
    },
    'Method change': {
      tone: 'meadow',
      icon: 'badge-check'
    }
  };
  const entries = [{
    id: 'apple-jan',
    kind: 'Room log',
    title: 'Apple Del Amo, measured 29 January',
    date: '29 January 2026',
    venue: 'Apple Store, Del Amo Fashion Center',
    summary: 'Quietest room we have measured. 55 dB, twelve kids, mall still closed. The training room at the back has an independent light switch, which is rarer than it sounds.',
    body: ['We arrived at 8:20 with the sound meter and the mall was silent — that is the whole reason this one works. The store music was off before we asked.', 'Sound peaked at 55 dB during the session and that was our own voices. Light is bright and even with no flicker; the back tables sit under a softer run of fittings. Twelve children and four staff in a space built for eighty.', 'The one thing we could not resolve: Apple would like photographs for their own channels. We negotiated a decline-at-the-door option and they agreed in writing. If you say no, nobody follows it up.'],
    changed: 'Added "photos taken" as a standing fact on every event page, because we had been treating it as a detail rather than a decision families make.',
    axes: [{
      key: 'sound',
      label: 'Sound',
      level: 1,
      note: '55 dB, mostly our own voices. Store music off.'
    }, {
      key: 'light',
      label: 'Light',
      level: 2,
      note: 'Bright, even, no flicker. Back tables softer.'
    }, {
      key: 'crowd',
      label: 'Crowd',
      level: 1,
      note: 'Twelve children, four staff, closed mall outside.'
    }, {
      key: 'smell',
      label: 'Smell',
      level: 1,
      note: 'Nothing to speak of during our hour.'
    }, {
      key: 'waiting',
      label: 'Waiting',
      level: 1,
      note: 'No fixed start. Doors open five minutes early.'
    }, {
      key: 'space',
      label: 'Room to move',
      level: 2,
      note: 'Whole store plus the empty mall corridor.',
      inverted: true
    }]
  }, {
    id: 'wrong-quiet-room',
    kind: 'What we got wrong',
    title: 'We called a corridor a quiet room',
    date: '14 January 2026',
    venue: 'Carson community room',
    summary: 'For three events we listed a "quiet room" that was a corridor with a door at each end. Two families told us. They were right and we were wrong.',
    body: ['The space had a door, a chair and no overhead light, so we ticked the box. What it also had was two doors — meaning people walked through it, which makes it the opposite of a quiet room.', 'A parent emailed after the second event. We did not change it. Another parent said the same thing after the third, and only then did we go back and stand in it for ten minutes, which is when it became obvious.', 'The rule now: a quiet room has one entrance, or it is not a quiet room. We re-audited the four venues we had already published and downgraded one of them.'],
    changed: 'A quiet room must have a single entrance. Re-audited all four published venues; one downgraded to "no quiet room".',
    correction: 'Corrected 14 January 2026 — the Carson listing said "quiet room: yes" from 2 November to 14 January. If you attended on the strength of that, we are sorry.'
  }, {
    id: 'method-sound',
    kind: 'Method change',
    title: 'We stopped publishing average sound levels',
    date: '2 December 2025',
    venue: 'All venues',
    summary: 'An average tells you nothing about the moment a hand dryer goes off. We now publish the peak and name the specific loud surprise.',
    body: ['Our first six listings gave an average decibel reading across the session. It looked scientific and it was useless: a room that sits at 58 dB and spikes to 96 when the animatronic show starts is not a 62 dB room.', 'Every listing now records the peak, and the "loud surprise" fact names the thing that causes it — the show, the dryer, the till printer, the fire door.', 'We went back and re-measured all six. Two moved up a level. One moved down.'],
    changed: 'Peak sound replaces average, and every venue must name its loud surprise or state that it does not have one.'
  }];
  const shown = filter === 'Everything' ? entries : entries.filter(e => e.kind === filter);
  const entry = entries.find(e => e.id === open);
  if (entry) {
    const k = KINDS[entry.kind];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PageHeader, {
      title: entry.title,
      lead: `${entry.kind} · ${entry.venue} · ${entry.date}`,
      breadcrumb: [{
        label: 'Home',
        href: '#'
      }, {
        label: 'The log',
        href: '#'
      }, {
        label: entry.venue
      }]
    }), /*#__PURE__*/React.createElement(window.Section, {
      tone: "card"
    }, /*#__PURE__*/React.createElement("article", {
      style: {
        maxWidth: 'var(--container-narrow)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: k.tone,
      icon: k.icon
    }, entry.kind), entry.correction ? /*#__PURE__*/React.createElement(Card, {
      tone: "plain",
      padding: "md",
      style: {
        borderColor: 'var(--cape-200)',
        background: 'var(--cape-50)',
        marginTop: 'var(--space-5)',
        display: 'grid',
        gridTemplateColumns: '24px 1fr',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-alert",
      size: 20,
      color: "var(--cape-600)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--cape-700)'
      }
    }, entry.correction)) : null, entry.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontSize: 'var(--text-lg)',
        marginTop: 'var(--space-5)'
      }
    }, p)), entry.axes ? /*#__PURE__*/React.createElement(SensoryProfile, {
      axes: entry.axes,
      measuredOn: entry.date,
      style: {
        marginTop: 'var(--space-8)'
      }
    }) : null, /*#__PURE__*/React.createElement(Card, {
      tone: "gold",
      padding: "lg",
      style: {
        marginTop: 'var(--space-8)'
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        color: 'var(--text-heading)',
        marginBottom: 6
      }
    }, "What changed because of this"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, entry.changed)), /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary",
      icon: "arrow-left",
      style: {
        marginTop: 'var(--space-8)'
      },
      onClick: () => setOpen(null)
    }, "Back to the log"))));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PageHeader, {
    title: "The log",
    lead: "Not a blog. A running record of every room we measured, every thing we got wrong, and every rule that changed as a result. Dated, corrected in public, and never quietly edited.",
    breadcrumb: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'The log'
    }]
  }), /*#__PURE__*/React.createElement(window.Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-8)'
    }
  }, ['Everything', 'Room log', 'What we got wrong', 'Method change'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    icon: KINDS[t] ? KINDS[t].icon : undefined,
    selected: filter === t,
    onClick: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, shown.map(e => {
    const k = KINDS[e.kind];
    return /*#__PURE__*/React.createElement(Card, {
      key: e.id,
      interactive: true,
      padding: "none",
      onClick: () => {
        setOpen(e.id);
        window.scrollTo(0, 0);
      },
      style: {
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '160px 1fr',
        alignItems: 'stretch'
      },
      className: "ah-room-row"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: e.kind === 'What we got wrong' ? 'var(--cape-50)' : e.kind === 'Method change' ? 'var(--meadow-50)' : 'var(--sky-50)',
        padding: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: k.icon,
      size: 26,
      color: e.kind === 'What we got wrong' ? 'var(--cape-600)' : e.kind === 'Method change' ? 'var(--meadow-600)' : 'var(--sky-700)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--text-heading)',
        fontSize: 'var(--text-sm)'
      }
    }, e.kind), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, e.date)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: 'var(--text-2xl)'
      }
    }, e.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '4px 0 var(--space-3)',
        color: 'var(--text-muted)'
      }
    }, e.venue), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, e.summary), e.correction ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 'var(--space-3) 0 0',
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center',
        color: 'var(--cape-700)',
        fontWeight: 700,
        fontSize: 'var(--text-sm)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-alert",
      size: 16
    }), " Carries a published correction") : null));
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "sky",
    padding: "lg",
    style: {
      marginTop: 'var(--space-10)',
      display: 'grid',
      gridTemplateColumns: '32px 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 26,
    color: "var(--sky-700)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '70ch'
    }
  }, "This replaced the founder's blog. Reflections were pleasant to write and did nothing for a parent deciding about a Tuesday. A log is useful: it is the audit trail behind every sensory profile on this site, it shows the method being corrected in public, and when we get something wrong the correction stays on the page with the date we published the mistake."))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement(EmailCapture, {
    title: "Get the log by email",
    body: "One note a month: rooms measured, things corrected, rules changed. No appeals, no campaigns."
  })));
}
Object.assign(window, {
  AHBlog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EventDetail.jsx
try { (() => {
function AHEventDetail({
  id
}) {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const {
    SensoryProfile,
    ArrivalPlan,
    StoryStrip,
    Badge,
    Button,
    Input,
    Textarea,
    Checkbox,
    Card,
    Icon
  } = DS;
  const e = (window.AH_EVENTS || []).find(x => x.id === id) || window.AH_EVENTS[0];
  const [needs, setNeeds] = React.useState(['A quiet room']);
  const [sent, setSent] = React.useState(false);
  const toggle = v => setNeeds(needs.includes(v) ? needs.filter(x => x !== v) : [...needs, v]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-dawn)',
      padding: 'var(--space-12) 0 var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah-container"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => window.AHGo('LA Events'),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-link)',
      fontWeight: 700,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 18
  }), " All events"), /*#__PURE__*/React.createElement("div", {
    className: "ah-split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    icon: "calendar"
  }, e.date), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, e.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: 0
    }
  }, e.venue, " \xB7 ", e.time), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gold-800)',
      fontWeight: 700,
      marginTop: 'var(--space-2)'
    }
  }, e.give), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "#rsvp"
  }, "Tell us you're coming"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    icon: "mic",
    onClick: () => window.AHGo('Kid mode')
  }, "Read the kid's version"))), /*#__PURE__*/React.createElement(window.RoomPhoto, {
    ratio: "16 / 10",
    label: "Photo of the room",
    note: "A wide shot of the actual space, taken on the measuring visit, plus one of the quiet room.",
    style: {
      maxHeight: 320
    }
  })))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement(SensoryProfile, {
    axes: e.axes,
    facts: e.facts,
    measuredOn: e.measuredOn
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Every venue gets the same six measurements, taken in person by one of us standing in the room. If something changes on the day, we update this page and email everyone who said they were coming.")), /*#__PURE__*/React.createElement(window.Section, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement(ArrivalPlan, {
    steps: e.arrival
  })), /*#__PURE__*/React.createElement(window.Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement(StoryStrip, {
    title: "What will happen \u2014 the version to read with your child",
    frames: e.story
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Each frame gets a photograph of the real place. Kids are checking whether the picture matches the room, so illustration does not do the job here.")), /*#__PURE__*/React.createElement(window.Section, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah-split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "The venue's own flyer"), /*#__PURE__*/React.createElement("p", null, "Kept separate on purpose. The venue's artwork is theirs and it is loud \u2014 it belongs here, next to the terms, rather than standing in for a photo of the room."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gold-800)',
      fontWeight: 700
    }
  }, e.give)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1.5px solid var(--border-soft)',
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: e.image,
    alt: e.venue + ' fundraiser flyer',
    style: {
      width: '100%'
    }
  })))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "sky",
    id: "rsvp"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto'
    }
  }, sent ? /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 36,
    color: "var(--meadow-600)"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "You're on the list"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "We'll email the arrival plan and a photo of the quiet room. If anything about the room changes before the day, you'll hear from us first."), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    onClick: () => setSent(false)
  }, "Change something")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: ev => {
      ev.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-2)'
    }
  }, "Tell us you're coming"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Four questions. None of them are about your child's diagnosis.")), /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    required: true,
    placeholder: "First name is fine"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    icon: "mail",
    required: true,
    placeholder: "you@email.com"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-2)'
    }
  }, "What would help on the day?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      margin: '0 0 var(--space-3)'
    }
  }, "Pick anything. We'll have it ready without mentioning it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 2
    }
  }, ['A quiet room', 'Ear defenders to borrow', 'Nobody speaking to my child', 'A photo of the room beforehand', 'Arriving before everyone else', 'Somewhere to leave a buggy'].map(n => /*#__PURE__*/React.createElement(Checkbox, {
    key: n,
    label: n,
    checked: needs.includes(n),
    onChange: () => toggle(n)
  })))), /*#__PURE__*/React.createElement(Textarea, {
    label: "Anything else we should know?",
    optional: true,
    rows: 3,
    hint: "In your words. We read every one of these."
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg"
  }, "We'll be there")))));
}
Object.assign(window, {
  AHEventDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EventDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Events.jsx
try { (() => {
function AHEvents() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const {
    Card,
    Button,
    Icon,
    SensoryProfile,
    Badge,
    Tag
  } = DS;
  const events = window.AH_EVENTS || [];
  const [quietOnly, setQuietOnly] = React.useState(false);
  const [maxSound, setMaxSound] = React.useState(3);
  const shown = events.filter(e => e.axes[0].level <= maxSound && (!quietOnly || e.facts[0].yes));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PageHeader, {
    title: "Every room, measured",
    lead: "We visit each venue before we publish it and record the same six things. Nothing here is described as magical, unforgettable or life-changing \u2014 it is described accurately.",
    breadcrumb: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Rooms'
    }]
  }), /*#__PURE__*/React.createElement(window.Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, "Show me"), [[1, 'Quiet rooms only'], [2, 'Up to medium'], [3, 'Any volume']].map(([lvl, label]) => /*#__PURE__*/React.createElement(Tag, {
    key: label,
    selected: maxSound === lvl,
    onClick: () => setMaxSound(lvl)
  }, label)), /*#__PURE__*/React.createElement(Tag, {
    icon: "headphones",
    selected: quietOnly,
    onClick: () => setQuietOnly(!quietOnly)
  }, "With a quiet room")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, shown.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.id,
    padding: "none",
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      alignItems: 'stretch'
    },
    className: "ah-room-row"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) 0 var(--space-6) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(window.RoomPhoto, {
    label: "Photo of the room",
    note: "Taken on the measuring visit \u2014 not the venue's poster.",
    ratio: "16 / 10",
    style: {
      maxHeight: 220
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-2xl)'
    }
  }, e.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      color: 'var(--text-muted)'
    }
  }, e.venue, " \xB7 ", e.date, " \xB7 ", e.time)), /*#__PURE__*/React.createElement(Badge, {
    tone: e.give.startsWith('Free') ? 'meadow' : 'gold'
  }, e.give)), /*#__PURE__*/React.createElement(SensoryProfile, {
    compact: true,
    axes: e.axes,
    style: {
      margin: 'var(--space-5) 0'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, e.facts.map(f => /*#__PURE__*/React.createElement("li", {
    key: f.label,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: 'var(--text-base)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.yes ? 'circle-check' : 'circle-alert',
    size: 18,
    color: f.yes ? 'var(--meadow-600)' : 'var(--cape-600)',
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-heading)'
    }
  }, f.label), " \u2014 ", f.note)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => window.AHGoEvent(e.id)
  }, "See the whole room"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "mic",
    onClick: () => window.AHGo('Kid mode')
  }, "Kid's version"))))), !shown.length ? /*#__PURE__*/React.createElement(Card, {
    tone: "plain",
    padding: "lg",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto'
    }
  }, "Nothing matches that yet. We would rather show you an empty page than talk you into a loud room.")) : null)), /*#__PURE__*/React.createElement(window.Section, {
    tone: "sky"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", null, "Are you a venue?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)'
    }
  }, "The six measurements are a standard, not a review. We will come and take them for free, brief your staff on three rules, and publish the result \u2014 including the parts you cannot fix. Nine venues in LA have done it; four kept the quiet room permanently afterwards."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => window.AHToast({
      tone: 'info',
      title: 'Venue form opens here.',
      description: 'Four questions and a date for the visit.'
    })
  }, "Get your room measured"))));
}
Object.assign(window, {
  AHEvents
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Events.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroIds.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AHHeroIds() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const {
    HeroIdCard,
    Card,
    Icon,
    Button,
    Input,
    Textarea
  } = DS;
  const [making, setMaking] = React.useState(false);
  const kids = [{
    name: 'Maya',
    age: '9',
    photo: '../../assets/illustration-community-sunrise.png',
    superpower: 'Knows every Metro line',
    helps: 'Telling me what happens next and how long it will take.',
    hard: 'Sudden clapping. People asking me to look at them.',
    askMeAbout: 'The Gold Line. I can draw it from memory.'
  }, {
    name: 'Kadence',
    age: '7',
    photo: '../../assets/hero-child-portrait.png',
    superpower: 'Harmonizes any room',
    helps: 'Humming. Nobody minding that I hum.',
    hard: 'When the music stops in the middle.',
    askMeAbout: 'The low notes. You can feel them in your chest.'
  }, {
    name: 'Theo',
    age: '11',
    photo: '../../assets/character-kadence-harmonizer.png',
    superpower: 'Builds impossible bridges',
    helps: 'Having the whole hallway. Tape, not glue.',
    hard: 'People walking through before it is finished.',
    askMeAbout: 'Why the middle bit has to be triangles.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PageHeader, {
    title: "Ausome IDs",
    lead: "Not profiles written about children. Five questions, answered by the kid, printed on a card they can hand to anyone who needs to know.",
    breadcrumb: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Ausome IDs'
    }]
  }), /*#__PURE__*/React.createElement(window.Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah-grid-3",
    style: {
      alignItems: 'start'
    }
  }, kids.map(k => /*#__PURE__*/React.createElement(HeroIdCard, _extends({
    key: k.name
  }, k, {
    style: {
      maxWidth: 'none'
    }
  })))), /*#__PURE__*/React.createElement(Card, {
    tone: "sky",
    padding: "lg",
    style: {
      marginTop: 'var(--space-10)',
      display: 'grid',
      gridTemplateColumns: '32px 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 26,
    color: "var(--sky-700)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '70ch'
    }
  }, "The old version of this page was a form for adults to nominate a child and write a paragraph about them. We replaced it. A spotlight that a child cannot read, edit, or use is a spotlight pointed at the wrong person. Every card here was dictated, typed or drawn by the kid whose name is on it, published in their words including the grammar, with their family's consent \u2014 and the \"what's hard for me\" line is never softened, because that is the line that actually helps a teacher on a Tuesday."))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "sky"
  }, making ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", null, "Make your card"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 'var(--space-8)'
    }
  }, "Five questions. Type them, say them out loud, or draw them \u2014 all three end up on the same card. A grown-up can help, but the words have to be yours."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "What is your name?",
    hint: "First name only. A nickname is fine.",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "What are you good at?",
    hint: "Anything. It does not have to be a school thing.",
    required: true
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "What helps you?",
    rows: 2,
    hint: "Things people can do so a place works for you."
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "What is hard for you?",
    rows: 2,
    hint: "Say it plainly. This is the most useful part of the card."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "What should people ask you about?",
    hint: "The thing you could talk about all day."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "mic",
    variant: "secondary"
  }, "Say it instead of typing"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "pencil",
    variant: "secondary"
  }, "Draw it instead")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => {
      setMaking(false);
      window.AHToast({
        tone: 'success',
        title: 'Sent to your grown-up to check.',
        description: 'Nothing goes on the site until your family says yes.'
      });
    }
  }, "Make my card"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "quiet",
    onClick: () => setMaking(false)
  }, "Not now")))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 44,
    color: "var(--sky-700)"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "Make your own card"), /*#__PURE__*/React.createElement("p", null, "Five questions, in your words. Print it, keep it in a pocket, hand it to whoever needs it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => setMaking(true)
  }, "Start my card"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => window.AHGo('Kid mode')
  }, "I'd rather look around first")))));
}
Object.assign(window, {
  AHHeroIds
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroIds.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function AHHome() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const {
    Button,
    Badge,
    Card,
    Icon,
    SensoryProfile,
    FundARoom,
    HeroIdCard,
    EmailCapture,
    StatCounter
  } = DS;
  const events = window.AH_EVENTS || [];
  const [maxSound, setMaxSound] = React.useState(3);
  const [needQuiet, setNeedQuiet] = React.useState(false);
  const matches = events.filter(e => e.axes[0].level <= maxSound && (!needQuiet || e.facts[0].yes));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-dawn)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah-container",
    style: {
      padding: 'var(--space-16) var(--gutter) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah-split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    icon: "sunrise"
  }, "Los Angeles \xB7 501(c)(3) nonprofit"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--text-6xl)'
    }
  }, "Giving every child ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cape-500)'
    }
  }, "wings")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xl)',
      maxWidth: '42ch'
    }
  }, "We run sensory-friendly events for autistic kids in LA \u2014 and we tell you exactly what every room will be like before you decide to come."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "#rooms",
    iconRight: "arrow-right"
  }, "Find a room that works"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    icon: "hand-heart",
    onClick: () => window.AHDonate()
  }, "Donate")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Nothing on this site autoplays, flashes, or moves unless you ask it to.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-12% -8%',
      background: 'var(--gradient-first-light)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: window.A + '/hero-flying-heroes.png',
    alt: "Children in capes flying through morning light",
    style: {
      position: 'relative',
      width: '100%',
      filter: 'drop-shadow(0 20px 40px rgba(59,46,40,.14))'
    }
  }))))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "card",
    id: "rooms"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-6)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "Three rooms coming up"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0',
      fontSize: 'var(--text-lg)'
    }
  }, "Each one measured in person. Filter by the two things that usually decide it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, [[1, 'Quiet only'], [2, 'Up to medium'], [3, 'Any volume']].map(([lvl, label]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: () => setMaxSound(lvl),
    "aria-pressed": maxSound === lvl,
    style: {
      minHeight: 44,
      padding: '10px 18px',
      borderRadius: 999,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      background: maxSound === lvl ? 'var(--gold-100)' : 'var(--surface-card)',
      border: `1.5px solid ${maxSound === lvl ? 'var(--gold-500)' : 'var(--border-soft)'}`,
      color: maxSound === lvl ? 'var(--gold-800)' : 'var(--text-body)'
    }
  }, label)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setNeedQuiet(!needQuiet),
    "aria-pressed": needQuiet,
    style: {
      minHeight: 44,
      padding: '10px 18px',
      borderRadius: 999,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: needQuiet ? 'var(--sky-100)' : 'var(--surface-card)',
      border: `1.5px solid ${needQuiet ? 'var(--sky-500)' : 'var(--border-soft)'}`,
      color: needQuiet ? 'var(--sky-800)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "headphones",
    size: 16
  }), " Must have a quiet room"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, matches.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.id,
    padding: "none",
    interactive: true,
    style: {
      display: 'grid',
      gridTemplateColumns: '150px 1fr auto',
      gap: 0,
      alignItems: 'stretch'
    },
    className: "ah-room-row"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-gold-soft)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      color: 'var(--gold-800)',
      fontSize: 'var(--text-sm)'
    }
  }, e.date.split(',')[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-3xl)',
      color: 'var(--text-heading)',
      lineHeight: 1
    }
  }, e.date.match(/\w+ \d+/)[0].split(' ')[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--gold-800)',
      lineHeight: 1
    }
  }, e.date.match(/\w+ \d+/)[0].split(' ')[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-2xl)'
    }
  }, e.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 var(--space-4)',
      color: 'var(--text-muted)'
    }
  }, e.venue, " \xB7 ", e.time), /*#__PURE__*/React.createElement(SensoryProfile, {
    compact: true,
    axes: e.axes
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center',
      fontWeight: 700,
      color: e.facts[0].yes ? 'var(--meadow-600)' : 'var(--cape-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: e.facts[0].yes ? 'circle-check' : 'circle-alert',
    size: 18
  }), e.facts[0].yes ? 'Quiet room, open the whole time' : 'No quiet room — outdoor bench instead')), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'var(--space-3)',
      borderLeft: '1.5px solid var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => window.AHGoEvent(e.id)
  }, "See the whole room"), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    icon: "mic",
    onClick: () => window.AHGo('Kid mode')
  }, "Kid's version")))), !matches.length ? /*#__PURE__*/React.createElement(Card, {
    tone: "plain",
    padding: "lg",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto'
    }
  }, "Nothing matches that yet \u2014 and we would rather say so than sell you a loud room. Join the monthly note below and we'll tell you when a quiet one is booked.")) : null)), /*#__PURE__*/React.createElement(window.Section, {
    tone: "sky"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah-split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid",
    icon: "mic"
  }, "For kids"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "Are you the kid? This part is yours."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)'
    }
  }, "A version of every event written for you, not your parent: what will happen, in order, with pictures of the actual room. At the end it asks whether you want to go \u2014 and ", /*#__PURE__*/React.createElement("strong", null, "no is a real answer"), " that we pass on and nobody argues with."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => window.AHGo('Kid mode'),
    iconRight: "arrow-right"
  }, "Open the kid's version")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, [['circle-check', 'One thing on the screen at a time'], ['volume-2', 'Says out loud when a room is loud'], ['thumbs-up', 'Yes, no, or "I need to know more"'], ['printer', 'Makes you a card of what helps you']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 24,
    color: "var(--sky-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-heading)'
    }
  }, t)))))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "Ausome IDs"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0',
      fontSize: 'var(--text-lg)',
      maxWidth: '56ch'
    }
  }, "Five questions, answered by the kid. Printed on a card they can hand to a teacher, a dentist, or a birthday-party host.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => window.AHGo('Ausome IDs')
  }, "See all the cards")), /*#__PURE__*/React.createElement("div", {
    className: "ah-grid-3",
    style: {
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(HeroIdCard, {
    name: "Maya",
    age: "9",
    superpower: "Knows every Metro line",
    helps: "Telling me what happens next and how long it will take.",
    hard: "Sudden clapping. People asking me to look at them.",
    askMeAbout: "The Gold Line. I can draw it from memory.",
    printable: false,
    style: {
      maxWidth: 'none'
    }
  }), /*#__PURE__*/React.createElement(HeroIdCard, {
    name: "Kadence",
    age: "7",
    superpower: "Harmonizes any room",
    helps: "Humming. Nobody minding that I hum.",
    hard: "When the music stops in the middle.",
    askMeAbout: "The low notes. You can feel them in your chest.",
    printable: false,
    style: {
      maxWidth: 'none'
    }
  }), /*#__PURE__*/React.createElement(HeroIdCard, {
    name: "Theo",
    age: "11",
    superpower: "Builds impossible bridges",
    helps: "Having the whole hallway. Tape, not glue.",
    hard: "People walking through before it is finished.",
    askMeAbout: "Why the middle bit has to be triangles.",
    printable: false,
    style: {
      maxWidth: 'none'
    }
  }))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah-grid-3"
  }, /*#__PURE__*/React.createElement(StatCounter, {
    icon: "door-open",
    value: "25",
    label: "Rooms measured",
    note: "Every one visited in person before we published a word about it."
  }), /*#__PURE__*/React.createElement(StatCounter, {
    icon: "users",
    value: "150+",
    label: "Families through the door",
    note: "Sixty-one of them said it was the first event they had not left early."
  }), /*#__PURE__*/React.createElement(StatCounter, {
    icon: "badge-check",
    value: "9",
    label: "Venues briefed",
    note: "Staff trained on three rules. Four have kept the quiet room permanently."
  }))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "gold"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center'
    }
  }, "Fund a room"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      margin: '0 auto var(--space-8)',
      fontSize: 'var(--text-lg)'
    }
  }, "We publish what things cost, because \"support our mission\" tells you nothing."), /*#__PURE__*/React.createElement(FundARoom, {
    onGive: a => window.AHToast({
      tone: 'info',
      title: `Givebutter opens at $${a}.`,
      description: 'The overlay opens on this page — you never leave the site.'
    }),
    note: "91\xA2 of every dollar reaches a room. The rest is card fees, and we will show you the numbers if you ask.",
    tiers: [{
      amount: 35,
      icon: 'headphones',
      buys: 'Ear defenders for six kids',
      detail: 'Kept in the quiet-room box and borrowed at any event.'
    }, {
      amount: 120,
      icon: 'door-open',
      buys: 'A quiet room for one event',
      detail: 'Room hire, a volunteer to staff it, and the box of tools inside.'
    }, {
      amount: 400,
      icon: 'sunrise',
      buys: 'A whole sensory-friendly hour',
      detail: 'Venue, staff briefing, dimmed lights, eleven families in the door.'
    }]
  }))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gold-700)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-label)',
      margin: '0 0 var(--space-4)'
    }
  }, "What changed"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontSize: 'var(--text-3xl)',
      marginBottom: 'var(--space-5)'
    }
  }, "I read the sound level, saw the pizza-smell warning, and went anyway with a plan. We stayed fifty minutes. Before, we would not have gone at all."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, "\u2014 Parent, Carson \xB7 first event, February 2026"))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement(EmailCapture, {
    title: "One note a month",
    body: "Which rooms are booked, what they measured, and nothing else. No campaigns, no appeals, no emergencies."
  })));
}
Object.assign(window, {
  AHHome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/KidMode.jsx
try { (() => {
function AHKidMode() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const {
    Icon,
    Button,
    HeroIdCard
  } = DS;
  const events = window.AH_EVENTS || [];
  const [step, setStep] = React.useState(0);
  const [chosen, setChosen] = React.useState(events[0]);
  const [frame, setFrame] = React.useState(0);
  const [answer, setAnswer] = React.useState(null);
  const [helps, setHelps] = React.useState([]);
  const Big = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-5xl)',
      lineHeight: 1.1,
      margin: '0 0 var(--space-6)',
      maxWidth: '22ch',
      ...style
    }
  }, children);
  const Choice = ({
    icon,
    label,
    sub,
    onClick,
    tone = 'sky'
  }) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      width: '100%',
      textAlign: 'left',
      background: tone === 'gold' ? 'var(--surface-gold-soft)' : 'var(--surface-card)',
      border: `2px solid ${tone === 'gold' ? 'var(--gold-400)' : 'var(--sky-300)'}`,
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-5) var(--space-6)',
      minHeight: 88,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-sky)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 28,
    color: "var(--sky-700)"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-heading)'
    }
  }, label), sub ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)'
    }
  }, sub) : null));
  const Wrap = ({
    children,
    back
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-dawn)',
      minHeight: '78vh',
      padding: 'var(--space-16) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, back ? /*#__PURE__*/React.createElement("button", {
    onClick: back,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      marginBottom: 'var(--space-8)',
      cursor: 'pointer',
      color: 'var(--text-link)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  }), " Go back") : null, children));
  if (step === 0) return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gold-800)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)'
    }
  }, "This page is for you, not for a grown-up."), /*#__PURE__*/React.createElement(Big, null, "Something is happening. Do you want to know about it?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, events.map(e => /*#__PURE__*/React.createElement(Choice, {
    key: e.id,
    icon: "calendar",
    label: e.title,
    sub: `${e.venue} · ${e.date.replace(/,.*/, '')}`,
    onClick: () => {
      setChosen(e);
      setStep(1);
      setFrame(0);
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-8)',
      color: 'var(--text-muted)'
    }
  }, "You can stop reading at any time. Nothing here signs you up for anything."));
  if (step === 1) {
    const f = chosen.story[frame];
    const last = frame === chosen.story.length - 1;
    return /*#__PURE__*/React.createElement(Wrap, {
      back: () => frame ? setFrame(frame - 1) : setStep(0)
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--gold-800)',
        fontWeight: 700,
        fontSize: 'var(--text-lg)'
      }
    }, frame + 1, " of ", chosen.story.length), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        border: '2px solid var(--border-soft)',
        borderRadius: 'var(--radius-2xl)',
        overflow: 'hidden',
        marginBottom: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(window.RoomPhoto, {
      ratio: "16 / 9",
      label: "Photo of this bit",
      note: "A real photograph of the door, the room, or the person you will meet.",
      style: {
        borderRadius: 0,
        border: 'none',
        borderBottom: '1.5px dashed var(--sky-400)'
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-4xl)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        lineHeight: 1.2,
        color: 'var(--text-heading)',
        padding: 'var(--space-8)',
        margin: 0,
        maxWidth: 'none'
      }
    }, f.text)), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: last ? undefined : 'arrow-right',
      onClick: () => last ? setStep(2) : setFrame(frame + 1)
    }, last ? 'That is all of it' : 'Next'));
  }
  if (step === 2) return /*#__PURE__*/React.createElement(Wrap, {
    back: () => {
      setStep(1);
      setFrame(chosen.story.length - 1);
    }
  }, /*#__PURE__*/React.createElement(Big, null, "Do you want to go?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xl)'
    }
  }, "Any answer is a real answer. We tell the grown-up what you said, and they listen to it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Choice, {
    icon: "thumbs-up",
    tone: "gold",
    label: "Yes",
    sub: "We will save you a place.",
    onClick: () => {
      setAnswer('yes');
      setStep(3);
    }
  }), /*#__PURE__*/React.createElement(Choice, {
    icon: "message-circle",
    label: "I need to know more first",
    sub: "We will show you the room and how long it lasts.",
    onClick: () => {
      setAnswer('more');
      setStep(3);
    }
  }), /*#__PURE__*/React.createElement(Choice, {
    icon: "x",
    label: "No, not this one",
    sub: "Nothing happens. Nobody will ask you again about this one.",
    onClick: () => {
      setAnswer('no');
      setStep(3);
    }
  })));
  if (step === 3 && answer === 'no') return /*#__PURE__*/React.createElement(Wrap, {
    back: () => setStep(2)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "feather",
    size: 56,
    color: "var(--gold-500)"
  }), /*#__PURE__*/React.createElement(Big, {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, "Okay. That is the end of it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xl)'
    }
  }, "We have told the grown-up that you said no to this one. You do not have to explain it, and nobody will bring it up again."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => setStep(0)
  }, "See a different thing"));
  if (step === 3 && answer === 'more') return /*#__PURE__*/React.createElement(Wrap, {
    back: () => setStep(2)
  }, /*#__PURE__*/React.createElement(Big, null, "Here is more about it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      margin: '0 0 var(--space-8)'
    }
  }, [['clock', 'It lasts one hour', 'You can leave before the end. Lots of people do.'], ['volume-2', chosen.axes[0].level === 3 ? 'It is loud' : 'It is fairly quiet', chosen.axes[0].note], ['users', `About ${chosen.axes[2].level === 1 ? 'fifteen' : 'forty'} people`, chosen.axes[2].note], ['headphones', chosen.facts[0].yes ? 'There is a quiet room' : 'There is no quiet room', chosen.facts[0].note]].map(([i, t, s]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-soft)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 26,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-lg)'
    }
  }, s))))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => setStep(2)
  }, "Ask me again"));
  const OPTIONS = ['Somewhere quiet to sit', 'Ear defenders', 'Nobody talking to me', 'Knowing when it ends', 'Someone I already know', 'Going in before it is busy'];
  if (step === 3) return /*#__PURE__*/React.createElement(Wrap, {
    back: () => setStep(2)
  }, /*#__PURE__*/React.createElement(Big, null, "What would help you?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xl)'
    }
  }, "Pick as many as you want. We will have them ready and we will not talk about it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, OPTIONS.map(o => {
    const on = helps.includes(o);
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      type: "button",
      onClick: () => setHelps(on ? helps.filter(x => x !== o) : [...helps, o]),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        minHeight: 72,
        cursor: 'pointer',
        textAlign: 'left',
        background: on ? 'var(--surface-gold-soft)' : 'var(--surface-card)',
        border: `2px solid ${on ? 'var(--gold-500)' : 'var(--border-soft)'}`,
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-4) var(--space-6)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--text-2xl)',
        color: 'var(--text-heading)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: on ? 'check' : 'plus',
      size: 26,
      color: on ? 'var(--gold-700)' : 'var(--cocoa-300)'
    }), o);
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      marginTop: 'var(--space-8)'
    },
    onClick: () => setStep(4)
  }, "Done"));
  return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 52,
    color: "var(--gold-500)"
  }), /*#__PURE__*/React.createElement(Big, {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, "Saved. Here is your card."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xl)'
    }
  }, "You can print this and keep it in a pocket. It says what helps you, so you do not have to explain it every time."), /*#__PURE__*/React.createElement(HeroIdCard, {
    name: "You",
    superpower: "Knows what helps",
    helps: helps.length ? helps.join(', ').toLowerCase() : 'Being told what happens next.',
    hard: "Being asked to explain this out loud.",
    askMeAbout: "The thing I am into right now.",
    style: {
      marginTop: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "printer"
  }, "Print my card"), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    onClick: () => setStep(0)
  }, "Start again")));
}
Object.assign(window, {
  AHKidMode
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/KidMode.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NotFound.jsx
try { (() => {
function AHNotFound() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const {
    Button,
    Card,
    Icon,
    Input
  } = DS;
  const [told, setTold] = React.useState(false);
  // A 404 that does work: name the dead link, guess the intent, and log the miss.
  const badPath = '/hero-spotlight/nominate';
  const guesses = [['badge-check', 'Ausome IDs', 'This moved. Nominating is now the child filling in five questions themselves.', 'Ausome IDs'], ['volume-2', 'Rooms', 'Every event with its measured sound, light, crowd and quiet-room status.', 'Rooms'], ['hand-helping', 'Volunteer', 'Pick one shift. Two fields.', 'Volunteer']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-dawn)',
      padding: 'var(--space-20) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "feather",
    size: 52,
    color: "var(--gold-500)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, "That page moved, and we should have redirected you"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xl)'
    }
  }, "You asked for ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'var(--cream-200)',
      padding: '3px 8px',
      borderRadius: 6
    }
  }, badPath), ". That was a real page until January. It is our broken link, not your mistake."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      marginTop: 'var(--space-10)'
    }
  }, "Where it went"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, guesses.map(([icon, title, why, page]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    interactive: true,
    padding: "md",
    onClick: () => window.AHGo(page),
    style: {
      cursor: 'pointer',
      display: 'grid',
      gridTemplateColumns: '44px 1fr 24px',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-sky)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    color: "var(--sky-700)"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, why)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20,
    color: "var(--cocoa-300)"
  })))), /*#__PURE__*/React.createElement(Card, {
    tone: "sky",
    padding: "lg",
    style: {
      marginTop: 'var(--space-10)'
    }
  }, told ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 26,
    color: "var(--meadow-600)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Logged, with the link that sent you here. Broken links get fixed on Fridays and the fix shows up in ", /*#__PURE__*/React.createElement("button", {
    onClick: () => window.AHGo('The log'),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-link)',
      fontWeight: 700,
      fontFamily: 'var(--font-body)',
      fontSize: 'inherit'
    }
  }, "the log"), ".")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setTold(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 4px'
    }
  }, "None of those? Tell us in one line."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "It goes on a list a person reads, not into an analytics dashboard.")), /*#__PURE__*/React.createElement(Input, {
    label: "What were you looking for?",
    placeholder: "e.g. the February Chuck E. Cheese details"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Send it"), /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    onClick: () => window.AHGo('Home')
  }, "Just take me home"))))));
}
Object.assign(window, {
  AHNotFound
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NotFound.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
// Shared layout helpers for the Ausome Heroes website kit.
const A = '../../assets';
function Section({
  tone = 'cream',
  children,
  style,
  id
}) {
  const bg = {
    cream: 'var(--surface-page)',
    card: 'var(--surface-raised)',
    sky: 'var(--surface-sky)',
    gold: 'var(--surface-gold-soft)',
    dawn: 'var(--gradient-dawn)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: "ah-section",
    style: {
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah-container"
  }, children));
}
function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'center'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? 720 : 'none',
      margin: align === 'center' ? '0 auto var(--space-12)' : '0 0 var(--space-10)'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-2)',
      color: 'var(--gold-700)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-label)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) auto 0',
      color: 'var(--text-body)',
      fontSize: 'var(--text-lg)',
      maxWidth: '56ch'
    }
  }, lead) : null);
}
function PageHeader({
  title,
  lead,
  breadcrumb
}) {
  const {
    Breadcrumb
  } = window.AusomeHeroesDesignSystem_0fb09e;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-dawn)',
      padding: 'var(--space-16) 0 var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah-container"
  }, breadcrumb ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: breadcrumb
  })) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      maxWidth: '18ch'
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--text-xl)',
      maxWidth: '52ch'
    }
  }, lead) : null));
}
function RoomPhoto({
  label = 'Photo of the room',
  note,
  ratio = '4 / 3',
  style
}) {
  const {
    Icon
  } = window.AusomeHeroesDesignSystem_0fb09e;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: 'var(--surface-sky)',
      border: '1.5px dashed var(--sky-400)',
      borderRadius: 'var(--radius-xl)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      padding: 'var(--space-6)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    size: 30,
    color: "var(--sky-600)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--sky-800)'
    }
  }, label), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      maxWidth: '32ch'
    }
  }, note) : null));
}
Object.assign(window, {
  A,
  Section,
  SectionHead,
  PageHeader,
  RoomPhoto
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Volunteer.jsx
try { (() => {
function AHVolunteer() {
  const DS = window.AusomeHeroesDesignSystem_0fb09e;
  const {
    Card,
    Icon,
    Button,
    Badge,
    Input,
    Toast
  } = DS;
  const [picked, setPicked] = React.useState(null);
  const [sent, setSent] = React.useState(false);

  // A shift, not an application. You pick a real slot on a real date.
  const shifts = [{
    id: 's1',
    role: 'Door',
    date: 'Fri 27 Feb',
    time: '2:30–4:15 PM',
    venue: 'Chuck E. Cheese, Carson',
    slots: 1,
    with: 'Marisol',
    does: 'Stand at the side door, tick names off a list, hand out ear defenders. No small talk required.'
  }, {
    id: 's2',
    role: 'Quiet-room cover',
    date: 'Fri 27 Feb',
    time: '3:00–4:00 PM',
    venue: 'Chuck E. Cheese, Carson',
    slots: 2,
    with: 'Dee',
    does: 'Sit in the quiet room. Say nothing unless spoken to. This is the easiest and most important job we have.'
  }, {
    id: 's3',
    role: 'Set-up',
    date: 'Thu 26 Mar',
    time: '8:15–9:00 AM',
    venue: 'Apple Del Amo, Torrance',
    slots: 3,
    with: 'Allie',
    does: 'Move four tables, put out the signage, tape down two cables. Done before anyone arrives.'
  }, {
    id: 's4',
    role: 'From home — printing',
    date: 'Any evening this week',
    time: 'About 40 minutes',
    venue: 'Your kitchen table',
    slots: 4,
    with: 'nobody',
    does: 'Print and fold thirty Ausome ID cards. We post you the card stock.'
  }];
  if (sent) {
    const s = shifts.find(x => x.id === picked);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PageHeader, {
      title: "You're on the rota",
      lead: `${s.role} · ${s.date} · ${s.time}`
    }), /*#__PURE__*/React.createElement(window.Section, {
      tone: "card"
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        maxWidth: 660,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-check",
      size: 38,
      color: "var(--meadow-600)"
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0
      }
    }, "That's the whole process"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, s.with === 'nobody' ? 'The card stock goes in the post today.' : `${s.with} will text you the day before with where to stand and what she'll be wearing.`, " You are paired with someone experienced the first time, always."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "If something comes up, reply to that text. Cancelling is completely fine and nobody will ask why \u2014 the same rule we give the families applies to you."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => window.AHGo('Rooms')
    }, "See the room I'll be in"), /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary",
      onClick: () => {
        setSent(false);
        setPicked(null);
      }
    }, "Take another shift")))));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PageHeader, {
    title: "Take one shift",
    lead: "Not an application form. Pick a real slot on a real date, tell us your name and number, and you are on the rota. Two hours, once, is genuinely useful.",
    breadcrumb: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Volunteer'
    }]
  }), /*#__PURE__*/React.createElement(window.Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, shifts.map(s => {
    const on = picked === s.id;
    return /*#__PURE__*/React.createElement(Card, {
      key: s.id,
      padding: "none",
      interactive: true,
      onClick: () => setPicked(s.id),
      style: {
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '150px 1fr auto',
        alignItems: 'stretch',
        borderColor: on ? 'var(--gold-500)' : undefined,
        borderWidth: on ? 2 : undefined
      },
      className: "ah-room-row"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: on ? 'var(--surface-gold-soft)' : 'var(--surface-sunken)',
        padding: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'var(--text-xl)',
        color: 'var(--text-heading)',
        lineHeight: 1.1
      }
    }, s.date), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, s.time)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: 'var(--text-2xl)'
      }
    }, s.role), /*#__PURE__*/React.createElement(Badge, {
      tone: s.slots > 2 ? 'meadow' : 'cape'
    }, s.slots, " ", s.slots === 1 ? 'place' : 'places', " left")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '4px 0 var(--space-3)',
        color: 'var(--text-muted)'
      }
    }, s.venue, s.with === 'nobody' ? '' : ` · with ${s.with}`), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, s.does)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-6)',
        display: 'grid',
        placeItems: 'center',
        borderLeft: '1.5px solid var(--cream-200)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: on ? 'circle-check' : 'plus',
      size: 30,
      color: on ? 'var(--gold-600)' : 'var(--cocoa-300)'
    })));
  })), picked ? /*#__PURE__*/React.createElement(Card, {
    tone: "sky",
    padding: "lg",
    style: {
      marginTop: 'var(--space-8)',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 0
    }
  }, "Two fields and you're done"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
      window.scrollTo(0, 0);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    required: true,
    placeholder: "First name is fine"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mobile",
    type: "tel",
    required: true,
    icon: "phone",
    hint: "Only used to text you the day before. Never shared, never added to a list."
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg"
  }, "Put me on this shift"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "No CV, no interview, no references for this role. Anything involving unsupervised time with children needs a background check and we will walk you through it separately."))) : /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-8)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-muted)'
    }
  }, "Pick a shift above and two fields will appear.")), /*#__PURE__*/React.createElement(window.Section, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah-split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Why we stopped asking for your superpowers"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)'
    }
  }, "The old form had four steps: name, contact, a grid of skills, a grid of availability, and a made-up superhero name. Twenty-two people started it and nine finished."), /*#__PURE__*/React.createElement("p", null, "None of that told us anything we needed. What we actually need is a body at a door on the 27th of February. So the form is the rota, and the rota is what you are looking at.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, [['clock', 'Under a minute', 'Two fields, on a phone, on a bus.'], ['users', 'Paired the first time', 'You are never the only person who knows what happens next.'], ['hand', 'Cancelling is fine', 'Same rule we give families. No explanation needed.']].map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 24,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      color: 'var(--text-heading)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)'
    }
  }, t), d)))))));
}
Object.assign(window, {
  AHVolunteer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Volunteer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Shared event data — one source for the finder, the cards and the detail page.
const AH_EVENTS = [{
  id: 'chuck-e-cheese-feb',
  title: 'Play for a Purpose',
  venue: 'Chuck E. Cheese, Carson',
  date: 'Friday, February 27, 2026',
  time: '3:00–5:00 PM (our hour is 3–4)',
  image: '../../assets/event-chuck-e-cheese.png',
  give: '20% of sales come back to us',
  measuredOn: '12 January 2026',
  axes: [{
    key: 'sound',
    label: 'Sound',
    level: 3,
    note: 'Peaks near 78 dB when the arcade fills. Games stay on; the PA is off.'
  }, {
    key: 'light',
    label: 'Light',
    level: 2,
    note: 'House lights at 50%. Screens flash — the far corner is the calmest.'
  }, {
    key: 'crowd',
    label: 'Crowd',
    level: 2,
    note: 'About 45 people. Eleven families last time. No queue longer than three.'
  }, {
    key: 'smell',
    label: 'Smell',
    level: 3,
    note: 'Pizza ovens are five metres from the tables. This one is unavoidable.'
  }, {
    key: 'waiting',
    label: 'Waiting',
    level: 1,
    note: 'No check-in, no wristbands, no waiting for a start time.'
  }, {
    key: 'space',
    label: 'Room to move',
    level: 3,
    note: 'Two large rooms plus a corridor you can pace.',
    inverted: true
  }],
  facts: [{
    label: 'Quiet room',
    yes: true,
    note: 'The party room on the left. Lights off, five chairs, open the whole time.'
  }, {
    label: 'Staff briefed',
    yes: true,
    note: 'Four staff, briefed by us that morning. No high fives, no crouching down.'
  }, {
    label: 'Loud surprise',
    yes: false,
    note: 'The animatronic show runs at 4pm. We cannot switch it off — leave by 3:55 if that matters.'
  }],
  arrival: [{
    icon: 'car',
    title: 'Park in the north lot',
    detail: 'Free. Two accessible bays right by the blue side door.'
  }, {
    icon: 'door-open',
    title: 'Use the side door, not the main entrance',
    detail: 'No turnstile, no host stand, no queue.'
  }, {
    icon: 'hand',
    title: 'Marisol is at the door in a gold shirt',
    detail: 'She will not ask your child anything. Names are optional.'
  }, {
    icon: 'headphones',
    title: 'The quiet room is immediately left',
    detail: 'A box of ear defenders is by the door. Nobody will follow you in.'
  }, {
    icon: 'arrow-left',
    title: 'Leaving early is normal',
    detail: 'No goodbyes needed. Nobody will ask if everything is alright.'
  }],
  story: [{
    text: 'You go in the blue side door. There is no queue.'
  }, {
    text: 'Marisol says hello. You do not have to say hello back.'
  }, {
    text: 'You can play games, or sit in the quiet room, or both.'
  }, {
    text: 'You leave when you want to. Nobody will ask why.'
  }]
}, {
  id: 'chipotle-mar',
  title: 'Do Good with Chipotle',
  venue: 'Chipotle, Carson',
  date: 'Tuesday, March 3, 2026',
  time: '4:00–8:00 PM',
  image: '../../assets/event-chipotle.jpeg',
  give: '25% of sales come back to us',
  measuredOn: '20 January 2026',
  axes: [{
    key: 'sound',
    label: 'Sound',
    level: 2,
    note: 'Around 68 dB. Music is on but we have asked for it low.'
  }, {
    key: 'light',
    label: 'Light',
    level: 3,
    note: 'Bright overhead strip lights. They cannot be dimmed. Booths are darker.'
  }, {
    key: 'crowd',
    label: 'Crowd',
    level: 1,
    note: 'Fifteen to twenty people at a time. It is a normal restaurant evening.'
  }, {
    key: 'smell',
    label: 'Smell',
    level: 3,
    note: 'Strong — grill and coriander. Noticeable from the car park.'
  }, {
    key: 'waiting',
    label: 'Waiting',
    level: 2,
    note: 'Five to ten minutes in the order line. You can order ahead and skip it.'
  }, {
    key: 'space',
    label: 'Room to move',
    level: 1,
    note: 'One small room, twelve tables. There is a bench outside.',
    inverted: true
  }],
  facts: [{
    label: 'Order ahead',
    yes: true,
    note: 'Use the app, then collect at the shelf by the door. No talking required.'
  }, {
    label: 'Quiet room',
    yes: false,
    note: 'There is not one. The outdoor bench on the north side is the quiet option.'
  }, {
    label: 'Staff briefed',
    yes: true,
    note: 'The evening shift knows. Say "Ausome" at the till and they will keep it brief.'
  }],
  arrival: [{
    icon: 'car',
    title: 'Park behind the building',
    detail: 'Quieter than the front, and the door is ten steps away.'
  }, {
    icon: 'download',
    title: 'Order in the app before you arrive',
    detail: 'Choose pickup. Add code AUSOME so the donation counts.'
  }, {
    icon: 'door-open',
    title: 'Collect from the shelf inside the door',
    detail: 'You do not need to speak to anyone or join the queue.'
  }, {
    icon: 'arrow-left',
    title: 'Eat outside if inside is too bright',
    detail: 'The north bench is in shade after 5pm and the donation still counts.'
  }],
  story: [{
    text: 'Mum or Dad orders the food on a phone.'
  }, {
    text: 'You go in and take the bag off the shelf.'
  }, {
    text: 'You can eat inside, or outside on the bench.'
  }, {
    text: 'You can leave as soon as you are finished.'
  }]
}, {
  id: 'apple-mar',
  title: 'iPad Exploration Club',
  venue: 'Apple Del Amo, Torrance',
  date: 'Thursday, March 26, 2026',
  time: '9:00–10:30 AM, before the store opens',
  image: '../../assets/event-apple-ipad-workshop.png',
  give: 'Free — twelve places',
  measuredOn: '29 January 2026',
  axes: [{
    key: 'sound',
    label: 'Sound',
    level: 1,
    note: 'Store music off. Around 55 dB — mostly our own voices.'
  }, {
    key: 'light',
    label: 'Light',
    level: 2,
    note: 'Bright and even, no flicker. The back tables are softer.'
  }, {
    key: 'crowd',
    label: 'Crowd',
    level: 1,
    note: 'Twelve children, four staff. The mall outside is still closed.'
  }, {
    key: 'smell',
    label: 'Smell',
    level: 1,
    note: 'Nothing to speak of. No food, no cleaning products during our hour.'
  }, {
    key: 'waiting',
    label: 'Waiting',
    level: 1,
    note: 'Doors open at 8:55 and we start when everyone is in. No fixed start.'
  }, {
    key: 'space',
    label: 'Room to move',
    level: 2,
    note: 'The whole store, plus the closed mall corridor to walk in.',
    inverted: true
  }],
  facts: [{
    label: 'Quiet room',
    yes: true,
    note: 'The training room at the back. Door closes, lights independent.'
  }, {
    label: 'Staff briefed',
    yes: true,
    note: 'Same four staff as January. They have done this before.'
  }, {
    label: 'Photos taken',
    yes: false,
    note: 'Apple would like photos for their own channels. You can decline at the door and we will not chase it.'
  }],
  arrival: [{
    icon: 'car',
    title: 'Park on level 2 of the Nordstrom deck',
    detail: 'Lift comes down twenty metres from the store. The mall is empty at 8:50.'
  }, {
    icon: 'door-open',
    title: 'The store grille will be half open',
    detail: 'Duck under it. Somebody will be waiting inside; you will not be turned away.'
  }, {
    icon: 'hand',
    title: 'Ravi in a blue shirt has the list',
    detail: 'He will tick your name. Your child does not need to be introduced.'
  }, {
    icon: 'arrow-left',
    title: 'You can leave at any point',
    detail: 'The grille stays half open the whole session so nobody has to be let out.'
  }],
  story: [{
    text: 'The mall is empty and quiet when you arrive.'
  }, {
    text: 'You duck under the shop shutter. Ravi ticks your name.'
  }, {
    text: 'You choose an iPad and make something. You can stop whenever.'
  }, {
    text: 'You leave under the shutter. You can take your drawing home.'
  }]
}];
Object.assign(window, {
  AH_EVENTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.EmailCapture = __ds_scope.EmailCapture;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SpotlightCard = __ds_scope.SpotlightCard;

__ds_ns.StatCounter = __ds_scope.StatCounter;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.SensoryToggle = __ds_scope.SensoryToggle;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.MobileNav = __ds_scope.MobileNav;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.ArrivalPlan = __ds_scope.ArrivalPlan;

__ds_ns.FundARoom = __ds_scope.FundARoom;

__ds_ns.HeroIdCard = __ds_scope.HeroIdCard;

__ds_ns.SensoryProfile = __ds_scope.SensoryProfile;

__ds_ns.StoryStrip = __ds_scope.StoryStrip;

})();
