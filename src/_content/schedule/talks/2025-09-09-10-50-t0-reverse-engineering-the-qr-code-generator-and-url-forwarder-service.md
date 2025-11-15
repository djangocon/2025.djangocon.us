---
category: talks
start_datetime: 2025-09-09 10:50:00-05:00
end_datetime: 2025-09-09 11:35:00-05:00
permalink: /talks/reverse-engineering-the-qr-code-generator-and-url-forwarder-service/
presenter_slugs:
- mariatta
room: Sauganash Ballroom
tags:
- Python
title: Reverse engineering the QR code generator and URL forwarder service
video_url: 7knxXLg4enA
track: t0
---

Sharing urls using QR code is a common use case nowadays.

You might have seen restaurants sharing links to their menu or loyalty programs using QR code. A conference speaker might have lots of links to share during their talk, and it's not always practical to share long links in their presentation slides. Using QR code would help, but QR code creation is a mysterious process.

There are various websites and services that lets you generate QR codes. However, these services sometimes aren't free, or they might serve ads on the website. What's even worse, sometimes these services would mask your url with a their own url shortener or domain. Users will hesitate to scan your QR code if it is not clear where it's taking them to.

Let's reverse engineer those services and see how we can build our own using Python and Django.

You can easily generate QR codes in Python using the `qrcode` Python library. It even lets you customize your QR code by adding colors and logo.

As you generate more QR codes yourself, you might find it tedious having to do it as a Python script. Wouldn't it be nice if you could do it in the browser?

What if you need to change your URL after sharing the original QR code? For example, what if you've printed our the QR code in your promotional posters, and flyers? It's not always cost-efficient to re-print and re-distribute your materials just because you have a new URL. Therefore, you might have a need for a URL forwarder service.

Take your Django knowledge to the next level by building a web service for QR code generation and url forwarder/shorterner.