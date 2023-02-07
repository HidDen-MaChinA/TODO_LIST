import React ,{ useState , useEffect , } from "react";
// import "./App.css";
function App (){
    const [done,setDone]=useState([])
    const newDone = (e,shouldBeDone) =>{
        setDone([...done,shouldBeDone]);
    }
    return (
        <div className="wrapper">
            <TODO func={newDone}/>
            <DONE done={done}/>
        </div>
    )
}
export function DONE({done}){
    return (
        <div className="todo">
            {done.map((information,id)=>(<div key={information+id}>{information}</div>))}
        </div>
    )
}
export function TODO({func}){
    const [state,setState]=useState([])
    const [innerText,setInnerText]=useState("")
    const enterNewValue = () => {
        if(innerText===""){
            alert("should not be empty")
        }else{
        setState([...state,innerText]);
        setInnerText("")
        }
    }
    const eraseOneLine = (e,id) =>{
        const test=state;
        func(e,test[id]);
        test.splice(id,1);
        setState([...test]);
    }
    return (
        <div className="DONE" >
            <input type='text' onInput={(e)=>{setInnerText(e.target.value)}} value={innerText} onKeyDown={(e)=>{e.key==="Enter" && enterNewValue() }} placeholder="todo Here"></input>
            <List informations={state} eraseOneLine={eraseOneLine}/>
        </div>
    )
}
export function List({ informations , eraseOneLine }){
    return(
        informations.map((information,id)=>(<p key={information+id}><input type="checkbox" onInput={(e)=>{eraseOneLine(e,id)}}></input>{information}</p>))
    )
}
export default App;
