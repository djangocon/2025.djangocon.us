---
category: talks
datetime: 2025-09-09 10:50:00-05:00
end_datetime: 2025-09-09 11:35:00-05:00
permalink: /talks/winemaking-with-mutable-event-sourcing-in-django/
presenter_slugs:
- chris-muthig
room: Room B
tags:
- Design Patterns
title: Winemaking with Mutable Event Sourcing in Django
track: t1
---

Event sourcing offers powerful advantages for traceability and domain modeling, but its strict immutability can become a constraint in domains where history needs revision. In this talk, we’ll explore how the complexities of winemaking led us to design a mutable event sourcing system, built with Django, that lets users correct and update the past while preserving consistency across the system. You’ll learn how we combined domain-driven design with a custom command model to add flexibility to an architecture that's traditionally rigid.