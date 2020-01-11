let counter_number = 0
let model_number = 0
let price_number = 0

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

		default:
			break
	}
}

function reload() {
	location.reload()
}

function model() {
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

			console.log(price_number)
		}

		if (model3_options2 == true) {
			price_number += 48000
			counter_number++

			let color = document.getElementById("color")
			color.style.display = "block"

			console.log(price_number)
		}

		if (model3_options3 == true) {
			price_number += 56000
			counter_number++

			let color = document.getElementById("color")
			color.style.display = "block"

			console.log(price_number)
		}
	}

	if (model_number == 4) {
		let modely_options1 = document.getElementById("modely_options1").checked
		let modely_options2 = document.getElementById("modely_options2").checked
		let modely_options3 = document.getElementById("modely_options3").checked

		if (modely_options1 == true) {
			price_number += 48000
			counter_number++

			let color = document.getElementById("color")
			color.style.display = "block"

			console.log(price_number)
		}

		if (modely_options2 == true) {
			price_number += 52000
			counter_number++

			let color = document.getElementById("color")
			color.style.display = "block"

			console.log(price_number)
		}

		if (modely_options3 == true) {
			price_number += 61000
			counter_number++

			let color = document.getElementById("color")
			color.style.display = "block"

			console.log(price_number)
		}
	}
}

function color() {
	let color1 = document.getElementById("color1").checked
	let color2 = document.getElementById("color2").checked
	let color3 = document.getElementById("color3").checked
	let color4 = document.getElementById("color4").checked
	let color5 = document.getElementById("color5").checked

	if (color1 == true) {
		price_number += 0
		counter_number++

		let tires = document.getElementById("tires")
		tires.style.display = "block"

		console.log(price_number)
    }
    
    if (color2 == true) {
		price_number += 1000
		counter_number++

		let tires = document.getElementById("tires")
		tires.style.display = "block"

		console.log(price_number)
    }
    
    if (color3 == true) {
		price_number += 1000
		counter_number++

		let tires = document.getElementById("tires")
		tires.style.display = "block"

		console.log(price_number)
    }
    
    if (color4 == true) {
		price_number += 1000
		counter_number++

		let tires = document.getElementById("tires")
		tires.style.display = "block"

		console.log(price_number)
    }
    
    if (color5 == true) {
		price_number += 2000
		counter_number++

		let tires = document.getElementById("tires")
		tires.style.display = "block"

		console.log(price_number)
	}
}

function tires() {
    
    let tires1 = document.getElementById("tires1").checked
	let tires2 = document.getElementById("tires2").checked
	let tires3 = document.getElementById("tires3").checked
	let tires4 = document.getElementById("tires4").checked

	if (tires1 == true) {
		price_number += 0
		counter_number++

		let other = document.getElementById("other")
		other.style.display = "block"

		console.log(price_number)
    }
    
    if (tires2 == true) {
		price_number += 1500
		counter_number++

		let other = document.getElementById("other")
		other.style.display = "block"

		console.log(price_number)
    }
    
    if (tires3 == true) {
		price_number += 2300
		counter_number++

		let other = document.getElementById("other")
		other.style.display = "block"

		console.log(price_number)
    }
    
    if (tires4 == true) {
		price_number += 3900
		counter_number++

		let other = document.getElementById("other")
		other.style.display = "block"

		console.log(price_number)
    }
}

function other() {
    
    let other1 = document.getElementById("other1").checked
	let other2 = document.getElementById("other2").checked
	let other3 = document.getElementById("other3").checked
	let other4 = document.getElementById("other4").checked

	if (other1 == true) {
		price_number += 0
		counter_number++

		let other = document.getElementById("other")
		other.style.display = "block"

		console.log(price_number)
    }
    
    if (other2 == true) {
		price_number += 1000
		counter_number++

		let other = document.getElementById("other")
		other.style.display = "block"

		console.log(price_number)
    }
    
    if (other3 == true) {
		price_number += 0
		counter_number++

		let other = document.getElementById("other")
		other.style.display = "block"

		console.log(price_number)
    }
    
    if (other4 == true) {
		price_number += 7000
		counter_number++

		let other = document.getElementById("other")
		other.style.display = "block"

		console.log(price_number)
    }

}