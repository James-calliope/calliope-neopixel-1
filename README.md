# NeoPixel driver

Diese Bibliothek basiert auf der Neopixel Bibliothek von Microsoft. Im Rahmen des Projektes smile, was das Ziel hat, Mädchen an die Informatik heranzuführen, wurde das Paket bearbeitet, um zusätzliche Funktionen zu erhalten und die Übersichtlichkeit und Bedienungsfreundlichkeit zu erhöhen. 

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

## Beispiel: Nutze das Accelerometer, um die Farben zu kontrollieren

Dieses Programm wird die Position des Calliope die Farbe der ersten LED kontrollieren lassen.
Diese erste LED wird alle 100ms um eine Position verschoben werden.

```blocks
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB_RGB)
while (true) {
    let x = input.acceleration(Dimension.X) / 2;
    let y = input.acceleration(Dimension.Y) / 2;
    let z = input.acceleration(Dimension.Z) / 2;
    strip.setPixelColor(0, neopixel.rgb(x, y, -z));
    strip.shift(1);
    strip.show();
    basic.pause(100);
}
```
## Änderungen des Paketes

Die Blöcke für das Neopixel Paket sind in der Datei neopixel.ts definiert. Eine Anleitung für die Definition von Blöcken ist unter folgendem Link zu finden: 

https://makecode.com/defining-blocks 

Damit ein Block im Calliope Editor in der deutschen Sprache angezeigt wird, muss er im Ordner _locales/de in beiden Dateien eingefügt werden. Dabei sollte sich die Notation an den schon vorhandenen Einträgen orientieren. In der Datei neopixel-strings.json ist es wichtig jede Variable mit einem % anzugeben, damit sie im Block auch als Variablen auftauchen. 

Die Änderungen am Paket müssen in das Github Repository committed werden und das Paket muss im Calliope Editor unter Fortgeschritten -> Paket hinzufügen eingefügt werden. Dazu muss der Link des Github Repositories in die Suchleiste eingegeben werden. 

Sollte das Paket Fehler enthalten, können die zugehörigen Fehlermeldungen im Calliope Editor eingesehen werden. Dazu muss im Editor auf javascript umgeschaltet werden. Dann taucht auf der linken Seite ein Explorer auf. Unter built ist die Datei output.txt zu finden. Hier werden die Fehlermeldungen angegeben.


# Unterstützte Geräte

* PXT/calliope

## Lizenz

MIT

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.


