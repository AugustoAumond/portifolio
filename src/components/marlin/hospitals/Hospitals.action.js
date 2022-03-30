// Abrir a div oculta/fechar a div visivel;
export function OpenDiv (open){
    let api = document.querySelector('#api');
    let div = document.querySelector('#div');
    if (open === false){
        api.style.display = 'flex';
        div.style.height = '2065px';
    } else {
        api.style.display = 'none';
        div.style.height = '1135px';
    }
}

export function ConfigHosp (open) {
    let hosp1 = document.querySelector('#hosp1');
    let txt1 = document.querySelector('#text1');
    let hosp2 = document.querySelector('#hosp2');
    let txt2 = document.querySelector('#text2');

    if (open === false){
        hosp1.style.top = '-231px';
        txt1.style.top = '-285px';
        hosp2.style.top = '-576px';
        txt2.style.top = '-628px';
    } else {
        hosp1.style.top = '-215px';
        txt1.style.top = '-269px';
        hosp2.style.top = '-560px';
        txt2.style.top = '-612px';

    }
}

// Pegar apenas os dados dos três "hospitais" da api;
export const threeHospitals = (list) => {
    let newList = [];
        for (let i = 0; i < 3; i++) {
            newList.push(list[i]);
        }     
    return newList ;
}

//Hospitais destaque;
export const hospitaisEmDestaque = [{
    name: 'Hospital Vitória Barra', foto:`${process.env.PUBLIC_URL}/img/marlin/grupo de máscara 2.png`}, 
    {name: 'Hospital Perinatal Laranjeiras', foto:`${process.env.PUBLIC_URL}/img/marlin/grupo de máscara 7.png`},
    {name: 'Hospital Copa D Or', foto: `${process.env.PUBLIC_URL}/img/marlin/grupo de máscara 6.png`}]   