let template = $('#myTemplate').html();
let mainRow = $('#mainRow');
let rg = new RegExp('{{productTitle}}', 'gi');
let text = "";

let colBtns = $('[data-col]');
let catBtns = $('[data-cat]');


catBtns.on('click', function(event) {
  let cat = $(this).attr('data-cat');
  $('.cat').removeClass('active');
  $(this).parent().addClass('active');
  event.preventDefault();
  $.ajax({
      url: 'https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json',
      type: 'get',
      dataType: 'json'
    })
    .done(function(res) {
      text = "";
      let filterCat = res.filter(function(el) {
        return el[cat];
      })
      displayProducts(filterCat);
    })
});


colBtns.on('click', function(event) {
  event.preventDefault();
  let dataCollection = $(this).attr('data-col');
  $.ajax({
      url: 'https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json',
      type: 'get',
      dataType: 'json'
    })
    .done(function(res) {
      text = "";
      let filterCol = res.filter(function(el) {
        return el.colection == dataCollection;
      })
      displayProducts(filterCol);
    });
})

$.ajax({
    url: 'https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json',
    type: 'get',
    dataType: 'json',
  })
  .done(function(res) {
    displayProducts(res);
  });



function displayProducts(cat) {
  text = "";
  cat.forEach(function(el) {
    text += template.replace('{{imgSrc}}', el.imgSrc)
      .replace(rg, el.productTitle)
      .replace('{{model}}', el.model)
      .replace('{{price}}', el.price)
  })
  mainRow.html("");
  mainRow.append(text);
}



function start(result) {

}


let myJson = JSON.parse(data);
console.log(data);
