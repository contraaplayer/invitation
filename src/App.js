import React, {useState} from 'react';
import './App.css';//Considerando nuestro proyecto como un modulo de react
//Formulario invitation
function App() {
 const [status, setStatus] = useState("");
 const [datos,setDatos] = useState({
   name_recipient: '',
   name_sender: '',
   relationship:'',
   evento:'',
   modifier:'',
   emotion:'',
   activity:'',
   additional_act:'',
   uactivity:'',
   day_week:'',
   month:'',
   day:'',
   year:'',
   start_time:'',
   Location_add:'',
   additional_notes:''
 })

 function handleSubmit(event){
   event.preventDefault();
   let empty;
   for(let i =0; i < 16; i ++)
   {
     setDatos({
       ...datos,
       [event.target[i].name] : event.target[i].value
     }) 
     
     if(event.target[i].value === ''){
       empty = true;
     }
    }
     if(empty === true){
       alert("Necesitas llenar todos los campos!!!");
     }
     else{
       setStatus('complete');
       console.log("formulario completado");
       console.log(datos);
     }
}
 /*const mostrar = () =>{
   const mostrar_datos = document.querySelector(".datos")
   console.log( mostrar_datos.textContent)
 }*/
 function handleChange(event){
   //console.log(event.target.value)
   setDatos({
     ...datos,
     [event.target.name] : event.target.value //relacionara los names
   })
 }
  return (
    <div className="App" style={{// el style en react es un prop y es un objeto
      margin: '2rem',//Todos los valores tienen que ir con coma, los valores deben ir entre comillas y escribir junto la propiedad sin guion.
      padding: '1rem',
      frontSize: '24px',//Cuando se identifica un riesgo, como eliminar el riesgo, como reducir el impacto, 

    }}>
      <h1>Fill in the blanks</h1>
    <form id="container" onSubmit={handleSubmit}>
      <div id="Ftrow">
        <label htmlFor="Nrecipient">Name of recipient</label>  
        <input
          id="Nrecipient"
          type="text"
          name="name_recipient"
          onChange={handleChange}
          className="datos"
        ></input>

        <label htmlFor="Nsender"> Name of Sender</label>
        <input
          id="Nsender" 
          type="text"
          name="name_sender"
          className="datos"
          onChange={handleChange}
        ></input>
      
        <label htmlFor="relationship">Relationship to recipient</label>
        <input
          id="relationship" 
          type="text"
          name="relationship"
          className="datos"
          onChange={handleChange}
        ></input>
      
        <label htmlFor="event">Event</label>
        <input
          id="event" 
          type="text"
          name="evento"
          className="datos"
          onChange={handleChange}
          ></input>
      
        <label htmlFor="modifier">Modifier</label>
        <input
          id="modifier" 
          type="text"
          name="modifier"
          className="datos"
          onChange={handleChange}
        ></input>    
      </div>

      <div id="Sdrow">
        <label htmlFor="Emotion">Emotion</label>  
        <input
          id="Emotion"
          type="text"
          name="emotion"
          className="datos"
          onChange={handleChange}
        ></input>

        <label htmlFor="Activity"> Activity</label>
        <input
          id="Activity" 
          type="text"
          name="activity"
          className="datos"
          onChange={handleChange}
        ></input>
      
        <label htmlFor="A_activity">Additional activity</label>
        <input
          id="A_activity" 
          type="text"
          name="additional_act"
          className="datos"
          onChange={handleChange}
        ></input>
      
        <label htmlFor="U_activity">Unplanned activity</label>
        <input
          id="U_activity" 
          type="text"
          name="uactivity"
          className="datos"
          onChange={handleChange}
          ></input>
      
        <label htmlFor="D_week">Day of the week</label>
        <input
          id="D_week" 
          type="text"
          name="day_week"
          className="datos"
          onChange={handleChange}
        ></input>    
      </div>

      <div id="Thirdrow">
        <label htmlFor="Month">Month</label>
        <input
          id="Month" 
          type="text"
          name="month"
          className="datos"
          onChange={handleChange}
        ></input>
        <label htmlFor="Day">Day</label>  
        <input
          id="Day"
          type="text"
          name="day"
          className="datos"
          onChange={handleChange}
        ></input>

        <label htmlFor="Year">year</label>
        <input
          id="Year" 
          type="text"
          name="year"
          className="datos"
          onChange={handleChange}
        ></input>
      
        <label htmlFor="Stime">Start time</label>
        <input
          id="Stime" 
          type="text"
          name="start_time"
          className="datos"
          onChange={handleChange}
        ></input>
      
        <label htmlFor="Location">Location + address</label>
        <input
          id="Location" 
          type="text"
          name="Location_add"
          className="datos"
          onChange={handleChange}
          ></input>
      
        <label htmlFor="A_notes">Additional notes</label>
        <input
          id="A_notes" 
          type="text"
          name="additional_notes"
          className="datos"
          onChange={handleChange}
        ></input>         
      </div>

      <div className="botones">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>

    </form>
    <section> 
        <input type="text" value = {datos.name_recipient} readOnly/>
        <input type="text" value = {datos.name_sender} readOnly/>
        <input type="text" value = {datos.relationship} readOnly/>
        <input type="text" value = {datos.evento} readOnly/>
        <input type="text" value = {datos.modifier} readOnly/>
        <input type="text" value = {datos.emotion} readOnly/>
        <input type="text" value = {datos.activity} readOnly/>
        <input type="text" value = {datos.additional_act} readOnly/>
        <input type="text" value = {datos.uactivity} readOnly/>
        <input type="text" value = {datos.day_week} readOnly/>
        <input type="text" value = {datos.month} readOnly/>
        <input type="text" value = {datos.day} readOnly/>
        <input type="text" value = {datos.year} readOnly/>
        <input type="text" value = {datos.start_time} readOnly/>
        <input type="text" value = {datos.Location_add} readOnly/>
        <input type="text" value = {datos.additional_notes} readOnly/>
    </section>
    </div>
  );
}

export default App;
