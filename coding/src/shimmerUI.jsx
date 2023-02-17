const ShimmerUI  =() =>{
    
    return new Array(10).fill(true).map(()=>{
        return(<div style={{height:"350px",
        width:"300px",
        padding: "8px",
        display: "inline-block",
        margin: "10px",
        contain:"content",
        border:"2px solid black"
        }}>

        </div>)
    })
}

export default ShimmerUI