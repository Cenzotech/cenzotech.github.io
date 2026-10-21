---
name: Vincent Hajiron Portfolio
description: A living dark editor for practical, human-centered software work.
colors:
  canvas: "#090b10"
  surface: "#10141d"
  surface-raised: "#151b26"
  ink: "#f4f1e8"
  muted: "#9ca6b8"
  faint: "#626c7d"
  line: "#27303d"
  chartreuse: "#b9f227"
  sky: "#5ed3f3"
  coral: "#ff7a70"
  lilac: "#b7a3ff"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(62px, 5.8vw, 92px)"
    fontWeight: 700
    lineHeight: 0.91
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(46px, 6vw, 88px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  action: "5px"
  field: "6px"
  control: "7px"
  palette: "12px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "38px"
  section: "clamp(28px, 6vw, 96px)"
components:
  action-primary:
    backgroundColor: "{colors.chartreuse}"
    textColor: "{colors.canvas}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "0 22px"
    height: "52px"
  action-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "0 22px"
    height: "52px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 11px"
  command-field:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.field}"
    padding: "0 18px"
    height: "52px"
---

# Design System: Vincent Hajiron Portfolio

## Overview

**Creative North Star: "The Living Editor"**

This is a dark editor workspace made human: technically precise, quietly warm, and shaped around real operational software rather than decorative code theater. Editor anatomy provides orientation and credibility, while oversized plain-language Poppins statements keep Vincent's judgment and point of view in the foreground.

The visual system is dense but orderly. Hairline rules, file tabs, line numbers, syntax accents, a fixed status bar, and a functioning command palette form one continuous world. Content remains semantic and readable; the metaphor supports the narrative instead of disguising it.

**Key Characteristics:**

- Near-black navy canvas with warm white ink and restrained syntax color.
- Bold Poppins for human statements; JetBrains Mono for operational detail and controls.
- Ruled, edge-to-edge surfaces instead of generic floating cards.
- Authored line-arrow SVGs as the recurring directional mark.
- Keyboard-first navigation, view-linked reveals, and complete reduced-motion parity.

## Colors

The palette behaves like syntax highlighting on a restrained navy editor: neutrals carry structure and scarce bright colors carry meaning.

### Primary

- **Electric Chartreuse** (`#b9f227`): Primary action fills, focus outlines, selection, numbered principles, and the text caret.

### Secondary

- **Syntax Sky** (`#5ed3f3`): Work categories and the command input boundary.
- **Signal Coral** (`#ff7a70`): A single work/experience classification.
- **Active Lilac** (`#b7a3ff`): The active file tab, hero caret, and one experience classification.

### Neutral

- **Midnight Canvas** (`#090b10`): Page background and inverse action text.
- **Editor Surface** (`#10141d`): Hover rows and the about-section tonal layer.
- **Raised Editor Surface** (`#151b26`): Secondary-action hover state.
- **Warm Ink** (`#f4f1e8`): Primary text.
- **Cool Slate** (`#9ca6b8`): Supporting copy, metadata, and inactive controls.
- **Faint Slate** (`#626c7d`): Line-number decoration.
- **Structural Line** (`#27303d`): The default one-pixel divider and border.

**The Syntax Rationing Rule.** Bright color is semantic, never atmospheric decoration. Chartreuse denotes action/focus, lilac denotes active/editor state, and sky/coral classify information.

## Typography

**Display Font:** Poppins (sans-serif fallback)  
**Body and Label Font:** JetBrains Mono (monospace fallback)

**Character:** Poppins supplies emphatic, human-facing statements; JetBrains Mono supplies the precise rhythm of editor chrome, controls, dates, facts, and explanatory copy. The division is functional and must remain visible.

### Hierarchy

- **Display** (700, `clamp(62px, 5.8vw, 92px)`, 0.91): Hero statement; compresses to `clamp(48px, 12vw, 76px)` below 900px and `clamp(43px, 13.5vw, 64px)` below 520px.
- **Headline** (700, `clamp(46px, 6vw, 88px)`, 0.98): Major section and closing statements, balanced at roughly 11–12 characters wide.
- **Title** (600, `24px`, 1.25): Case-study titles.
- **Body** (400, `16px`, 1.8): Supporting narrative; typically constrained to 58–64ch. The hero body is `18px/1.65` and narrows to `15px` on small screens.
- **Label** (400, `12px`, 1.4): Tabs, categories, metadata, tags, palette hints, and status chrome; categories may be uppercase.

**The Two-Voice Rule.** Poppins speaks for the person; JetBrains Mono speaks for the workspace. Do not introduce a third typeface or turn long display copy into monospace decoration.

