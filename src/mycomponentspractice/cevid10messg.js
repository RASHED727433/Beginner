import React from "react";
import { Component } from "react";


class Megg extends Component{

constructor(){
    super()
    this.state = {
        message : "welcome Mr. Visitor"
    }
}

messagechanger (){
    this.setState({
        message : "thankyou for purchasing"
    })
}

    render(){
        return (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.messagechanger()}>Purchase item</button>
        </div>
        )

    }
}

class Teacups extends Component{
    constructor() {
      super()
    
      this.state = {
         message1 : "where have you been!?",
      }
    }

    chngmsg(){
        this.setState({
            message1 : "I've been to london to see the queen"
            
        })
 
    }
    render(){
        return (
            <>
            <h1>{this.state.message1}</h1>
            <button onClick={()=> this.chngmsg()}>click to know</button>
            </>
        )
    }
}

//////////////////////////////////////////////////////////////////////////////

class Checkout extends Component{
    constructor(){
        super()
        this.state = {
            greeting : "please click below to checkout"
        }
    }
    chekbtn(){
        this.setState({
            greeting : "happy shopping!!"
        })
    }
    render(){
        return (
            <>
            <h1>{this.state.greeting}</h1>
                <button onClick={()=> this.chekbtn()}>PROCEED</button>
            </>
            ) 
    }
}

////////////////////////////////////////////////////////////////////////////

class Baggage extends Component{
    constructor(){
        super()
        this.state = {
            timing : "Please take your baggage"
        }
    }

    TakeBaggage (){
        this.setState({
            timing : "thankyou for your cooperation"
        })
    }

    render(){
        return(
            <>
        <h1>{this.state.timing}</h1>
            <button onClick={()=> this.TakeBaggage()}>Continue</button>
            </>
        )
    }
}
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

class Counter extends Component{

    constructor() {
      super()
    
      this.state = {
        count : 0
      }
    }

    increment(){
        this.setState({
            count : this.state.count +1
        }, (()=> console.log(`callback value for increment`, this.state.count)))
    }

    decrement(){
        this.setState({
            count : this.state.count -1
        }, (()=> console.log(`callback value for decrement`, this.state.count)))
    }

    render(){
        return (
    <>
    <div>
    count - {this.state.count}
    <button onClick={()=> this.increment()}>INCREASE</button>
    <button onClick={()=> this.decrement()}>DECREASE</button>
    </div>
    </>
        )
    }
}

class Counter2 extends Component{
    constructor() {
      super()
    
      this.state = {
         nums : "rashssed"
      }
    }

    chcse(){
        this.setState({
            nums : "RASHED"
        })
    }
    fullname(){
        this.setState(
            {nums : "Mohammed Rashed Iqbal"}
        )
    }
    fathername(){
        this.setState({
            nums : "Mohammed Iqbal"
        })
    }

    render (){
        return (
            <>
            <h2>{this.state.nums}</h2>
            <button onClick={()=> this.chcse()}><strong/>click, to change case<strong/></button>
            <button onClick={()=> this.fullname()}>click to know full name</button>
            <button onClick={()=> this.fathername()}>click to know fathers name</button>
            </>
        )
    }
}

class Joker extends Component{
    constructor() {
      super()
    
      this.state = {
         joker : 'blue'
      }
    }

    red(){
        this.setState({
            joker : 'red'
        })
    }
    blue(){
        this.setState({
            joker : 'blue'
        })
    }
    yellow(){
        this.setState({
            joker : 'yellow'
        })
    }
    green(){
        this.setState({
            joker : 'green'
        })
    }
    
    render(){
        return (
            <>
            <h1>the joker face color is {this.state.joker}</h1>
            <button onClick={()=> this.red()}>change to red</button>
            <button onClick={()=> this.blue()}>change to blue</button>
            <button onClick={()=> this.yellow()}>change to yellow</button>
            <button onClick={()=> this. green()}>change to green</button>
            </>
        )
    }
}

const Persn = (props) => {
    const {name, age} = props
    return (
        <>
        <h1>hello {name} aged {age}</h1>
        </>
    )
}

class Demmo extends Component{
    render(){
       const {locality, native} = this.props 
        return(
            <>
            <h2>hello there, this is a place called {locality}, in {this.props.native}</h2>
            </>
        )
    }
}

// class WelcRashed extends Component{
//     person = {
//         Name : "Rashed",
//         age : 25,
//         gender : 'male',
//         Address : 'Suncity',
//         HairColor : "black"
//     }
//     render(){
//         const {name} = this.props

//         const ClickHandler = ()=> {
//             this.setState({age:this.person.age})
//             }

//         const inputHandle = (event)=> {
//             console.log(event.target.value)
//             this.setState({Name:event.target.value})
//             }


//         return (
//         <>
//         <div>
//             welcome Mr. {this.person.Name}, Your Age is {this.person.age} and you're a {this.person.gender}
//         </div>
//         <input placeholder="enter your Name" onChange={(event)=>inputHandle(event)}/>
//         <button onClick={ClickHandler}>Press to update the state</button>
//         </>
//     )
//     }
// }

export {Megg, Checkout, Baggage, Counter, Counter2, Joker, Persn, Demmo, Teacups}