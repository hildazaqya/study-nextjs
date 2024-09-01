import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/card";
import { NameCard } from "@/components/name-card";
import { UserInfo } from "@/components/userinfo";
import { UserProvider } from "@/components/provider";
import { NoteCreate } from "@/components/notes/note.create";
import { NotesLists } from "@/components/notes/note.lists";

const students = [
  { id: 1, name: "Hilda", age: 21, gender: "female" },
  { id: 2, name: "Imel", age: 24, gender: "female" },
  { id: 3, name: "Nazri SE", age: 50, gender: "male" },
  { id: 4, name: "Nazri", age: 50, gender: "male" },
]
export default function Page() {
  return (
    <UserProvider>
      <Header />
      <div>Hello ini dari page.js</div>
      <UserInfo />
      <NoteCreate />
      <NotesLists />
      <Footer />
      {/* <div className="flex flex-col gap-5">
        {students.map((student) => {
          // teknik spreading: pemetaan dari key dlm sebuah objek sesuai dgn nama dr atributnya
          return <Card key={student.id} {...student} />;
        })}
      </div> */}
      {/* <NameCard /> */}
    </UserProvider>
  )
}