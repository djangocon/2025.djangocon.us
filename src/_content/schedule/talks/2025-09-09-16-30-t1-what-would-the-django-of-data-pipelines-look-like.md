---
category: talks
start_datetime: 2025-09-09 16:30:00-05:00
end_datetime: 2025-09-09 16:55:00-05:00
permalink: /talks/what-would-the-django-of-data-pipelines-look-like/
presenter_slugs:
- lisa-dusseault
room: Wolf Point Ballroom
tags:
- Data Pipelines
- Web Dev
- Debugging
title: What would the django of data pipelines look like?
video_url: https://www.youtube.com/watch?v=ax61sii5wU8
track: t1
---

This talk will introduce the phaser open source library, but also teach principles that can help organizing data transformations and data pipelines.  It's hard to carve out time to build your own utilities for a data pipeline and it's hard to even know what are effective patterns for modularizing once code gets complicated.  Let's talk about why this investment is important and how the investment could be less costly.  

Topics will include 
* Organizing data pipelines into more phases than just ETL, and why
* Using checkpoints and logging to be able to debug pipeline breakdowns after they occur
* Making data transformation code testable and maintainable
* Supporting a team or rotating contributors to data pipeline code