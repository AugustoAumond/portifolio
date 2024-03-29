import styled from 'styled-components';

function History(){
    return (
        <DivHistory>
            <His>
                <h2>
                    Trajetório
                </h2> 
                
                <p>
                    Em 2009 terminei o ensino médio e ingressei na faculdade de Ciências Biológicas, todas minhas experiências profissionais entre 2009 e 2016 foram dentro da área da Biologia. Após o término da faculdade tive dificuldade para ingressar no mercado de trabalho na área de formação, acabei trabalhando de Auxiliar Administrativo entre 2017 e 2018 e entre 2019 e 2020 de Tratador. Em 2020 com o começo da pândemia resolvi trocar de área e ingressei na Programação.
                </p>
            </His>

            <div id='fundo'>

            </div>
        </DivHistory>
    )
}
export default History;

const DivHistory = styled.div`
position: relative;
margin: 0 auto;
width: 100%;
animation: transition 10s;

    @keyframes transition{
        from {
            color: #ffffff00;
            width: 0%;
        };
        to {
            color: white;
            width: 100%;
        };
    }

    #fundo {
        position: relative;
        width: 100%;
        background: #293345;
        z-index: -1;
    }

`

const His = styled.div`
    position: relative; 
    text-align: justify;
    margin: 0 auto;
    width: 90%;
    max-width: 800px;
    margin-bottom: 80px;

    h2 {   
        padding: 5px;
        text-align: center;
    }

    p {
        padding: 15px;  
    }

    strong {
        @media (max-width:900px){
            font-size: 12px;
        }
    }


    
`