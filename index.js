import getArgs from "./helpers/args.js"
import {printError,printHelp,printSucces} from "./services/log.services.js"
import { saveKeyValue } from "./services/storage.services.js"

const saveToken=async(token)=>{
    try {
        await saveKeyValue('token',token)
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
        saveToken(args.t)
    }
    console.log(args);
}

startCLI()