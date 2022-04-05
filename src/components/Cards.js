import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
 return (
    <div className='cards'>
        <h1>Bulacan State University Engineering Programs</h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
            
                <ul className='cards__items'>
                <CardItem
                src='images/CE.jpg'
                text='Realize the design and maintainance of roads, bridges, dams, and similar 
                structures.'
                label='Civil Engineering'
                path='/Civil'
                />
                
                <CardItem
                src='images/CPE.jpg'
                text='Lets integrate several fields of computer science, electrical, and electronics 
                engineering through computer hardware and softwares'
                label='Computer Engineering'
                path='/Computer'
                />
                </ul>

                <ul className='cards__items'>
                <CardItem
                src='images/ECE.jpg'
                text='Design electronic equipments that will change the way we do things forever'
                label='Electronics Engineering'
                path='/Electronics'
                />

                <CardItem
                src='images/IE.jpg'
                text='Interact with the world of industrial and manufacturing equipments through 
                technological advance methodology'
                label='Industrial Engineering'
                path='/Industrial'
                />

                <CardItem
                src='images/CHE.jpg'
                text='Analyze and design chemical processes to imrpove better materials into useful 
                energy sources and other needs'
                label='Be a BULSUAN Engineer!'
                path='/Signup'
                />
                
                </ul>
            </div>
        </div>
    </div>
 );
}

export default Cards