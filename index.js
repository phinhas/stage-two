const pul = document.getElementById('name');
let newW = 'MY NAME IS PHINEHAS.';
let index = 1;

const x = setInterval(()=> {
    pul.innerHTML = newW.slice(0, index);
    index++;

    if(index > newW.length){
        index = 1;
    }
},200)
