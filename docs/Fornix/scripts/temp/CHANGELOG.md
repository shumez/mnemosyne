<!--
@Author: shumez
@Date:   2018-03-14 20:05:48
@Project: Fornix
@Filename: CHANGELOG.md
@Last modified by:   shumez
@Last modified time: 2018-05-28 12:45:32
-->


# ChangeLog


## [Unreleased]

- [ ] push section header &xrArr; toggle .q

```js
$('.section').click(function(){
    $('#q > .card-group').toggle();
    var this_id = $(this).attr("id");
});
```

## [4.1.7] - 2018-06-16

```js
// tack
$('span.rtack').append('⊣');
$('span.ltack').append('⊢');
$('span.utack').append('⊤');
$('span.dtack').append('⊥');
```

## [4.1.6] - 2018-06-03

```html
<script type="text/javascript" src="http://latex.codecogs.com/latexit.js"></script>
```

## [4.1.5] - 2018-06-01

```html
<p class="q_dx"></p>
<p class="q_answer_true"></p>
```

```js
$('p.q_dx').prepend('<code>Dx</code>: ');

$('p.q_answer_true').prepend('True: ');
$('p.q_answer_false').prepend('False: ');
```


## [4.1.4] - 2018-05-28

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

```html
<meta name="author" content="shumez">
```

```html
<meta name="version" content="4.1.4">
```

## [4.1.3] - 2018-05-26

```html
<div class="card-group" id="q##">
</div>
```

## [4.1.2] - 2018-05-09
```js
$('span.now').addClass();
```

## [4.1.1] - 2018-04-23
```js
$('#q card').click();
```

## [4.1.0] - 2018-04-23
- material design for bootstrap

## [4.0.1] - 2018-04-18
- fix margin

## [4.0.0] - 2018-04-09
- index.html

## [3.4.10] - 2018-02-09
```html
<span class="glyphicon-education"></span>
```

## [3.4.9] - 2018-01-20
- .q id

## [3.4.8] - 2018-01-10
- print card-boddy .show()

## [3.4.7] - 2018-01-02
- span.prin click

## [3.4.6] - 2017-12-31
- @media print table

## [3.4.5] - 2017-12-30
- code color

## [3.4.4] - 2017-12-29
- table th, th

## [3.4.3] - 2017-12-28
- .card border

## [3.4.2] - 2017-12-26
- @media print

## [3.4.2] - 2017-12-22
- js span.now

## [3.4.1] - 2017-12-18
- print mode

## [3.3.15] - 2017-12-16
- .q_alert_info_n

## [3.3.14] - 2017-12-14
- info

## [3.3.13] - 2017-12-07
- Fornix.css

## [3.3.12] - 2017-11-28

```css
text-decoration: line-through;
```

## [3.3.11] - 2017-11-22

```js
.append('<button></button>');
```

## [3.3.10] - 2017-11-21

```js
.append('<span></span>');
```

## [3.3.9] - 2017-11-20
```css
font-family: "Helvetica Neue"
```

## [3.3.8] - 2017-11-19
```css
font-family: "Fira Code"
```

## [3.3.7] - 2017-11-15
- .correct-hide

## [3.3.6] - 2017-11-10
```js
.slideToggle();
```

## [3.3.5] - 2017-11-09
- .correct-show

## [3.3.4] - 2017-11-05
```html
<meta name="revised">
```

## [3.3.3] - 2017-11-04
```css
a.qb
```

## [3.3.2] - 2017-11-03
- card-header.110, card-header.111

## [3.3.1] - 2017-11-02
- div.card, table.table, ul.list-group: margin-bottom, small.nav-title

## [3.2.9] - 2017-11-01
- .night .card-body u
- js var now

## [3.2.8] - 2017-10-31
- .quiz-card margin-bottom, q_alert_done, .night

## [3.2.7] - 2017-10-30
```css
.quiz-card
```

## [3.2.6] - 2017-10-27
- nav-tabs js

## [3.2.5] - 2017-10-26
- button js

## [3.2.4] - 2017-10-25
- button js

## [3.2.3] - 2017-10-24
- js css correct-show

## [3.2.2] - 2017-10-21
- js card-body

## [3.2.1] - 2017-10-20
- code.q_alert_done

## [3.2.0] - 2017-10-13
- .progress css js

## [3.1.3] - 2017-10-11
- ```#q button req```

## [3.1.2] - 2017-09-25
- js hit/rev/cau/mis

## [3.1.1] - 2017-08-20
- ```#ex .card```

## [3.1.0] - 2017-08-16
- ```#q card-group```

## [3.0.2] - 2017-08-11
- ```#q span-q_alert```

## [3.0.1] - 2017-08-02
- ```#q span badge```

## [3.0.0] - 2017-07-18
- ```#key word```

## [2.1.3] - 2017-07-01
- ```#q a href="https://qb.medilink-study.com/#/Answer/"```

## [2.1.2] - 2017-06-10
- nav brand img

## [2.1.1] - 2017-06-05
- Favicon

## [2.1.0] - 2017-03-10
- Quiz card

## [2.0.1] - 2017-03-09
- ```span.navbar-brand```

## [2.0.0] - 2017-02-25
- etiology

## [1.2.4] - 2017-02-04
- id s/s Ex; hidden; nav

## [1.2.3] - 2017-02-02
- js

## [1.2.2] - 2017-02 02
- u color

## [1.2.1] - 2017-01-23
- id rx

## [1.2.0] - 2017-01-22
- Stylesheet edit


<!--
## [..] - YYYY-MM-DD

### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
-->

[Keep a Changelog]: http://keepachangelog.com/en/1.0.0/
[Semantic Versioning]: http://semver.org/spec/v2.0.0.html


<!--
* Added: for new features.
* Changed: for changes in existing functionality.
* Deprecated: for soon-to-be removed features.
* Removed: for now removed features.
* Fixed: for any bug fixes.
* Security: in case of vulnerabilities.
-->


[Unreleased]: .
[0.0.1]: .
[1.2.0]: .
[1.2.1]: .
[1.2.2]: .
[1.2.3]: .
[1.2.4]: .
[2.0.0]: .
[2.0.1]: .
[2.1.0]: .
[2.1.1]: .
[2.1.2]: .
[2.1.3]: .
[3.0.0]: .
[3.0.1]: .
[3.0.2]: .
[3.1.0]: .
[3.1.1]: .
[3.1.2]: .
[3.1.3]: .
[3.2.0]: .
[3.2.1]: .
[3.2.2]: .
[3.2.3]: .
[3.2.4]: .
[3.2.5]: .
[3.2.6]: .
[3.2.7]: .
[3.2.8]: .
[3.2.9]: .
[3.3.1]: .
[3.3.2]: .
[3.3.3]: .
[3.3.4]: .
[3.3.5]: .
[3.3.6]: .
[3.3.7]: .
[3.3.8]: .
[3.3.9]: .
[3.3.10]: .
[3.3.11]: .
[3.3.12]: .
[3.3.13]: .
[3.3.14]: .
[3.3.15]: .
[3.4.1]: .
[3.4.2]: .
[3.4.3]: .
[3.4.4]: .
[3.4.5]: .
[3.4.6]: .
[3.4.7]: .
[3.4.8]: .
[3.4.9]: .
[3.4.10]: .
[4.0.0]: .
[4.0.1]: .
[4.1.0]: .
[4.1.1]: .
[4.1.2]: .
[4.1.3]: .
[4.1.4]: .
[4.1.5]: .
[4.1.6]: .
[4.1.7]: .