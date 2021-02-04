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
                        let dateTime = data.datetime
                        let timeZone = data.utc_offset
                        // addsec(dateTime)
    
                        card.innerHTML += `<div>
                        <h2>${local}</h2>
                        <h3>${timeZone}</h3>
                        <h4 id="h4">${dateTime}</h4></div>`
                })
            })
        }    
    })
}) 

// function addsec(objeto) {

//     var ano = parseInt(objeto.substring(0, 4))
//     var mes = objeto.substring(5, 7)
//     var dia = objeto.substring(8, 10)

//     var h = objeto.substring(11, 13)
//     var m = objeto.substring(14, 16)
//     var s = objeto.substring(17, 19)

//     var Cdata = new Date(ano, (mes - 1), dia, h, m, s)
//     setInterval(function () {
//         var auxi = Cdata.getSeconds()
//         Cdata.setSeconds(auxi + 1)
//         document.getElementById('h4').innerHTML = Cdata.getDate() + "/" + (Cdata.getMonth() + 1) + "/" + Cdata.getFullYear() + "<br>" + Cdata.getHours() + ":" + Cdata.getMinutes() + ":" + Cdata.getSeconds() + "s"
//     }, 1000)

// }