Marqueeify!
===========

Sometimes you just need a little more marquee in your DOM. :trollface:

Github and most sites won't allow javascript in links (for good reason).

    javascript:(function(){var html=document.getElementsByTagName('html')[0];var body=html.getElementsByTagName('body')[0];var marquee=document.createElement('marquee');html.appendChild(marquee);marquee.appendChild(body);}())

Becomes:

<a href="javascript:(function(){var marquee=document.createElement('marquee');document.getElementsByTagName('html')[0].appendChild(marquee);marquee.appendChild(html.getElementsByTagName('body')[0]);}())">Marqueeify!</a>

