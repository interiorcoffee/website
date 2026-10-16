/* @ds-bundle: {"format":3,"namespace":"InteriorCoffeeDesignSystem_c725ea","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"AffiliateCard","sourcePath":"components/content/AffiliateCard.jsx"},{"name":"MediaCard","sourcePath":"components/content/MediaCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"c2d76f18fe1e","components/buttons/IconButton.jsx":"2f835e18f003","components/content/AffiliateCard.jsx":"dfa5b908c6b3","components/content/MediaCard.jsx":"d4ce94d03acb","components/core/Avatar.jsx":"5dcee99e6a50","components/core/Badge.jsx":"3dbaa2e492c1","components/core/Tag.jsx":"915ce8fa3cd4","export/src/slides.jsx":"28f39a62efd1","ui_kits/link-in-bio/screens.jsx":"09672898e406"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.InteriorCoffeeDesignSystem_c725ea = window.InteriorCoffeeDesignSystem_c725ea || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * interior coffee — Button
 * Quiet, editorial buttons. Primary = off-black ink; secondary = hairline
 * outline on linen; ghost = text-only. Labels render lowercase by brand rule.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  pill = false,
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      font: "var(--text-sm)",
      gap: "6px"
    },
    md: {
      padding: "12px 22px",
      font: "var(--text-base)",
      gap: "8px"
    },
    lg: {
      padding: "16px 30px",
      font: "var(--text-md)",
      gap: "10px"
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    padding: s.padding,
    fontFamily: "var(--font-sans)",
    fontSize: s.font,
    fontWeight: "var(--weight-medium)",
    lineHeight: 1,
    letterSpacing: "0.01em",
    border: "1px solid transparent",
    borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    width: fullWidth ? "100%" : "auto",
    opacity: disabled ? 0.4 : 1,
    transition: "var(--transition-base)",
    textTransform: "lowercase",
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--ic-off-black)",
      color: "var(--ic-linen)",
      borderColor: "var(--ic-off-black)"
    },
    secondary: {
      background: "transparent",
      color: "var(--ic-off-black)",
      borderColor: "var(--ic-ink-12)"
    },
    coffee: {
      background: "var(--ic-coffee)",
      color: "var(--ic-linen)",
      borderColor: "var(--ic-coffee)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ic-off-black)",
      borderColor: "transparent"
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...(variants[variant] || variants.primary)
    },
    disabled: as === "button" ? disabled : undefined,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.opacity = "0.82";
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.opacity = "1";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * interior coffee — IconButton
 * Bare, circular tap target for icon-only actions (save, share, more).
 * 44px minimum hit area. Used across the feed and story chrome.
 */
function IconButton({
  children,
  size = "md",
  variant = "ghost",
  label,
  active = false,
  ...rest
}) {
  const dim = {
    sm: 36,
    md: 44,
    lg: 52
  }[size] || 44;
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--ic-off-black)"
    },
    solid: {
      background: "var(--ic-off-black)",
      color: "var(--ic-linen)"
    },
    onDark: {
      background: "transparent",
      color: "var(--ic-linen)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    style: {
      width: dim,
      height: dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      transition: "var(--transition-base)",
      ...(variants[variant] || variants.ghost),
      opacity: active ? 1 : 0.9
    },
    onMouseEnter: e => e.currentTarget.style.background = variant === "onDark" ? "var(--ic-paper-14)" : "var(--ic-ink-06)",
    onMouseLeave: e => e.currentTarget.style.background = variants[variant].background
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
/**
 * interior coffee — Avatar
 * A user photo, or the ic monogram on a linen disc by default.
 * Optional coffee ring for the "active story" state.
 *
 * For the monogram, pass `monogramSrc` pointing at ic-monogram.png relative
 * to the page (default assumes a depth-2 location like components/* or ui_kits/*).
 */
