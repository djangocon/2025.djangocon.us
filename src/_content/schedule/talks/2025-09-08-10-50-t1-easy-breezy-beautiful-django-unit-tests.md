---
category: talks
start_datetime: 2025-09-08 10:50:00-05:00
end_datetime: 2025-09-08 11:35:00-05:00
permalink: /talks/easy-breezy-beautiful-django-unit-tests/
presenter_slugs:
- colleen-dunlap
room: Wolf Point Ballroom
tags:
- Testing
title: Easy, Breezy, Beautiful... Django Unit Tests
video_url: RAFB0J2AbGw
track: t1
---

We’ve all been in a situation where test coverage was lacking. And unless you’ve been *very* lucky, we’ve all seen a situation where that lack of coverage led to bugs sneaking into production. With the complex backend and full-stack systems of today, it is unrealistic to expect any programmer to know exactly how a code change will affect all parts of the project. And we don’t have to! That’s why we have testing. And unit tests are the most accessible form of testing throughout the entire development process — it’s accessible right there in your terminal with a simple “pytest” or “make tests”. Unit tests are the first line of defense against bugs and breaks — let’s ensure you have a strong, reliable Alexander the Great of unit test suites and not a temperamental, vulnerable Achilles Heel!

This talk is divided into two parts.

Part One: Unit Testing Why, What and How — These topics will be called back to in Part Two when we talk about Django specific unit testing features.

1. Why is Unit Testing important?
2. An abbreviated analysis of Testing Behavior vs Testing Implementation
3. How to Mock? When to Mock? Why to Mock?
4. setUp/Class and tearDown/Class

Part Two: Write Tests WITH Django not AGAINST Django

1. Save Space! Use a Model Factory — DjangoModelFactory and how to simply extend for your needs.
2. @override_settings() and other decorators to keep your unittests happy across environments
3. Django Specific Assertions — such as assertContains on querysets, assertFormFails, etc.
4. Do you *reeeeeally* want to call your serializers? When to mock serializers and other Django automations when the format doesn’t matter nearly as much as the function. Do you really want your test to break when a new model field is added?
5. SetUpTestData to automate the busy work of testing ORM
6. Extending TestCase and building the Base Test Case of your dreams
7. Utilize manage.py test’s parameters to invoke tests in a way that serves *your* needs.

Writing Code is better when your testing is better. Do yourself a favor and send your unit test skills to bootcamp!