import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prev) => {
            return {
                ...prev,
                [name] : value,
            }
        });
    }

    const makeNote = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        })
    }

    const compressIt = () => {
        setExpand(false);
    }

    const expandIt = () => {
        setExpand(true);
    }

    return (
        <>
            <div className="outer-div">
                <div className="main-note" onDoubleClick={compressIt}>
                    <form className="form-elements">
                        {expand?
                        <input type="text" 
                        value={note.title} 
                        onChange={inputEvent} 
                        name="title" 
                        placeholder="Title" 
                        autoComplete="off" /> : null}
                        <textarea 
                        cols="70" 
                        rows="5" 
                        value={note.content} 
                        onChange={inputEvent} 
                        name="content" 
                        placeholder="Create a Note... "
                        onClick={expandIt}
                        >
                        </textarea>
                        {expand?
                        <Button onClick={makeNote} className="addIconBtn">
                            <AddIcon className="addIcon"/>
                        </Button> : null}
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateNote;