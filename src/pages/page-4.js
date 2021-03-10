import { Link } from 'gatsby-theme-material-ui'
import React from 'react'
// import InfiniteImages from '../components/InfiniteImages'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const todoCode = `import React, { useEffect, useState } from 'react'
import Todo from './Todo'
const TodoList = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data)
      })
  	})
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  )
}
export default TodoList`

const Page4 = () => {
  const title = 'Infinite Images'
  return (
    <Layout title={title}>
      <SEO title={title} />
      <div className="text-xl font-semibold">
        Build a Performant Infinite Scroll Image Gallery using Gatsby and
        Netlify functions
      </div>
      <Link href="https://morioh.com/p/29ac69a6468f">原文連結</Link>
      <p className="text-md">
        Build a Performant Infinite Scroll Image Gallery using Gatsby and
        Netlify functions
      </p>
      <pre>
        <code className="language-javascript">{todoCode}</code>
      </pre>
    </Layout>
  )
}

export default Page4
