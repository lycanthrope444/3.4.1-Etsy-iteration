//test code to make sure that data is being pulled from items.js

// var itemListingId = items.forEach(function(idNumber){
//   console.log(idNumber.listing_id);
// });

//Call price + currency to make check for uniformity

// var itemPriceCurrency = items.map(function(eachItem){
//   return eachItem.price + eachItem.currency_code;
// });
//
// console.log(itemPriceCurrency);

//Total number of items - used for later calculations
var totalNumberOfItems = 0;
items.forEach(function(eachItem){
  return totalNumberOfItems += 1;
});

console.log(totalNumberOfItems);
//converts everything to US dollars
var itemCurrencyConverter = items.map(function(eachItem, itemId, allItems){
  console.log();
  if (eachItem.currency_code === "GBP"){
    return eachItem.price*1.26;
  } else {
    return eachItem.price;
  }
});

console.log(itemCurrencyConverter);
//takes the previous array and
var totalItemPrice = itemCurrencyConverter.reduce(function(first, second){
  return first + second;
});
console.log(totalItemPrice);
/*
 * Question #1 - Average Item Price
 */
console.log(totalItemPrice/totalNumberOfItems);
