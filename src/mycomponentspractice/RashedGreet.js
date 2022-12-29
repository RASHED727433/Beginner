import React from "react";

function Xyz (){
    return <div><h1>This is a normal function</h1></div>
}

const Practice = ()=> {
    return (
        <div>
            <h3>An arrow function with h3 size</h3>
        </div>
    )
}

const Pppp = (icecream) => {
    console.log(icecream.flavour)
    return <div><h2>Just practicing</h2></div>
}

const Propsprops = (props) => {
    console.log(props)
    return <div><h2>just like the ice cream</h2></div>
}
const Yesyes = ()=> React.createElement('h1', null, "just a heading for practice yesyes")

const Tyre = props => {
    console.log(props.name)
    return <h2>Just show some text</h2>
}


export {Practice, Xyz, Pppp, Yesyes, Tyre, Propsprops}