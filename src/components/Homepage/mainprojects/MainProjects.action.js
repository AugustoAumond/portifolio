
export const projects = [
    {
        name: 'Marlin',
        type: 'Criação de uma página',
        discription: 
        <ul>
            <li>Sobreposição de texto sobre imagem</li>
            <li>Menu superior fixado à página</li>
            <li>Função de aparecer infos sobre os hospitais (botão abaixo da imagem dos hospitais destaque)</li>
            <li>Consumo de Api</li>
            <li>Validação e armazenamento das infos nos inputs</li>
            <li>Validação do recaptcha</li>
            <li>Respansividade para disposítivos mobile</li>
        </ul>,
        photo: `${process.env.PUBLIC_URL}/img/marlin/painel.png`
    },
    {
        name: 'Tiki',
        type:'Banner de divulgação de eventos',
        discription: 
        <ul>
            <li>Sobreposição de texto sobre imagem</li>
            <li>Função de esteira para passar os eventos</li>
            <li>Alteração do estilo baseado nas css (props)</li>
            <li>Validação e armazenamento das infos nos inputs</li>
            <li>Função onFocus para alteração de estilo </li>
        </ul>, 
        photo: `${process.env.PUBLIC_URL}/img/tiki/imagem.jpg`
    },
    {
        name: 'Nerdweb',
        type:'Criação de página web',
        discription: 
        <ul>
            <li>Sobreposição de texto e imagem</li>
            <li>Responsividade (1920px, 1024px, 666px)</li>
            <li>Armazenamento dos dados no localStorage</li>
            <li>Validação dos inputs</li>
        </ul>,
        photo: `${process.env.PUBLIC_URL}/img/nerdweb/banner.png`
    },
    {
        name: 'Codificar',
        type:'Jogo de perguntas e respostas',
        discription: 
        <ul>
            <li>Consumo de Api</li>
            <li>Armazenamento dos resultados no localStorage</li>
            <li>Validação dos inputs</li>
            <li>Trabalhando com checkbos para mudança de estilos</li>
        </ul>,
        photo: `${process.env.PUBLIC_URL}/img/codificar/cod_painel.png`
    }
]
  