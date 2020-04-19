import $ from 'jquery';

export const treatments =() => {
    //tworzenie kontenera na dane, który renderuje się całościowo na koniec, nie obciąża to przeglądarki
    const fragment = $(new DocumentFragment());
    const containerTreatment= $(`
        <div class="container-fluid"> 
            <div class="row justify-content-center">
                <div class="col-6 ">
                    <h1>Zapoznaj się z naszą ofertą dostępnych zabiegów</h1>
                </div>
            </div>
            <div class="row justify-content-center" id="heightTreat">
          
                <div class="card w-25 shadow" style="width: 16rem">
                    <div class="inner">
                        <a href="#info1" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/102/102630.png" id= "img1"  alt="Card image cap"> </a>
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">Masaż rozgrzanym monitorem</h5>
                            <p class="card-text"> </p>
                            <a href="#info1" class="btn btn-primary">Poznaj szczegóły oferty</a>
                        </div>
                </div>

                <div class="card  w-25 shadow" style="width: 16rem;">
                <div class="inner">
                    <a href="#info2" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/103/103436.png" id= "img1"  alt="Card image cap"> </a>
                </div>
                    <div class="card-body">
                        <h5 class="card-title"> Biczowanie kablem od myszy</h5>
                        <p class="card-text"> </p>
                        <a href="#" class="btn btn-primary">Poznaj szczegóły oferty</a>
                    </div>
                </div>

                <div class="card w-25 shadow" style="width: 16rem;">
                    <div class="inner">
                        <a href="#info3" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/114/114668.png" id= "img1"  alt="Card image cap"> </a>
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">Peeling odłamkami płyty CD</h5>
                            <p class="card-text"> </p>
                            <a href="#" class="btn btn-primary">Poznaj szczegóły oferty</a>
                        </div>
                </div>
                
                <div class="card w-25 shadow" style="width: 16rem;">
                    <div class="inner">
                        <a href="#info4" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/92/92203.png" id= "img1"  alt="Card image cap"> </a>
                    </div>
                        <div class="card-body">
                            <h5 class="card-title"> Pedicure woskiem z USB</h5>
                            <p class="card-text"> </p>
                            <a href="#" class="btn btn-primary">Poznaj szczegóły oferty</a>
                        </div>
                </div>

                <div class="card w-25 shadow" style="width: 16rem;">
                    <div class="inner">
                        <a href="#info5" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/17/17787.png" id= "img1"  alt="Card image cap"> </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"> Manicure analogowo-cyfrowy</h5>
                        <p class="card-text"> </p>
                        <a href="#" class="btn btn-primary">Poznaj szczegóły oferty</a>
                    </div>
                </div>

                
                <div class="card w-25 shadow" style="width: 16rem;">
                <div class="inner">
                    <a href="#info6" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/112/112407.png" id= "img1"  alt="Card image cap"> </a>
                </div>
                    <div class="card-body">
                        <h5 class="card-title"> Kąpiel w gorącej kawie</h5>
                        <p class="card-text"> </p>
                        <a href="#" class="btn btn-primary">Poznaj szczegóły oferty</a>
                    </div>
                </div>
                <div class="card w-25 shadow" style="width: 16rem;">
                <div class="inner">
                    <a href="#info7" ><img class="card-img-top" src="https://image.flaticon.com/icons/png/512/33/33272.png" id= "img1"  alt="Card image cap"> </a>
                </div>
                    <div class="card-body">
                        <h5 class="card-title"> Depilacja dyskiem twardym</h5>
                        <p class="card-text"> </p>
                        <a href="#" class="btn btn-primary">Poznaj szczegóły oferty</a>
                    </div>
                </div>

                
        <section>
            <div>
                <div class="treatinfo1" id="info1" style="background-color: lightgrey">
                    <h1> Masaż rozgrzanym monitorem </h1>
                    <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div> 
                        
                        <div>
                            <label for="start"> Planowana data zabiegu:</label>
                                <input type="date" id="inputDate1" value="dd.mm.rrrr" min="" max="" required>
                                <input type="time" id="inputTime1" value="--:--">
                                <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                        <div id="showTime"></div>
                            <button type="submit"> Zarezerwuj </button>
                            
                        </div>
                    </div>
                </div>
                <div class="treatinfo2">
                    <h1> Biczowanie kablem od myszy </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div> 
                        <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                    </div>
                </div>
                <div class="treatinfo3">
                    <h1> Peeling odłamkami płyty CD </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div> 
                        <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                    </div>
                </div>
                <div class="treatinfo4">
                    <h1> Pedicure woskiem z USB </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div> 
                        <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                    </div>
                </div>
                <div class="treatinfo5">
                    <h1> Manicure analogowo-cyfrowy </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div> 
                        <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                    </div>
                </div>
                <div class="treatinfo6">
                    <h1> Kąpiel w gorącej kawie </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div> 
                        <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                    </div>
                </div>
                <div class="treatinfo7">
                    <h1> Depilacja dyskiem twardym  </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu sagittis nibh, eu congue metus. Maecenas volutpat egestas sem non fermentum. Etiam efficitur orci nulla, sed consectetur massa commodo sit amet. Maecenas placerat odio a ex tempus accumsan. Quisque leo elit, suscipit vel cursus eget, rhoncus ac ligula. Nulla vehicula tincidunt ante, id gravida erat condimentum sit amet. Sed pellentesque, quam at lacinia luctus, sem enim ultrices enim, a rhoncus nibh lacus ac augue. Fusce lectus est, dignissim et lorem quis, ultrices auctor nunc. Sed dictum eget est eu aliquam. Aenean consequat, eros et condimentum tristique, ex erat ultrices dui, vitae dignissim tellus nisl efficitur elit. Nam sed tortor elit. Maecenas tempor molestie venenatis. In euismod id sapien nec malesuada. Phasellus ipsum lacus, blandit ut orci a, pretium auctor neque.</p>
                    <div> 
                        <button class="btn btn-secondary btn-sm"> Sprawdź dostępny termin </button>
                        
                    </div>
                </div>
            </div>

        </section>
    `);
    /*
    const decrease = ()=> {
        const image1= document.getElementById("img1");
        image1.style.height = "20px";
        image1.style.width = "20px";
         
    }
    
    */


    var width= 200;
    var difference = 2;
    var interveralID =0;
    function increase(){
        interveralID= setInterval(zoomIn, 20);
    }
    function decrease(){
        interveralID= setInterval(zoomOut, 20);
    }
    function zoomIn () {
        if (width<200) {
            width= width +difference;
            document.getElementById("img1").style.width= width;
        }else {
            clearInterval(interveralID);
        }
    }
    function zoomOut() {
        if (width>100) {
            width= width -difference;
            document.getElementById("img1").style.width= width;
        }else {
            clearInterval(interveralID);
        }
    }
    
    /*
     function increase () {
        const  image1= document.getElementById("img1");
        image1.addEventListener(mouseover, function(image1){
        image1.style.height = "100px";
        image1.style.width = "100px";
        setTimeout(function() {
            image1.style.height = "20px";
            image1.style.width = "20px";
        }, 2000);
        })

      
    };
    */
    
 
    fragment.append(containerTreatment);
    return fragment;
};




// określenie całkowitego czasu przyjazdu
/*
export const allTime = () =>{
    const dateControl1 = document.querySelector('#inputDate1');
    const today = new Date();
    dateControl1.addClass(min).value(today+1day);

    const startDate= dateControl1.value;
    console.log(startDate);
    
    const dateControl2 = document.querySelector('#inputDate2');
    dateControl2.addClass(max).value(today+360day);
    const endDate = dateControl2.value;
    const maxdate = endDate;
    console.log(maxdate);

    
}
*/

/*
export const scoreDate = () =>{
const inputDate = document.getElementById("inputDate1");
const  date1 = new Date(inputDate.value);
const year = date1.getFullYear();
const month = date1.getMonth();
const day = date1.getDate();
const inputTime = document.getElementById("inputTime1").value;
const date2 = inputTime.split(":");
 
const score = new Date(year,month,day,date2[0],date2[1])
document.getElementById("showTime").innerHTML = score;
}
*/
