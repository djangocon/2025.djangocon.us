---
category: talks
start_datetime: 2025-09-10 16:20:00-05:00
end_datetime: 2025-09-10 16:45:00-05:00
permalink: /talks/automating-initial-deployments-with-django-simple-deploy/
presenter_slugs:
- eric-matthes
room: Sauganash Ballroom
tags:
- CI/CD
- Web Dev
title: Automating initial deployments with django-simple-deploy
video_url: https://www.youtube.com/watch?v=GpHxaxnMAi4
track: t0
---

Deployment has been a sticking point for many Django developers as long as the framework has existed. With the 1.0 release of `django-simple-deploy`, that should no longer be the case. This release signifies a stable API, and most importantly a stable platform for building plugins.

If you haven't seen `django-simple-deploy` in action, it lets you deploy a project in three steps. Assuming you have the target platform's CLI installed, here's what that looks like:

```
$ pip install django-simple-deploy[<platform_name>]
# Add django_simple_deploy to INSTALLED_APPS.
$ python manage.py deploy --automate-all
```

This currently works for Platform.sh, Fly.io, and Heroku. If you want a bit more control, you can separate out the configuration and deployment steps.

The plugin ecosystem
---

The core `django-simple-deploy` library only does a little work. It inspects your system and your project, and then hands off to an external plugin (such as `dsd-platformsh`) to take care of platform-specific configuration and deployment work. It should be possible to write a plugin for just about any hosting platform that can be configured to support Django.

Each PAAS provider needs its own plugin. However, a single plugin, `dsd-vps`, can be used to deploy to *any* VPS host: Digital Ocean, Linode, Hetzner, and many more.

This talk will discuss the following:

- Why does the Django community need a deployment library?
- What kinds of deployments can `django-simple-deploy` handle today?
- What is the full range of use cases and benefits of this tool?
- How can you contribute to the plugin ecosystem?

Just about everyone in the community is affected by Django's deployment story. If you'd like Django to have a much simpler initial deployment story, this talk is for you.