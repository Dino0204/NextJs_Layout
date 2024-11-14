"use client"
import { useEffect } from "react"

interface Event {
  target: {

  }
}


export default function Create() {

  return (
    <div>
      Create
      <div>
        <form onSubmit={(event: Event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const author = event.target.author.value;
          fetch(`http://localhost:9999/posts`, {
            method: 'POST'
          })
            .then(res => res.json())
            .then((result) => {
              console.log(title, author)
            })

        }} className="flex flex-col w-80 bg-slate-400 p-2">

          <label htmlFor="title">Title</label>
          <input className="rounded-2xl pl-2" type="text" name="title" id="title" />

          <label htmlFor="author">Author</label>
          <input className="rounded-2xl pl-2" type="text" name="author" id="author" />

          <input className="border-2 p-2 mt-2 rounded-2xl cursor-pointer hover:bg-slate-500" type="submit" value="제출" />
        </form>
      </div>
    </div>
  )
}