function Avatar({
  src,
  alt = "",
  size = 48,
  ring = false,
  monogram = false,
  monogramSrc = "../../assets/logos/ic-monogram.png"
}) {
  const showMono = monogram || !src;
  const inner = showMono ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: "var(--ic-linen)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: monogramSrc,
    alt: alt || "ic",
    style: {
      height: "52%",
      width: "auto"
    }
  })) : /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: "var(--radius-circle)",
      padding: ring ? 2 : 0,
      background: ring ? "var(--ic-coffee)" : "transparent",
      boxSizing: "border-box",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "var(--radius-circle)",
      overflow: "hidden",
      border: ring ? "2px solid var(--ic-linen)" : "1px solid var(--ic-ink-12)",
      boxSizing: "border-box"
    }
  }, inner));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * interior coffee — Badge
 * Tiny status / count marker. Used for affiliate "ad" labels, new counts,
 * "broken pieces" series stamps.
 */
function Badge({
  children,
  tone = "ink",
  dot = false
}) {
  const tones = {
    ink: {
      background: "var(--ic-off-black)",
      color: "var(--ic-linen)"
    },
    coffee: {
      background: "var(--ic-coffee)",
      color: "var(--ic-linen)"
    },
    olive: {
      background: "var(--ic-olive)",
      color: "var(--ic-linen)"
    },
    soft: {
      background: "var(--ic-linen-deep)",
      color: "var(--ic-off-black)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: dot ? 0 : "3px 8px",
      minWidth: dot ? 8 : "auto",
      height: dot ? 8 : "auto",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.04em",
      lineHeight: 1,
      textTransform: "uppercase",
      borderRadius: dot ? "var(--radius-circle)" : "var(--radius-sm)",
      ...(tones[tone] || tones.ink)
    }
  }, !dot && children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/AffiliateCard.jsx
try { (() => {
/**
 * interior coffee — AffiliateCard
 * A product recommendation tied to an affiliate link. Calm, editorial
 * product card: image, retailer eyebrow, name, price, "shop" CTA.
 * Carries the required "anzeige" (ad) disclosure badge.
 */
function AffiliateCard({
  image,
  retailer,
  name,
  price,
  href = "#",
  note,
  layout = "vertical"
}) {
  const horizontal = layout === "horizontal";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: horizontal ? "row" : "column",
      gap: horizontal ? "var(--space-4)" : 0,
      background: "var(--surface-card)",
      border: "1px solid var(--ic-ink-12)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      maxWidth: horizontal ? 460 : 280,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: horizontal ? 150 : "100%",
      flex: "none",
      aspectRatio: horizontal ? "1 / 1" : "4 / 5",
      background: "var(--ic-linen-deep)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ic-ink-30)",
      fontSize: "var(--text-xs)",
      letterSpacing: "0.04em"
    }
  }, "produktbild"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "soft"
  }, "anzeige"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "var(--space-2)",
      flex: 1
    }
  }, retailer && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      fontWeight: 500
    }
  }, retailer), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      textTransform: "lowercase",
      fontSize: "var(--text-lg)",
      lineHeight: 1.15,
      color: "var(--text-strong)",
      letterSpacing: "-0.01em"
    }
  }, name), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      lineHeight: 1.45
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-strong)",
      fontWeight: 600,
      fontVariantNumeric: "tabular-nums"
    }
  }, price), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: href,
    variant: "coffee",
    size: "sm"
  }, "shop"))));
}
Object.assign(__ds_scope, { AffiliateCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AffiliateCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * interior coffee — Tag
 * Lowercase topic chip — "wohninspo", "broken pieces", "#linen".
 * Quiet pill on linen; can be filled for emphasis.
 */
function Tag({
  children,
  tone = "outline",
  size = "md",
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "3px 10px",
      font: "var(--text-2xs)"
    },
    md: {
      padding: "5px 13px",
      font: "var(--text-xs)"
    },
    lg: {
      padding: "10px 20px",
      font: "var(--text-sm)"
    }
  };
  const s = sizes[size] || sizes.md;
  const tones = {
    outline: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid var(--ic-ink-12)"
    },
    solid: {
      background: "var(--ic-off-black)",
      color: "var(--ic-linen)",
      border: "1px solid var(--ic-off-black)"
    },
    coffee: {
      background: "var(--ic-coffee)",
      color: "var(--ic-linen)",
      border: "1px solid var(--ic-coffee)"
    },
    olive: {
      background: "var(--ic-olive)",
      color: "var(--ic-linen)",
      border: "1px solid var(--ic-olive)"
    },
    linen: {
      background: "var(--ic-linen-deep)",
      color: "var(--ic-off-black)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: s.padding,
      fontFamily: "var(--font-sans)",
      fontSize: s.font,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.02em",
      lineHeight: 1,
      textTransform: "lowercase",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...(tones[tone] || tones.outline)
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/MediaCard.jsx
try { (() => {
/**
 * interior coffee — MediaCard
 * An editorial image tile for moodboards / feed previews. Warm linen frame,
 * soft media shadow, optional caption + tags. Image is the hero.
 */
function MediaCard({
  image,
  caption,
  tags = [],
  ratio = "4 / 5",
  series = false
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      maxWidth: 320,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: "var(--ic-linen-deep)",
      boxShadow: "var(--shadow-media)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: caption || "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ic-ink-30)",
      fontSize: "var(--text-xs)",
      letterSpacing: "0.04em"
    }
  }, "bild"), series && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      textTransform: "lowercase",
      fontSize: "var(--text-sm)",
      color: "var(--ic-linen)",
      background: "var(--ic-olive)",
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      letterSpacing: "-0.01em"
    }
  }, "broken pieces")), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-body)",
      lineHeight: 1.5,
      textWrap: "pretty"
    }
  }, caption), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    size: "sm"
  }, t))));
}
Object.assign(__ds_scope, { MediaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MediaCard.jsx", error: String((e && e.message) || e) }); }

// export/src/slides.jsx
try { (() => {
// interior coffee — Carousel post template (4:5 / 1080×1350)
// Brand-faithful, GENERIC example content — replace copy & image slots per post.
// Surfaces: linen & off-black only. Eyebrows uppercase. ic monogram = signature.
// Image slots use warm placeholder tiles (label "dein bild") so it's obvious
// where a real photo goes — swap them out before publishing.
// Five archetypes: cover · moodboard collage · statement · affiliate feature · closing.

const A = window.IC_ASSET_BASE || "../../assets";
const __R = window.__resources || {};
const MONO = __R.mono || A + "/logos/ic-monogram.png";
const MONO_W = __R.monoW || A + "/logos/ic-monogram-white.png";
const W = 1080,
  H = 1350;
const PAD = 96;

// warm placeholder tones standing in for real photography
const TONES = ["#c9bfae", "#b9a88f", "#7c6f57", "#6b4a3a", "#4e4e3d"];
function Tile({
  i = 0,
  label = "dein bild",
  radius = 6,
  dark,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: TONES[i % TONES.length],
      borderRadius: radius,
      overflow: "hidden",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      bottom: 14,
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: dark ? "var(--ic-paper-50)" : "rgba(28,28,28,0.3)"
    }
  }, label));
}
function Eyebrow({
  children,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: dark ? "var(--ic-paper-70)" : "var(--text-muted)"
    }
  }, children);
}
function Headline({
  children,
  dark,
  size = 104,
  align = "left"
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      textTransform: "lowercase",
      color: dark ? "var(--ic-linen)" : "var(--text-strong)",
      fontSize: size,
      lineHeight: 0.98,
      letterSpacing: "-0.01em",
      margin: 0,
      textAlign: align
    }
  }, children);
}
function Subline({
  children,
  dark,
  align = "left"
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 32,
      lineHeight: 1.4,
      color: dark ? "var(--ic-paper-70)" : "var(--text-body)",
      margin: 0,
      textAlign: align,
      maxWidth: 780
    }
  }, children);
}

