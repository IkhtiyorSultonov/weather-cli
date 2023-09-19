import {printError,printHelp,printSucces} from "./services/log.services.js"
import getArgs from "./helpers/args.js"
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

    }
}

startCLI()