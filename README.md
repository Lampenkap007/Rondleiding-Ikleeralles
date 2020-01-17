# Rondleiding-Ikleeralles

Ikleeralles is een online platform waar leerlingen van de middelbare school hun woordjes kunnen leren.

De gebruiker krijgt de rondleiding te zien bij eerste keer inloggen, zo is de gebruiker zich meteen wegwijs.

## Uitbereiding

Er staan nu vier popups in de pagina. Het is mogelijk om pagina's bij te maken.
```HTML
 <div class="navbar">
    <div class="navbarLeft">
      Ikleeralles.nl
      <div class="button">
        Mijn lijsten
        <div class="arrow" id="arrow1"><i class="fas fa-arrow-up"></i></div>
      </div>
      <div class="button">
        Kaarten
        <div class="arrow" id="arrow2"><i class="fas fa-arrow-up"></i></div>
      </div>
      <div class="button">
        Nieuws
        <div class="arrow" id="arrow3"><i class="fas fa-arrow-up"></i></div>
      </div>
    </div>
    <div class="navbarRight">
      <i class="far fa-user"></i>
      <p class="user"> Lampenkap007<div class="arrow" id="arrow4"><i class="fas fa-arrow-up"></i></div></p>
      <i class="fas fa-chevron-down"></i>
    </div>
  </div>
```
In de navbar kan de pijl toegevoegd worden. Deze staat automatisch 50px onder zijn positie.

```HTML
<div class="popups">
      <div class="popup" id="popup1">1</div>
      <div class="popup" id="popup2">2</div>
      <div class="popup" id="popup3">3</div>
      <div class="popup" id="popup4">4</div>
    </div>
```
In de popups div moet de nieuwe popup toegevoegd worden.

```JavaScript
  if (page == 4) {
    document.getElementById("popup3").style.visibility = "hidden";
    document.getElementById("popup4").style.visibility = "visible";
    document.getElementById("arrow3").style.visibility = "hidden";
    document.getElementById("arrow4").style.visibility = "visible";
  }
  ``` 
    voeg in js.js de nieuwe logica toe op de slide.

  ## Toekomstige ontwikkeling
  
  Het is nu nog wat simpel gerealiseerd. Voor verdere ontwikkeling raad ik aan om nog animaties toe te voegen om het geheel wat aantrekkelijk te maken. Daarnaast is nu de hele navbar gehighlight tijdens de tour. Het is beter als de desbetreffende knop gehighlight word, dan de hele navbar.
  voeg in js.js de nieuwe logica toe op de slide.
