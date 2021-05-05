---
title: 'Two Forms of Pre-rendering Two Forms of Pre-rendering Two Fo'
date: '2020-01-01'
author: 'ahmedali7o1'
description: 'When to Use Static Generation v.s. Server-side RenderingWhen to Use Static Generation v.s. Server-side RenderingWhen to Use Static Generation v.s. Server-side RenderingWhen to Use Static Generation v.s. Server-side Rendering Use Static Generatissssss'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.