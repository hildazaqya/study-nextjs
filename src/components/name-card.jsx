"use client";

import { useState } from "react";

export const NameCard = () => {
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);

    function handlerChangeNote(e) {
        setNote(e.target.value);
    }

    function handlerAddNote() {
        setNotes([...notes, note]);
    }
    return (
        <div>
            <section>
                <input onChange={handlerChangeNote}  />
                <button
                className="btn-primary"
                onClick={handlerAddNote}
                >
                    Save
                </button>
            </section>

            <section>
                {notes.map((item) => {
                    return <div key={item}>{item}</div>;
                })}
            </section>
        </div>
    );
};