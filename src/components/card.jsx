// for using client component
'use client';

export const Card = ({ name, age, gender }) => {
    if (gender === "female") {
        return (
            <main className="bg-rose-100 text-rose-500 p-4 w-fit border border-rose-400 rounded-lg">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Gender: {gender}</div>
                <button className="btn-primary">Delete</button>
            </main>
        );
    }
    return (
        <main className="bg-blue-100 text-blue-500 p-4 w-fit border border-blue-400 rounded-lg">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Gender: {gender}</div>
                <button className="btn-primary">Delete</button>
            </main>
    )
}