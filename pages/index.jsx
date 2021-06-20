import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import Router from 'next/router'

export default function Home(props) {
  const [data, setData] = useState(""); 
  const [good, setGood] = useState(false)

  function handleSubmit(e){
    e.preventDefault();
    axios.post('/api/add', {
      text: data,
      checkbox: good
    }).then((response) => {
      console.log(response)
      Router.reload(window.location.pathname)
    }).catch((e) => {
      console.log(e)
    })
  }

  console.log(props.results);
  
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
         {props.results.map(item => {
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

export async function getServerSideProps(ctx){
  const res = await fetch('https://super-hero-notion.vercel.app/api')
  const json = await res.json();
  return{
    props: { results: json.results}
  }
}