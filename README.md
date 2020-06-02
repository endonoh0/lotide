# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @endonoh0/lotide`

**Require it:**

`const _ = require('@endonoh0/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: Gets the first element of array.
* `tail(arr)`: Gets the last element of array.
* `middle(arr)`: Gets the middle element of array.
* `flatten(arr)`: Flattens array a single level deep.
* `countOnly(arr, obj)`: Returns an object comprised of key/value pairs resulted from iterating through each element of collection. The value of each key is the number of times the key was returned by the iteration.
* `letterPositions(str)`: Returns all the indices in the string where each character is found.
* `findKeyByValue(obj, str)`: Returns the key of the matched element.
* `eqObjects(obj, obj)`: If true, asserts that both objects are strictly equal.
* `eqArrays(arr, arr)`: If true, asserts that both arrays are strictly equal.
