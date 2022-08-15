import React,{useState, useEffect} from "react";

export default function 
FunctionalComponents({passCount}){

    const [count,setCount] = useState(passCount)
    const [coffee, setCoffee] = useState([])

    useEffect (() => {
        
        let url ='https://api.sampleapis.com/coffee/hot'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCoffee(data)
            })
    }, [])

   
    return (
        <>
        <h1>this is a functional Component {count}</h1>
        <button onClick={() => {
            // update the count to count + 1
           setCount(count + 1)
        }}>add One</button>
        <>
        {/* map through coffee */}
            {coffee.map(
                coffee => 
                <h1 key={coffee.id}>{coffee.title}</h1>)}
        </>
        </>
        )
}