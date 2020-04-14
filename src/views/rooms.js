import $ from 'jquery';

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
                <div class="col-6">
                    Pokój unarny
                    <img src="https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183__480.jpg" alt="" width="100%"/>
                    <button type="button" id="hide" class="btn btn-secondary btn-sm btn-block" data-toggle="button" aria-pressed="false" autocomplete="off"> Sprawdź szczegóły </button>
                    <div >
                        <p class="hide"> Pokój jednoosobowy<br> ilość łóżek :1 <br> ilość gości: 1  <br> cena: 170,00 PLN <br> Donec elementum dapibus enim, in scelerisque purus laoreet et. Ut lacinia quam a neque ultrices gravida. Cras viverra eu ligula nec finibus. Integer varius magna eu enim lobortis imperdiet. Nunc quis urna quis mauris ultrices consequat. Nunc id posuere mauris. Mauris dapibus nec elit quis viverra. Phasellus efficitur lorem eros, et hendrerit ante lobortis vulputate.</p>
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
                <div class="col-6">
                    Pokój binarny
                    <img src="https://image.freepik.com/darmowe-psd/nowoczesna-sypialnia-lub-pokoj-hotelowy-z-podwojnym-lozkiem-i-eleganckimi-meblami_176382-210.jpg" alt="" width="100%" height="auto" />
                    <button type="button" id="show" class="btn btn-secondary btn-sm btn-block"> Sprawdź szczegóły </button>
                    <p class="hide"> Pokój dwuosobowy<br> ilość łóżek :1 podwójne <br> ilość gości: 2  <br> cena: 240,00 PLN <br> Donec elementum dapibus enim, in scelerisque purus laoreet et. Ut lacinia quam a neque ultrices gravida. Cras viverra eu ligula nec finibus. Integer varius magna eu enim lobortis imperdiet. Nunc quis urna quis mauris ultrices consequat. Nunc id posuere mauris. Mauris dapibus nec elit quis viverra. Phasellus efficitur lorem eros, et hendrerit ante lobortis vulputate.</p></p>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    Pokój trójkowy
                    <img src="https://image.freepik.com/darmowe-zdjecie/pokoj-hotelowy_23-2148095366.jpg" alt="" width="100%" height="auto" />
                    <button type="button" class="btn btn-secondary btn-sm btn-block btnHide" id="onClick"> Sprawdź szczegóły </button>
                    <p class="hide"> Pokój trzyosobowy<br> ilość łóżek :1 podwójne, 1 pojedyncze <br> ilość gości: 3  <br> cena: 290,00 PLN <br> Donec elementum dapibus enim, in scelerisque purus laoreet et. Ut lacinia quam a neque ultrices gravida. Cras viverra eu ligula nec finibus. Integer varius magna eu enim lobortis imperdiet. Nunc quis urna quis mauris ultrices consequat. Nunc id posuere mauris. Mauris dapibus nec elit quis viverra. Phasellus efficitur lorem eros, et hendrerit ante lobortis vulputate.</p></p>
                </div>
                <div class="col-6">
                    Pokój czwórkowy
                    <img src="https://image.freepik.com/darmowe-zdjecie/wnetrze-sypialni_53876-32151.jpg" alt="" width="100%" height="auto" />
                    <button onClick="changeVisible()" type="button" class="btn btn-secondary btn-sm btn-block"> Sprawdź szczegóły </button>
                    <div id="showHide">
                        <p class="hide"> Pokój czteroosobowy<br> ilość łóżek :2 podwójne <br> ilość gości: 4  <br> cena: 340,00 PLN <br> Donec elementum dapibus enim, in scelerisque purus laoreet et. Ut lacinia quam a neque ultrices gravida. Cras viverra eu ligula nec finibus. Integer varius magna eu enim lobortis imperdiet. Nunc quis urna quis mauris ultrices consequat. Nunc id posuere mauris. Mauris dapibus nec elit quis viverra. Phasellus efficitur lorem eros, et hendrerit ante lobortis vulputate.</p></p>
                    </div>
                </div>
            </div>
        </div>
    `);

    /*
    function changeVisible () {
        var x= document.getElementById("showHide");
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
    }
*/



    $(document).ready(function(){
    
        $("#hide").click(function(){
          $('p').show(1000);

        });
        $("#show").click(function(){
            $('p').hide(1000);
          });
          
     });

/*


function() {
    const button1 = document.getElemetById("hide")
    button.on( "click", function() {
        const pHide = document.getElemetByClassName("hide1")
        
     pHide.toggleClass( ".show", 1000 );
    });
  } );
*/


  /*  
$('#show').on(click, changeTab);
const changeTab=() => {
$('p').removeClass('hide').addClass('visible').show(1000);
};
*/

    fragment.append(containerRoom); 
    return fragment;
   
};

