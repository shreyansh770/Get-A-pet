import React, { Component } from "react";

class List extends Component {
  state = {

    allPets:[
        {
            id:"1",
            name:"Lucy",
            type:"Dog",
            breed:"Bulldog"
        },
        {
            id:"2",
            name:"Noiko",
            type:"Dog",
            breed:"huskey"
        },
        {
            id:"3",
            name:"Lucy",
            type:"Bird",
            breed:"parrot"
        }
    ]

  };
  render() {
    return (
      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col">Pet Name</th>
            <th scope="col">Animal Type</th>
            <th scope="col">Breed</th>
          </tr>
        </thead>
        <tbody>
           {
               this.state.allPets.map((ele)=>{
                   return(
                       <tr key={ele.id}>

                         <td>{ele.name}</td>
                         <td>{ele.type}</td>
                         <td>{ele.breed}</td>

                       </tr>
                   )
               })
           }
        </tbody>
      </table>
    );
  }
}

export default List;
