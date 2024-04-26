AOS.init();

const dataDoEvento = new Date("Sep 26, 2024 15:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual

    const diasEmMs = 1000 * 60 * 60 *24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasEvento = Math.floor((distanciaAteEvento % diasEmMs)/ horasEmMs);
    const minutosEvento = Math.floor((distanciaAteEvento % horasEmMs) / minutosEmMs); 
    const segundosEvento = Math.floor((distanciaAteEvento % minutosEmMs) / 1000);
    
    document.getElementById("contador").innerHTML = `${diasEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`

    if (distanciaAteEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById("contador".innerHTML = `So no ano que vem agora `);
    }
}, 1000)