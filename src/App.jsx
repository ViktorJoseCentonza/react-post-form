import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    author: 'author',
    title: 'title',
    body: 'body',
    public: false
  })


  function handleFormData(e) {
    const value =
      e.target.type === "checkbox" ?
        e.target.checked : e.target.value;

    setFormData((formData) => ({
      ...formData,
      [e.target.name]: value,
    }));

    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="validationCustom01" className="form-label">author</label>
          <input type="text" name='author' className="form-control" id="validationCustom01" onChange={handleFormData} value={formData.author} required />
        </div>

        <div>
          <label htmlFor="validationCustom02" className="form-label">title</label>
          <input type="text" name='title' className="form-control" id="validationCustom02" onChange={handleFormData} value={formData.title} required />
        </div>

        <div>
          <label htmlFor="validationCustom02" className="form-label">body</label>
          <input type="text" name='body' className="form-control" id="validationCustom02" onChange={handleFormData} value={formData.body} required />
        </div>

        <div>
          <div className="form-check">
            <input className="form-check-input" name='public' type="checkbox" id="invalidCheck" onChange={handleFormData} value={formData.public} />
            <label className="form-check-label" htmlFor="invalidCheck">
              make post public
            </label>
          </div>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>

      </form>
    </>
  )
}

export default App
