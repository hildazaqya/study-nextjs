"use client";

import { useAtomValue } from "jotai";
import React from "react";
import { notesAtom } from "./note.atom";

export const NotesLists = () => {
    const notes = useAtomValue(notesAtom);

    return (
        <div>
            <h1>My Notes: </h1>
            <div>
                {notes.map((item) => {
                    return <div key={item}>{item}</div>
                })}
            </div>
        </div>
    );
};