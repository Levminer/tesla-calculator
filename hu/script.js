//before start
let counter_number = 0
let model_number = 0
let price_number = 0

let usd = 1
let eur = 0.93
let huf = 312

//? onload
$(document).ready(function() {
	api()
})

//? API
function api() {
	$.getJSON("https://api.exchangeratesapi.io/latest?base=USD", function(data) {
		console.log(data)

		usd = data.rates.USD

		eur = data.rates.EUR

		huf = data.rates.HUF

		console.log("Dollar " + usd)
		console.log("Euro " + eur)
		console.log("Huf " + huf)
	})
}

//? currency_checker
setInterval(currency_checker, 1000)

function currency_checker() {
	let currency_checker = document.getElementById("currency").value

	if (currency_checker == 1) {
		document.getElementById("label2").innerHTML = "Megtakarítás/hónap (USD)"
		document.getElementById("label3").innerHTML = "Félretett pénz (USD)"

		document.getElementsByName("saving")[0].placeholder = "1000"
		document.getElementsByName("saved")[0].placeholder = "5000"
	} else if (currency_checker == 2) {
		document.getElementById("label2").innerHTML = "Megtakarítás/hónap (EUR)"
		document.getElementById("label3").innerHTML = "Félretett pénz (EUR)"

		document.getElementsByName("saving")[0].placeholder = "1000"
		document.getElementsByName("saved")[0].placeholder = "5000"
	} else if (currency_checker == 3) {
		document.getElementById("label2").innerHTML = "Megtakarítás/hónap (HUF)"
		document.getElementById("label3").innerHTML = "Félretett pénz (HUF)"

		document.getElementsByName("saving")[0].placeholder = "300000"
		document.getElementsByName("saved")[0].placeholder = "1000000"
	}
}

//? reload
function reload() {
	location.reload()
}

//start
function start() {
	switch (counter_number) {
		case 0:
			model()

			break

		case 1:
			options()

			break

		case 2:
			color()

			break

		case 3:
			tires()

			break

		case 4:
			other()

			break

		case 5:
			money()
	}
}

//model
function model() {
	let model = document.getElementById("model")
	model.style.display = "block"

	let model2 = document.getElementById("model2").checked
	let model4 = document.getElementById("model4").checked

	//? model 3
	if (model2 == true) {
		let model3_options = document.getElementById("model3_options")
		model3_options.style.display = "block"

		counter_number++
		model_number = 2
	}

	//? model y
	if (model4 == true) {
		let modely_options = document.getElementById("modely_options")
		modely_options.style.display = "block"

		counter_number++
		model_number = 4
	}
}

//options
function options() {
	if (model_number == 2) {
		let model3_options1 = document.getElementById("model3_options1").checked
		let model3_options2 = document.getElementById("model3_options2").checked
		let model3_options3 = document.getElementById("model3_options3").checked

		if (model3_options1 == true) {
			price_number += 40000
			counter_number++

			let color = document.getElementById("color")
			color.style.display = "block"

			console.log("Options " + price_number)
		}

		if (model3_options2 == true) {
			price_number += 48000
			counter_number++

			let color = document.getElementById("color")
			color.style.display = "block"

			console.log("Options " + price_number)
		}

		if (model3_options3 == true) {
			price_number += 56000
			counter_number++

			let color = document.getElementById("color")
			color.style.display = "block"

			console.log("Options " + price_number)
		}
	}

	if (model_number == 4) {
		let modely_options1 = document.getElementById("modely_options1").checked
		let modely_options2 = document.getElementById("modely_options2").checked

		if (modely_options1 == true) {
			price_number += 53000
			counter_number++

			let color = document.getElementById("color")
			color.style.display = "block"

			console.log("Options " + price_number)
		}

		if (modely_options2 == true) {
			price_number += 61000
			counter_number++

			let color = document.getElementById("color")
			color.style.display = "block"

			console.log("Options " + price_number)
		}
	}
}

