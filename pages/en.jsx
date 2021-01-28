import Head from "next/head"
import Router from "next/router"

let restart = () => {
	Router.reload(window.location.pathname)
}

let next = () => {
	go()
}

let model = () => {
	model_switcher()
}

const en = () => {
	return (
		<>
			<Head>
				{/* css */}
				<link rel="stylesheet" href="https://cdn.levminer.com/css/dragonfly/dragonfly@1.4.0.min.css" />
				<link rel="stylesheet" href="./en/css/index.css" />
				{/* js */}
				<script src="./en/js/index.js"></script>
			</Head>
			{/* html */}
			<div className="center">
				<div className="title">
					<h1>Tesla Calculator</h1>
				</div>

				<div className="subtitle">
					<h3>Have you ever thought about how much you should work to have a Tesla? Now you can find out!</h3>
				</div>

				{/* settings */}
				<div className="settings">
					<h3>Settings</h3>

					<label id="label1" htmlFor="currency">
						Currency
					</label>
					<label id="label2" htmlFor="saving">
						Saving/month (USD)
					</label>
					<label id="label3" htmlFor="saved">
						Saved money (USD)
					</label>
					<label id="label4" htmlFor="vat">
						VAT
					</label>

					<br />

					<select className="select1" id="currency">
						<option value="1" selected="selected">
							USD
						</option>
						<option value="2">EUR</option>
						<option value="3">HUF</option>
					</select>

					<input className="input1" name="saving" type="number" id="saving" placeholder="1000" />
					<input className="input1" name="saved" type="number" id="saved" placeholder="5000" />

					<select className="select1" id="vat">
						<option value="0.0" selected="selected">
							(0%)
						</option>
						<option value="0.5">5%</option>
						<option value="0.10">10%</option>
						<option value="0.15">15%</option>
						<option value="0.20">20%</option>
						<option value="0.25">25%</option>
						<option value="0.27">(27%)</option>
					</select>
				</div>

				{/* buttons */}
				<div className="buttons">
					<button className="button1" onClick={next}>
						Start
					</button>
					<button className="button1" onClick={restart}>
						Restart
					</button>
				</div>

				{/* models */}
				<div className="models_0" id="models_0">
					<h3>
						<input type="submit" className="model_switcher" value="Model" onClick={model} title="Click to view the other models!" />
					</h3>
					<input type="radio" className="radio1" id="model1" name="model" value="1" class="radio" /> Model S
					<input type="radio" className="radio1" id="model2" name="model" value="2" class="radio" /> Model 3
					<input type="radio" className="radio1" id="model3" name="model" value="3" class="radio" /> Model X
					<input type="radio" className="radio1" id="model4" name="model" value="4" class="radio" /> Model Y
				</div>

				<div className="models_1" id="models_1">
					<h3>
						<input type="submit" className="model_switcher" value="Model" onClick={model} title="Click to view the other models!" />
					</h3>
					<input type="radio" className="radio1" id="model5" name="model" value="5" class="radio" /> Cybertruck
					<input type="radio" className="radio1" id="model6" name="model" value="6" class="radio" /> Semi
					<input type="radio" className="radio1" id="model7" name="model" value="7" class="radio" /> Roadster
				</div>
			</div>
		</>
	)
}

export default en
