let Utilities = require("./Utilities");

class ListzItem {

  constructor(listzItemObject) {

    // initialize empty fields.
    this.name = "";
    this.description = "";
    this.image = "";
    this.tags = new Array();
    this.link = "";

    // If an object was passed, set the new values.
    if (!Utilities.isUndefinedOrNull(listzItemObject)) {

      // Extract basic info.
      this.name = listzItemObject.name;
      this.description = listzItemObject.description;
      this.image = listzItemObject.image;
      this.link = listzItemObject.link;

      // Check if the basic info is loaded correctly.
      if (Utilities.isUndefinedOrNull(this.name))         throw new Error("Listz item name is not defined.");
      if (Utilities.isUndefinedOrNull(this.description))  throw new Error("Listz item description is not defined.");
      if (Utilities.isUndefinedOrNull(this.image))        throw new Error("Listz item image is not defined.");

      // Check if the tags field is not null and an array.
      if (Utilities.isUndefinedOrNull(listzItemObject.tags))  throw new Error("Listz item tags field is not defined.");
      if (!Array.isArray(listzItemObject.tags))               throw new Error("Listz item tags field is not an array.");

      for (let tag of listzItemObject.tags) {
        this.tags.push(tag);
      }

    }
  }

}

module.exports = ListzItem