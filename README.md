# Listz
Parsing, creating and validating Listz objects.

> This project is still in alpha, so use the version displayed in the installation steps.

The `listz` package is used for the [Listz organisation on GitHub](https://github.com/listz) to parse and validate the lists used in the webapplication.

## Installation

Install the package in your project:

```shell
npm install listz@0.0.1
```

## Usage

1. Check if a serialized Listz object is valid.

```javascript
let Listz = require("listz");

let rawListz;

fs.readFile("./someListz.json", "utf8", (err, data) => {
    if (!err) rawListz = data;
});

console.log(Listz.isValid(rawListz));
```

2. Parse a serialized Listz object.

```javascript
let Listz = require("listz");

let newListz;

fs.readFile("./someListz.json", "utf8", (err, data) => {
    if (!err) newListz = new Listz(data);
});
```

3. Check if a serialized Lists object is valid and parse it at the same time.

```javascript
let Listz = require("listz");

let validationResult;

fs.readFile("./someListz.json", "utf8", (err, data) => {
    if (!err) validationResult = Listz.validate(data);
});

console.log(validationResult.isValid);
console.log(validationResult.result);
```

## Valid Listz json

Listz objects are actually just simple `json` objects, but we need these binaries to automate the validation. For instance, when a contributor adds a new list-item to a `listz.json`, we want to check if the serialized Listz object is still valid before allowing the pull request to be merged. 

To checkout the `Listz` format, check out the `listz.json` file in the root of this repository.