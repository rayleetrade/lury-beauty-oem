# GEO and inquiry release — 23 September 2026

## Why
The live site had a 200-direction concept-led catalog, a 2,000-box MOQ repeated without current supporting evidence, and a WhatsApp-only form. Current project instructions prioritize real sample evidence, factual sourcing claims and usable buyer inquiries.

## Changes
- Rewrite home, products, samples, OEM, contact, FAQ and UK pages around sample evidence and a buying brief.
- Publish three owner-provided, unaltered photographs of the Girl Group 1.0 sample. Keep them separate from illustrated W/B references; no invented model mapping.
- Remove unsupported fixed MOQ and performance claims from core product copy; use order-specific terms. Preserve sourced product research and clearly hypothetical procurement scenarios.
- Move the full concept catalog to /design-library. Mark its 100 detailed concept briefs noindex,follow and exclude them from the sitemap. Preserve existing URLs and browsing access.
- Form: 3 required fields, optional purchasing details, request reference, WhatsApp/email/copy delivery paths, first-page attribution. Prepared requests are explicitly not sent.
- Only emit form_submit after a real receiver acknowledges the matching request ID. A channel click or prepared form is not a lead or order.
- Add optional authenticated webhook adapter. It is disabled without both required environment variables. Return 503 when unconfigured, never a fake success.
- Keep old pages reachable; do not invent a domain mailbox, GA ID, certification, factory ownership, or local warehouse.

## Receiver activation (not enabled in this release)
The current Vercel connection is not authorized for the project. No receiver, CRM, GA4 or Google Search Console ownership is claimed to be active.

Set INQUIRY_WEBHOOK_URL to an owner-controlled HTTPS receiver and INQUIRY_WEBHOOK_TOKEN to its private bearer secret; redeploy. Never put secrets in NEXT_PUBLIC variables or the repository. The receiver must validate the token, rate-limit abuse, persist the request, deduplicate using the Idempotency-Key header / request ID, and acknowledge only after durable storage with {"accepted":true,"id":"the exact request id"}. Alert/notify the owner from that receiver. Test storage, owner receipt, retry deduplication and delivery failure before enabling publicly. The adapter itself does not create a CRM or database.

The form stays on WhatsApp/email when this setup is absent. WhatsApp account reachability and actual email delivery still need a real receipt check; this release tests preparation and links only, without sending a customer message.

## Measurement activation (pending account access)
LeadSignals emits landing_view, sample_cta, form_start, form_prepare, whatsapp_click, email_click, inquiry_copy and (only after server acknowledgement) form_submit into a client-side dataLayer. No analytics dashboard or persistent event collection is active solely because this dataLayer exists. Connect the approved analytics tool with the appropriate privacy configuration; do not count these browser events as received inquiries.

Attribution keeps only first path and simple source/UTM tokens in session storage. Form text is not stored there. No contact details enter tracking event parameters. Request links include their source fields for manual CRM entry. Do not put personal data into campaign tags.

GOOGLE_SITE_VERIFICATION and BING_SITE_VERIFICATION are optional server build variables for values actually issued to this property. DNS verification may already exist; absence of a meta tag does not establish absence of ownership. No values have been invented and no GSC performance report was available.

## Research method
Ten relevant official supplier websites retrieved for private-label/OEM lash buyer queries on 23 September 2026. This is a reference set, not a universal or measured AI-answer top-ten ranking. Copy buying-flow ideas and useful information structures; do not copy photography, testimonials, certification, minimums or factual capabilities from competitors.

| Supplier | Official page | Pattern used |
|---|---|---|
| HeyMe Beauty | https://heymebeauty.com/uk-lash-supplier/ | UK buyer page linked to samples and packaging steps |
| AuroraCos | https://auroracos.com/private-label-eyelashes/ | Separate samples / quotes; packaging choice descriptions |
| LashPlus | https://lashplusglobal.com/faq/ | Direct answers on MOQ, sampling and specifications |
| VAVALASH | https://uk.vavalash.com/pages/private-label | Clear buyer types, MOQ questions and inquiry route |
| Eyelash Design Company | https://edc-ltd.uk/oemwhite-labelprivate-label | Explain different customization routes |
| EyelashesWorld | https://eyelashesworld.com/private-label/ | Separate style, label, packaging and quote requirements |
| RY Lashes | https://rylashes.com/ | Prominent sample entry next to product categories |
| VietnamLash | https://vietnamlash.com/ | Category navigation and visible support contact |
| LashVee | https://lashvee.com/ | Product/quantity/packaging brief and compact inquiry fields |
| OurLash | https://www.ourlash.com/portfolio_category/private-label-oem-odm/ | Packaging grouped by actual product format |

Google guidance: https://developers.google.com/search/docs/appearance/ai-features — SEO fundamentals remain relevant; special AI files/schema are not required and indexing is not guaranteed. https://developers.google.com/search/docs/essentials/spam-policies — avoid scaling pages merely to capture search traffic. IndexNow https://www.indexnow.org/documentation — accepted URL submissions do not prove indexing.

## Rollback
Baseline upstream commit: 268b286f0ae0f27a28a3264d78f3aef4c8488114. Changes are applied as an atomic new commit based on the existing tree; all unchanged binary assets remain in the repository. Revert the release commit to restore previous content.