## Layout

Desktop begins as a measured editor frame: a fixed 56px tab strip, an editorial hero on the left, a ruled experience rail beginning near 60.7% width, and a work index below the 58% horizontal division. The hero is at least 992px tall. Later sections use full-width ruled bands with `140px clamp(28px, 6vw, 96px)` padding, two-column headings, and edge-to-edge case rows rather than card grids.

At 900px and below, the metaphor compresses into a single document: tabs scroll horizontally at 52px high, the hero and rails return to normal flow, line numbers disappear, actions stack, multi-column sections collapse, and section padding becomes `100px 24px`. Below 520px the command hint reduces to its keyboard chord and contact actions become a vertical stack. No destination or narrative tier is removed.

Spacing is intentionally compact inside controls and generous between narrative regions. Reuse the observed 8px, 14px, 24px, and 38px steps; reserve fluid section gutters for full-page composition.

## Elevation & Depth

The system is flat by default. Depth comes from tonal layers and one-pixel rules, not card shadows. Only transient or luminous states lift: timeline markers glow with `0 0 18px currentColor`, and the command palette casts `0 24px 70px rgba(0, 0, 0, .55)` over a darkened backdrop.

**The Ruled-Surface Rule.** Persistent content belongs to the shared editor plane and is separated with lines or tone. Do not turn work entries or principles into floating shadow cards.

## Shapes

Most structural regions are square and full-bleed. Small radii are reserved for controls: 5px actions, 6px fields, 7px command hints, and 12px for the floating command palette. Tags use a 999px pill, timeline markers are circular, and the authored arrow uses a thin 1.6px round-capped line. Default borders are one pixel.

## Components

### Actions

- **Primary:** Chartreuse fill, canvas text, chartreuse border, 52px height, 22px horizontal padding, and 5px radius.
- **Secondary:** Transparent surface, warm ink, structural border, and the same geometry.
- **Hover / Focus:** Both rise 2px; the secondary gains the raised surface. Keyboard focus uses a 2px chartreuse outline with a 4px offset.
- **Arrow:** Use the authored 19px inline SVG; internal links point right with a chevron and external links travel up-right. Do not substitute an icon font or Unicode arrow.

### Tags

Tags are compact transparent pills with a one-pixel structural border, `8px 11px` padding, and 11px JetBrains Mono text. They identify technologies rather than act as decorative badges.

### Ruled Rows

Work entries, cases, and principles are border-separated rows on the shared surface. Work rows use numbered syntax color, a strong mono title, muted category text, and the authored arrow; hover adds only the editor-surface tone.

### Navigation

The fixed top strip uses file-like tabs with one-pixel separators. Inactive tabs are muted; hover adds the editor surface; the active tab uses lilac text and a 3px inset underline. A bordered command hint opens the palette and retains a visible keyboard focus state.

### Command Palette

The palette is the signature floating component: a 760px maximum-width surface, 12px radius, structural border, dark backdrop, sky-bordered search field, and full-width ruled commands. Hovered or keyboard-focused commands invert to chartreuse/canvas. It opens from the command hint or Ctrl/Cmd+K, traps focus, closes on Escape or backdrop click, navigates to matching sections, and restores focus to its trigger.

### Motion

The caret blinks in 1.1s steps. Palette backdrop and panel enter once over 240ms and 340ms; the panel uses `cubic-bezier(.16, 1, .3, 1)`. Supporting sections resolve on their view timeline from a 34px downward offset with slight blur and staggered entry ranges. Under `prefers-reduced-motion: reduce`, scrolling becomes immediate, durations collapse to 0.01ms, and reveal targets render fully visible with no transform or filter.

## Do's and Don'ts

### Do:

- **Do** preserve exact palette values and the Poppins/JetBrains Mono role split.
- **Do** compose with full-width rules, aligned rails, and shared surfaces.
- **Do** keep the command palette keyboard-complete and restore trigger focus on close.
- **Do** use the authored arrow SVG consistently for direction and destination.
- **Do** retain full static clarity when reduced motion is requested.
- **Do** compress the editor into one readable flow at 900px without dropping content.

### Don't:

- **Don't** add decorative stock imagery, fake code, terminal noise, gradients unrelated to the existing canvas glow, or gratuitous neon.
- **Don't** replace ruled rows with a generic rounded-card grid.
- **Don't** use syntax accents interchangeably or let chartreuse dominate large surfaces.
- **Don't** introduce extra font families, icon libraries, or mismatched arrow glyphs.
- **Don't** make motion the only carrier of hierarchy, state, or content visibility.
