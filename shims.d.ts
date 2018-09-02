// Auto-generated. Do not edit.
declare namespace neopixel {

    /**
     * Draws an image on the LED screen.
     * @param leds the pattern of LED to turn on/off
     * @param interval time in milliseconds to pause after drawing
     */
    //% weight=95 blockGap=8
    //% imageLiteral=1 async
    //% block="show leds" icon="\uf00a"
    //% parts="neopixel" interval.defl=400 shim=neopixel::showLeds
    function showLeds(leds: string, interval?: number): void;

    /**
     *  Starts the Bluetooth accelerometer service
     */
    //%parts="neopixel" advanced=true test.defl=1 shim=neopixel::test
    function test(test?: number): void;
}

// Auto-generated. Do not edit. Really.
