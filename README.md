![Marqueeify!](https://raw.github.com/ab/marqueeify/master/logo.gif)
====================================================================

Sometimes you just need a little more marquee in your DOM. :innocent:

Github and most sites won't allow javascript in links (for good reason).

    <a href="javascript:(function(){var marquee=document.createElement('marquee');document.getElementsByTagName('html')[0].appendChild(marquee);marquee.appendChild(document.getElementsByTagName('body')[0]);}())">Marqueeify!</a>

Becomes:

<a href="javascript:(function(){var marquee=document.createElement('marquee');document.getElementsByTagName('html')[0].appendChild(marquee);marquee.appendChild(document.getElementsByTagName('body')[0]);}())">Marqueeify!</a>

Download and open [marquee.html](https://raw.github.com/ab/marqueeify/master/marquee.html) for an easy bookmarklet.
