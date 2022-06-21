import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {
    const [itemArr, setItemArr] = useState([]);

    const addNote = (note) => {
        setItemArr((prev) => {
            return [...prev, note]
        })
    }

    const onDelete = (id) => {
        // console.log(id);
        
        setItemArr((prev) => 
            prev.filter((currData, index) => {
                return index !== id;
            })
        )
        // console.log(itemArr);
    }
    return (
        <>
            < Header />
            < CreateNote passNote={addNote} />
            <div className="notes">
                {
                    itemArr.map((val,index)=> {
                        return <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete}/>
                    })
                }
            </div>
            < Footer />
        </>
    )
}

export default App;