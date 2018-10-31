class ListzItem {

  constructor(listzItemObject) {

    // initialize empty fields.
    this.name = "";
    this.description = "";
    this.image = "";
    this.tags = new Array();
    this.link = "";

    // If an object was passed, set the new values.
    if (typeof listzItemObject != "undefined" || listzItemObject != null) {

      // Extract basic info.
      this.name = listzItemObject.name;
      this.description = listzItemObject.description;
      this.image = listzItemObject.image;
      this.link = listzItemObject.link;

      // Check if the basic info is loaded correctly.
      if (typeof this.name == "undefined" || this.name == null)         throw new Error("Listz item name is not defined.");
      if (typeof this.description == "undefined" || this.description == null)  throw new Error("Listz item description is not defined.");
      if (typeof this.image == "undefined" || this.image == null)        throw new Error("Listz item image is not defined.");

      // Check if the tags field is not null and an array.
      if (typeof listzItemObject.tags == "undefined" || listzItemObject.tags == null)  throw new Error("Listz item tags field is not defined.");
      if (!Array.isArray(listzItemObject.tags))               throw new Error("Listz item tags field is not an array.");

      for (let tag of listzItemObject.tags) {
        this.tags.push(tag);
      }

    }
  }

}

module.exports = ListzItem