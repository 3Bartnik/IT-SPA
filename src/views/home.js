import $ from 'jquery';
//import treatments from './treatments.js';

export const home =() => {
    //tworzenie kontenera na dane, który renderuje się całościowo na koniec, nie obciąża to przeglądarki
    const fragment = $(new DocumentFragment());
    const homePage= $(`
    <div class="container-fluid homePage"> 
        <div class="row justify-content-start">
            <div class="col-6 ">   
            </div>
            <div class="col-6 ">
                <h1> Witaj programisto !</h1>
                <p > Dopadła Cię ciemna strona kodowania? Chciałbyś wreszcie trochę odsapnąć? Zdajemy sobie sprawę jak wiele wysiłku i energii pochłaniają poszczególne programistyczne przedsięwzięcia. Pozwól, że profesjonalnie zajmiemy się Twoją skatowaną duszą i ciałem. </p>
                <p> Zapoznaj się z naszą poniższą ofertą. Jesteśmy przekonani, że któryś z proponowanych zabiegów przypadnie Ci do gustu.</p>
            </div>
        </div>
        <div class="row" >
            <div class="col-6 "> 
            </div>
            <div class="col-6">
                <button type="button" class="class="btn btn-secondary btn-sm btn-block"> Oferta zabiegów </button>
                <button type="button" class="class="btn btn-secondary btn-sm btn-block"> Dostępne pokoje </button>
            </div>
        </div>
    </div>
    <div class="section2 container-fluid">
   
    </div>       
    `)
  
   fragment.append(homePage);
    return fragment;
    
};
