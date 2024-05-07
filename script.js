let contador = 1;

setInterval(() => {
    document.getElementById('slide' + contador).checked = true;
    contador ++; // cada momento em que a função for mudando, ele vai contando mais 1

    // se o contador for maior que 5, ele volta pro 1
    if(contador > 5) {
        contador = 1;
    }

}, 3000); // setInterval vai fazer que uma função ocorra a cada espaço de tempo