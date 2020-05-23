import React from "react"



class  Day extends React.Component{

	constructor(props) {
		super(props);
		console.log(this.props.DayData);
	}


	render() {
		return (
			<div className="day">
				<h4>Date is : {this.props.DayData.applicable_date}</h4>
				<h4>Humidity : {this.props.DayData.humidity}</h4>
				<h4>Max temperature : { Math.round((this.props.DayData.max_temp + Number.EPSILON) * 100) / 100 }</h4>
				<h4>Min temperature : { Math.round((this.props.DayData.min_temp + Number.EPSILON) * 100) / 100 }</h4>
				<h4>Predictability : {this.props.DayData.predictability}</h4>
				<h4>Visibility : { Math.round((this.props.DayData.visibility + Number.EPSILON) * 100) / 100 }</h4>
				<h4>Weather : {this.props.DayData.weather_state_name}</h4>
				<h4>Wind Direction : {this.props.DayData.wind_direction_compass}</h4>
				<h4>Wind Speed : {Math.round((this.props.DayData.wind_speed + Number.EPSILON) * 100) / 100}</h4>
			</div>
		)
	}
}

export default Day;