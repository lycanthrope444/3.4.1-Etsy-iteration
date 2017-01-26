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

// console.log(totalNumberOfItems);
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

function isTrue (value){
  if (value){
    return true;
  }
  else {
    return false;
  }
}

var cleanPriceArray = priceFinderArray.filter(isTrue);

console.log(cleanPriceArray);

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


/*
 * Question 4
 */
//Shows which items are made of wood

//Loop through to check each items
items.forEach(function(eachItem, itemId, allItems){
  //Loop to check each array of materials
  eachItem.materials.forEach(function(component, componentId, allMaterials){
    //check for wood as a component
    if (component === "wood"){
      //log the result - listed as variable so the function could be changed
      console.log(eachItem.title +" is made of "+component);
    }
  });
});

/*
 * Question 5
 */
