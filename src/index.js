const init = (event) => {
  event.preventDefault()
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', e => {
      e.preventDefault()
       fetch(`http://localhost:3000/movies/${e.target.children[1].value}`)
      .then(response => response.json())
      .then(data => {
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p")
          title.textContent = data.title
          summary.textContent = data.summary
      })
      
  } )
}

document.addEventListener('DOMContentLoaded', init);