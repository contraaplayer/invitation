import { render,u } from '@testing-library/react';
import React, {useState} from 'react';
import './App.css';//Considerando nuestro proyecto como un modulo de react
//Formulario invitation
function App() {
 const [status, setStatus] = useState('');
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
   let contenido = document.getElementById('container');

   if(contenido){
     contenido.remove()
   }

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

       for(let i=0; i < 16; i++){
         event.target[i].readOnly = true;//los input se quedan en modo lectura
       }
       setStatus('complete');
       console.log("formulario completado");
       console.log(datos);
       render(
        <div id="container">

          <div id="invitation">
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
          </div>
        </div>
      );
     }
}

 function handleChange(event){
   //console.log(event.target.value)
   setDatos({
     ...datos,
     [event.target.name] : event.target.value //relacionara los names
   })
 }

 function handleClick(event){

   if(status === 'complete'){
     setStatus('');

     let writeAgain = document.querySelectorAll(".datos");
     let contenido = document.getElementById('container');
     
     for(let i=0; i<16; i++ ){
       /*event.target[i].value =" ";*/
       writeAgain[i].readOnly = false;//deja volver a escribir a los imput de entrada
     }

     contenido.remove();
   }

   else{
     alert("No hay contenido para resetear");
   }

 }

 function handleRandom(event){

  setStatus('complete');

  let contenido = document.getElementById('container');

  if(contenido){
    contenido.remove();
  }

  const recNamesarr = ["Angel", "Bryan", "Luis", "Jimmy", "Karen", "Laura", "Emma", "José"];
  const sendNamesarr = ["Angel", "Bryan", "Luis", "Jimmy", "Karen", "Laura", "Emma", "José"];
  const relationsarr = ["Friend", "Son", "Exfriend", "Colleague", "Uncle", "Aunt", "Father", "Mother"];
  const eventNamesarr = ["Lolapalooza", "Corona Capital", "Viña del mar", "Hell & Heaven", "Superbowl", "Champions", "Hackaton", "E3"];
  const eventTypesarr = ["Musical", "Social", "Academic", "Recreative", "Sport", "Virtual", "Religious", "Charity"];
  const emotionsarr = ["Happy", "Grateful", "Honored", "Excited", "Really happy", "Really grateful", "Cheerful", "Thankful"];
  const activitiesarr = ["Dance", "Drink", "Debate", "Discuss", "Study", "Dinner", "Enjoy", "Party"];
  const secondActsarr = ["Dance", "Drink", "Debate", "Code", "Study", "Dinner", "Watch TV", "Party"];
  const unplannsarr = ["Stop", "Study", "Debate", "Discuss", "Study", "Leave", "Enjoy", "Talk"];
  const weekDaysarr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsarr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const daysarr = ["01", "11", "30", "31", "02", "20", "22", "14", "21", "12", "31", "08"];
  const yearsarr = ["2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028"];
  const timesarr = ["12:00", "13:00", "14:00", "10:00", "23:00", "20:00", "18:30", "04:20"];
  const adressesarr = ["Tula", "Pachuca", "My house", "Your house", "CDMX", "Monterrey", "Galerias", "Carls Jr."];
  const notesarr = ["Bring beverages", "Bring Chips", "Wear a suit", "Come with all your friends", "Please, arrive 20 minutes earlier", "Bring ice", "Get ready", "Please study"];
  
  setDatos({
    name_recipient:formRNG(recNamesarr),
    name_sender: formRNG (sendNamesarr),
    relationship: formRNG (relationsarr),
    evento: formRNG (eventNamesarr),
    modifier: formRNG (eventTypesarr),
    emotion: formRNG (emotionsarr),
    activity: formRNG (activitiesarr),
    additional_act: formRNG (secondActsarr),
    uactivity: formRNG (unplannsarr),
    day_week: formRNG (weekDaysarr),
    month: formRNG (monthsarr),
    day: formRNG (daysarr),
    year: formRNG (yearsarr),
    start_time: formRNG (timesarr),
    Location_add: formRNG (adressesarr),
    additional_notes: formRNG (notesarr),
  });

  render(
    <div id="container">

          <div id="invitation">
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
          </div>
        </div>
  );
 }
 function formRNG(arr){
   return arr[Math.floor(Math.random()* arr.length)];
 }
  return (
    <div className="App" style={{// el style en react es un prop y es un objeto
      margin: '2rem',//Todos los valores tienen que ir con coma, los valores deben ir entre comillas y escribir junto la propiedad sin guion.
      padding: '1rem',
      frontSize: '24px',//Cuando se identifica un riesgo, como eliminar el riesgo, como reducir el impacto, 

    }}>
      <h1>Fill in the blanks</h1>
    <form id="containerform" onSubmit={handleSubmit}>
      <div id="Ftrow">
        <label htmlFor="Nrecipient">Name of recipient</label>  
        <input
          id="Nrecipient"
          type="text"
          name="name_recipient"
          className="datos"
          onChange={handleChange}
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
        <button id="btnreset" type="reset" onClick={handleClick}>Reset</button>
        <button id="btnsubmit" type="submit">Submit</button>
        <button id="btnrandom" type="random" onClick={handleRandom}> Randomize</button>
      </div>

    </form>

    </div>
  );
}

export default App;
