let card = document.querySelector('main');





fetch('https://worldtimeapi.org/api/timezone')
.then(function (response) {
    response.json()
    .then(function (data) {
    let objeto = data;    
    
    for(let i = 1; i<=12; i++) {
            var al = Math.floor(Math.random()* data.length);
            var objetoal = objeto[al]
            console.log(objetoal.timezone)

            card.innerHTML += `<div>
            <h2>${objetoal}</h2>
            </div>`;
   
            // section.innerHTML = "<table><tr><td><b>"+ data.timezone +"</b></td></tr><tr><td>UTC "+ data.utc_offset +"</td></tr><tr><td id='td"+ i +"'></td></tr></table>";
      

        }        
    })
})