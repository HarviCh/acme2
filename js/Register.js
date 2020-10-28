window.onload = () =>{
  fetch('http://localhost:3000.app/api/auth/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: 'asaa@hamsda.com', password: '12345'})
  })
}