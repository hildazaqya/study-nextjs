"use client";

import { useState } from "react";
import { notesAtom } from "./note.atom";
import { useAtom } from "jotai";

export const NoteCreate = () => {
    const [ note, setNote ] = useState("");
    const [ notes, setNotes ] = useAtom(notesAtom);

    function handleAddNote() {
        setNotes([...notes, note]);
    }

    return (
        <div>
            <textarea onChange={(e) => setNote(e.target.value)}/>
                <button onClick={handleAddNote}>Save</button>
        </div>
    );
};