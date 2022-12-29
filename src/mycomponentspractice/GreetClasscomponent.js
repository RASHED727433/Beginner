import React, {Component} from 'react'

class Mohammed extends Component{
    render(){
    return <div><h1>This is a class component</h1></div>
    }
}

class Thankyou extends Component{
    render(){
        return <div><h1>Thankyou from a class component</h1></div>
    }
}

const Wjsxh1 = ()=> React.createElement("div", null, React.createElement("h1", null, "without Jsx text made bigger with h1 tag"))

export {Thankyou, Mohammed, Wjsxh1}