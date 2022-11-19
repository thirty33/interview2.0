import React from 'react';
import '@styles/PeopleItem.css'

function PeopeItem({ name, gender, eye_color, skin_color, birth_year}) {
    // console.log('props', props)
    return (
        <div className='people-item'>
            <h3 className='item-title'>{name}</h3>
            <div className="attributes-container">
                <div className="attribute-item">gender: {gender}</div>
                <div className="attribute-item">eye_color: {eye_color}</div>
                <div className="attribute-item">skin_color: {skin_color}</div>
                <div className="attribute-item">birth_year: {birth_year}</div>
            </div>
        </div>
    );
}

export default PeopeItem;