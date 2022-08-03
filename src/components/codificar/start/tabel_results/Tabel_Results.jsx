import styled from 'styled-components'

import UltimosResultados from './../../ultimos_resultados/UltimosResultados';

function TabelResults(){

    return(
        <TabelResult>
            <div className='centralize'>
                <h2 id="lastresult"> Últimos resultados </h2>
                <UltimosResultados />
            </div>
            
        </TabelResult>
    )
}
export default TabelResults;

const TabelResult = styled.div` 
    background: #294232; 
    margin-top: 50px;
    width: 100%;
    color: white;

    .centralize {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #lastresult{       
        margin: 10px;
    }
`