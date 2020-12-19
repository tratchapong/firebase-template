import {useEffect, useState} from 'react'
import './App.css';
import firestore from './database/firebase'


function App() {
  const userRef = firestore.collection('users')
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const allData = []

  const getData = () => {
    userRef.get().then( (snapshot) => {
      snapshot.forEach( (doc) => {
        allData.push( {id: doc.id, ...doc.data()} )
        console.log(doc.data().name)
      })
      console.log(allData)
      setData(allData)  
  })
  }

  const addUser = async () => {
    const result = await userRef.add({name, age})
    console.log(result)
  }

  useEffect(getData, [])
  return (
    <>
    <div>
      <h1>Show All Data</h1>
      { data.map( x => <p key={x.id}>Name : {x.name}, Age : {x.age}</p>) }
    </div>
    <hr />
    <div>
      <h1>Add user</h1>
      <input type="text" value={name} placeholder="Name" onChange={ e=> setName(e.target.value)}/>
      <input type="text" value={age} placeholder="Age" onChange={ e=> setAge(+e.target.value)}/>
      <br />
      <button onClick={addUser}>Add</button>
    </div>
    </>
  );
}

export default App;
