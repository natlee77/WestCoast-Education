# REST API

#### För att kunna köra applikation så måste vi köra npm install för att installera json-server.
Öppna upp   "Terminal" fönstret i VSCode och skriv in följande kommando:
#### `npm install` 
#### `json-server --watch data.json`
 
Om ett felmeddelande som säger att json-server inte är känt kommando, så kan vi prova att köra följande kommando:
#### `npx json-server --watch data.json`  
#### ==========================================

![index](<Screenshot (1126).png>)
 #### course gallery
![course gallery](<Screenshot (1129).png>)
![about oss](<Screenshot (1128).png>)
#### login
![login](<Screenshot (1127).png>)
#### admin list of courses
![admin list of courses](<Screenshot (1130).png>)
====================================
Steg 1.
#### Framtagning av ”Proof Of Concept”I detta första steg behöver vi applikation som presenterar våra kurser på ett attraktivtoch modernt sätt.oss, där besökare kan få en överblick över vad vi kan erbjuda. Vi vill dessutom ha en sida där aktuella och populära kurser presenteras. 
#### På sidan som presenterar detaljer om kursen vill vi att följande information finns: 
> - Kurstitel
> - Kursnummer 
> - Antal dagar som kursen är
> - Om den finns tillgänglig som klassrum och eller distanskurs
> - En bild som representerar kursen•Datum då kursen är planerad att genomföras
> - En möjlighet att boka sig för kursen via klassrum eller distansVid bokning av en kurs så måste användaren/kunden logga in eller skapa ett konto. 

#### På bokningssidan ska följande information anges:
>
> - Kundnamn
> - Faktureringsadress
> - E-postadress
> - Mobilnummer

Steg 2.
#### AdministrationsverktygVi behöver en applikation som ger oss tillgång till att lägga till nya kurser. När vi lägger till nya kurser så behöver vi ange följande information:
> - Kurstitel
> - Kursnummer
> - Antal dagar som kursen är
> - Kostnad för kursen
####  Dessutom behöver vi tillgång till attkunnalista vilka kundersom har bokat sig på respektive kursFunktionskravVi vill att applikationen skall fungera i alla moderna webbläsare och gå att använda i olika skärmstorlekar och i olika enheter. Det är jätteviktigt att applikationen är responsiv, vår gamla applikation var inte detta och vi fick väldigt mycket kritik för detta.
========================================