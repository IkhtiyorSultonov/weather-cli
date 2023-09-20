import getArgs from "./helpers/args.js"
import { getWeather } from "./services/api.services.js"
import {printError,printHelp,printSucces} from "./services/log.services.js"
import { Token_dictionary, saveKeyValue } from "./services/storage.services.js"

const saveToken=async(token)=>{
    if(!token.length){
        printError("Please added token")
        return
    }
    try {
        await saveKeyValue( Token_dictionary.token,token)
        printSucces('Token was saved')
    } catch (error) {
        printError(error.message)
    }
}
const getForcest=async()=>{
    
    try {
        const response=await getWeather(process.env.CITY??'uzbekistan')
        console.log(response);
    } catch (error) {
        if(error?.response?.status==404)
        {
            printError("CITY NOT FOUND ?")
        }

        else if(error?.response?.status==401)
        {
            printError("Invalid Token")
        }

        else{
            console.log(error.message);
        }
    }
}
const startCLI=()=>{
  
    const args=getArgs(process.argv)
    // console.log(process.env)/;
    if(args.h)
    {
        printHelp()
    }
    if(args.s)
    {

    }

    if(args.t)
    {
        return saveToken(args.t)
    }
getForcest()
}

startCLI()