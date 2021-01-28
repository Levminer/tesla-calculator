//? init
let state = 0
let model = 0
let price = 0

let usd = 1
let eur = 0.8
let huf = 300

let model_switcher_state = 0

//? proce api
const api_currency = () => {
	fetch("https://api.exchangeratesapi.io/latest?base=USD")
		.then((res) => res.json())
		.then((data) => {
			try {
				usd = data.rates.USD
				eur = data.rates.EUR
				huf = data.rates.HUF

				console.log(`Dollar (API): ${usd}`)
				console.log(`Euro (API):  ${eur}`)
				console.log(`Huf (API): ${huf}`)
			} catch (error) {
				return console.error(`Error loading currency API - ${err}`)
			}
		})
}

let model_switcher = () => {
	const model_0 = document.querySelector("#models_0")
	const model_1 = document.querySelector("#models_1")

	if (model_switcher_state === 0) {
		model_0.style.display = "none"
		model_1.style.display = "block"

		model_switcher_state = 1
	} else if (model_switcher_state === 1) {
		model_0.style.display = "block"
		model_1.style.display = "none"

		model_switcher_state = 0
	}
}

let go = () => {
	//? model chooser
	const models_0 = document.querySelector(".models_0")

	models_0.style.display = "block"
}

api_currency()
