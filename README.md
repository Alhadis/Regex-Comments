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

<img width="236" src="https://raw.githubusercontent.com/Alhadis/oniguruma-comment/static/preview-1.png"/>

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


"Probable" comment-lines
------------------------
<img width="467" src="https://raw.githubusercontent.com/Alhadis/oniguruma-comment/static/preview-2.png"/>

More basic comments are supported, but only under very specific circumstances:

1. The `#` token is preceded by a whitespace character
2. No `]` characters are allowed to appear after the `#`. This avoids colouring stuff like `[ #?@]`
3. Your theme's stylesheet adds comment colour to `.comment-ish`

While this sounds a little counter-intuitive, remember there's a high risk of misclassification here.
Furthermore, these comments will stop at any quote character, irrespective of whether it was used to start the containing comment block.
So this wouldn't match the entire comment:
```coffee
"""(?x)
	(?=something-complex) # Yes, "complex" indeed
"""
```

**TIP:**
Use directional quotes instead.
```coffee
"""(?x)
	# “That’s a decent compromise, I guess.”
"""
```
