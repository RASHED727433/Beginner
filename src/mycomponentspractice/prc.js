import React from "react";
import { Component } from "react";

    class India extends Component{
        render(){
            return <h2>class India here</h2>
        }
    }
    
    function China (){
        return <div><h2>function China Here</h2></div>
    }
    
    const Australia = ()=> <div><h2>Australia here</h2></div>
    
    class Germany extends Component{
        render(){
            return <div><h2>class Germany here</h2></div>
        }
    }
    
    const Malasia = ()=> <div><h2>Malasia here</h2></div>
    
    const Russia = ()=> React.createElement("div", null, "Russia here")
    
    const Srilanka = ()=> React.createElement("div", null, React.createElement("h2", null, "Srilanka here"))
    
    function Nepal (props){
        console.log(props)
        return [props.place, <h2>The continent</h2>]
    }
    
    const Japan = (props)=> <h2>Japan is also an {props.place} continent {props.children}</h2>

function Aka(des){
    return <div>
            {/* <h2>My name is {des.name}</h2>
            <h2>My Age Is {des.Age}</h2>
            <h2>I am an {des.nationality}</h2> */}
        </div>
}

export {India, China, Australia, Germany, Malasia, Russia, Srilanka, Nepal, Japan, Aka}