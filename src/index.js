import { gDriveFunctions } from "./gDrive/gDriveFunctions.js";
import { gSheetFunctions } from "./gSheets/gSheetsFunctions.js";
import { arrayToObject } from "./helpers/arrayToObject.js";
import { objectToResourceValues } from "./helpers/objectToResourceValues.js";
import { filterNotNullObjects } from "./helpers/filterNotNullObjects.js";

const id = await gDriveFunctions.getSheetId("todos", "tbl_users");

const spreadsheetId = "1V2PHqeBW7QRJccYMTEtr8oYzNCU0MdruwHXxVAlge6o";

async function debug(func) {
  console.log(await func);
}

// console.log(await gSheetFunctions.getValues(id));

// single obj
const keys = ["id", "name", "sex"];
const objSingle = { name: "Augusto", id: "88", sex: "M" };

// multiple obj
const objMultiple = [
  { id: "1", name: "Carlos", sex: "M" },
  { id: "2", name: "Manuel", sex: "M" },
  { id: "3", sex: "M", name: "Augusto" },
  { id: "4", name: "Carla", sex: "F" },
  { id: "5", name: "", sex: "" },
  { id: "6", name: "", sex: "M" },
];

// obj to append
const objToAppend = {
  sex: "F",
  name: "AAAAA",
  id: 8888,
};

// obj to append
const objToUpdate = {
  name: "GFGFGFGFGF",
};

//debug
// debug(objectToArray(objMultiple));

// debug(objectToResourceValues(keys, objSingle));
// debug(typeof objSingle.length);

// await debug(gSheetFunctions.appendValues(spreadsheetId, objSingle));
// await debug(gSheetFunctions.getColumns(spreadsheetId));
// await debug(gSheetFunctions.getValues(spreadsheetId));
// console.log(await gSheetFunctions.getValues(id))
// console.log(await gSheetFunctions.appendValue(id, obj))
// console.log(await gSheetFunctions.updateValue(spreadsheetId, 8, objToUpdate));

// const a = gSheetFunctions.getRow(spreadsheetId, 10);

const arr = [["id"], ["1"], ["2"], ["3"], ["4"], ["16"], ["17"], ["18"], ["19"], ["20"]];

// debug(gSheetFunctions.getRow(spreadsheetId, 13));

// debug(gSheetFunctions.updateValues(spreadsheetId, 23, objToUpdate));

// debug(gSheetFunctions.clearValues(spreadsheetId, 26));
// debug(gSheetFunctions.getValuesNotNull(spreadsheetId));

const arrrrr = [1, 2, 5, 10, 20];
// debug(arrrrr.filter((item) => item !== eval([10, 20].join(" && item !== "))));

// debug([10, 20].join(" && item !== "));

// object not null
const objNotNull = {
  sex: "F",
  name: "AAAAA",
  id: 8888,
};

// object null
const objNull = {
  sex: "",
  name: "",
  id: 8888,
};

// debug(filterNotNullObjects(objMultiple));

debug(gSheetFunctions.getNextId(spreadsheetId))