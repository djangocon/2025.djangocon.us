---
category: talks
start_datetime: 2025-09-08 15:40:00-05:00
end_datetime: 2025-09-08 16:25:00-05:00
permalink: /talks/unleash-your-django-frontend-integrate-web-components-into-django-templates-with-vue/
presenter_slugs:
- mike-hoolehan
room: Sauganash Ballroom
tags:
- FrontEnd
- Templates
- Web Dev
title: 'Level Up Your Django Frontend: Integrate Web Components into Django Templates with Vue'
video_url: https://www.youtube.com/watch?v=PlK67x44u9o
track: t0
---

Have you avoided heavyweight JavaScript frameworks because they're overwhelming, complicated, or difficult to integrate? 

Has your current JavaScript solution devolved into an unmaintainable, unscalable, and untestable mess? 

Need to bring real interactivity to your Django app but reluctant to commit to a full API-driven SPA? 

This talk is for you.

In this 45-minute deep dive, you’ll learn how to bring modern frontend power to your Django app without giving up the simplicity of Django Templates. Starting with a simple Django-only dice-rolling app, I'll show you how to incrementally build and integrate interactive Web Components that bring the application to life.

You’ll see how Vue 3.5, the Vite build tool, and Web Components make it fast and easy to add full-featured, maintainable interactivity to your template-driven Django apps.

By the end of the talk, you'll understand how to:

 * Create a new Vue project and configure the Vite build tool
 * Create Vue Single File Components (SFCs) and compile them into native Web Components
 * Use Web Components directly in Django Templates by custom tag name
 * Manage and persist JavaScript state across page loads with Pinia
 * Debug and inspect Web Components and state live in-page
 * Style your components using existing site styles and scoped component styles
 * Pass data from Django to Web Components via properties and injection
 * Include rendered template content and media in Web Components using slots
 * Break interactive content out of their containers and place them anywhere using Teleport
 * Send data from Web Components to Django views via AJAX or POST requests
 * Dynamically render Django responses inside Web Components
 * Deploy your application using your existing static files setup
