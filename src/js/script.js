var cards = document.querySelectorAll('.cards__item');
var buyLink = document.querySelectorAll('.cards__text-link');
var cardText = document.querySelectorAll('.cards__text');
var stuff = document.querySelectorAll('.cards__text--stuffing');
var buy = document.querySelectorAll('.cards__text-buy');
var outOfStock = document.querySelectorAll('.cards__text--out-of-stock');

function clickActive() {
  cards.forEach(function(card, i) {
    var weight = card.querySelector('.food-card__weight')
    
    if(outOfStock[i].classList.contains('js-active')) {
      return false;
    } else {
      card.addEventListener('click', function() {
        this.classList.toggle('food-card--selected')
        this.classList.toggle('food-card--default')
        this.classList.toggle('food-card--selected-hover')
        this.classList.remove('food-card--hover')
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
    if (card.classList.contains('food-card--selected')) {
        card.addEventListener('click', function() {
          this.querySelector('.food-card__promo-food').style.display = 'block'
          this.querySelector('.food-card__promo-cat').style.display = 'none'
        })
        card.addEventListener('mouseenter', function() {
          this.classList.remove('food-card--hover')
          this.classList.add('food-card--selected-hover')
          weight.classList.add('food-card__weight--selected-hover')
          this.querySelector('.food-card__promo-food').style.display = 'none'
          this.querySelector('.food-card__promo-cat').style.display = 'block'
        })
      card.addEventListener('mouseleave', function() {
        this.classList.remove('food-card--selected-hover')
        weight.classList.remove('food-card__weight--selected-hover')
        this.querySelector('.food-card__promo-food').style.display = 'block'
        this.querySelector('.food-card__promo-cat').style.display = 'none'
      })
    } else if (card.classList.contains('food-card--default')) {
      card.addEventListener('mouseenter', function() {
        this.classList.add('food-card--hover')
        this.classList.remove('food-card--selected-hover')
        weight.classList.add('food-card__weight--default-hover')
        weight.classList.remove('food-card__weight--selected-hover')
        this.querySelector('.food-card__promo-food').style.display = 'block'
        this.querySelector('.food-card__promo-cat').style.display = 'none'
      })
      card.addEventListener('mouseleave', function() {
        this.classList.remove('food-card--hover')
        weight.classList.remove('food-card__weight--default-hover')
      })
    } else {
      return false
    }
  })
}
