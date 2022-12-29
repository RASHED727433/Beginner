import React from "react";

const Haha = ()=> (<div>
                        <h1>This is an arrow function</h1>
                  </div>)

const Wjsx = ()=> React.createElement("h1",null, "An arrow functional component without JSX")
const Wjsx2 = ()=> React.createElement("div", null, "just practicing yesyes")

export {Haha, Wjsx, Wjsx2}