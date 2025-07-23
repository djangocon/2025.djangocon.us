---
category: talks
datetime: 2025-09-08 14:40:00-05:00
end_datetime: 2025-09-08 15:05:00-05:00
permalink: /talks/evolving-django-what-we-learned-by-integrating-mongodb/
presenter_slugs:
- jeffrey-a-clark
room: Room B
tags:
- Databases
- Web Dev
title: 'Evolving Django: What We Learned by Integrating MongoDB'
track: t1
---

## History

Building on the progress of the past, most notably django-mongodb-engine and django-nonrel, MongoDB has taken on the challenge of developing a production-ready Django database backend for MongoDB.

Early in 2024 with help from Django core developer Tim Graham, MongoDB has systematically developed and tested a database backend with the potential to be greater than the sum of its parts.

## Present
In September 2024, I started working for MongoDB to help with this project and what I've seen so far is amazing! - Query support with MongoDB's aggregate function. - A custom model manager with raw_aggregate function to support MongoDB's QuerySet language - Many more amazing things to be added between now and presentation! - Released our beta we urge folks to try!

## Future
As a long time Django developer and newcomer to MongoDB, I am excited about the possibilities. - An alternative to PostgreSQL and MySQL! - Deployments to MongoDB's Atlas cloud database service. - Many more exciting things to be added between now and presentation!

Thank you and please check out https://github.com/mongodb-labs/django-mongodb-backend or `pip install django-mongodb-backend`