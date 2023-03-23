basic.forever(function () {
    if (input.lightLevel() > 150) {
        basic.showString("L")
    } else {
        basic.clearScreen()
    }
})
