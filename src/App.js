
import './App.css';
import {Mohammed, Thankyou, Wjsxh1} from './mycomponentspractice/GreetClasscomponent';
import { Component } from 'react';
import { Practice, Xyz, Pppp, Yesyes, Tyre, Propsprops } from './mycomponentspractice/RashedGreet';
import {Wjsx, Haha, Wjsx2} from './mycomponentspractice/Arrowfuncrashed';
import {India, China, Australia, Germany, Malasia, Russia, Srilanka, Nepal, Japan} from './mycomponentspractice/prc';
import {Megg, Checkout, Baggage, Counter, Counter2, Joker, Persn, Demmo, Teacups} from './mycomponentspractice/cevid10messg';

// function App() {
//   return ( <div> <Mohammed/> </div> )
// }

class App extends Component{
  render(){
    return ( <div>
      <Teacups/>
      {/* <Mohammed>class component</Mohammed>
      <Xyz>Normal functional component</Xyz>
      <Haha>An Arrow Function</Haha>
      <Thankyou>another class component</Thankyou>
      <Practice>An arrow function</Practice>
      <Wjsx>no jsx</Wjsx>
      <Wjsx2>playing</Wjsx2>
      <Wjsxh1>Bolder no jsx</Wjsxh1>
      <Pppp flavour="strawberry"/>
      <Yesyes/>
      <Tyre name="RASHED"/>
      <Tyre name="ABRAR"/>
      <Tyre name="MOHAMMED"/>
      <Propsprops name = "parasite"/>
      <India/>
      <China/>
      <Australia/>
      <Germany/>
      <Malasia/>
      <Russia/>
      <Srilanka/>
      <Nepal place = "asia"/>
      <Japan place = "asian"/> */}
      {/* <Aka name = "Rashed" Age = "26" nationality = "Indian"/> */}
      <Megg/>
      <Checkout/>
      <Baggage/>
      <br></br>
      <Counter/>
      <Counter2/>
      <Joker/>
      <Persn name="Rashed" age = "26"/>
      <Demmo locality = "Hyderabad" native = "india"/>
      
    </div>)
  }
}

export default App
