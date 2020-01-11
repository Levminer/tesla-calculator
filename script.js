function start() {
	model()
	options()
}

function model() {
	let model1 = document.getElementById("model1").checked
	let model2 = document.getElementById("model2").checked
	let model3 = document.getElementById("model3").checked
	let model4 = document.getElementById("model4").checked

	if (model1 == true) {
		alert("1")
	}

	if (model2 == true) {
		alert("2")
	}

	if (model3 == true) {
		alert("3")
	}

	if (model4 == true) {
		alert("4")
	}
}

function options() {
	let options1 = document.getElementById("options1").checked
	let options2 = document.getElementById("options2").checked
	let options3 = document.getElementById("options3").checked

	if (options1 == true) {
		alert("11")
	}

	if (options2 == true) {
		alert("12")
	}

	if (options3 == true) {
		alert("13")
	}
}
