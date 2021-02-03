let card = document.querySelector('main');

fetch('https://worldtimeapi.org/api/timezone')
.then(function (response) {
    response.json()
    .then(function (data) {

    let objeto = data;
   
    for(let i = 1; i<=12; i++) {
            let al = Math.floor(Math.random()* data.length);
            let objetoal = objeto[al]

            const local = objetoal //apenas para nao alterar a variavel e conseguir usar ela para renderizar corretamente.

            fetch(`https://worldtimeapi.org/api/timezone/${objetoal}`)
            .then((response) => {
                    response.json()
                    .then((data) => {
                        const dateTime = data.datetime
                        const timeZone = data.utc_offset
    
                        card.innerHTML += `<div>
                        <h2>${local}</h2>
                        <h3>${timeZone}</h3>
                        <h4>${dateTime}</h4></div>`
                });
            })
        }    
    })
})