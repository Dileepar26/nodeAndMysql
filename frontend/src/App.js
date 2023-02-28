import {useState} from 'react'

const App = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if (!name && !age && !country && !position && !wage){
        alert("fill all the field")
        return
    }
    const employee ={name, age, country, position, wage}
    const res = await fetch("/create",{
        method:"POST",
        body:JSON.stringify(employee),
        headers:{"Content-type":"application/json"}
    })
    // const json = await res.json()
    if(res.ok){
      setName("")
      setAge(0)
      setCountry("")
      setPosition("")
      setWage(0)
    }
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit} >
        <div className="information">
          <label >Name: </label>
          <input type="text" onChange={(e)=>setName(e.target.value)} />
          <label>Age:</label>
          <input type="number" onChange={(e)=>setAge(e.target.value)} />
          <label>Country:</label>
          <input type="text" onChange={(e)=>setCountry(e.target.value)}/>
          <label>Position:</label>
          <input type="text" onChange={(e)=>setPosition(e.target.value)}/>
          <label>Wage(year):</label>
          <input type="number" onChange={(e)=>setWage(e.target.value)}/>
          <button >submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
