// Enhancement only: close the mobile menu after a choice. The page works without this.
(function () {
  var toggle = document.getElementById('menu-toggle');
  if (!toggle) return;
  var links = document.querySelectorAll('.links a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () { toggle.checked = false; });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') toggle.checked = false;
  });
})();
