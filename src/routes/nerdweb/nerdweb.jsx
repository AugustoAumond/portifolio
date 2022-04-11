import styled from 'styled-components';

import Header from './../../components/nerdweb/header/Header';
import MenuNerd from './../../components/nerdweb/menu/Menu';
import Banner from './../../components/nerdweb/banner/Banner';
import Service from './../../components/nerdweb/services/Services';
import Products from './../../components/nerdweb/products/Products';
import Workus from '../../components/nerdweb/workus/Workus';
import SelectionServices from '../../components/nerdweb/selectionservices/Selectionservices';
import History from '../../components/nerdweb/history/History';
import Patrocinators from '../../components/nerdweb/patrocinators/Patrocinators';
import Register from '../../components/nerdweb/register/Register';
import Footer from '../../components/nerdweb/footer/Footer';

function Nerdweb () {

    return ( 
        <DivBody>
            <Header/>
            <MenuNerd/>
            <Banner/>
            <Service/>
            <Products/>
            <Workus/>
            <SelectionServices/>
            <History/>
            <Patrocinators/>
            <Register/>
            <Footer/>
        </DivBody>
    )
}

export default Nerdweb;

const DivBody = styled.div`
`