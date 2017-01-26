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
  // else {
  //   return false;
  // }
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

// items.materials.forEach(function(eachItem, itemId, allItems){
//   if (component === "wood"){
//     console.log(eachItem.title +" is made of "+component);
//   }
// });

/*
 * Question 5
 */

//loop to check each item
items.forEach(function(eachItem, itemId, allItems){
  var numComponents = 0;
  //counts the number of items in the materials
  eachItem.materials.forEach(function(component, componentId, allMaterials){
    numComponents += 1;
  });
  //checks the item to see if it has 8
  if (numComponents >=8){
    //logs title...
    console.log(eachItem.title);
    //... and all the components
    eachItem.materials.forEach(function(component, componentId, allMaterials){
      console.log(component);
    });
  }
  // console.log(numComponents);
});

/*
 * Question 6
 */
//function for filter
// function creatorMade(originiation){
//   if (origination === "i_did"){
//     return true;
//   }
// }
//Creator tester
var creators = 0;
items.forEach(function(eachItem, itemId, allItems){
  if (eachItem.who_made === "i_did"){
    creators += 1;
  }
});
console.log (creators, "were made by their sellers.");
