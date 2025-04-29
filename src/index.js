import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"

const books = [
  {
    author: "Jordan Moore",
    title: "The Let Them Theory",
    img: "./images/book-1.jpg",
    id: 1
  },

  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "./images/book-2.jpg",
    id: 2
  }
]

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        // const { img, title, author, id } = book
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    // console.log(e)
    console.log(e.target.name)
    console.log(e.target.value)
    console.log("Handle Form Input")
  }

  const handleButtonClick = () => {
    alert("Handle Button Click")
  }

  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log("Form Submitted")
  }

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="product"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>Click Me</button>
    </section>
  )
}

const Book = ({ img, author, title }) => {
  // console.log(props)
  // const { author, title, img } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)
