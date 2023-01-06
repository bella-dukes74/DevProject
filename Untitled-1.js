// Create Variables
var day;
var age;
var discount;
var price = 0;
onEvent("calculateButton", "click", function() {
// Update Variables
day = getNumber("dayDropdown");
age = getNumber("ageDropdown");
discount = getNumber("discountInput");
  // Check the value of variables to decide the price to set
if (age <= 18 && (day = "Saturday" || "Sunday")) {
price = 10;
} else if ((age > 18) && (day = "Saturday" || "Sunday")) {
  price = 10;
} else if ((age <= 18) && (day != "Saturday" || "Sunday")) {
  price = 5;
} else if ((age > 18) && (day != "Saturday" || "Sunday")) {
  price = 10;
} else if (discount == "FREEFRIDAY") {
  price = 10;
}

  // Create the text for the ticket
setText("ticketOutput", "Day: " + day + "\n" + "Age: " + age + "\n" + "Price: " + price");

 
  // Set the text on the screen

});