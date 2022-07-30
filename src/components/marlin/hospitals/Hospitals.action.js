// Abrir a div oculta/fechar a div visivel;
export function OpenDiv (open){
    let api = document.querySelector('#api');
    if (open === false){
        api.style.display = 'flex';        
    } else {
        api.style.display = 'none';
   
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
    name: 'Hospital Vitória Barra', foto:`${process.env.PUBLIC_URL}/img/marlin/Grupo_de_mascara_2.png`}, 
    {name: 'Hospital Perinatal Laranjeiras', foto:`${process.env.PUBLIC_URL}/img/marlin/grupo_de_mascara_7.png`},
    {name: 'Hospital Copa D Or', foto: `${process.env.PUBLIC_URL}/img/marlin/grupo_de_mascara_6.png`}]   