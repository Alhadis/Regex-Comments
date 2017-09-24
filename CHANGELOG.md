Change Log
==========

This project adheres to [Semantic Versioning](http://semver.org).


[Staged]
------------------------------------------------------------------------
* Deleted unused metadata from grammar source. This will stop it showing
up in the languge selection list once [`grammar-selector@v0.49.6`][1] is
shipped in a stable Atom release. See [`atom/grammar-selector#34`][2].

[1]: https://github.com/atom/grammar-selector/tree/v0.49.6
[2]: https://github.com/atom/grammar-selector/pull/34


[v1.1.2]
------------------------------------------------------------------------
**October 16th, 2016**  
Minor improvements made to "probable" comment matching:

* Comments can now be matched at the start of a line without whitespace
* Pointless lookahead removed to enable matching of lines containing `]`


[v1.1.1]
------------------------------------------------------------------------
**September 3rd, 2016**  
Fixed bug where "probable" comments weren't terminated before backticks,
ruining subsequent highlighting if a closing backtick was expected.


[v1.1.0]
------------------------------------------------------------------------
**June 5th, 2016**  
Added snippets to insert directional quotes in "probable" comments:

* `dq`:   “”
* `sq`:   ‘’
* `apos`: ’

See the [relevant readme section](./readme.md#probable-comment-lines).


[v1.0.0]
------------------------------------------------------------------------
**April 14th, 2016**  
Initial release. Adds highlighting support for Oniguruma-regex comments.


[Referenced links]:_____________________________________________________
[Staged]: http://github.com/Alhadis/Regex-Comments/compare/v1.1.2...HEAD
[v1.1.2]: https://github.com/Alhadis/Regex-Comments/releases/tag/v1.1.2
[v1.1.1]: https://github.com/Alhadis/Regex-Comments/releases/tag/v1.1.1
[v1.1.0]: https://github.com/Alhadis/Regex-Comments/releases/tag/v1.1.0
[v1.0.0]: https://github.com/Alhadis/Regex-Comments/releases/tag/v1.0.0
