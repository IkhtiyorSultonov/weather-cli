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
        await saveKeyValue(Token_dictionary.token,token)
        printSucces('Token was saved')
    } catch (error) {
        printError(error.message)
    }
}

const startCLI=()=>{
  
    const args=getArgs(process.argv)
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
  getWeather('uzbekistan')
}

startCLI()