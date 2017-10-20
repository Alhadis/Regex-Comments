Regex Comments
==============

Highlight comments in regular expressions. Two styles are supported:


`(?# Block comments)`
---------------------

<img width="236" src="https://raw.githubusercontent.com/Alhadis/Regex-Comments/static/preview-1.png"/>


`# Line comments`
-----------------
**Note:** This style only affects strings that start with `(?x)`:

<img width="467" src="https://raw.githubusercontent.com/Alhadis/Regex-Comments/static/preview-2.png"/>


Geared toward authors of [TextMate-compatible grammars](http://manual.macromates.com/en/language_grammars).


Targeting specific languages
----------------------------
By default, this package affects any language where the `(?#…)` sequence is used inside a string.
If you'd like to restrict it to specific languages only, just use your stylesheet:

~~~less
.syntax--string:not(.syntax--coffee),
.syntax--string:not(.syntax--yaml) {
	& .syntax--oniguruma.syntax--comment {
		color: inherit;
	}
}
~~~
