// Source - https://stackoverflow.com/a/7143883
// Posted by wizztjh, modified by community. See post 'Timeline' for change history
// Retrieved 2026-08-01, License - CC BY-SA 4.0

$(document).mousemove(function(e) {
  $("#follow").css({
    left: (e.pageX-2520),
    top: (e.pageY-1220)
  });
});

$(document).mousemove(function(e) {
  $("#follow2").css({
    left: (e.pageX-2520),
    top: (e.pageY-1220)
  });
});