//color
function color() {
	let color1 = document.getElementById("color1").checked
	let color2 = document.getElementById("color2").checked
	let color3 = document.getElementById("color3").checked
	let color4 = document.getElementById("color4").checked
	let color5 = document.getElementById("color5").checked

	if (color1 || color2 || color3 || color4 || color5 == true) {
		//? model 3
		if (model_number == 2) {
			let model3_tires = document.getElementById("model3_tires")
			model3_tires.style.display = "block"
		}

		//? model y
		if (model_number == 4) {
			let modely_tires = document.getElementById("modely_tires")
			modely_tires.style.display = "block"
		}
	}

	if (color1 == true) {
		price_number += 0
		counter_number++
		console.log("Color " + price_number)
	}

	if (color2 == true) {
		price_number += 1000
		counter_number++

		console.log("Color " + price_number)
	}

	if (color3 == true) {
		price_number += 1000
		counter_number++

		console.log("Color " + price_number)
	}

	if (color4 == true) {
		price_number += 1000
		counter_number++

		console.log("Color " + price_number)
	}

	if (color5 == true) {
		price_number += 2000
		counter_number++

		console.log("Color " + price_number)
	}
}

//tires
function tires() {
	if (model_number == 2) {
		let model3_tires1 = document.getElementById("model3_tires1").checked
		let model3_tires2 = document.getElementById("model3_tires2").checked
		let model3_tires3 = document.getElementById("model3_tires3").checked
		let model3_tires4 = document.getElementById("model3_tires4").checked
		let model3_tires5 = document.getElementById("model3_tires5").checked

		if (model3_tires1 || model3_tires2 || model3_tires3 || model3_tires4 || model3_tires5 == true) {
			counter_number++
		}

		if (model3_tires1 == true) {
			price_number += 0

			let other = document.getElementById("other")
			other.style.display = "block"

			console.log("Tires " + price_number)
		}

		if (model3_tires2 == true) {
			price_number += 1500

			let other = document.getElementById("other")
			other.style.display = "block"

			console.log("Tires " + price_number)
		}

		if (model3_tires3 == true) {
			price_number += 0

			let other = document.getElementById("other")
			other.style.display = "block"

			console.log("Tires " + price_number)
		}

		if (model3_tires4 == true) {
			price_number += 2300

			let other = document.getElementById("other")
			other.style.display = "block"

			console.log("Tires2 " + price_number)
		}

		if (model3_tires5 == true) {
			price_number += 3900

			let other = document.getElementById("other")
			other.style.display = "block"

			console.log("Tires2 " + price_number)
		}
	}

	if (model_number == 4) {
		let modely_tires1 = document.getElementById("modely_tires1").checked
		let modely_tires2 = document.getElementById("modely_tires2").checked
		let modely_tires3 = document.getElementById("modely_tires3").checked
		let modely_tires4 = document.getElementById("modely_tires4").checked
		let modely_tires5 = document.getElementById("modely_tires5").checked

		if (modely_tires1 || modely_tires2 || modely_tires3 || modely_tires4 || modely_tires5 == true) {
			counter_number++
		}

		if (modely_tires1 == true) {
			price_number += 0

			let other = document.getElementById("other")
			other.style.display = "block"

			console.log("Tires " + price_number)
		}

		if (modely_tires2 == true) {
			price_number += 2000

			let other = document.getElementById("other")
			other.style.display = "block"

			console.log("Tires " + price_number)
		}

		if (modely_tires3 == true) {
			price_number += 0

			let other = document.getElementById("other")
			other.style.display = "block"

			console.log("Tires " + price_number)
		}

		if (modely_tires4 == true) {
			price_number += 2300

			let other = document.getElementById("other")
			other.style.display = "block"

			console.log("Tires2 " + price_number)
		}

		if (modely_tires5 == true) {
			price_number += 3900

			let other = document.getElementById("other")
			other.style.display = "block"

			console.log("Tires2 " + price_number)
		}
	}
}

//other
function other() {
	let other1 = document.getElementById("other1").checked
	let other2 = document.getElementById("other2").checked
	let other3 = document.getElementById("other3").checked
	let other4 = document.getElementById("other4").checked

	if (other1 || other2 || other3 || other4 == true) {
		counter_number++
		money()
	}

	if (other1 == true) {
		price_number += 0

		console.log("Other " + price_number)
	}

	if (other2 == true) {
		price_number += 1000

		console.log("Other " + price_number)
	}

	if (other3 == true) {
		price_number += 0

		console.log("Other2 " + price_number)
	}

	if (other4 == true) {
		price_number += 7000

		console.log("Other2 " + price_number)
	}
}

//money
function money() {
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
