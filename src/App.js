import React from 'react';
import './App.css';

// REFACTORED WITH CONTEXT API:

import { MyContext } from './context';

function Bootcamp (){
  return(
    <MyContext.Consumer>
        { context => {
          const { hoursToGo } = context.currentUser;
          return (
            <div>
              <p>Hours to invest: { hoursToGo }</p>
              <Student  />
            </div>
          )
      } }
  </MyContext.Consumer>
  )

}


function Student (){
  return (
    <MyContext.Consumer>
    { context => {
      console.log('the C is: ', context)
      const { firstName } = context.currentUser; 
      return(
        <div>
          <h1>Hello {firstName}!</h1>
          <button onClick={ context.addHours }> Add Those Hours! </button>
        </div>
      )
    }}
    </MyContext.Consumer>
  )
}
function App () {
      return (
          <Bootcamp />
      )
}



// PROPS DRILLING:


// function Bootcamp (props){
//   return (
//     <Student user = { props.user } addHours={ props.addHours }  />
//   )
// }

// function Student (props){
//   const { firstName } = props.user.currentUser;
//   return (
//     <div>
//         <h1>Hello {firstName}!</h1>
//         <button onClick={ props.addHours }> Add Those Hours! </button>
//     </div>
//   )
// }
// class App extends React.Component {
//     state = {
//       currentUser: {
//         firstName: "Sandra",
//         course: "Web Dev",
//         hoursToGo: 360
//       }
//     }

//     addHoursPlease = () => {
//       this.setState( prev => {
//         return {
//           currentUser: {
//             ...prev.currentUser,
//             hoursToGo: prev.currentUser.hoursToGo + 10
//           }
//         }
//       })
//     }

//     render (){
//       const { hoursToGo } = this.state.currentUser;
//       return (
//         <div>
//           <p>I'm in App.js ✅ <b> Hours I want to invest: { hoursToGo } </b></p>
//           <Bootcamp  user = { this.state }  addHours={ this.addHoursPlease }/>
//         </div>
//       )
//     }
// }

export default App;
