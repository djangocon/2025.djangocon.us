---
category: talks
start_datetime: 2025-09-09 11:40:00-05:00
end_datetime: 2025-09-09 12:05:00-05:00
permalink: /talks/building-maintainable-django-projects-the-difficult-teenage-years/
presenter_slugs:
- alex-henman
room: Wolf Point Ballroom
tags:
- Web Dev
title: 'Building maintainable Django projects: the difficult teenage years'
video_url: https://www.youtube.com/watch?v=J30ltoatmYo
track: t1
---

Rather than focusing on a single theme this talk touches on a range of real-world engineering problems and patterns, all centred around the challenges that arise in a mature codebase. Topics include:

**1. Cross-Framework Harmony with Custom Events and `json_script`**

Still stuck halfway through migrating to your new JavaScript framework 5 years later? (Just me?) I'll demonstrate a pattern which uses custom DOM events to keep things loosely coupled and how `json_script` can transmit structured data when you can't go all in on APIs.

**2. Customising DRF for more consistent APIs and Observability**

The Django REST Framework is powerful, but building standard patterns around it makes it even better. I’ll show how custom serializer fields and base viewsets can make data access consistent and enable things like automatic event tracking and monitoring endpoints.

**3. Taming Long-Running Queries with Postgres Statement Timeouts**

Long-running queries can kill user experience. By setting a `statement_timeout` in Postgres and pairing it with custom middleware and a database backend, we turn slow queries into graceful 503 responses that we can handle in the front-end.

**4. Fine-Grained Permissions with Decorators and Feature Flags**

We'll look at how we can define flexible access rules per view or endpoint and how feature flags can provide gated access to beta features for specific user segments and internal use.

**5. Better Logs with Middleware and Request Tracing**

We'll explore middleware patterns for injecting a shared `request_id` into logs, techniques for surfacing Django view names in nginx logs, and how to connect database monitoring to specific HTTP requests for a full trace through the stack.

Whether you’re wrangling a large project or trying to avoid turning your fresh greenfield into a mess, these tips aim to make your Django stack more predictable, observable, and maintainable.