class Utilities {

  /**
   * Check if a variable is undefined or null.
   * 
   * @param {any} someVariable - The variable to check.
   * @returns {boolean} A boolean representing the result.
   */
  static isUndefinedOrNull(someVariable) {
    return (typeof someVariable == "undefined" || someVariable == null);
  }

}

module.exports = Utilities;