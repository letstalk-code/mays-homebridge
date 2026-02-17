# PROJECT BRIEF: May's Homebridge

## Overview
May's Homebridge is a high-end **Real Estate Liaison** service. The goal of this website is to bridge the gap between home seekers and the complex real estate market, providing expert consultations and representation.

## Tech Stack
- **Framework:** Next.js (latest)
- **Styling:** Vanilla CSS (Focus on high-fidelity, premium aesthetics)
- **Integrations:** 
  - **GoHighLevel (GHL):** To be used for appointment booking, Zoom links, and payment processing.
  - **Stripe:** Connecting to GHL for secure consultation payments.
  - **Zoom:** Connecting to GHL for automatic consultation link generation.

## Aesthetics & Design Direction
- **Vibe:** Premium, Luxury, Trustworthy, Architectural.
- **Color Palette:**
  - Metallic Gold & Silver (from the logo).
  - Deep Charcoals/Blacks or Clean Architectural Whites.
  - Professional typography (Inter, Oswald, or similar premium Google Fonts).
- **Logos:** 
  - Agency Logo (CreativelyGrow): `assets/logo.png`.
  - Client Logo (May's Homebridge): `assets/mays-logo.png`. (Note: Ensure the background is transparent for best placement).
- **Core Visuals:** High-end real estate photography, clean lines, and 3D metallic accents.

## Key Features to Build
1. **Hero Section:** High-impact value proposition: "Building a path to your Dream home."
2. **Booking Section:** Custom component to house a GHL Calendar embed.
   - Must handle "Paid Consultations."
   - Must automatically trigger Zoom links (configured in GHL).
3. **Services Section:** 
   - Virtual Consultations.
   - Real Estate Liaison Services.
   - Property Search Strategy.
   - Buyer Representation.
4. **Mobile First:** The site must look exceptional on mobile devices.

## Current Progress
- [x] Folder Structure Created.
- [x] Branded Onboarding Kits for GMB and Stripe generated.
- [x] Design assets (Logo) moved to `assets/`.
- [x] Client Templates folder ready.

## Instructions for Claude Code
1. Initialize a fresh Next.js app in this directory.
2. Build out a single-page high-conversion landing page.
3. Focus on a "Sales Machine" architecture (Lead capture -> Booking -> Payment).
4. Use the `GMB_Onboarding_Kit.html` for content inspiration for the "About" and "Services" sections.