// ---------- 1 · COVER (text-only, linen) ----------
function CoverSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      position: "relative",
      background: "var(--ic-linen)",
      overflow: "hidden",
      padding: PAD,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "moodboard \xB7 04"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    size: 108
  }, "wie ein raum", /*#__PURE__*/React.createElement("br", null), "sich anf\xFChlt"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Subline, null, "warm, ruhig, material\u2011bewusst \u2014 ohne", /*#__PURE__*/React.createElement("br", null), "perfekt gestyltes set."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MONO,
    alt: "ic",
    style: {
      height: 96,
      width: "auto"
    }
  })));
}

// ---------- 2 · MOODBOARD COLLAGE (image placeholders) ----------
function MoodboardSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      position: "relative",
      background: "var(--ic-linen)",
      overflow: "hidden",
      padding: PAD,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    size: 76
  }, "warm minimal"), /*#__PURE__*/React.createElement(Eyebrow, null, "material mix")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      marginTop: 44,
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Tile, {
    i: 2,
    label: "dein bild",
    dark: true,
    style: {
      gridRow: "1 / 3"
    }
  }), /*#__PURE__*/React.createElement(Tile, {
    i: 1,
    label: "dein bild"
  }), /*#__PURE__*/React.createElement(Tile, {
    i: 0,
    label: "dein bild"
  })));
}

