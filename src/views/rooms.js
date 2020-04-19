import $ from 'jquery';
import {toggleClass} from 'function.js';

export const rooms =() => {
    //tworzenie kontenera na dane, któy renderuje się całościowo na koniec, nie obciąża to przeglądarki
    const fragment = $(new DocumentFragment());
    const containerRoom= $(`
        <div class="container-fluid"> 
            <div class="row justify-content-center">
                <div class="col-6 ">
                    <h1>Zapoznaj się z ofertą dostępnych pokojów</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-6" >
                    <img  src="https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183__480.jpg" alt="" width="100%"/>
                    <button  type="button" id="btn1" class="btn btn-secondary btn-sm btn-block"> Sprawdź szczegóły </button>
                    <div class="room1">
                        <div class="card-body">
                            <p > Pokój jednoosobowy<br> ilość łóżek: 1 <br> ilość gości: 1  <br> cena: 170,00 PLN <br> Donec elementum dapibus enim, in scelerisque purus laoreet et. Ut lacinia quam a neque ultrices gravida. Cras viverra eu ligula nec finibus. Integer varius magna eu enim lobortis imperdiet. Nunc quis urna quis mauris ultrices consequat. Nunc id posuere mauris. Mauris dapibus nec elit quis viverra. Phasellus efficitur lorem eros, et hendrerit ante lobortis vulputate.</p>
                            <button class="btn btn-secondary btn-sm btn-hide" style="background-color: darkmagenta"> Sprawdź dostępność pokoju </button> 
                            <div >
                                <label for="start"> Planowana data przyjazdu:</label>
                                    <input type="date" id="inputDate1" value="dd.mm.rrrr" min="" max="" requred>
                                <label for="end"> Planowana data wyjazdu:</label>
                                    <input type="date" id="inputDate2" value="dd.mm.rrrr" requred>
                                <div id="showTime"></div>
                                    <button type="submit"> Zarezerwuj </button>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <img src="https://image.freepik.com/darmowe-psd/nowoczesna-sypialnia-lub-pokoj-hotelowy-z-podwojnym-lozkiem-i-eleganckimi-meblami_176382-210.jpg" alt="" width="100%" height="auto" />
                    <button type="button" id="btn2" class="btn btn-secondary btn-sm btn-block"> Sprawdź szczegóły </button>
                    <p class="room2"> Pokój dwuosobowy<br> ilość łóżek: 1 podwójne <br> ilość gości: 2  <br> cena: 240,00 PLN <br> Donec elementum dapibus enim, in scelerisque purus laoreet et. Ut lacinia quam a neque ultrices gravida. Cras viverra eu ligula nec finibus. Integer varius magna eu enim lobortis imperdiet. Nunc quis urna quis mauris ultrices consequat. Nunc id posuere mauris. Mauris dapibus nec elit quis viverra. Phasellus efficitur lorem eros, et hendrerit ante lobortis vulputate.</p></p>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <img src="https://image.freepik.com/darmowe-zdjecie/pokoj-hotelowy_23-2148095366.jpg" alt="" width="100%" height="auto" />
                    <button type="button"  id="btn3" class="btn btn-secondary btn-sm btn-block"> Sprawdź szczegóły </button>
                    <p class="room3"> Pokój trzyosobowy<br> ilość łóżek: 1 podwójne, 1 pojedyncze <br> ilość gości: 3  <br> cena: 290,00 PLN <br> Donec elementum dapibus enim, in scelerisque purus laoreet et. Ut lacinia quam a neque ultrices gravida. Cras viverra eu ligula nec finibus. Integer varius magna eu enim lobortis imperdiet. Nunc quis urna quis mauris ultrices consequat. Nunc id posuere mauris. Mauris dapibus nec elit quis viverra. Phasellus efficitur lorem eros, et hendrerit ante lobortis vulputate.</p></p>
                </div>
                <div class="col-6">
                    <img src="https://image.freepik.com/darmowe-zdjecie/wnetrze-sypialni_53876-32151.jpg" alt="" width="100%" height="auto" />
                    <button id="btn4" type="button" class="btn btn-secondary btn-sm btn-block"> Sprawdź szczegóły </button>
                        <p class="room4"> Pokój czteroosobowy<br> ilość łóżek: 2 podwójne <br> ilość gości: 4  <br> cena: 340,00 PLN <br> Donec elementum dapibus enim, in scelerisque purus laoreet et. Ut lacinia quam a neque ultrices gravida. Cras viverra eu ligula nec finibus. Integer varius magna eu enim lobortis imperdiet. Nunc quis urna quis mauris ultrices consequat. Nunc id posuere mauris. Mauris dapibus nec elit quis viverra. Phasellus efficitur lorem eros, et hendrerit ante lobortis vulputate.</p></p>
                </div>
            </div>
        </div>
    `);

/*
$(document).ready(function(){
    $("#btn1").click(function(){
        var room1 = document.getElementsByClassName("room1");
      $(room1).toggle(1000);
    });
    $("#btn2").click(function(){
        var room2 = document.getElementsByClassName("room2");
      $(room2).toggle(1000);
    });
    $("#btn3").click(function(){
        var room3 = document.getElementsByClassName("room3");
        $(room3).toggle(1000);
    });
    $("#btn4").click(function(){
            var room4 = document.getElementsByClassName("room4");
        $(room4).toggle(1000);
    });
});
*/


/*  przy onclick="toggleClass()" na button z  id="btn1"
function toggleClass(){
    var element = document.getElementsByClassName("room1");
    if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
  window.onload = toggleClass;
};
*/


/*
function init() {
    var btn = document.getElementById("btn1");
         btn.addEventListener("click", () => {
          var element = document.getElementsByClassName("room1");
        if (element.style.display == "none") {
        element.style.display = "block";
      } else {    
        element.style.display = "none";
      }
          });
    }
window.onload = init;

*/
    fragment.append(containerRoom); 
    return fragment;
};


