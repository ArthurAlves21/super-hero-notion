import React, {useEffect, useState} from 'react';
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function Home({result}) {
  const [data, setData] = useState(""); 
  const [good, setGood] = useState(false)
  const [content, setContent] = useState([])

  useEffect(async () => {
    const res = await fetch('http://localhost:3000/api')
    const json = await res.json();
    setContent(json)
  }, [])

  function handleSubmit(e){
    e.preventDefault();
    axios.post('/api/add', {
      text: data,
      checkbox: good
    }).then((response) => {
      console.log(response)
      window.location.reload();
    }).catch((e) => {
      console.log(e)
    })
  }
  
  function handleCheck(){
   console.log(good)
   good ? setGood(false) : setGood(true)
  }

  return (
    <div className={styles.container}>
            
      <main>
        <form onSubmit={handleSubmit}>
        <label>Is He Good?</label>
        <input type="checkbox" checked = {good} onClick={handleCheck}/>
        <input type="text" onChange={(e) => {setData(e.target.value)}} />
        <input type="submit" value="send"/>
        </form>
        <ul>
        {content.results.map(item => {
          return(
          <>
          <li><input type="checkbox" checked={item.properties.Good.checkbox} />{item.properties.Name.title[0].plain_text}</li>
          </>
          )
        })}
        </ul>
      </main>
    </div>
  )
}