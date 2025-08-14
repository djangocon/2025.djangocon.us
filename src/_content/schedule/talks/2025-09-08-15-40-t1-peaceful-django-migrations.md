---
category: talks
start_datetime: 2025-09-08 15:40:00-05:00
end_datetime: 2025-09-08 16:25:00-05:00
permalink: /talks/peaceful-django-migrations/
presenter_slugs:
- efe-oge
room: Wolf Point Ballroom
tags:
- Migrations
title: Peaceful Django Migrations
track: t1
---

Django’s migration framework is a powerful tool for evolving your database schema, but with great power comes great responsibility. In production systems, the wrong migration at the wrong time can introduce serious performance issues or even temporary outages.

This talk demystifies what actually happens during makemigrations, migrate, and sqlmigrate, explains how Django interacts with the database engine, and highlights the locking behavior that can impact availability. Through real-world examples, we’ll explore schema changes that are especially risky—such as adding columns with defaults or modifying indexes—and how to spot them in advance using Django’s tools and external linters like Squawk.

Attendees will leave with a practical toolkit of strategies for minimizing risk, including safe migration patterns, multi-step deployment techniques, and tips for planning changes during low-traffic windows. Whether you're running a high-traffic SaaS product or a growing internal tool, you'll walk away ready to make database changes with confidence.