import React from "react"
import Day from "./component/Day";
import Loader from "./component/Loader";
import "./Main.css";
import {Redirect} from "react-router-dom";

class  Main extends React.Component{


	constructor(props) {
		super(props);
		this.state = {Data: null};

	}
  componentDidMount() {
		fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/924938/")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({Data : data});
				//console.log(this.state.Data);
			});
	}


	check_cookie_name(name)
	{
		var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
		if (match) {
			return true;
			//console.log(match[2]);
		}
		else{
			console.log('--something went wrong---');
			return false;
		}
	}

	render() {
		if (this.check_cookie_name("passed")===true) {
			if (this.state.Data !== null) {
				return (
					<>
						<h1 className="City">Kiev</h1>
						<div className="wraper">
							<Day DayData={this.state.Data.consolidated_weather[0]}/>
							<Day DayData={this.state.Data.consolidated_weather[1]}/>
							<Day DayData={this.state.Data.consolidated_weather[2]}/>
							<Day DayData={this.state.Data.consolidated_weather[3]}/>
							<Day DayData={this.state.Data.consolidated_weather[4]}/>
							<Day DayData={this.state.Data.consolidated_weather[5]}/>
						</div>
					</>
				)
			} else {
				return (
					<Loader/>
				)
			}
		}
		else {
			return (
				<Redirect to="/"/>
			)
		}
	}
}

export default Main;