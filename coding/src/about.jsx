import React, { useEffect, useState } from "react";

class About extends React.Component{
    

    render(){
      return (
<>           <h1>
                This is our About us page
            </h1>
            <AboutUs props ="name"/>
            <About2/>
            </> 
        )
    }
}

class AboutUs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            imagy : props.props,
            num:1
        }
    }
    async componentDidMount(){
        let x =0
         let img = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.1146301&lng=76.4777526&page_type=DESKTOP_WEB_LISTING")
         img = await img.json()
         this.setState({
                imagy : img.data.filters[0].type,
                
            })
        this.fn = setInterval(()=>{
               console.log(x++)
            },1000)  
            console.log("React.Component:",React.Component ,typeof React.Component)
        }

        componentWillUnmount(){
            
            clearInterval(this.fn)
        }

       render(){
            return(
                <>
                
                <h1>{this.state.imagy}</h1>
                </>
            )
        }
}

const About2 = ()=>{
    const [count,setCount] = useState(0)

    useEffect(()=>{
          let x =0
        let newfn = ()=>{
            console.log(x++)
        }
       let interval =  setInterval(newfn, 1000)


       return()=>{ clearInterval(interval)}
    }
    )
    return (
        <button onClick={()=>{
            setCount(count++)
        }}>{count}</button>
    )
}


export default About