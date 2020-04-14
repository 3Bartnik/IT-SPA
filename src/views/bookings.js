import $ from 'jquery';
//import Cart from '../cart/cart.js'

export const bookings =() => {
    //tworzenie kontenera na dane, który renderuje się całościowo na koniec, nie obciąża to przeglądarki
    const fragment = $(new DocumentFragment());
    const allBookings = $(`
    <div class="card" ">
    <div class="card-body">
      <h5 class="card-title text-center">Podsumowanie rezerwacji</h5>
      <p class="card-text"> </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Termin:</li>
      <li class="list-group-item">Wybrany zabieg:</li>
      <li class="list-group-item">Wybrany pokój:</li>
      <li class="list-group-item">Łączny koszt:</li> 
    </ul>
  
  </div>
    `);  
 
    fragment.append(allBookings);
    return fragment;
};