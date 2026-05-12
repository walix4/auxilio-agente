#!/usr/bin/env python3
"""Rewrite the Fire Department-128 Webflow template into the Auxilio brand.
Reads home-1.html, writes index.html in the same folder.

Strategy:
  1. Make all relative CDN/script URLs absolute so the file works offline-of-origin.
  2. Repair two malformed URLs left over from the Webflow CMS export.
  3. Replace every firefighter-themed text/title/meta tag with Auxilio copy.

The HTML structure (sections, classes, animations, layout) is left untouched.
"""

from pathlib import Path
import re

SRC = Path(__file__).parent / "home-1.html"
DST = Path(__file__).parent / "index.html"

html = SRC.read_text()

# ---------------------------------------------------------------------------
# 1. Relative -> absolute URLs (so the page loads cleanly when opened locally)
# ---------------------------------------------------------------------------
abs_prefix_pairs = [
    ('href="cdn.prod.website-files.com/',       'href="https://cdn.prod.website-files.com/'),
    ('src="cdn.prod.website-files.com/',        'src="https://cdn.prod.website-files.com/'),
    ('src="ajax.googleapis.com/',               'src="https://ajax.googleapis.com/'),
    ('src="d3e54v103j8qbb.cloudfront.net/',     'src="https://d3e54v103j8qbb.cloudfront.net/'),
]
for old, new in abs_prefix_pairs:
    html = html.replace(old, new)

# ---------------------------------------------------------------------------
# 2. Repair malformed Webflow CMS URLs (artifacts of the original export)
# ---------------------------------------------------------------------------
html = html.replace(
    'https://fire-department-128.webflow.io/&quot;https://cdn.prod.website-files.com/',
    'https://cdn.prod.website-files.com/',
)
html = html.replace(
    'https://fire-department-128.webflow.io/\\&quot;//cdn.embedly.com/',
    'https://cdn.embedly.com/',
)
# Webflow export URL-encoded the jQuery query string ("?" → "%3F"), which makes
# CloudFront return 403 and breaks every Webflow interaction (sliders, scroll
# reveals, hovers). Restore the literal "?" so the script loads.
html = html.replace(
    'jquery-3.5.1.min.dc5e7f18c8.js%3Fsite=',
    'jquery-3.5.1.min.dc5e7f18c8.js?site=',
)
html = html.replace('data-wf-domain="fire-department-128.webflow.io"', 'data-wf-domain="auxilio.ai"')

