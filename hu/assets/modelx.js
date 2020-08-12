//? model
let modelx_options = () => {
	let modelx_options1 = document.getElementById("modelx_options1").checked
	let modelx_options2 = document.getElementById("modelx_options2").checked

	if (modelx_options1 || modelx_options2 == true) {
		// next
		counter_number = 2
		let modelx_color = document.getElementById("modelx_color")
		modelx_color.style.display = "block"

		// options
		if (modelx_options1 == true) {
			price_number += 85000

			console.log("Options 1 (Model X): " + price_number)
		}

		if (modelx_options2 == true) {
			price_number += 105000

			console.log("Options 2 (Model X): " + price_number)
		}
	}
}

//? color
let modelx_color = () => {
	let modelx_color1 = document.getElementById("modelx_color1").checked
	let modelx_color2 = document.getElementById("modelx_color2").checked
	let modelx_color3 = document.getElementById("modelx_color3").checked
	let modelx_color4 = document.getElementById("modelx_color4").checked
	let modelx_color5 = document.getElementById("modelx_color5").checked

	if (modelx_color1 || modelx_color2 || modelx_color3 || modelx_color4 || modelx_color5 == true) {
		// next
		counter_number = 3
		let modelx_tires = document.getElementById("modelx_tires")
		modelx_tires.style.display = "block"

		// options
		if (modelx_color1 == true) {
			price_number += 0

			console.log("Color 1 (Model X): " + price_number)
		}

		if (modelx_color2 == true) {
			price_number += 1500

			console.log("Color 2 (Model X): " + price_number)
		}

		if (modelx_color3 == true) {
			price_number += 1500

			console.log("Color 3 (Model X): " + price_number)
		}

		if (modelx_color4 == true) {
			price_number += 1500

			console.log("Color 4 (Model X): " + price_number)
		}

		if (modelx_color5 == true) {
			price_number += 2500

			console.log("Color 5 (Model X): " + price_number)
		}
	}
}

//? tires
let modelx_tires = () => {
	let modelx_tires1 = document.getElementById("modelx_tires1").checked
	let modelx_tires2 = document.getElementById("modelx_tires2").checked
	let modelx_tires3 = document.getElementById("modelx_tires3").checked

	if (modelx_tires1 || modelx_tires2 || modelx_tires3 == true) {
		// next
		counter_number = 4
		let modelx_other = document.getElementById("modelx_other")
		modelx_other.style.display = "block"

		// options
		if (modelx_tires1 == true) {
			price_number += 0

			console.log("Tires 1 (Model X): " + price_number)
		}

		if (modelx_tires2 == true) {
			price_number += 2000

			console.log("Tires 2 (Model X): " + price_number)
		}

		if (modelx_tires3 == true) {
			price_number += 5500

			console.log("Tires 3 (Model X): " + price_number)
		}
	}
}

//? other
let modelx_other = () => {
	let modelx_other1 = document.getElementById("modelx_other1").checked
	let modelx_other2 = document.getElementById("modelx_other2").checked
	let modelx_other3 = document.getElementById("modelx_other3").checked
	let modelx_other4 = document.getElementById("modelx_other4").checked
	let modelx_other5 = document.getElementById("modelx_other5").checked
	let modelx_other6 = document.getElementById("modelx_other6").checked
	let modelx_other7 = document.getElementById("modelx_other7").checked
	let modelx_other8 = document.getElementById("modelx_other8").checked

	if (
		(modelx_other1 || modelx_other2 || modelx_other3) &&
		(modelx_other4 || modelx_other5) &&
		(modelx_other6 || modelx_other7 || modelx_other8) == true
	) {
		// options
		if (modelx_other1 == true) {
			price_number += 0

			modelx_money()
			console.log("Other 1 (Model X): " + price_number)
		}

		if (modelx_other2 == true) {
			price_number += 1500

			modelx_money()
			console.log("Other 2 (Model X): " + price_number)
		}

		if (modelx_other3 == true) {
			price_number += 1500

			modelx_money()
			console.log("Other 3 (Model X): " + price_number)
		}

		if (modelx_other4 == true) {
			price_number += 0

			modelx_money()
			console.log("Other2 1 (Model X): " + price_number)
		}

		if (modelx_other5 == true) {
			price_number += 7000

			modelx_money()
			console.log("Other2 2 (Model X): " + price_number)
		}

		if (modelx_other6 == true) {
			price_number += 0

			modelx_money()
			console.log("Other3 1 (Model X): " + price_number)
		}

		if (modelx_other7 == true) {
			price_number += 6500

			modelx_money()
			console.log("Other3 2 (Model X): " + price_number)
		}

		if (modelx_other8 == true) {
			price_number += 3500

			modelx_money()
			console.log("Other3 3 (Model X): " + price_number)
		}
	}
}

//? money
let modelx_money = () => {
	let currency_value = document.getElementById("currency").value
	let saving_value = document.getElementById("saving").value
	let saved_value = document.getElementById("saved").value
	let vat_value = document.getElementById("vat").value
	let price_final
	let price_symbol

	counter_number = 5

	// price_final
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

	// price_final_vat
	let price_final_vat = Math.round(price_final * vat_value) + price_final

	// month_final & year_final
	let calculator = (+price_final - +saved_value) / +saving_value

	let month_final = Math.round(calculator + 0)
	let year_final = Math.round(calculator / 12)

	// month_final_vat & month_final_vat
	let calculator2 = (+price_final_vat - +saved_value) / +saving_value

	let month_final_vat = Math.round(calculator2 + 0)
	let year_final_vat = Math.round(calculator2 / 12)

	document.getElementById(
		"price"
	).innerText = `Végösszeg: ${price_final}${price_symbol} - Végösszeg áfával: ${price_final_vat}${price_symbol}`

	document.getElementById(
		"month"
	).innerText = `${month_final} Hónapot kell dolgoznod - ${month_final_vat} Hónapot kell dolgoznod áfával`

	document.getElementById("year").innerText = `Ami ${year_final} év kb! - Ami ${year_final_vat} év kb áfával!`
}
