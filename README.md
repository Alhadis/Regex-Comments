Oniguruma Comment Highlighting
==============================

Adds comment-highlighting for Oniguruma-style regex comments.

```coffeescript
patterns:
	longHairyRegEx: """(?x)
		(?# Breath of fresh air)
		~line noise~
	"""
```
The above snippet would be rendered like this:

<img width="236" src="https://raw.githubusercontent.com/Alhadis/oniguruma-comment/master/preview.png"/>

Geared toward authors of [TextMate-compatible grammars](http://manual.macromates.com/en/language_grammars).


Targeting CoffeeScript only
---------------------------
By default, this package affects any language where the `(?#…)` sequence is used inside a string.
If you'd like to restrict it to specific languages only, just use your stylesheet:

```less
.string:not(.coffee) .oniguruma.comment{
	color: inherit;
}
```
