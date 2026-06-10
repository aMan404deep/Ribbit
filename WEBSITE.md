# Ribbit — Download Website Specification

Single source of truth for building the Ribbit marketing & download website. Covers purpose, site structure, the complete app feature set, the exact design system (colors, type, spacing, components), download mechanics, and tech recommendations.

## 1. Product overview
**Product name:** Ribbit
**Tagline:** "Signal with Nature's Clarity"
**What it is:** A desktop application for creating, sending, and analyzing signals — structured Forms, Alerts, and Polls — to people and groups, with rich response analytics.
**Publisher:** Arrise Solutions · support@arrisesolutions.com · https://arrisesolutions.com
**Current app version:** 0.1.29
**Platforms:** Windows, macOS, Linux (Electron desktop app, auto-updating)
**Design theme:** "Signal Wildlife" — warm organic forest/marsh (light) + bioluminescent night (dark)

## 2. Goals of the website
- Explain what Ribbit is in seconds.
- Showcase every major feature of the app (see Section 4).
- Let users download the correct installer for their OS in one click.
- Build trust (signed installers, checksums, privacy/terms).
- Match the app's visual identity exactly (see Section 5).

## 3. Site structure
**Pages**
- **Home / Landing (primary)** — hero, features, screenshots, download CTA.
- **Download** — per-platform installers, system requirements, checksums, install instructions.
- **Features** (optional standalone, or anchored sections on Home).
- **Changelog / Releases** — version history (tie to app version 0.1.29+).
- **Privacy Policy & Terms of Service** (legal, linked in footer).
- **Support / Contact** — email + help.
- **404** — themed.

**Home page section order**
1. Sticky nav bar (logo, Features, Download, Docs/Support, dark-mode toggle, "Download" button).
2. Hero — product name, tagline, primary screenshot, auto-detected download button.
3. Trusted-by / one-liner value prop.
4. Feature grid (Section 4 features as cards).
5. Deep-dive sections with screenshots (Signals, Analytics, Groups & Hierarchy).
6. Light/Dark theme showcase (the app has both — show them).
7. Platform availability + system requirements.
8. Download CTA band.
9. FAQ.
10. Footer (links, legal, social, version).

## 4. Complete app feature set (show ALL of these)

### 4.1 Signals (core)
The app revolves around three signal types, each available as instant or scheduled, and as recurring series:
- **Forms** — structured multi-question forms (choice, rating, ranking, open text). Multi-step creation wizard with options, recipients, scheduling, and review steps.
- **Alerts** — broadcast notifications requiring acknowledgement.
- **Polls** — quick single/multi-choice polls with live distribution.

*Capabilities:*
- Creation wizards for each type (instant + scheduled variants).
- Scheduling — send now or schedule for later.
- Recurring series — calendar view, month/work-week grids, recurring event management, edit-series panel.
- Drafts — save and resume unfinished signals.
- Editing — edit polls/forms post-creation.

### 4.2 Inbox & Sent
- **Inbox** — receive and respond to signals (form response wizard).
- **Sent** — track signals you've published, with status filters and recurring filters.
- **Signal detail panel** — full detail view with status.
- **Search & filter** — search bar, status filter cards, multi-select filters, date-range filtering.

### 4.3 Analytics (Stage B — advanced)
Rich analytics per signal, with tabbed views:
- **Distribution** — poll/choice charts: donut, treemap, waffle charts, response distribution.
- **Timeline** — response-over-time charts for forms, alerts, polls.
- **Respondents** — who responded/didn't, searchable, status filter chips.
- **Compare** — compare multiple signals: verdict strips, stacked status compare, drop-off funnels, per-question dot plots, per-segment read rates, metadata diffs.
- **Insights** — auto-generated insight cards.
- **Comments** — response comments.
- **Per-question analytics** — rating and ranking renderers, KPI summary cards, individual response detail, poll skip-reason analysis.
- **Export** — data export (Excel/XLSX via exceljs/xlsx; chart export via html-to-image).

### 4.4 Recipients, Groups & Hierarchy
- **Groups** — create and manage recipient groups (group creation wizard, consumer tables).
- **Hierarchy** — organizational hierarchy: publisher directory, assign publishers, consumer/publisher roles, hierarchy levels, access control.
- **Labels** — create, edit, and organize labels to categorize signals.

