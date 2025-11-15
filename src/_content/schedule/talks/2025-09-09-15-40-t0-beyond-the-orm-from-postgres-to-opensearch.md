---
category: talks
start_datetime: 2025-09-09 15:40:00-05:00
end_datetime: 2025-09-09 16:25:00-05:00
permalink: /talks/beyond-the-orm-from-postgres-to-opensearch/
presenter_slugs:
- andrew-mshar
room: Sauganash Ballroom
tags:
- Postgres
title: 'Beyond the ORM: from Postgres to OpenSearch'
video_url: https://www.youtube.com/watch?v=_iB7ET5rt7s
track: t0
---

Our team at Energy Solutions spent a year building a robust data ingestion and query pipeline using OpenSearch to provide centralized data to a distributed suite of applications. Along the way, we learned to question and rethink a lot of our relational database assumptions and take fuzzy search customization and accuracy to the next level. Meanwhile, we implemented Pydantic wrappers around JSON responses so we could continue to handle responses like native Python objects (along with other benefits we’ll discuss). We addressed long-standing challenges, such as:

- Improving the performance of the per-row create/update/delete paradigm (in one case, leading to a ~9x faster data ingest + load!)
- Putting OpenSearch “aliases” to work to help track current vs archival data
- Improving search relevancy
- PII exposure reduction

In this presentation, we’ll walk through the decisions that led us to moving to an OpenSearch-based solution that works within a traditional Django framework, how we tackled advanced topics like token analysis, and how we put OpenSearch aliases to work. We’ll also cover some of the cost-benefit equations, summarize our next phase of work in the project, and include real-time demonstrations of some concepts.

### Background on Energy Efficiency

Utilities, which are often regulated, are responsible for generating a consistent supply of energy for their consumers at a stable price. Efficiency incentive programs that manage demand help insulate utilities from the costs associated with purchasing raw materials (coal, gas, etc.) and help reduce the need to build new power plants that are expensive to build, staff, insure, and supply with consumable, non-renewable resources. 

Utilities are also usually required by law to spend part of the budget they collect on customer bills on something to reduce the demand for energy in their territory. For instance, a utility might offer a $1,500 rebate (AKA incentive) for the sale of an industrial heat pump that is far more efficient than other industrial heat pumps, via an energy efficiency (EE) program. By incentivizing high efficiency equipment, utilities help move the market towards ever more efficient versions of equipment, thus locking in energy savings even after the EE programs end. In this way, we can help utilities and their customers save energy and move the needle away from climate change.

#### Cosmos Project Background
What Cosmos is, a service for our other projects to access larger datasets such as locations and equipment, and why we needed a new service.

#### Motivations for moving from Postgres
- Elimininate redundancy
- Reduce PII storage
- Improve load speed
- Faster, more accurate fuzzy search

#### Why OpenSearch?
- Super-fast, built on Lucene
- Open source but supported by AWS
- Features like aggregation, tokenization well-documented
- Ranked results (hits sorted by _score)
- Intuitive and flexible searching for addresses, equipment, etc
- Performance trade-off between ingesting data and searching data (optimize query performance at the expense of slower indexing)

#### Helper Tools
- opensearch-py   
- Kibana

#### Cost Breakdown
- AWS cost vs our own standalone

#### API access
- Not presenting raw output - transformed for readability, consistency    
- Data passed through Pydantic models    
- Strict access controls for PII    
- “Search Helper” for for non-tech staff

#### Load and Query Demos
- Comparison of a complex PG query vs equivalent OS query

#### Django Integration
- Pydantic models rather than Django models - consistency with old code    
- Validation, dot notation
