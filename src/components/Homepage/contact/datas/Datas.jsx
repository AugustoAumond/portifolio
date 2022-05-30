import styled from 'styled-components';

function Datas(){
    return (
        <DivDatas>
            <Data>
                <p>Nome: <strong> Augusto Sturmer Aumond </strong></p>
                <p>Idade: <strong> 30 anos (24/05/1991)</strong></p>
                <p>Curso: <strong>Análise e Desenvolvimento de Sistemas</strong></p>
                <p>Conclusão:<strong> Dezembro 2023</strong></p>
            </Data>

        </DivDatas>
    )
}
export default Datas;

const DivDatas = styled.div`
width: 100%;
position: relative;
top: 116px;

`

const Data = styled.div`
position: relative;
text-align: center;
margin: 0 auto;
width: 304px;    
`