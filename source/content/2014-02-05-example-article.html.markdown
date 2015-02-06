---
title: Example Article 4
date: 2014-02-05
type: article
layout: article
intro: Middleman articles and ordering
tags: Middleman
---

#middleman

**data:**

Middleman blog posts (articles) are stored in hashes, not arrays as you may be used to. They key difference is where arrays are integer-indexed, hashes are key-value pairs where indexing is done via arbitrary keys of any object type. Entries in hashes are stored in the order in which they were entered. 

This means that the 'latest article' is a relative term; you need to define the criteria of latest (date, title etc) before you can find the latest entry.