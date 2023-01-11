// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-5-08/sw.js", {
    scope: "/ICS2O-5-08/",
  })
}

/**
 * This function does multiplication.
 */
function myButtonClicked() {
  var remainder = parseFloat(
    document.getElementById("firstInputedNumber").value
  )
  var numB = parseFloat(document.getElementById("secondInputedNumber").value)
  var counter = 0

  while (remainder >= Math.abs(numB)) {
    remainder = remainder - Math.abs(numB)
    counter++
  }

  document.getElementById("answer").innerHTML =
    "The answer is: " + counter + " R" + remainder + "!"
}
