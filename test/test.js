let assert = require('assert');
let Listz = require("../src/Listz");
let fs = require("fs");

let CURRENT_LISTZ_JSON_VERSION = "1";

const VALID_VERSION     = "1";
const VALID_NAME        = "The name of your Listz.";
const VALID_DESCRIPTION = "The description of your Listz.";
const VALID_IMAGE       = "The URL of the image that will represent your Listz.";

const VALID_ITEM_NAME         = "The name of a list-item";
const VALID_ITEM_DESCRIPTION  = "The description of a list-item";
const VALID_ITEM_IMAGE        = "The URL of an image that will represent your list-item. Preferably a link to a GitHub repository.";
const VALID_ITEM_LINK         = "The URL that users will be redirected to if they wish to know more about your list-item.";
const VALID_ITEM_TAGS         = [ "Tags", "that", "describe", "your", "list", "item." ];

const VALID_LISTZ_JSON_1 = fs.readFileSync("./listz.json", "utf8");
const VALID_LISTZ_OBJECT_1 = JSON.parse(VALID_LISTZ_JSON_1);

describe('Listz', function() {

  describe('constructor()', function() {

    it('should return an empty Listz object when no JSON was passed.', function() {

      let newListz = new Listz();

      assert.equal(newListz.version, CURRENT_LISTZ_JSON_VERSION);
      assert.equal(newListz.name, "");
      assert.equal(newListz.description, "");
      assert.equal(newListz.image, "");

      assert.notEqual(typeof newListz.items, undefined);
      assert.equal(newListz.items.length, 0);
    });

    it('should parse a valid Listz object.', function() {

      let newListz = new Listz(VALID_LISTZ_JSON_1);

      assert.equal(newListz.version, VALID_LISTZ_OBJECT_1.version);
      assert.equal(newListz.name, VALID_LISTZ_OBJECT_1.name);
      assert.equal(newListz.description, VALID_LISTZ_OBJECT_1.description);
      assert.equal(newListz.image, VALID_LISTZ_OBJECT_1.image);

      assert.equal(newListz.items.length, 1);

      let item1 = newListz.items[0];
      let validItem1 = VALID_LISTZ_OBJECT_1.items[0];

      assert.equal(item1.name, validItem1.name);
      assert.equal(item1.description, validItem1.description);
      assert.equal(item1.image, validItem1.image);
      assert.equal(item1.link, validItem1.link);

      assert.equal(item1.tags.length, validItem1.tags.length);
    });

  });
});
