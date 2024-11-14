"use client"

import { useEffect, useState } from "react"

interface Post {
  "id": number
  "title": string
  "author": string
}

export default function Read() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9999/posts`, { method: "GET" })
      .then(res => res.json())
      .then(result => {
        setPosts(result)
      })
  }, [])


  return (
    <div>
      Read
      <div className="flex gap-2">
        {
          posts.map((post: Post) => {
            return (
              <div key={post.id} className="bg-indigo-300 p-2">
                <header>Title {post.title}</header>
                <main>Author {post.author}</main>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

