import React from "react"
import ValidationForm from "./component/ValidationForm"
import {Route} from "react-router-dom";
import Main from "./Main";


 class  App extends React.Component {

		render() {
			return(
			<>
				<Route path="/Main" component={Main} />
				<Route exact path="/" component={ValidationForm}/>
			</>
			)
		}
}

export default App;