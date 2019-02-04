var cards = document.querySelectorAll('.food-card__wrapper');
var buyLink = document.querySelectorAll('.food-card__text-link');
var cardText = document.querySelectorAll('.food-card__text');
var stuff = document.querySelectorAll('.food-card__text--stuffing');
var buy = document.querySelectorAll('.food-card__text-buy');
var outOfStock = document.querySelectorAll('.food-card__text--out-of-stock');

function clickActive() {
  cards.forEach(function(card, i) {
    var weight = card.querySelector('.food-card__weight')
    
    if(outOfStock[i].classList.contains('js-active')) {
      return false;
    } else {
      card.addEventListener('click', function() {
        this.classList.toggle('food-card__wrapper--selected')
        this.classList.toggle('food-card__wrapper--default')
        this.classList.toggle('food-card__wrapper--selected-hover')
        this.classList.remove('food-card__wrapper--hover')
        weight.classList.toggle('food-card__weight--selected')
        weight.classList.toggle('food-card__weight--selected-hover')
        stuff[i].classList.toggle('js-inactive')
        buy[i].classList.toggle('js-inactive')
        clickCheckAndHover()
      })
    }
  })
}
clickActive()
clickCheckAndHover()

function clickCheckAndHover() {
  cards.forEach(function(card) {
    var weight = card.querySelector('.food-card__weight')
    if (card.classList.contains('food-card__wrapper--selected')) {
        card.addEventListener('click', function() {
          this.querySelector('.food-card__promo-food').style.display = 'block'
          this.querySelector('.food-card__promo-cat').style.display = 'none'
        })
        card.addEventListener('mouseenter', function() {
          this.classList.remove('food-card__wrapper--hover')
          this.classList.add('food-card__wrapper--selected-hover')
          weight.classList.add('food-card__weight--selected-hover')
          this.querySelector('.food-card__promo-food').style.display = 'none'
          this.querySelector('.food-card__promo-cat').style.display = 'block'
        })
      card.addEventListener('mouseleave', function() {
        this.classList.remove('food-card__wrapper--selected-hover')
        weight.classList.remove('food-card__weight--selected-hover')
        this.querySelector('.food-card__promo-food').style.display = 'block'
        this.querySelector('.food-card__promo-cat').style.display = 'none'
      })
    } else if (card.classList.contains('food-card__wrapper--default')) {
      card.addEventListener('mouseenter', function() {
        this.classList.add('food-card__wrapper--hover')
        this.classList.remove('food-card__wrapper--selected-hover')
        weight.classList.add('food-card__weight--default-hover')
        weight.classList.remove('food-card__weight--selected-hover')
        this.querySelector('.food-card__promo-food').style.display = 'block'
        this.querySelector('.food-card__promo-cat').style.display = 'none'
      })
      card.addEventListener('mouseleave', function() {
        this.classList.remove('food-card__wrapper--hover')
        weight.classList.remove('food-card__weight--default-hover')
      })
    } else {
      return false
    }
  })
}