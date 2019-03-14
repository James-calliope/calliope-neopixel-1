# NeoPixel driver

Diese Bibliothek basiert auf der Neopixel Bibliothek von Microsoft (https://github.com/Microsoft/pxt-neopixel). Im Rahmen des Projektes SMILE (https://smile-smart-it.de), was das Ziel hat, Mädchen an die Informatik heranzuführen, wurde das Paket bearbeitet, um zusätzliche Funktionen zu erhalten und die Übersichtlichkeit und Bedienungsfreundlichkeit zu erhöhen. 

Die Bibliothek stellt einen Treiber zur Verfügung, um verschiedene Neo Pixel LED Streifen an den Calliope mini anzuschließen,
siehe: https://www.adafruit.com/category/168

Die einzelnen LEDs der Neopixel sind programmierbar, jede LED kann einzeln kontrolliert werden.
  

## Benutzung

```blocks
// Erstelle einen NeoPixel Treiber - spezifiere den Pin, die Anzahl der LEDs und den Typ des Neopixel Streifens 
// entweder RGB (GRB oder RGB Format) oder RGB+White.
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB);

// setze Pixel Farben
strip.setPixelColor(0, NeoPixelColors.White); // white
strip.setPixelColor(1, 0xff0000);     // red
strip.setPixelColor(2, 0x00ff00);     // green
strip.setPixelColor(3, NeoPixelColors.Blue);    // blue

// sende die Daten zum Neopixel Streifen
strip.show()
```

Nutze ``||setBrightness||`` , um die Helligkeit zu verringern (Default ist die Maximalhelligkeit).

Nutze ``||shift||`` oder ``||rotate||`` , um die Einstellung eines Pixels zu verschieben.

Nutze ``||rotateBrightness||`` , um die Helligkeit schrittweise zu verringern und wieder zu erhöhen.

Nutze ``||showRainbow||`` , um die Farben des Regenbogens auf dem ganzen Neopixel Streifen anzuzeigen.

Nutze ``||showSymbol||`` ,um ein vordefiniertes Symbol auf einer Neopixel Matrix anzuzeigen (eine Matrix ist hier definiert, als ein Streifen mit mindestens 64 LEDs. Damit die Symbole passend angezeigt werden, muss ein 8x8 Matrix verwendet werden.)

# Unterstützte Geräte

* PXT/calliope

## Lizenz

MIT

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.


