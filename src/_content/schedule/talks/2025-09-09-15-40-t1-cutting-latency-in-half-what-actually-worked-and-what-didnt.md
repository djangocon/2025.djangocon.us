---
category: talks
start_datetime: 2025-09-09 15:40:00-05:00
end_datetime: 2025-09-09 16:25:00-05:00
permalink: /talks/cutting-latency-in-half-what-actually-worked-and-what-didnt/
presenter_slugs:
- timothy-mccurrach
room: Wolf Point Ballroom
tags:
- Performance
- Caching
- Web Dev
title: 'Cutting latency in half: What actually worked—and what didn’t'
video_url: https://www.youtube.com/watch?v=jxk1BRTJsAY
track: t1
---

Join me as we dig into real-world Django performance challenges - from quick wins to stubborn bottlenecks that took multiple strategies to fix. Along the way, we’ll explore how we identified what really needed improving - and what was a red herring. We’ll walk through the code that caused the slowdowns, and examine the performance data to learn what actually made a difference.

We’ll start with the often-overlooked topic of profiling, examining scenarios where our personal experience of the site didn’t match what the performance metrics were telling us. We’ll explore common mistakes in how performance is measured and why different goals require different metrics. Finally, we’ll compare the strengths and weaknesses of various profiling tools available - so you can better understand where your real opportunities for improvement lie.

From there, we’ll learn what it means for querysets to be lazy, what an N+1 issue is, and the tools Django (and other third-party packages) provide to solve them. We’ll explore why pagination can be slow, look at caching strategies to speed up your site, database indexes to speed up your queries, and examine common Django-specific bottlenecks - seeing in each case the difference these changes made in real life, not just in theory.

We’ll also look at a few situations where the biggest improvements didn’t come from deep ORM knowledge or database nuances, but from much simpler changes - and reflect on the lessons those experiences taught us.

Maybe performance has always felt like a bit of a mystery to you, or maybe you’re just curious how adding caching actually slowed our site down. Whether you’re a beginner or a seasoned developer, this talk will equip you with practical tools, proven techniques, and guiding principles to make your Django apps faster and more efficient.