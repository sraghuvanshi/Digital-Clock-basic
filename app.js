const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();

    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();



    const html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span> 
        `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);