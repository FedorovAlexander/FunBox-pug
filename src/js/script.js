svg4everybody(); // иницализация полифила для IE

var navItems = document.querySelectorAll('.main-nav__item');

navItems.forEach(function(item) {
  var itemText = item.querySelector('.main-nav__item-text');
  var itemIcon = item.querySelector('.main-nav__item-icon');
  item.addEventListener('mouseenter', function() {
    itemText.style.color = '#04a7e5';
    itemText.style.opacity = '1';
    if (itemIcon.classList.contains('main-nav__item-icon--active')) {
      return false;
    } else {
      itemIcon.style.color = '#04a7e5';
      itemIcon.style.transition = 'color 0.2s linear, opacity 0.2s linear';
    }
  })
  item.addEventListener('mouseleave', function() {
    itemText.style.opacity = '0';
    itemText.style.color = '#8d8d8d';
    if (itemIcon.classList.contains('main-nav__item-icon--active')) {
      return false;
    } else {
      itemIcon.style.color = '#8d8d8d';
      itemIcon.style.transition = 'color 0.2s linear, opacity 0.2s linear';
    }
  })
}) 

navItems.forEach(function(item) {
  item.addEventListener('mouseenter', function() {
    var itemIcon = item.querySelector('.main-nav__item-icon')
    itemIcon.style.opacity = '0';
  })
  item.addEventListener('mouseleave', function() {
    var itemIcon = item.querySelector('.main-nav__item-icon')
    itemIcon.style.opacity = '1';
  })
}) 


var lightboxDescription = GLightbox({
  selector: 'glightbox',
  descPosition: 'right'
});

function viewProject() {
  var projectItem = document.querySelectorAll('.work-page__item')
  projectItem.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      var circle = item.querySelector('.work-page__view-project')
      circle.style.opacity = '1'
      circle.style.textDecoration = 'none'
    })
    item.addEventListener('mouseleave', function() {
      var circle = item.querySelector('.work-page__view-project')
      circle.style.opacity = '0'
      
    })
  })
}

viewProject();