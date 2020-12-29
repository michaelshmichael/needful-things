import React, { useState } from 'react';
import uniqid from 'uniqid';
import wholeInventory from '../data';
import '../styles/Shop.css';


export default function Shop (props) {
    const [selectedInventory, setSelectedInventory] = useState(wholeInventory);
    
    const populateSelectedCollectionArray = (collection) => {
        let selectedInventory = [];
        wholeInventory.forEach(item => {
          if(item.collection === collection){
            selectedInventory.push(item)
          }
        })
        setSelectedInventory(selectedInventory);
    };
    
    const selectCollection = (collection) => {
        switch (collection.target.outerText) {
            case 'Jewellery':
            populateSelectedCollectionArray('jewellery');
            break;
            case 'Biblical':
            populateSelectedCollectionArray('biblical');
            break;
            case 'Memorabilia':
            populateSelectedCollectionArray('memorabilia');
            break;
            default:
            // Required default
        };
    };

   
    return(
        <div className='shop-container'>
            <div className='shop-sidebar'>
                <h2 className='sidebar-title'>Collections</h2>
                <ul className='sidebar-list-title'>
                    <li className='sidebar-list-item' onClick={e => selectCollection(e)}>Jewellery</li>
                    <li className='sidebar-list-item' onClick={e => selectCollection(e)}>Memorabilia</li>
                    <li className='sidebar-list-item' onClick={e => selectCollection(e)}>Biblical</li>
                </ul>
            </div>

            <div className='shop-items'>
                <h2 className='shop-title-text'>Welcome to Needful Things. Buy now, pay later.</h2>
                <div className='inventory-display'>
                    {selectedInventory.map((item) => (
                        <div className='shop-item-card' id={item.id} onClick={e => props.redirectToProduct(e)} key={uniqid}>
                            <div className='shop-item-image-container'>
                                <img className='shop-item-image' src={item.gallery[0]} alt='Amulet'></img>
                            </div>
                            <div className='shop-item-info'>
                                <div>{item.item}</div>
                                <div>{item.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}