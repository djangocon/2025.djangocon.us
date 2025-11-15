---
category: talks
start_datetime: 2025-09-08 17:00:00-05:00
end_datetime: 2025-09-08 17:25:00-05:00
permalink: /talks/postgresql-tuning-parameters-or-tuning-queries/
presenter_slugs:
- henrietta-dombrovskaya
room: Sauganash Ballroom
tags:
- Databases
title: 'PostgreSQL: Tuning parameters or Tuning Queries?'
video_url: yKeSkDd5PYY
track: t0
---

When it comes to database performance tuning, most PostgreSQL practitioners focus on optimizing configuration parameters. It is often assumed that as soon as we choose the correct values for parameters and restart the database instance, all the world's problems will be solved. Indeed, due to configuration parameters tuning, we can observe database performance increase up to 10-20% and sometimes up to 50%. That might sound like impressive numbers, but individual query optimization routinely makes queries run several times faster, sometimes ten or more times faster. All of us might recall some examples of such drastic performance improvement, but it is not easy to quantify the impact. 
In this talk, we will demonstrate the difference each approach can make with practical examples by using the Postgres_air database (https://github.com/hettie-d/postgres_air)- the largest publicly available PostgreSQL training DB. We will compare the impact of tuning different memory allocation parameters with the impact of creating missing indexes and, finally - with the impact of query rewrite. Hopefully, the numbers will speak for themselves.