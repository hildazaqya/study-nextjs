import { TodoCreate } from "@/components/todos/todo.create";
import { TodoCard } from "@/components/todos/todo.card";

async function getTodos() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/cSdyjihMzRel", {
      cache: "no-store", // tidak akan di cache
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page() {
  const { data } = await getTodos();
  return (
    <div>
      <div className="space-y-4">
        {data.map((queue) => {
          return (
           <TodoCard key={queue._id} 
           id={queue._id}
           menu={queue.menu} 
           amount={queue.amount}/>
          );
        })}
      </div>
      <TodoCreate />
    </div>
  )
}