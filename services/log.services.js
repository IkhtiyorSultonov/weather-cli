import chalk from "chalk"
import dedent from "dedent-js"
const printError= error=>{
    console.log(chalk.bgRed('ERROR:'+ ""+error));
}

const printSucces= succes=>{
    console.log(chalk.bgYellow('SUCCES:'+""+succes));
}
const printHelp= help=>{
    console.log(dedent`${chalk.bgYellow('HELP')}
    -s [CITY] for install city
    -h for help
    -t [API_KEY] for saving token
    `);
}

export{
    printError,
    printSucces,
    printHelp,
}