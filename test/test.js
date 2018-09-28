'use strict'

var assert = require('assert');
var Listz = require("../src/Listz");

const CURRENT_LISTZ_JSON_VERSION = "1";

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

  });
});
