input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
    basic.showString("Celsius")
    serial.writeLine("" + (input.temperature()))
    serial.writeLine("Celsius")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (input.temperature()))
    if (input.temperature() > 25) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        serial.writeLine("No agafar jaqueta ")
        basic.showString("No agafar jaqueta")
        if (input.temperature() < 25) {
            basic.showLeds(`
                . # # # .
                # . # . #
                . . # . .
                # . # . .
                . # # . .
                `)
            serial.writeLine("Agafar jaqueta ")
            basic.showString("Agafar jaqueta")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.temperature()))
    if (input.temperature() > 25) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        serial.writeLine("" + (input.temperature()))
        if (input.temperature() < 25) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            serial.writeLine("" + (input.temperature()))
        }
    }
})
