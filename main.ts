makerbit.onIrButton(IrButton.Number_3, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.showRainbow(1, 360)
})
makerbit.onIrButton(IrButton.Number_8, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.setPixelWhiteLED(10, 0)
})
makerbit.onIrButton(IrButton.Hash, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
})
makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
makerbit.onIrButton(IrButton.Number_4, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    for (let index = 0; index <= strip.length(); index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
    }
})
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
})
makerbit.onIrButton(IrButton.Number_6, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.setBrightness(255)
})
makerbit.onIrButton(IrButton.Number_7, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Black))
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
})
makerbit.onIrButton(IrButton.Star, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.rotate(16)
})
makerbit.onIrButton(IrButton.Number_2, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.easeBrightness()
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.setBrightness(0)
})
function setColor (color: number) {
    couleur = color
    strip.showColor(neopixel.hsl(couleur, 255, 255))
    serial.writeValue("setColor", color)
}
function id2str (id: number) {
    if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_1)) {
        return "1"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_2)) {
        return "2"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_3)) {
        return "3"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_4)) {
        return "4"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_5)) {
        return "5"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_6)) {
        return "6"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_7)) {
        return "7"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_8)) {
        return "8"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_9)) {
        return "9"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_0)) {
        return "0"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Star)) {
        return "*"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Hash)) {
        return "#"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Up)) {
        return "^"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Down)) {
        return "V"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Left)) {
        return "<"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Right)) {
        return ">"
    } else if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Ok)) {
        return "X"
    } else {
        return "?"
    }
}
makerbit.onIrButton(IrButton.Number_9, IrButtonAction.Pressed, function () {
    onButton(makerbit.irButton())
    strip.setPixelWhiteLED(10, 255)
})
function onButton (id: number) {
    serial.writeLine("onButton:" + id2str(id))
    basic.showString("" + (id2str(id)))
}
let couleur = 0
let strip: neopixel.Strip = null
let allumee = false
serial.writeLine("led-test-unit")
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.NEC)
basic.showIcon(IconNames.Asleep)
strip = neopixel.create(DigitalPin.P0, 160, NeoPixelMode.RGBW)
couleur = 0
allumee = true
strip.showRainbow(1, 360)
