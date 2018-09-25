'use strict'

let ListzItem = require("./ListzItem");
let Utilities = require("./Utilities");

/**
 * Class representing a Listz object.
 */
class Listz {

  /**
   * Constructor for initalizing a new Listz object.
   * 
   * @param {string} [inputJson] - A JSON string representing a serialized Listz object.
   */
  constructor(inputJson) {

      // By default, take latest version.
      this.version = "1";

      // Initialize empty fields.
      this.name = "";
      this.description = "";
      this.image = "";

      this.items = new Array();

    // If JSON was passed, try to parse the empty Listz object.
    if (!Utilities.isUndefinedOrNull(inputJson)) {
      this.parse(inputJson);
    }
  }

  /**
   * Try to parse a JSON string representing a serialized Listz object.
   */
  parse(json) {

    let tempParsed;

    // First, check if the JSON is parseable in the first place.
    try {
      tempParsed = JSON.stringify(json);
    }
    catch(error) {
      return new Error(`No valid JSON: ${error}`);
    }

    // Extract basic info.
    this.version      = tempParsed.version;
    this.name         = tempParsed.name;
    this.description  = tempParsed.description;
    this.image        = tempParsed.image;

    // Check if basic info passed.
    if (Utilities.isUndefinedOrNull(this.version))     throw new Error("Version is not defined.");
    if (Utilities.isUndefinedOrNull(this.name))        throw new Error("Name is not defined.");
    if (Utilities.isUndefinedOrNull(this.description)) throw new Error("Description is not defined.");
    if (Utilities.isUndefinedOrNull(this.image))       throw new Error("Image is not defined.");

    // Check if a list-items are present.
    if (Utilities.isUndefinedOrNull(tempParsed.items)) throw new Error("Items field not defined.");

    // Check if list-items is an array.
    if (!Array.isArray(tempParsed.items)) throw new Error("Items field is not an array.");

    // Try to parse all list-items.
    for (let item of tempParsed.items) {

      try {
        this.items.push(new ListzItem(item));
      }
      catch(error) {
        throw new Error(`Item is not a valid listz-item: ${error}`);
      }

    }
 
  }

  /**
   * Check if a JSON string representing a serialized Listz object is valid.
   * 
   * @param {string} listzJson 
   * @returns {boolean} A boolean representing whether a JSON string represents is a valid serialized Listz object.
   */
  static isValid(listzJson) {

    try {
      new Listz(listzJson)
      return true;
    }
    catch(error) {
      return false;
    }
  }

  /**
   * Validate and parse a JSON string into a Listz object.
   * 
   * @param {string} listzJson - A JSON string representing a serialized Listz object.
   * @returns {object} An object with 2 fields; "isValid": representing the JSON string was valid, and "result": containing the resulted Listz object.
   */
  static validate(listzJson) {

    try {
      let listzObject = new Listz(listzJson);
      return { "isValid" : true, "result" : listzObject };
    }
    catch(error) {
      return { "isValid" : false, "result" : error.message };
    }

  }
}

module.exports = Listz;