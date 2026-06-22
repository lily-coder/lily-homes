---
name: Lily Home Interiors
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#44474d'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#74777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#4a5f7f'
  primary: '#001229'
  on-primary: '#ffffff'
  primary-container: '#0f2744'
  on-primary-container: '#798fb1'
  inverse-primary: '#b2c8ed'
  secondary: '#655d52'
  on-secondary: '#ffffff'
  secondary-container: '#e9ded0'
  on-secondary-container: '#696256'
  tertiary: '#1b1000'
  on-tertiary: '#ffffff'
  tertiary-container: '#352300'
  on-tertiary-container: '#a98851'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#b2c8ed'
  on-primary-fixed: '#021c39'
  on-primary-fixed-variant: '#324866'
  secondary-fixed: '#ece1d3'
  secondary-fixed-dim: '#cfc5b7'
  on-secondary-fixed: '#201b12'
  on-secondary-fixed-variant: '#4c463c'
  tertiary-fixed: '#ffdeaa'
  tertiary-fixed-dim: '#e6c184'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5c4211'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system for Lily Home Interiors is built on the pillars of **Timeless Luxury** and **Approachable Sophistication**. It targets high-net-worth individuals and corporate clients in Nairobi seeking a blend of international modern standards and warm, localized comfort. 

The visual style is **Modern Minimalism with Tactile Accents**. It leverages heavy whitespace to convey breathing room and high-end curation, while integrating subtle metallic textures and warm tones to avoid the coldness often associated with luxury. The interface should feel like an invitation into a well-appointed home: calm, structured, and meticulously detailed. 

Key emotional responses:
- **Trust:** Established through deep navy tones and structured layouts.
- **Warmth:** Evoked through cream backgrounds and soft transitions.
- **Aspiration:** Driven by high-contrast serif typography and gold accents.

## Colors

The palette balances the authority of Navy Blue with the residential warmth of Cream and Beige.

- **Primary (Navy Blue - #0F2744):** Used for primary navigation, headings, and high-impact buttons to instill confidence.
- **Secondary (Beige - #E8DDCF):** Applied to subtle section backgrounds and divider lines to provide structure without the harshness of pure grey.
- **Luxury Accent (Gold - #C7A46A):** Reserved for interactive highlights, decorative icons, and call-to-action hover states. Use sparingly to maintain its "premium" status.
- **Surface (Warm Cream - #F8F4EE):** The primary container color, used to differentiate content areas from the Off-white (#FCFBF9) global background.
- **Text (Dark Charcoal - #1A1A1A):** Ensures high readability while feeling softer and more organic than pure black.

## Typography

The typography strategy employs a high-contrast pairing between a classic serif and a functional sans-serif.

- **Headlines:** Use **Playfair Display**. It provides a literary and editorial feel. Use the 700 weight for major hero sections and 500-600 for secondary headers. For the largest display sizes, use a slight negative letter-spacing to create a tighter, more modern look.
- **Body:** Use **Inter**. It is selected for its exceptional legibility and neutral character, allowing the serif headlines and photography to take center stage.
- **Labels:** Small labels and navigational links should use Inter in Semi-Bold (600) with increased letter-spacing and uppercase styling to denote hierarchy and "designer" precision.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid with Generous Margins**. To communicate luxury, the design system prioritizes "white space" (or "cream space") over information density.

- **Desktop:** 12-column grid, 1280px max width, 48px outer margins.
- **Tablet:** 8-column grid, 24px outer margins.
- **Mobile:** 4-column grid, 16px outer margins.
- **Rhythm:** Use an 8px baseline grid. Section vertical padding should be aggressive (minimum 80px on desktop) to allow the studio's portfolio photography to "breathe."
- **Alignment:** Centered layouts for branding and hero moments; left-aligned grids for service descriptions and catalogs.

## Elevation & Depth

To maintain a sophisticated and modern feel, this design system avoids heavy, artificial shadows. Depth is achieved through **Tonal Layering** and **Soft Ambient Occlusion**.

- **Surface Tiers:** Use the warm cream (#F8F4EE) for card backgrounds against the off-white global background. This creates a subtle "stepped" depth.
- **Shadows:** When necessary (e.g., for active modals or floating navigation), use "Tinted Shadows." Instead of black, use a low-opacity Navy Blue shadow (#0F2744 at 8-12% opacity) with a large blur radius (30px+) and 0 spread. This keeps the elevation feeling airy and integrated with the brand colors.
- **Dividers:** Use 1px solid lines in the Secondary Beige (#E8DDCF) to separate content without creating visual noise.

## Shapes

The shape language is **Soft and Structural**. It avoids the playfulness of fully rounded corners in favor of a "tailored" architectural look.

- **Buttons & Inputs:** Use the `soft` (0.25rem) radius. This provides a subtle hint of approachability while maintaining a clean, professional edge.
- **Cards & Modals:** Use `rounded-lg` (0.5rem) to give larger surfaces a gentle, premium feel.
- **Images:** Portfolio imagery should remain sharp (0px radius) to emphasize the architectural and interior design precision, often framed with a generous border or "matting" effect.

## Components

- **Buttons:** 
  - *Primary:* Navy Blue background, White text, 0.25rem radius.
  - *Secondary:* Transparent background, 1px Gold border, Gold text.
  - *Interaction:* On hover, the Gold accent should be used as a soft glow or text color shift.
- **Input Fields:** Use a "minimalist" approach with a bottom border only in Beige (#E8DDCF) that turns Navy Blue on focus. Labels should be small, uppercase Inter.
- **Cards:** No borders. Use the Surface Warm (#F8F4EE) background with a "floating" shadow only on hover to indicate interactivity.
- **Lists:** Use Gold dots or thin horizontal lines for bulleted content to maintain the luxury aesthetic.
- **Navigation:** A sticky top bar with high transparency (using a backdrop blur) to keep the focus on the interior photography. 
- **Chips/Badges:** Small, pill-shaped tags using the Gold accent for "New" or "Premium" service labels, with Inter 12px Medium font.