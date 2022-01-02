# Japanbloggen

## Projektplanering

Jag vill göra en blogg om Japan som ska vända sig till alla som funderar på att resa till Japan eller bara lära sig mer om Japan. Användaren ska få tips på vad som finns att göra och se i Japan och även lära sig mer om japansk kultur.

Målgruppen är personer i alla åldrar och från alla samhällsklasser. Gemensamt för målgruppen är intresse för Japan som land.

Bloggen ska ge användaren en översikt och möjlighet att klicka sig in på hemsidor för att läsa mer. Bloggen ska även ge ett strukturerat och professionellt intryck. Det ska vara lätt att hitta kontaktvägar för att ställa frågor eller ge feedback på bloggen och det ska vara tydligt vem som tillhandahåller informationen.

Bloggen ska vara skriven på engelska för att nå ut till människor över hela världen.

## Styleguide

Jag förstod tidigt vikten av att ha en styleguide för att definiera de olika elementens attribut. En styleguide som finns med från början gör att man inte behöver gå tillbaka i koden för att se hur det förra blogginlägget var stylat utan man kan kika direkt i styleguiden för att se t.ex. vilken font, färg och storlek en viss text ska ha.

## Färger

Jag ville ha olika nyanser av vitt och ljusgrått för att få en modern och stilren design. Med vit som bakgrundsfärg blir man inte för fokuserad på bakgrunden utan kan fokusera mer på bilderna och texten i blogginläggen.

Jag ville inte använda bara vitt och svart, då jag tycker att det blev för skarpa kontraster. Därför valde jag att använda lite mildare varianter av desamma som går åt det gråa hållet.

## Text

Jag vill inte att användaren ska mötas och långa textväggar. Ingen orkar sitta fokuserat och läsa ett långt stycke text. Jag har därför brutit ned texten i kortare stycken med mycket luft emellan samt valt att ha lite space mellan orden. Jag upptäckte även att det blev mer lättläst om man ökar på line-height litegrann.

Jag ville även att texten skulle vara lätt att se. Därför lade jag på ett filter med gråsvart över headerbilderna för att det vita skulle komma fram bättre. Annars försvann den vita texten i bilden.

Jag har använt lättlästa fonter till rubriker och brödtext för att det ska vara lätt att läsa och innehållet snarare än designen ska komma i fokus. Dock valde jag en snirklig font till loggan för att göra det lite roligare och kontrasterande mot rubrikerna och brödtexten.

## Text på bilder

Jag jobbade länge med att laborera med färg mot bakgrund, fontstorlek, avstånd mellan bokstäverna och vilken font som passar bäst för att få ett proffsigt uttryck som samtidigt är lättläst. Om bakgrunden är för stark försvinner de vita bokstäverna in i bakgrunden och det är svårare för ögat att läsa texten.

## UX

Jag har tänkt på användarupplevelsen då jag t.ex. gjorde bilderna på Japanska trädgårdar klickbara. En pointer visar att man kan klicka på bilden. Användaren kan klicka var som helst på bilden för att bli omdirigerad till respektive trädgårds hemsida. Jag har även tänkt på att öppna ett nytt fönster med trädgårdens sida, så att användaren snabbt kan komma tillbaka till bloggen igen utan att behöva klicka på bakåtpilen.

Jag har tänkt på att göra ikoner och knappar tillräckligt stora så att det inte ska vara svårt att hovra och klicka på dem.

För att göra sidan mer intressant har jag gjort varje blogginlägg olika. Ibland kan man interagera med bilderna och ibland är det en bild som bakgrund på blogginlägget. Jag tänker att det ska hålla kvar användarens fokus.

Jag provade med många olika bakgrundsbilder och såg till att hitta bilder som gav ett lugnt intryck för ögat och gjorde texten lättläst.

## Vad har gått bra och vad har gått dåligt?

Jag har verkligen jobbat med att göra projektet till en bra användarupplevelse. T.ex. hur övergången med genomskinlig svart bakgrund sker när man klickar på meny-knappen i tablet och phone-mode samt att jag satte anime-figuren bakom texten i första blogginläggen i phone-mode. Likaså hur bilderna på mat i sista blogginlägget växlar i phone-mode.

Det ska inte spela någon roll om användaren tittar på sidan på dator, tablet eller mobiltelefon. Jag ville skapa en bra användarupplevelse oavsett vilken enhet man använder och det tycker jag att jag har lyckats med.

Under arbetet har det uppstått problem med stylingen. Jag har flertalet gånger fått använda !important för att tvinga fram den styling jag vill ha.

På Contact-sidan i mobilläget fick jag byta headerbild. Jag fick inte bilden centrerad och passa den mindre skärmen, så jag valde att byta till en annan bild på körbärsblommor. Jag tycker dock den lösningen blev väldigt bra.

## Vad har jag lärt mig?

Jag har fått utmana mina kunskaper i design. Jag har även blivit bättre på att använda versionshantering och fått större förståelse för nyttan med att använda detta.

Jag har fått ökad förståelse för hur lång tid det tar att planera ett projekt när det gäller färg, form och övrig design.

## Testning

Jag har testat sidan i olika webbläsare och på Ipad och Iphone och sidan fungerar som den ska. 

## Vad hade kunnat förbättras?

Från början gjorde jag var sida för sig, men insåg en bit in i projektet att det hade varit bättre att sätta de delar av stylingen som återkommer i ett och samma css-dokument. Jag skapade då navigaton.css för att lyfta ur all återkommande styling dit istället. Detta är någonting jag skulle gjort från början.

Om bloggen växer med fler inlägg kan det vara aktuellt med ett system för att söka i bloggen och/eller navigera sig mellan de olika inläggen. Det är sällan en användare läser alla inlägg i en blogg. Jag började bygga på en sökbar, men insåg att jag inte har all kunskap inom Javascript för att kunna bygga en sådan inom den givna tidsramen. Jag valde därför att ta bort denna. Dock tycker jag inte det är någon fara då det fortfarande bara är några få blogginlägg som är lätt att scrolla emellan.

## Framtida möjligheter

Jag har fått insikt i hur det är att planera en design och förstår att det är en stor del av arbetet om man skulle jobba som egenföretagare inom webbutveckling.

Jag känner att jag skulle kunna designa webbsidor åt familj och vänner som ber mig om detta och kan nu planera och göra Wireframes som jag då skulle kunna kommunicera till min klient. Jag förstår också vikten av att ta reda på vilka som är klientens kunder och nyttan av att designa en webbsida utifrån de tänkta användarnas intressen och behov.