### 4.5 Settings & platform
- **Profile** — user info, initials avatar, logout.
- **Notifications** — sound alerts toggle, desktop notifications toggle.
- **Updates** — built-in "Check for updates" + auto-update (electron-updater).
- **Version info** — app version (and backend version for permitted users).
- **Region / backend info and data sync (for permitted users).**
- **Light & dark themes** — full "Signal Wildlife" theming.

**When marketing on the site, lead with Signals, Analytics, and Groups/Hierarchy as the three pillars; list the rest as supporting features.**

## 5. Design system (match the app exactly)
The app centralizes all tokens in `src/styles/variables.css` and `src/theme/colors.ts`. Reuse these exact values. Best practice: copy the `:root` and `.dark` blocks from variables.css into the website's global CSS and reference everything via `var(--token)`.

### 5.1 Brand colors
| Role | Light ("Sunlit Marsh") | Dark ("Bioluminescent Night") |
| :--- | :--- | :--- |
| Background | #F0F2F0 | #16191D |
| Surface / Card | #FFFFFF | #262B32 |
| Card hover | #f8faf8 | #2F353C |
| Primary (CTA) | #588157 (fern green) | #48bb78 (forest glow) |
| Primary hover | #3a5a40 | #68d391 |
| Primary text-on-light | #4A7048 | #68d391 |
| Accent | #E0478C (orchid pink) | #FF6B8A (coral) |
| Firefly highlight | #C7F464 | #9FD356 |
| Text (foreground) | #344e41 | #f0f2f0 |
| Secondary text | #5a7260 | #A8AEAE |
| Muted text | #7a8a7e | #6E7878 |
| Border | #c5c2b8 | #3C4149 |
| Subtle border | #e5e3db | #2F353C |

*Status colors (shared):* success #10B981/#34D399, warning #F59E0B/#FBBF24, error #EF4444/#F87171, info #7C3AED/#A78BFA.

### 5.2 Typography
- UI font: **Inter**
- Mono font: **JetBrains Mono** (for code/version strings)
- Base size: 16px
- Scale: xs 12px · sm 14px · base 16px · lg 18px · xl 20px · 2xl 24px · 3xl 32px · 4xl 40px

### 5.3 Spacing (8px base)
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 px. Content max width 1400px; section padding 24px (desktop) / 16px (mobile).

### 5.4 Radius
sm 6 · md 8 · lg 12 · xl 16 · 2xl 24 · 3xl 32 · full 9999 (px). Cards use 16px; buttons/fields ~10px.

### 5.5 Shadows (light mode, pine-teal tint)
- sm: `0 1px 2px rgba(52,78,65,.06)`
- md: `0 4px 6px rgba(52,78,65,.1), 0 2px 4px rgba(52,78,65,.06)`
- lg: `0 10px 20px rgba(52,78,65,.1), 0 4px 8px rgba(52,78,65,.06)`
- Dark mode uses `rgba(0,0,0,.3–.5)` equivalents.

### 5.6 Motion
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out), `cubic-bezier(0.4, 0, 0.2, 1)` (smooth).
- Durations: fast 150ms · base 200ms · slow 300ms.
- Theme transition: 300ms.

## 6. Download mechanics
- **OS auto-detection** — detect Windows/macOS/Linux, surface the matching installer; "Other platforms" link for the rest.
- **Per-platform installers**:
  - Windows: `.exe` (and/or `.msi`), x64 + arm64.
  - macOS: `.dmg`, Intel + Apple Silicon (or universal).
  - Linux: `.AppImage` / `.deb`
- **Version + release date** shown next to each download (current 0.1.29).
- **Checksums (SHA-256)** published per file.
- **Code signing** — Windows + macOS signed; avoids OS warnings.
- **Auto-update note** — app updates itself via electron-updater.
- **Stable URLs** — e.g. `/download/latest/win`
- **Source of artifacts** — link to GitLab CI release artifacts / release storage.

## 7. System requirements (fill in actuals before launch)
- Windows: Windows 10/11 (x64/arm64).
- macOS: macOS 11+ (Intel & Apple Silicon).
- Linux: Ubuntu 20.04+ / AppImage-compatible distro.
- ~200MB disk, 4GB RAM (verify and adjust).

## 8. Recommended tech stack (for consistency with the app)
- Vite + React 18 + Tailwind CSS v4.
- Fonts: Inter + JetBrains Mono.
- CDN hosting for binaries, HTTPS required.

Ensure accessibility standards are met across all components for inclusive usability.
