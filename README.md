# Life Basics

Static study guide + quizzes for the North Carolina Life Agent exam (Pearson VUE, two-part general + NC law, 55 scored questions).
Sibling of Annuity Basics, same code and style.

- `index.html`: the app (no build step, no dependencies).
- `content.js`: all study content: levels (cards, cheat sheets, quizzes), practice-exam extras, flashcards, sources, outline weights.
- Progress saves only in the visitor's browser (`localStorage` key `lifeBasics.v1`). Nothing is sent anywhere.
- Every quiz and the practice exam end with a plain-text "Score to report" line.

Content follows the Pearson VUE NC Life Agent content outline effective March 2, 2026:
I Types of life insurance (17), II Annuities (5), III Provisions/options/features (11), IV Other life topics (8), V NC statutes and regulations (14).
The practice exam draws 55 questions in those proportions from the bank.

Deploy: serve the folder as static files (GitHub Pages from the repo root works as is).

Study aid only, not legal or tax advice.
