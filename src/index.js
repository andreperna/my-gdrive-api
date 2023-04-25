
// const id = await gDriveFunctions.getSheetId("todos", "tbl_users");

const spreadsheetId = "1V2PHqeBW7QRJccYMTEtr8oYzNCU0MdruwHXxVAlge6o";

async function debug(func) {
  console.log(await func);
}


import { gDriveFunctions } from "./gDrive/gDriveFunctions.js";
import { gSheetFunctions } from "./gSheets/gSheetsFunctions.js";

// debug(await gDriveFunctions.getFolders())
// debug(await gDriveFunctions.getFolderId("todos"))
// debug(await gDriveFunctions.getFolderId("errado"))
// debug(await gDriveFunctions.getSheets("todos"))
// debug(await gDriveFunctions.getSheets("todo"))
// debug(await gDriveFunctions.getSheetId("todos", "tbl_users"))

// debug(await gSheetFunctions.getValuesNotNull(spreadsheetId))
debug(await gSheetFunctions.getValueByIdNotNull(spreadsheetId, 5))