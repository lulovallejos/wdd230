function toggleMenu() {
	document.getElementById("navigation").classList.toggle("open");
	document.getElementById("Button").classList.toggle("open");
}

const x = document.getElementById("Button");
x.onclick = toggleMenu;




$(document).ready(function() {
	// Load fruit data from JSON source
	$.getJSON('https://brotherblazzard.github.io/canvas-content/fruit.json', function(data) {
		var fruits = data.fruits;

		// Populate select elements with fruit options
		for (var i = 1; i <= 3; i++) {
			var selectElement = $('#fruit' + i);
			fruits.forEach(function(fruit) {
				selectElement.append($('<option>', {
					value: fruit.name,
					text: fruit.name
				}));
			});
		}
	});

	// Event handler for form submission
	$('#drinkForm').submit(function(e) {
		e.preventDefault();

		// Get input values
		var firstName = $('#firstName').val();
		var email = $('#email').val();
		var phoneNumber = $('#phoneNumber').val();
		var fruit1 = $('#fruit1').val();
		var fruit2 = $('#fruit2').val();
		var fruit3 = $('#fruit3').val();
		var specialInstructions = $('#specialInstructions').val();

		// Calculate nutrition information
		var totalCarbs = 0;
		var totalProtein = 0;
		var totalFat = 0;
		var totalSugar = 0;
		var totalCalories = 0;

		// Get nutrition information for the selected fruits
		fruits.forEach(function(fruit) {
			if (fruit.name === fruit1 || fruit.name === fruit2 || fruit.name === fruit3) {
				totalCarbs += fruit.carbs;
				totalProtein += fruit.protein;
				totalFat += fruit.fat;
				totalSugar += fruit.sugar;
				totalCalories += fruit.calories;
			}
		});

		// Get current date and time
		var currentDate = new Date();
		var formattedDate = currentDate.toLocaleString();

		// Generate formatted output
		var output = '<h2>Order Details</h2>';
		output += '<p>First Name: ' + firstName + '</p>';
		output += '<p>Email: ' + email + '</p>';
		output += '<p>Phone Number: ' + phoneNumber + '</p>';
		output += '<p>Fruit 1: ' + fruit1 + '</p>';
		output += '<p>Fruit 2: ' + fruit2 + '</p>';
		output += '<p>Fruit 3: ' + fruit3 + '</p>';
		output += '<p>Special Instructions: ' + specialInstructions + '</p>';
		output += '<p>Order Date: ' + formattedDate + '</p>';
		output += '<h2>Nutrition Information</h2>';
		output += '<p>Total Carbs: ' + totalCarbs + 'g</p>';
		output += '<p>Total Protein: ' + totalProtein + 'g</p>';
		output += '<p>Total Fat: ' + totalFat + 'g</p>';
		output += '<p>Total Sugar: ' + totalSugar + 'g</p>';
		output += '<p>Total Calories: ' + totalCalories + 'cal</p>';

		// Display formatted output
		$('#orderOutput').html(output);
	});
});



// copyright //



// last modification //
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const dayName = daynames[currentDate.getDay()]
const monthName = months[currentDate.getMonth()]

document.querySelector('.footer-year').textContent = currentYear;

document.querySelector('.last-modified').textContent = `Last modified: ${document.lastModified}`;