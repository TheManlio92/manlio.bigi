var dropdown = document.querySelector('.dropdown');
var dropdownContent = document.querySelector('.dropdown-content');
var menuItems = dropdownContent.querySelectorAll('a');

dropdown.addEventListener('mouseover', function() {
  dropdownContent.style.display = 'block';
  dropdownContent.style.left = '0';
});

dropdown.addEventListener('mouseout', function() {
  dropdownContent.style.display = 'none';
});

var socialLinks = document.querySelectorAll("#contatti ul li a");

socialLinks.forEach(function(link) {
  link.addEventListener("mouseover", function() {
    this.style.transform = "rotate(360deg)";
    this.style.color = "red";
    this.style.fontSize = "30px";
  });

  link.addEventListener("mouseout", function() {
    this.style.transform = "rotate(0deg)";
    this.style.color = "";
    this.style.fontSize = "";
  });
});

var menuItems = dropdownContent.querySelectorAll('a');

menuItems.forEach(function(item, index) {
  item.addEventListener('click', function() {
    var projects = document.querySelectorAll('.project');
    var targetProject = projects[index];

    var rect = targetProject.getBoundingClientRect();
    var offsetTop = rect.top + window.pageYOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});