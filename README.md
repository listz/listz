# Listz

> This project is still in alpha, so use the version displayed in the installation steps.

[![npm version](https://badge.fury.io/js/listz.svg)](https://badge.fury.io/js/listz)
[![Build Status](https://travis-ci.org/listz/listz.svg?branch=master)](https://travis-ci.org/listz/listz)

The `listz` package is used for the [Listz organisation on GitHub](https://github.com/listz) to parse and validate the lists used in the webapplication.

## What is Listz

[Listz](https://www.github.com/listz) is a collection of repositories that represent a certain type of technology or subject. Each repository contains a list where GitHub users can add items by cloning and creating pull requests. Each list can be queried using the Listz app, which is still under development as of now.

## What is a 'Listz'

A Listz is just a javascript object, conforming to a certain [format](listz.json). The serialized `Listz` object can be parsed by the listz-app, which users can use to explore the contents.

## How does a serialized Listz object look like?

You can take a look at the [listz.json](listz.json) file, which is a simple json string representing a `Listz` object containing one item.

## Installation

Install the package in your project:

```shell
npm install listz@0.0.2
```

To use it in your code:

```javascript
let Listz = require("listz");
```

## Usage

### Start from an empty Listz object.

```javascript
let newListz = new Listz();
```

### Check if a serialized Listz object is valid.

```javascript
let rawListz;

fs.readFile("./someListz.json", "utf8", (err, data) => {
    if (!err) rawListz = data;
});

console.log(Listz.isValid(rawListz));
```

### Parse a serialized Listz object.

```javascript
let newListz;

fs.readFile("./someListz.json", "utf8", (err, data) => {
    if (!err) newListz = new Listz(data);
});
```

### Check if a serialized Lists object is valid and parse it at the same time.

```javascript
let validationResult;

fs.readFile("./someListz.json", "utf8", (err, data) => {
    if (!err) validationResult = Listz.validate(data);
});

console.log(validationResult.isValid);
console.log(validationResult.result);
```

## Valid Listz json

Listz objects are actually just simple `json` objects, but we need these binaries to automate the validation. For instance, when a contributor adds a new list-item to a `listz.json`, we want to check if the serialized Listz object is still valid before allowing the pull request to be merged. 

To checkout the `Listz` format, check out the [`listz.json`](listz.json) file in the root of this repository.
