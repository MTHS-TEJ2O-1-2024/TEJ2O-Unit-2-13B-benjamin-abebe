/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Benjamin Abebe 
 * Created on: Oct 2024
 * This program counts down from 4-0 and lights up the neopixel depending on the number
*/

// defining variables
let neopixelStrip: neopixel.Strip = null
let numberOfCountDown: number

// clearing screen and making sure all neopixel is off
basic.clearScreen()
basic.showIcon(IconNames.Happy)
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))

// when button a is pressed
input.onButtonPressed(Button.A, function() {

    // the amount of Count down numbers
    numberOfCountDown = 4

    while (numberOfCountDown > 0) {
        numberOfCountDown = numberOfCountDown - 1

        if (numberOfCountDown = 4) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
            basic.showString("4")
            neopixelStrip.show()
        }

        if (numberOfCountDown = 3) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            basic.showString("3")
            neopixelStrip.show()
        }

        if (numberOfCountDown = 2) {
            basic.showString("2")
            pause(500)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
        }

        if (numberOfCountDown = 1) {
            basic.showString("1")
            pause(500)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
        }

        // clear screen and show happy face
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }
    })