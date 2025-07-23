---
category: talks
start_datetime: 2025-09-09 14:40:00-05:00
end_datetime: 2025-09-09 15:05:00-05:00
permalink: /talks/beyond-filters-modern-search-and-more-with-vectors-in-django/
presenter_slugs:
- kumar-shivendu
room: Room B
tags:
- Databases
title: 'Beyond Filters: Modern Search (and more) with Vectors in Django'
track: t1
---

Traditional search in Django apps, typically powered by **queryset filters or keyword search, often fails to capture user intent**. It matches exact words but misses meaning. Vector search solves this by representing the "meaning" of data (text, images, audio, video, etc) as high-dimensional vectors generated with ML models, enabling more relevant, personalized, and faster results. 

In this talk, you'll learn:
- When traditional search with Postgres or Elasticsearch falls short
- What vectors are, how vector search works, and when vector databases help
- How to **integrate vector databases into your Django models** using django-semantic-search
- A **demo of "More products like this" feature with vectors in a Django e-commerce app**
- Brief understanding of **use cases beyond text search**: multi-modal search, recommendations, content discovery, clustering, anomaly detection, and retrieval-augmented generation (RAG)
- The **trade-offs and limitations of vector search** — when it helps and when it doesn't

### Who Should Attend
This session is for **intermediate Django developers** familiar with models, views, and basic querying. Vector search is becoming a high demand skill so everyone is welcome. But if you've built search features with filters or keyword search and are curious about taking them to the next level with vectors, this talk is definitely for you! 

### Prerequisites
- Familiarity with Django ORM and basic database concepts
- Exposure to search implementation using Postgres or Elasticsearch is helpful but not required
- **Basic understanding of machine learning is helpful but not required**