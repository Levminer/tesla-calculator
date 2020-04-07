//before start
let counter_number = 0
let model_number = 0
let price_number = 0
let usd = 1
let eur = 0.93
let huf = 312

//? onload
$(document).ready(function () {
	api()
})

//? API
function api() {
	$.getJSON("https://api.exchangeratesapi.io/latest?base=USD", function (data) {
		console.log(data)

		usd = data.rates.USD

		eur = data.rates.EUR

		huf = data.rates.HUF

		console.log("Dollar (API): " + usd)
		console.log("Euro (API): " + eur)
		console.log("Huf (API): " + huf)
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
			// ? model
			let model_start = document.getElementById("model")
			model_start.style.display = "block"

			let models_start = document.getElementById("model1").checked
			let model3_start = document.getElementById("model2").checked
			let modelx_start = document.getElementById("model3").checked
			let modely_start = document.getElementById("model4").checked

			if (models_start == true) {
				model_number = 1
				counter_number = 1

				let models_options = document.getElementById("models_options")
				models_options.style.display = "block"
			}

			if (model3_start == true) {
				model_number = 2
				counter_number = 1

				let model3_options = document.getElementById("model3_options")
				model3_options.style.display = "block"
			}

			if (modelx_start == true) {
				model_number = 3
				counter_number = 1

				let modelx_options = document.getElementById("modelx_options")
				modelx_options.style.display = "block"
			}

			if (modely_start == true) {
				model_number = 4
				counter_number = 1

				let modely_options = document.getElementById("modely_options")
				modely_options.style.display = "block"
			}
			break

		case 1:
			//? options
			if (model_number == 1) {
				models_options()
			}

			if (model_number == 2) {
				model3_options()
			}

			if (model_number == 3) {
				modelx_options()
			}

			if (model_number == 4) {
				modely_options()
			}
			break

		case 2:
			//? color
			if (model_number == 1) {
				models_color()
			}

			if (model_number == 2) {
				model3_color()
			}

			if (model_number == 3) {
				modelx_color()
			}

			if (model_number == 4) {
				modely_color()
			}
			break

		case 3:
			//? tires
			if (model_number == 1) {
				models_tires()
			}

			if (model_number == 2) {
				model3_tires()
			}

			if (model_number == 3) {
				modelx_tires()
			}

			if (model_number == 4) {
				modely_tires()
			}
			break

		case 4:
			//? other
			if (model_number == 1) {
				models_other()
			}

			if (model_number == 2) {
				model3_other()
			}

			if (model_number == 3) {
				modelx_other()
			}

			if (model_number == 4) {
				modely_other()
			}
			break
	}
}