// ---------- 3 · STATEMENT (off-black) ----------
function StatementSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      position: "relative",
      background: "var(--ic-off-black)",
      overflow: "hidden",
      padding: PAD,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true
  }, "haltung"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    dark: true,
    size: 100
  }, "weniger,", /*#__PURE__*/React.createElement("br", null), "aber besser"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Subline, {
    dark: true
  }, "Du musst keinem Trend hinterherlaufen.", /*#__PURE__*/React.createElement("br", null), "The long game \u2014 und ein Auge, das", /*#__PURE__*/React.createElement("br", null), "wei\xDF, was es will."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MONO_W,
    alt: "ic",
    style: {
      height: 96,
      width: "auto"
    }
  })));
}

// ---------- 4 · AFFILIATE FEATURE (image placeholder + caption bar) ----------
function AffiliateSlide() {
  const BAR = 280;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      position: "relative",
      background: "var(--ic-off-black)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Tile, {
    i: 2,
    label: "dein bild",
    dark: true,
    radius: 0,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: H - BAR
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: BAR,
      background: "var(--ic-linen)",
      padding: PAD,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--ic-coffee)",
      color: "var(--ic-linen)",
      fontFamily: "var(--font-sans)",
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      padding: "10px 18px",
      borderRadius: 3
    }
  }, "affiliate"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 28,
      color: "var(--text-muted)"
    }
  }, "ich hab's selbst gekauft.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    size: 72
  }, "licht in der bude"))));
}

// ---------- 5 · CLOSING CTA (off-black, centered) ----------
function ClosingSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      position: "relative",
      background: "var(--ic-off-black)",
      overflow: "hidden",
      padding: PAD,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MONO_W,
    alt: "ic",
    style: {
      height: 168,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    dark: true,
    size: 88,
    align: "center"
  }, "speichern", /*#__PURE__*/React.createElement("br", null), "f\xFCr sp\xE4ter")));
}
const SLIDES = [{
  el: CoverSlide,
  label: "cover"
}, {
  el: MoodboardSlide,
  label: "moodboard collage"
}, {
  el: StatementSlide,
  label: "statement"
}, {
  el: AffiliateSlide,
  label: "affiliate feature"
}, {
  el: ClosingSlide,
  label: "closing cta"
}];

// horizontal, scroll-snapping strip of all five slides, scaled to fit height
function CarouselDeck() {
  const [s, setS] = React.useState(0.4);
  React.useEffect(() => {
    const fit = () => setS(Math.min(0.62, Math.max(0.22, (window.innerHeight - 150) / H)));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      "--s": s,
      display: "flex",
      gap: 40,
      padding: "56px 64px",
      alignItems: "flex-start",
      minHeight: "100%",
      boxSizing: "border-box"
    }
  }, SLIDES.map(({
    el: El,
    label
  }, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      scrollSnapAlign: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: W * s,
      height: H * s,
      borderRadius: 28 * s,
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      border: "1px solid var(--ic-ink-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      transform: `scale(${s})`,
      transformOrigin: "top left"
    }
  }, /*#__PURE__*/React.createElement(El, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 16,
      paddingLeft: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-strong)",
      fontVariantNumeric: "tabular-nums"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--text-muted)",
      textTransform: "lowercase",
      letterSpacing: "0.04em"
    }
  }, label)))));
}
window.CarouselDeck = CarouselDeck;
window.IC_CAROUSEL_SLIDES = SLIDES;

