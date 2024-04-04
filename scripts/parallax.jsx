import moon from '../images/moon1.png';
import cat from '../images/chipi.gif';
import ground from '../images/ground.png';

import {Parallax, ParralaxLayer} from '@react-spring/parallax';

function App(){

    return(
        <div>
            <Parallax pages = {4}>
                <ParralaxLayer>
                    <h2>Похоже, этой страницы пока не существует</h2>
                </ParralaxLayer>
                <ParralaxLayer offset = {1}>
                    
                </ParralaxLayer>
                <ParralaxLayer offset = {2}>
                    
                </ParralaxLayer>
                <ParralaxLayer offset = {3}>
                    <h2>Приносим свои извинения</h2>
                    <a href = '../index.html'> Вернуться на главную</a>
                </ParralaxLayer>
            </Parallax>
        </div>
    );
}