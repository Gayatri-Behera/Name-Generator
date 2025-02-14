let button = document.getElementById('center');
let h1 = document.getElementById('h1');

function nameGenerator() {

    let first_name, middle_name, last_name;

    //first-name
    let random = Math.random();
    if (random < 0.33) {
        first_name = "Jigyansha";
    }

    else if (random > 0.33 && random < 0.66) {
        first_name = "Niyati";
    }

    else {
        first_name = "Aarush";
    }

    //middle-name
    random = Math.random();
    if (random < 0.33) {
        middle_name = "";
    }

    else if (random > 0.33 && random < 0.66) {
        middle_name = "Chandra";
    }

    else {
        middle_name = "";
    }


    //last-name
    random = Math.random();
    if (random < 0.33) {
        last_name = "Chopra";
    }

    else if (random > 0.33 && random < 0.66) {
        last_name = "Chhabra";
    }

    else {
        last_name = "Adani";
    }

    console.log(`${first_name} ${middle_name} ${last_name}`);
    const z = `${first_name} ${middle_name} ${last_name}`
    h1.innerHTML = z;
    h1.style.letterSpacing = '2px';
    h1.style.textAlign = "center";
    button.textContent = "Generate New";
}

button.addEventListener('click', nameGenerator);