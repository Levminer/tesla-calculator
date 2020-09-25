//? model
let model3_options = () => {
	let model3_options1 = document.getElementById("model3_options1").checked
	let model3_options2 = document.getElementById("model3_options2").checked
	let model3_options3 = document.getElementById("model3_options3").checked
	let model3_options4 = document.getElementById("model3_options4").checked

	if (model3_options1 || model3_options2 || model3_options3 == true) {
		// next
		counter_number = 2
		let model3_color = document.getElementById("model3_color")
		model3_color.style.display = "block"

		// options
		if (model3_options1 == true) {
			price_number += m3_options_price[0]

			console.log("Options 1 (Model 3): " + price_number)
		}

		if (model3_options2 == true) {
			price_number += m3_options_price[1]

			console.log("Options 2 (Model 3): " + price_number)
		}

		if (model3_options3 == true) {
			price_number += m3_options_price[2]

			console.log("Options 3 (Model 3): " + price_number)
		}

		if (model3_options4 == true) {
			price_number += m3_options_price[3]

			console.log("Options PU (Model 3): " + price_number)
		}
	}
}

//? color
let model3_color = () => {
	let model3_color1 = document.getElementById("model3_color1").checked
	let model3_color2 = document.getElementById("model3_color2").checked
	let model3_color3 = document.getElementById("model3_color3").checked
	let model3_color4 = document.getElementById("model3_color4").checked
	let model3_color5 = document.getElementById("model3_color5").checked

	if (model3_color1 || model3_color2 || model3_color3 || model3_color4 || model3_color5 == true) {
		// next
		counter_number = 3
		let model3_tires = document.getElementById("model3_tires")
		model3_tires.style.display = "block"

		// options
		if (model3_color1 == true) {
			price_number += m3_my_color_price[0]

			console.log("Color 1 (Model 3): " + price_number)
		}

		if (model3_color2 == true) {
			price_number += m3_my_color_price[1]

			console.log("Color 2 (Model 3): " + price_number)
		}

		if (model3_color3 == true) {
			price_number += m3_my_color_price[2]

			console.log("Color 3 (Model 3): " + price_number)
		}

		if (model3_color4 == true) {
			price_number += m3_my_color_price[3]

			console.log("Color 4 (Model 3): " + price_number)
		}

		if (model3_color5 == true) {
			price_number += m3_my_color_price[4]

			console.log("Color 5 (Model 3): " + price_number)
		}
	}
}

//? tires
let model3_tires = () => {
	let model3_tires1 = document.getElementById("model3_tires1").checked
	let model3_tires2 = document.getElementById("model3_tires2").checked
	let model3_tires3 = document.getElementById("model3_tires3").checked
	let model3_tires4 = document.getElementById("model3_tires4").checked
	let model3_tires5 = document.getElementById("model3_tires4").checked

	if ((model3_tires1 || model3_tires2 || model3_tires3) == true) {
		// next
		counter_number = 4
		let model3_other = document.getElementById("model3_other")
		model3_other.style.display = "block"

		// options
		if (model3_tires1 == true) {
			price_number += m3_tires_price[0]

			console.log("Tires 1 (Model 3): " + price_number)
		}

		if (model3_tires2 == true) {
			price_number += m3_tires_price[1]

			console.log("Tires 2 (Model 3): " + price_number)
		}

		if (model3_tires3 == true) {
			price_number += m3_tires_price[2]

			console.log("Tires PU (Model 3): " + price_number)
		}

		if (model3_tires4 == true) {
			price_number += m3_tires_price[3]

			console.log("Tires2 1 (Model 3): " + price_number)
		}

		if (model3_tires5 == true) {
			price_number += m3_tires_price[4]

			console.log("Tires2 2 (Model 3): " + price_number)
		}
	}
}

//? other
let model3_other = () => {
	let model3_other1 = document.getElementById("model3_other1").checked
	let model3_other2 = document.getElementById("model3_other2").checked
	let model3_other3 = document.getElementById("model3_other3").checked
	let model3_other4 = document.getElementById("model3_other4").checked

	if ((model3_other1 || model3_other2) && (model3_other3 || model3_other4) == true) {
		// options
		if (model3_other1 == true) {
			price_number += m3_other_price[0]

			model3_money()
			console.log("Other 1 (Model 3): " + price_number)
		}

		if (model3_other2 == true) {
			price_number += m3_other_price[1]

			model3_money()
			console.log("Other 1 (Model 3): " + price_number)
		}

		if (model3_other3 == true) {
			price_number += autopilot_price[0]

			model3_money()
			console.log("Other2 1 (Model 3): " + price_number)
		}

		if (model3_other4 == true) {
			price_number += autopilot_price[1]

			model3_money()
			console.log("Other2 2 (Model 3): " + price_number)
		}
	}
}

//? money
let model3_money = () => {
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

	document.getElementById("price").innerText = `Price: ${price_final}${price_symbol} - Price with VAT: ${price_final_vat}${price_symbol}`

	document.getElementById("month").innerText = `${month_final} months you have to work - ${month_final_vat} months you have to work with vat`

	document.getElementById("year").innerText = `That's ${year_final} years! - That's ${year_final_vat} years with vat!`
}
