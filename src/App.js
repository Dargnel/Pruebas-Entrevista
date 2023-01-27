import React from "react";
import axios from "axios"






function App() {

  const [datos,setDatos]= React.useState([]);

  React.useEffect(  () => {
    axios.get('https://csoct9fwak.execute-api.us-east-1.amazonaws.com/Stage/api/v1/other_charges').then((response) => {
      setDatos(response.data);
    });
    }, [])


    console.log(datos);
    return (
      <div>
        <div>
        <h1>Lista de personas</h1>
        </div>
        <div>
        <ul  >      
                  {datos.map((persona)=>{
                  return(<li key={persona.ID} >{persona.name}</li>
                  )
          }) 
              }</ul>

        </div>
             
    
      </div>
    );
}
export default App;
