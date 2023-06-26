+++
title = "Devlog 001"
date = 2023-06-26T03:52:07.190Z
authors = ["Marshall Bowers"]
+++

Welcome to the first official devlog for the Crane programming language!

Last week I wrote a short [post](https://maxdeviant.com/posts/2023/crane-week-one/) on my personal website for the first week of Crane development. This week I wanted to continue chronicling Crane's development, and what better place to do it than on the Crane website?

I don't know how often I'll write these, but for now once a week seems like a reasonable cadence.

## What is Crane?

In case you're new around here&mdash;or maybe have just forgotten, that's fine too&mdash;Crane is a programming language for creating robust and elegant software.

That may sound a bit vague and hand-wavy, but that partly reflects what Crane is at the moment. I have lots of ideas for what I want the language to be, but most of them have yet to be realized.

In slightly more concrete terms, Crane is statically typed, compiles down to native machine code, and will someday have a garbage collector. It draws inspiration from languages like Rust and the ML family of languages (Standard ML, OCaml, F#).

I'll be refining this definition as time goes on.

One thing to keep in mind is that Crane is still very much in its infancy, with the first commit being just two weeks ago.

## New language features

Here are some of the highlights from my work on the compiler this week:

- Function calls can now be used in `let` initializers
- Files can now contain inline modules
- Functions can be passed to other functions, in a step towards making functions fully first-class

## Website

This week saw the creation of the `crane-lang.org` website (the one you're reading this devlog on right now).

The site itself is a statically-generated site built with [Zola](https://www.getzola.org/). Styling is handled by [Tachyons](https://tachyons.io/) with a bit of custom CSS.

Hosting is powered by [Cloudflare Pages](https://pages.cloudflare.com/).

The code for `crane-lang.org` is available [on GitHub](https://github.com/crane-lang/crane-lang.org).

## Visual Studio Code extension

This week I also published the first version of the Visual Studio Code extension for Crane.

Currently it just contains a very barebones grammar to facilitate things like syntax highlighting and delimiter matching (e.g., parens, braces, quotes) in the editor.

You can find it [on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=crane-lang.vscode-crane).

The code for the VS Code extension is [on GitHub](https://github.com/crane-lang/vscode-crane).

## Stats

Here are some assorted stats about the compiler codebase for this past week:

|                | Start                                                            | End                                                              |                                                                  Delta                                                                  |
| -------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------: |
| **Commit**     | {{ git_sha(commit="bd40534fd47b8b85041edf540a574efcea4eb949") }} | {{ git_sha(commit="c6096dfc6eb9bcbc9535e1a3980759c843f4e128") }} | [diff](https://github.com/crane-lang/crane/compare/bd40534fd47b8b85041edf540a574efcea4eb949...c6096dfc6eb9bcbc9535e1a3980759c843f4e128) |
| **LOC (Rust)** | 2,356                                                            | 3,670                                                            |                                                                 +1,314                                                                  |

That's all for this devlog. Until next time!
