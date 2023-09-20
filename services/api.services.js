import axios from "axios"
import { Token_dictionary, getValueKey, } from "./storage.services.js"

const getIcon = icon => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️'
		case '02':
			return '🌤️'
		case '03':
			return '☁️'
		case '04':
			return '☁️'
		case '09':
			return '🌧️'
		case '10':
			return '🌦️'
		case '11':
			return '🌩️'
		case '13':
			return '❄️'
		case '50':
			return '🌫️'
	}
}
const getWeather=async city =>
{
    const token=await getValueKey(process.env.Token??Token_dictionary.token)
  
    const {data} =await axios.get('https://api.openweathermap.org/data/2.5/weather',{
        params:{
            q:city,
            appid:token,
            lang:'en',
            units:'metric'
        }
    })
    return data
    
    
    
    // import https from "https"
    // const url=new URL('https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=302e93a896a58d4fc4905f54b128cad7')
    // url.searchParams.append('q',city)
    // url.searchParams.append('appid',token)
    // url.searchParams.append('lang','en')
    // url.searchParams.append('units','metric')
    // https.get(url,(response)=>{
    //    let res=''
    //     response.on('data',chunk=>{
    //         res+=chunk
    //     })
    //     response.on('end',()=>{
    //         console.log(res);
    //     })
    // })
}


export {getWeather,getIcon}