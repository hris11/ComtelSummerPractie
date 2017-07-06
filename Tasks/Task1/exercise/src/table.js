import React, { Component } from 'react';
import './Table.css'

const arrayOfElements = ['table',
                        'fox', 
                        'butterfly', 
                        'paper', 
                        'olives', 
                        'mountains', 
                        'jump'];
let newTable = arrayOfElements;


function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class Table extends Component {
    /**
     * @name updateTable
     * 
     * @param offset - the number of the elements that we'd take from the array
     * @param newTable - array of the new elements that we'd display
     * 
     * @return void 
     */
    updateTable() {
        let offset = 0;

        while (offset === 0) {
            offset = Math.floor(Math.random() * arrayOfElements.length);
        }

        newTable = shuffle(arrayOfElements).slice().splice(0, offset);
        
        console.log(newTable.join(','));
        console.log(offset);
        
        this.setState({elements: newTable})
    }

    render() {
    let key = 0;
    const listItems = this.state ? this.state.elements.map((string) => 
        <li key = {key++}>{string}</li>
    ) : newTable.map((string) => 
        <li key = {key++}>{string}</li>
    );

    return (
        <div className = 'box'>
            <ul className = 'in-box-ul'>
                {listItems}
            </ul>
            <button className = 'buttonRandomize' onClick = { () => this.updateTable()}>Change items</button>
        </div>
    );
  }
}

export default Table;
