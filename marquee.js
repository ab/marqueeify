// Wrap <body> in a <marquee>!
// NB: this will make document.body == null, so scripts that rely on it will be sad
// This is less confusing than having two bodies or moving the body's children (which makes layout sad)
function marqueeify() {
    var marquee = document.createElement('marquee');
    document.getElementsByTagName('html')[0].appendChild(marquee);
    marquee.appendChild(document.getElementsByTagName('body')[0]);
}

// <a href="javascript:(function(){var marquee=document.createElement('marquee');document.getElementsByTagName('html')[0].appendChild(marquee);marquee.appendChild(document.getElementsByTagName('body')[0]);}())">Marqueeify!</a>
