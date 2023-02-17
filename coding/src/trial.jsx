import { useEffect,useState } from "react"


const Trial = ()=>{
    let x =0
    let [y,setY] = useState(0)
    let n =10
    // let [n,setN] = useState(10)
    console.log("------",useState())
    if(y%2==0){
        useEffect(()=>{
            console.log(y)
        })
    }
    
    // console.log(y,n)
    return(
        <>
        <button>{n}</button>
        <button onClick={()=>{setY(y+=1)}}>{"y="+y}</button>
        </>
    )
}

export default Trial