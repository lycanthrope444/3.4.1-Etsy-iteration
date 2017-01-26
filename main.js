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

/*
 * Question #1 - Average Item Price
 */

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

// console.log(itemCurrencyConverter);
//takes the previous array and
var totalItemPrice = itemCurrencyConverter.reduce(function(first, second){
  return first + second;
});
// console.log(totalItemPrice);

console.log((totalItemPrice/totalNumberOfItems).toFixed(2));

/*
 *Question 2
 */
//Since the format is an array, the map function is being used.
var priceFinderArray = items.map(function(eachItem, itemId, allItems){
//The restrictions are being checked here
  if (eachItem.price > 14 && eachItem.price < 18){
    //Item title returned here
    return eachItem.title;
  }
});

console.log(priceFinderArray);

/*
 * Question 3
 */
// forEach iterator to check all items...
items.forEach(function(eachItem, itemId, allItems){
  //... for GBP
  if (eachItem.currency_code === "GBP"){
    //logs item name and price
    console.log(eachItem.title + " costs £" + eachItem.price);
  }
});
