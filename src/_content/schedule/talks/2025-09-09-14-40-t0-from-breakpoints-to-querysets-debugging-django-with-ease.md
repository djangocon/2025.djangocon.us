---
category: talks
datetime: 2025-09-09 14:40:00-05:00
end_datetime: 2025-09-09 15:05:00-05:00
permalink: /talks/from-breakpoints-to-querysets-debugging-django-with-ease/
presenter_slugs:
- ryan-j-sullivan
room: Room A
tags:
- Debugging
title: 'From Breakpoints to Querysets: Debugging Django with Ease'
track: t0
---

Debugging is an essential skill for any developer, and modern Integrated Development Environments (IDEs) like PyCharm and VS Code have transformed how we debug web applications. This talk dives into leveraging debugging tools built into IDEs to streamline your development process.

I'll begin by introducing the concept of debugging, exploring what makes it powerful compared to traditional techniques like print statements. You'll learn about different types of debuggers, including pdb, IDE-based debuggers, and web-based debugging tools, and how to set up debugging environments tailored to Django applications—both locally and using Docker.

Next, I'll focus on the practical aspects of debugging. You’ll discover how to pause your application using breakpoints, navigate the call stack, inspect variables, and interact with your code dynamically. I'll discuss advanced debugging tips, such as inspecting object properties, working with __class__ and MRO, and using object IDs effectively.

Throughout the talk, I'll address common Django debugging gotchas, like debugging querysets with lazy evaluation, handling large objects, and the quirks of calling super() while paused. We'll also cover tricks for optimizing your debugging workflow, like configuring breakpoints effectively and putting your IDE in low-power mode to reduce distractions.

My talk is structured to provide practical demonstrations and tips. By the end of this session, you’ll have a comprehensive understanding of how to unlock the full power of debugging in Django. This knowledge will help you debug smarter, solve problems faster, and write better code. I'd like you to leave with actionable techniques to use immediately.