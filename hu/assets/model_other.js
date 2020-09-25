//? cybertruck
let cybertruck_options = () => {
	let cybertruck_options1 = document.getElementById("cybertruck_options1").checked
	let cybertruck_options2 = document.getElementById("cybertruck_options2").checked
	let cybertruck_options3 = document.getElementById("cybertruck_options3").checked

	if (cybertruck_options1 || cybertruck_options2 || cybertruck_options3 == true) {
		// options
		if (cybertruck_options1 == true) {
			price_number += c_options_price[0]

			console.log("Options 1 (Cybertruck): " + price_number)
			model_other_money()
		}

		if (cybertruck_options2 == true) {
			price_number += c_options_price[1]

			console.log("Options 2 (Cybertruck): " + price_number)
			model_other_money()
		}

		if (cybertruck_options3 == true) {
			price_number += c_options_price[2]

			console.log("Options 3 (Cybertruck): " + price_number)
			model_other_money()
		}
	}
}

//? semi
let semi_options = () => {
	let semi_options1 = document.getElementById("semi_options1").checked
	let semi_options2 = document.getElementById("semi_options2").checked
	let semi_options3 = document.getElementById("semi_options3").checked

	if (semi_options1 || semi_options2 || semi_options3 == true) {
		// options
		if (semi_options1 == true) {
			price_number += s_options_price[0]

			console.log("Options 1 (Semi): " + price_number)
			model_other_money()
		}

		if (semi_options2 == true) {
			price_number += s_options_price[1]

			console.log("Options 2 (Semi): " + price_number)
			model_other_money()
		}

		if (semi_options3 == true) {
			price_number += s_options_price[1]

			console.log("Options 3 (Semi): " + price_number)
			model_other_money()
		}
	}
}

//? roadster
let roadster_options = () => {
	let roadster_options1 = document.getElementById("roadster_options1").checked
	let roadster_options2 = document.getElementById("roadster_options2").checked

	if (roadster_options1 || roadster_options2 == true) {
		// options
		if (roadster_options1 == true) {
			price_number += r_options_price[0]

			console.log("Options 1 (Roadster): " + price_number)
			model_other_money()
		}

		if (roadster_options2 == true) {
			price_number += r_options_price[1]

			console.log("Options 2 (Roadster): " + price_number)
			model_other_money()
		}
	}
}

//? money
let model_other_money = () => {
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

	document.getElementById("price").innerText = `Végösszeg: ${price_final}${price_symbol} - Végösszeg áfával: ${price_final_vat}${price_symbol}`

	document.getElementById("month").innerText = `${month_final} Hónapot kell dolgoznod - ${month_final_vat} Hónapot kell dolgoznod áfával`

	document.getElementById("year").innerText = `Ami ${year_final} év kb! - Ami ${year_final_vat} év kb áfával!`
}
