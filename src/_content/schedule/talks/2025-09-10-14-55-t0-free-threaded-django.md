---
category: talks
start_datetime: 2025-09-10 14:55:00-05:00
end_datetime: 2025-09-10 15:40:00-05:00
permalink: /talks/free-threaded-django/
presenter_slugs:
- micah-lyle
room: Sauganash Ballroom
tags:
- Python
- Threading
title: Free Threaded Django
video_url: https://www.youtube.com/watch?v=8VfX5z7zoas
track: t0
---

This talk will likely have three or four major sections. Some of this is subject to change when we get out to ~1 to ~2 months from the conference given changes/breakthroughs in the Python free threading world, and any additional changes that are projected to happen in Python 3.14. That being said, here is the current outline:

1. What is the GIL, and what are the positive and negative consequences of free threading and removing the GIL. What does the GIL protect against? What kind of bugs are "impossible" with the GIL that are now possible without it? And, given all of that, what does removing the GIL enable?
2. If Django was in free threading mode (without the GIL), what parts of it and dependencies of it would likely be thread safe? What parts might not be thread safe, or would need some additional to work to become thread safe? We'll dive into various Django internals and demonstrate places that might need attention. We'll also look at database adapters like psycopg and talk about how free threading impacts those. Finally, we'll talk about sync/async Django, and how free threading would impact both, from a thread safety angle and also from a performance angle.
3. On the WSGI/ASGI broker side, we'll look at gunicorn, uvicorn, and granian, a newer option that provides free threaded support. We'll talk about if and how these can (or can't currently be) run in free threading mode. We'll then do a live demo profiling a Django application running with and without free threading, and look at both speed/performance and memory efficiency.
4. Finally, we'll conclude with a summary of the current state of things. Can you run Django applications on Python 3.13 (or soon to come out 3.14) in free threaded mode? Should you do so in production (at your own risk)? And if not, what needs to happen, both on the Django side and related libraries, before free threaded mode is a viable production option for Django.