// Stacked, full-size (1080×1350) renderer for export to Canva — one frame per slide.
function CarouselStack() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "var(--ic-linen-deep)"
    }
  }, SLIDES.map(({
    el: El
  }, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: W,
      height: H,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(El, null))));
}
window.CarouselStack = CarouselStack;
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/link-in-bio/screens.jsx
try { (() => {
// interior coffee — Link-in-bio UI kit
// Owned web surface: the affiliate / monetization hub linked from the
// Instagram & TikTok profiles. Composes the DS primitives.
const {
  Avatar,
  Button,
  Tag,
  Badge,
  AffiliateCard,
  MediaCard
} = window.InteriorCoffeeDesignSystem_c725ea;
const MONO = "../../assets/logos/ic-monogram.png";
const WORDMARK = "../../assets/logos/interior-coffee-wordmark.png";

// warm placeholder tones standing in for real room photography
const TONES = ["#e2e0d5", "#d8d3c4", "#c9bfae", "#b9a88f", "#7c6f57", "#4e4e3d", "#6b4a3a", "#492f27"];
function Photo({
  i = 0,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: TONES[i % TONES.length],
      display: "flex",
      alignItems: "flex-end",
      padding: 10,
      color: i > 3 ? "var(--ic-paper-50)" : "var(--ic-ink-30)",
      fontSize: 10,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      ...style
    }
  }, label || "");
}
function TopBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 20px",
      background: "rgba(236,235,227,0.86)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--ic-ink-06)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: WORDMARK,
    alt: "interior coffee",
    style: {
      height: 13,
      width: "auto",
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "men\xFC",
    style: {
      border: "none",
      background: "none",
      padding: 6,
      cursor: "pointer",
      color: "var(--ic-off-black)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  }))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "32px 24px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    monogram: true,
    size: 86,
    monogramSrc: MONO
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 38,
      marginTop: 18,
      lineHeight: 1
    }
  }, "interior coffee"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--text-body)",
      fontSize: 15,
      lineHeight: 1.5,
      maxWidth: 300,
      margin: "12px auto 0",
      textWrap: "pretty"
    }
  }, "r\xE4ume die sich nach etwas anf\xFChlen. wohninspo mit haltung \u2014 ohne perfekt gestyltes set."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "outline",
    size: "sm"
  }, "wohninspo"), /*#__PURE__*/React.createElement(Tag, {
    tone: "olive",
    size: "sm"
  }, "broken pieces"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline",
    size: "sm"
  }, "affiliate")));
}
function SocialLinks() {
  const Row = ({
    icon,
    label,
    meta
  }) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "15px 18px",
      background: "var(--surface-card)",
      border: "1px solid var(--ic-ink-12)",
      borderRadius: "var(--radius-md)",
      color: "var(--text-strong)",
      transition: "var(--transition-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ic-coffee)",
      display: "flex"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 15
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, meta), /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ic-ink-30)",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  })));
  const ig = /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1",
    fill: "currentColor",
    stroke: "none"
  }));
  const tt = /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 3c.3 2.2 1.8 3.9 4 4.2v3c-1.5 0-2.9-.4-4-1.1V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.1A3 3 0 1 0 13 15V3h3z"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 20px 8px"
    }
  }, /*#__PURE__*/React.createElement(Row, {
    icon: ig,
    label: "instagram",
    meta: "@interior.coffee"
  }), /*#__PURE__*/React.createElement(Row, {
    icon: tt,
    label: "tiktok",
    meta: "@interior.coffee"
  }));
}
function ShopSection() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 20px 8px"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "affiliate \xB7 anzeige",
    title: "shop the look"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Pick, {
    i: 3,
    retailer: "hay",
    name: "pao lampe",
    price: "89 \u20AC"
  }), /*#__PURE__*/React.createElement(Pick, {
    i: 1,
    retailer: "h&m home",
    name: "leinenvorhang",
    price: "34 \u20AC"
  }), /*#__PURE__*/React.createElement(Pick, {
    i: 2,
    retailer: "ferm living",
    name: "keramikvase",
    price: "49 \u20AC"
  }), /*#__PURE__*/React.createElement(Pick, {
    i: 6,
    retailer: "vinterior",
    name: "teakhocker",
    price: "120 \u20AC"
  })));
}
function Pick({
  i,
  retailer,
  name,
  price
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "block",
      background: "var(--surface-card)",
      border: "1px solid var(--ic-ink-12)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1 / 1"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    i: i
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 8,
      left: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "soft"
  }, "anzeige"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "11px 12px 13px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      fontFamily: "var(--font-sans)",
      fontWeight: 500
    }
  }, retailer), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      textTransform: "lowercase",
      fontSize: 18,
      color: "var(--text-strong)",
      marginTop: 3,
      letterSpacing: "-0.01em"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--text-strong)",
      marginTop: 6
    }
  }, price)));
}
function BrokenPieces() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 20px 8px"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "serie",
    title: "broken pieces"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--text-body)",
      fontSize: 14,
      lineHeight: 1.55,
      marginTop: 8,
      textWrap: "pretty"
    }
  }, "neuanfang, leere wohnung, das gef\xFChl von zuhause erst aufbauen m\xFCssen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      overflowX: "auto",
      marginTop: 14,
      paddingBottom: 4
    }
  }, [5, 6, 7, 4].map((t, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      position: "relative",
      flex: "none",
      width: 132,
      aspectRatio: "3 / 4",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-media)"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    i: t
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      bottom: 9,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      textTransform: "lowercase",
      color: "var(--ic-linen)",
      fontSize: 14
    }
  }, "tag ", idx + 1)))));
}
function SectionHead({
  eyebrow,
  title
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      fontFamily: "var(--font-sans)",
      fontWeight: 500
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      marginTop: 6
    }
  }, title));
}
function NewsletterCard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "20px",
      background: "var(--ic-off-black)",
      borderRadius: "var(--radius-xl)",
      padding: "26px 22px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      textTransform: "lowercase",
      color: "var(--ic-linen)",
      fontSize: 24,
      lineHeight: 1.15
    }
  }, "kein algorithmus,", /*#__PURE__*/React.createElement("br", null), "nur die guten dinge"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--ic-paper-70)",
      fontSize: 13,
      margin: "10px auto 18px",
      maxWidth: 240,
      lineHeight: 1.5
    }
  }, "moodboards & funde direkt ins postfach. ein mal im monat."), /*#__PURE__*/React.createElement(Button, {
    variant: "coffee",
    size: "md",
    fullWidth: true
  }, "anmelden"));
}
function Footer() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 36px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MONO,
    alt: "ic",
    style: {
      height: 30,
      width: "auto",
      margin: "0 auto",
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--text-muted)",
      fontSize: 11,
      lineHeight: 1.6,
      marginTop: 14,
      maxWidth: 280,
      marginInline: "auto"
    }
  }, "links enthalten affiliate-werbung. als amazon- & partner-teilnehmerin verdiene ich an qualifizierten k\xE4ufen."));
}
function BioApp() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(SocialLinks, null), /*#__PURE__*/React.createElement(ShopSection, null), /*#__PURE__*/React.createElement(BrokenPieces, null), /*#__PURE__*/React.createElement(NewsletterCard, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.BioApp = BioApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/link-in-bio/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.AffiliateCard = __ds_scope.AffiliateCard;

__ds_ns.MediaCard = __ds_scope.MediaCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

})();