# ---------------------------------------------------------------------------
# 3. Text rewrites — order matters: longer / more specific strings first.
# ---------------------------------------------------------------------------
replacements = [
    # ------ <head> / meta ------
    ('<title>Home 1 - Fire Department-128</title>',
     '<title>Auxilio — Your Safety, Your Control</title>'),
    ('content="Home 1 - Fire Department-128"',
     'content="Auxilio — Emergency response rebuilt for the AI era"'),

    # ------ Hero ------
    ('Saved Lives And Protecting Property',
     'Emergency Response Rebuilt For The AI Era'),
    ('The precautions to prevent potentially harmful fires, surviving and reducing the damage caused by emergencies.',
     'Auxilio replaces outdated dispatch systems with real-time AI coordination, simultaneous responder mobilization, and software-defined public safety infrastructure.'),
    # Hero CTA — only the hero version (wrapped in button-white-text), not the 3 blog "Learn More" links.
    ('class="button-white-text">Learn More<',  'class="button-white-text">Watch Live Dispatch<'),
    ('class="link-black">Learn More<',         'class="link-black">Read Briefing<'),

    # ------ Stats strip ------
    ('>500+<',  '>5s<'),
    ('>Families Saved<', '>Full Dispatch<'),
    ('>97%<',  '>50<'),
    ('>Trusted Clients<', '>Officers Simultaneously<'),
    ('>100<',  '>30K+<'),
    ('>Trained Staff<', '>Responders Supported<'),
    ('>28+<',  '>99.99%<'),
    ('>Years Experience<', '>Uptime Architecture<'),

    # ------ "Our best services" header ------
    ('>Our best services<', '>AI-native response capabilities<'),
    ('We are a world fire and rescue service - one of the greatest firefighting organizations in the world. To make the world a better place we are here to help you.',
     'A single AI-coordinated platform replaces radios, scanners, dispatch terminals, and decades of fragmented hardware — collapsing the response loop into seconds.'),
    ('>All Services<', '>Explore Architecture<'),

    # ------ Service cards: top 4 (icons left) ------
    ('>Active Accidents<', '>AI Dispatch Engine<'),
    ('>Fire Prevention<',  '>Live Geolocation<'),
    ('>Event Request<',    '>Encrypted Radio Rooms<'),
    ('>Fire Fighting<',    '>Parallel Mobilization<'),

    # ------ Service cards: bottom 6 (grid) ------
    # "Operation Force" appears twice (services grid + Always-Ready row 3)
    # — replace both occurrences with brand-specific labels in the order they appear.
    # First "Operation Force" = service grid card. Second = Always-Ready row 3.
    # Use a counter via re.sub below for ordered replacement.
    ('>Fire Suppression<',     '>Criteria Intelligence DB<'),
    ('>Ambulance Service<',    '>Multi-Transport Response<'),
    ('>Fire Decontamination<', '>Plate &amp; Face Recognition<'),
    ('>Community Safety<',     '>Predictive Analytics<'),
    ('>Fire Investigation<',   '>Audit-Grade Evidence<'),

    # service-card body copy (appears 4 times)
    ('The precautions to prevent potentially harmful fires.',
     'AI-native infrastructure that activates the moment an incident is validated — no human bottleneck.'),

    # ------ "Always Ready" trio ------
    ('We Are Always Ready To Help Your Problems',
     'Always-On Public Safety Infrastructure'),
    ('>Fighter Equipment<',  '>AI Dispatch Core<'),
    ('>Technical Rescue<',   '>Real-Time GPS Streaming<'),
    # the third item ("Operation Force") in this section gets rewritten via regex below
    ('Extinguishes fires and searches for victims in the emergency zone, their transportation and evacuation.',
     'Validates incidents, locates jurisdictionally authorized officers, and activates encrypted radio rooms — in under five seconds.'),

    # ------ Recognition / Get in Touch panel ------
    ('Fire Department Recognition Award',
     'Trusted by Modern Public Safety Agencies'),
    ('From their history we see that they saved 3800+ lives and many properties already.',
     'Deployed across municipal police, universities, and smart cities — replacing $100M+ of legacy hardware with a single AI-coordinated platform.'),
    ('>Get in Touch<', '>Request Demo<'),

    # ------ How We Work ------
    # title stays "How We Work" — body text update via the "From their history" replacement above.
    # Watch button label stays "Watch".

    # ------ Testimonials ------
    ('My grandma was saved in a terrible fire. She has instilled in me the belief that those who risk their lives should be thanked, even if they have not done anything to help me.',
     '__AUX_TESTIMONIAL__'),  # placeholder, replaced per-occurrence below

    # ------ Latest News ------
    ('>Latest News<', '>Field Briefings<'),
    ('We are a world fire and rescue service - one of the greatest firefighting and salvation organizations in the world. To make the world a better place we are here to help you.',
     'Architecture deep-dives, deployment field reports, and original research on how AI-native infrastructure is reshaping emergency coordination.'),
    ('>View All<', '>View All Briefings<'),

    ('The worst thing is to go into smoky basements!',
     'Inside the 5-second dispatch: how Auxilio collapses the response loop'),
    ('Responsibilities of firefighters and rescuers',
     'Why software is replacing $100M of public-safety hardware'),
    ('Types of fire protection for home and business',
     'Encrypted incident channels: building tamper-resistant comms'),
    ('A firefighter is a truly heroic profession. They rescue victims in extreme situations! After all, human life is the most valuable.',
     '__AUX_BLOG_BODY__'),  # placeholder, replaced per-occurrence below

    # blog post dates
    ('>Feb 10, 2023<', '>__AUX_BLOG_DATE__<'),

    # ------ Newsletter ------
    ('Subscribe to our latest news',
     'Get infrastructure briefings from the response edge'),

    # ------ Footer copyright ------
    ('© Fire Department 128. All Rights Reserved 2024.',
     '© Auxilio. All Rights Reserved 2026.'),

    # ------ Footer contact ------
    ('fire.depart@office.com', 'hello@auxilio.ai'),
    ('8502 Preston Rd. Inglewood, Maine 98380',
     '1 Mission Way · San Francisco, CA 94103'),

    # ------ Footer nav labels ------
    ('>Safety &amp; Services<', '>Capabilities<'),
    ('>News<', '>Briefings<'),

    # ------ Top-nav labels ------
    ('>About Us<', '>About<'),
    ('>Services<', '>Capabilities<'),
    ('>Demos<',    '>Product<'),
    ('>Blog<',     '>Briefings<'),
    ('>Our Blog<', '>All Briefings<'),
    ('>Blog Details<', '>Briefing Details<'),
    ('>Blog Category<', '>Briefing Category<'),
    ('>Our Services<', '>Capabilities<'),
    ('>Our FireFighters<', '>Officer Platform<'),
]

