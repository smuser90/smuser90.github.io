
import React, { PureComponent } from "react"
import ReactDOM from "react-dom"
import Iframe from "./iFrame.js"

class Pulsemap extends PureComponent {
	render() {
		return (
			<Iframe
				url="http://pulse-mapper.herokuapp.com"
				className="container"
				allowFullScreen

			/>
		)
	}
}

export default Pulsemap;
