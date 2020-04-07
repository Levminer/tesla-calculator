//model
function models_options() {
	let models_options1 = document.getElementById("models_options1").checked
	let models_options2 = document.getElementById("models_options2").checked

	if (models_options1 || models_options2 == true) {
		//! next
		counter_number = 2
		let models_color = document.getElementById("models_color")
		models_color.style.display = "block"

		//! options
		if (models_options1 == true) {
			price_number += 80000

			console.log("Options 1 (Model S): " + price_number)
		}

		if (models_options2 == true) {
			price_number += 100000

			console.log("Options 2 (Model S): " + price_number)
		}
	}
}

//color
function models_color() {
	let models_color1 = document.getElementById("models_color1").checked
	let models_color2 = document.getElementById("models_color2").checked
	let models_color3 = document.getElementById("models_color3").checked
	let models_color4 = document.getElementById("models_color4").checked
	let models_color5 = document.getElementById("models_color5").checked

	if (models_color1 || models_color2 || models_color3 || models_color4 || models_color5 == true) {
		//! next
		counter_number = 3
		let models_tires = document.getElementById("models_tires")
		models_tires.style.display = "block"

		//! options
		if (models_color1 == true) {
			price_number += 0

			console.log("Color 1 (Model S): " + price_number)
		}

		if (models_color2 == true) {
			price_number += 1500

			console.log("Color 2 (Model S): " + price_number)
		}

		if (models_color3 == true) {
			price_number += 1500

			console.log("Color 3 (Model S): " + price_number)
		}

		if (models_color4 == true) {
			price_number += 1500

			console.log("Color 4 (Model S): " + price_number)
		}

		if (models_color5 == true) {
			price_number += 2500

			console.log("Color 5 (Model S): " + price_number)
		}
	}
}

//tires
function models_tires() {
	let models_tires1 = document.getElementById("models_tires1").checked
	let models_tires2 = document.getElementById("models_tires2").checked
	let models_tires3 = document.getElementById("models_tires3").checked

	if (models_tires1 || models_tires2 || models_tires3 == true) {
		//! next
		counter_number = 4
		let models_other = document.getElementById("models_other")
		models_other.style.display = "block"

		//! options
		if (models_tires1 == true) {
			price_number += 0

			console.log("Tires 1 (Model S): " + price_number)
		}

		if (models_tires2 == true) {
			price_number += 1500

			console.log("Tires 2 (Model S): " + price_number)
		}

		if (models_tires3 == true) {
			price_number += 4500

			console.log("Tires 3 (Model S): " + price_number)
		}
	}
}

//other
function models_other() {
	let models_other1 = document.getElementById("models_other1").checked
	let models_other2 = document.getElementById("models_other2").checked
	let models_other3 = document.getElementById("models_other3").checked
	let models_other4 = document.getElementById("models_other4").checked
	let models_other5 = document.getElementById("models_other5").checked

	if ((models_other1 || models_other2 || models_other3) && (models_other4 || models_other5) == true) {
		//! options
		if (models_other1 == true) {
			price_number += 0

			models_money()
			console.log("Other 1 (Model S): " + price_number)
		}

		if (models_other2 == true) {
			price_number += 1500

			models_money()
			console.log("Other 2 (Model S): " + price_number)
		}

		if (models_other3 == true) {
			price_number += 1500

			models_money()
			console.log("Other 3 (Model S): " + price_number)
		}

		if (model3_other4 == true) {
			price_number += 0

			models_money()
			console.log("Other2 1 (Model S): " + price_number)
		}

		if (model3_other5 == true) {
			price_number += 7000

			models_money()
			console.log("Other2 2 (Model S): " + price_number)
		}
	}
}

//money
function models_money() {
	let currency_value = document.getElementById("currency").value
	let saving_value = document.getElementById("saving").value
	let saved_value = document.getElementById("saved").value
	let vat_value = document.getElementById("vat").value
	let price_final
	let price_symbol

	//? price_final
	if (currency_value == 1) {
		price_final = Math.round(usd * price_number)
		price_symbol = " $"
	} else if (currency_value == 2) {
		price_final = Math.round(eur * price_number)
		price_symbol = " €"
	} else if (currency_value == 3) {
		price_final = Math.round(huf * price_number)
		price_symbol = " FT"
	}

	//? price_final_vat
	let price_final_vat = Math.round(price_final * vat_value) + price_final

	//? month_final & year_final
	let calculator = (+price_final - +saved_value) / +saving_value

	let month_final = Math.round(calculator + 0)
	let year_final = Math.round(calculator / 12)

	//? month_final_vat & month_final_vat
	let calculator2 = (+price_final_vat - +saved_value) / +saving_value

	let month_final_vat = Math.round(calculator2 + 0)
	let year_final_vat = Math.round(calculator2 / 12)

	document.getElementById("price").innerHTML =
		"Végösszeg: " + price_final + price_symbol + " - " + "Végösszeg áfával: " + price_final_vat + price_symbol

	document.getElementById("month").innerHTML =
		month_final + " Hónapot kell dolgoznod - " + month_final_vat + " Hónapot kell dolgoznod áfával"

	document.getElementById("year").innerHTML = "Ami " + year_final + " év kb! - " + "Ami " + year_final_vat + " év kb áfával!"
}