# Apply ordered string replacements
for old, new in replacements:
    html = html.replace(old, new)

# ---------------------------------------------------------------------------
# Dead-link cleanup: every other-page .html link goes nowhere because we are
# only producing home-1. Route them to "#" so a click doesn't 404 — preserves
# all hover/styling behaviour.
# ---------------------------------------------------------------------------
DEAD_HREFS = [
    "404.html", "about-us-1.html", "about-us-2.html", "about-us-3.html",
    "blog-grid.html",
    "coming-soon.html",
    "contact-us-1.html", "contact-us-2.html", "contact-us-3.html",
    "faq.html", "gallery.html",
    "home-2.html", "home-3.html",
    "join-us.html", "our-firefighters.html", "our-services.html",
    "testimonials.html", "templates/licensing.html", "templates/style-guide.html",
    "blog-posts/responsibilities-of-firefighters-and-rescuers.html",
    "blog-posts/the-worst-thing-is-to-go-into-smoky-basements.html",
    "blog-posts/types-of-fire-protection-for-home-and-business.html",
    "blog-posts/what-its-like-to-be-a-volunteer-firefighter.html",
    "https://fire-department-128.webflow.io/posts-categories/top-firefighters",
]
for href in DEAD_HREFS:
    html = html.replace(f'href="{href}"', 'href="#"')

# ---------------------------------------------------------------------------
# 4. Per-occurrence rewrites (where the same source string repeats and needs
#    different Auxilio copy each time).
# ---------------------------------------------------------------------------

# Three testimonials, in order of appearance
TESTIMONIALS = [
    "Auxilio collapsed our dispatch loop from minutes into seconds. Fifty officers mobilized on a single tap — no radio call, no terminal lookup, no jurisdiction guesswork. The first software I have seen that actually replaces decades of fragmented hardware.",
    "Our students used to fumble through emergency hotlines. With silent SOS and geofenced response we route the nearest authorized responder in under thirty seconds — without ever exposing identity to a bad actor on campus.",
    "We evaluated every command-center vendor on the market. Auxilio was the only platform built for AI-native coordination at city scale. Federated dispatch finally feels like infrastructure, not integration debt.",
]
def _replace_one(token, replacements_iter):
    nonlocal_state = {"i": 0}
    def sub(_match):
        i = nonlocal_state["i"]
        nonlocal_state["i"] += 1
        return replacements_iter[i] if i < len(replacements_iter) else replacements_iter[-1]
    return re.compile(re.escape(token)), sub

pat, sub = _replace_one("__AUX_TESTIMONIAL__", TESTIMONIALS)
html = pat.sub(sub, html)

# Three blog body teasers
BLOGS = [
    "An engineering tour of the geospatial Redis layer, parallel WebSocket fan-out, and AI validation pipeline that activates fifty officers from a single tap.",
    "Radios, plate scanners, dispatch terminals, and radar guns — the hardware stack of legacy law enforcement is being absorbed into a single AI-native mobile platform.",
    "How we engineered ephemeral, role-scoped radio rooms with audit-grade evidence logging — and why government deployments demand them as table stakes.",
]
pat, sub = _replace_one("__AUX_BLOG_BODY__", BLOGS)
html = pat.sub(sub, html)

DATES = ["Feb 10, 2026", "Jan 28, 2026", "Jan 14, 2026"]
pat, sub = _replace_one("__AUX_BLOG_DATE__", DATES)
html = pat.sub(sub, html)

# Two "Operation Force" instances:
#   - 1st in the services grid → "Officer Agent Platform"
#   - 2nd in Always-Ready row 3 → "Encrypted Incident Comms"
OP_FORCE_LABELS = [
    ">Officer Agent Platform<",
    ">Encrypted Incident Comms<",
]
pat, sub = _replace_one(">Operation Force<", OP_FORCE_LABELS)
html = pat.sub(sub, html)

# ---------------------------------------------------------------------------
DST.write_text(html)
print(f"Wrote {DST} ({len(html):,} chars)")
