import getArgs from "./helpers/args.js";
import { getWeather } from "./services/api.services.js";
import { printError, printHelp, printSucces,printWeather } from "./services/log.services.js";
import { Token_dictionary, getValueKey, saveKeyValue } from "./services/storage.services.js";
import { getIcon } from "./services/api.services.js";


const saveToken = async (token) => {
  if (!token.length) {
    printError("Please added token");
    return;
  }
  try {
    await saveKeyValue(Token_dictionary.token, token);
    printSucces("Token was saved");
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
    if (!city.length) {
      printError("City doesn`t exist");
      return;
    }
    try {
      await saveKeyValue(Token_dictionary.city, city);
      printSucces("City was saved");
    } catch (error) {
      printError(error.message);
    }
  };
const getForcest = async () => {
  try {
    const city =process.env.CITY ?? await getValueKey(Token_dictionary.city)
    const response = await getWeather(city);
    printWeather(response, getIcon(response.weather[0].icon))
    
  } catch (error) {
    if (error?.response?.status == 404) {
      printError("CITY NOT FOUND ?");
    } else if (error?.response?.status == 401) {
      printError("Invalid Token");
    } else {
      console.log(error.message);
    }
  }
};
const startCLI = () => {
  const args = getArgs(process.argv);
  // console.log(process.env)/;
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s)
  }

  if (args.t) {
    return saveToken(args.t);
  }
  return getForcest();
};

startCLI();
