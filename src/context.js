

import React from 'react';

const MyContext = React.createContext();

class MyProvider extends React.Component {
    state = {
        currentUser: {
          firstName: "Sandra",
          course: "Web Dev",
          hoursToGo: 360
        }
      }

      addHoursPlease = () => {
        this.setState( prev => {
          return {
            currentUser: {
              ...prev.currentUser,
              hoursToGo: prev.currentUser.hoursToGo + 10
            }
          }
        })
      }

      render(){
          return (
              <MyContext.Provider value={{ 
                  ...this.state,
                  addHours: this.addHoursPlease 
                }}>
                  { this.props.children }
              </MyContext.Provider>
          )
      }
}


export { MyContext, MyProvider };


