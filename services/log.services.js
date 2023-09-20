import chalk from "chalk"
import dedent from "dedent-js"
const printError= error=>{
    console.log(chalk.bgRed('ERROR:'+ ""+error));
}

const printSucces= succes=>{
    console.log(chalk.bgYellow('SUCCES:'+""+succes));
}
const printHelp= ()=>{
    console.log(dedent`${chalk.bgYellow('HELP')}
    -s [CITY] for install city
    -h for help
    -t [API_KEY] for saving token
    `);
}

const printWeather=(response,icon)=>{
   console.log(dedent`
		${chalk.bgGrey('WEATHER')} City weather ${response.name}
		${icon}  ${response.weather[0].description}
		Temperature: ${response.main.temp} (feels like ${response.main.feels_like})
		Humidity: ${response.main.humidity}%
		Wind speed: ${response.wind.speed}
	`)
}

export{
    printError,
    printSucces,
    printHelp,
    printWeather,
}