import React,{useState}from 'react'

export default function TextForm(props){
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success");
        
    }
    const handleLowClick=()=>{
        console.log("Lowercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
    props.showAlert("Converted to Lower case","success");
        
    }
     const handleClearClick=()=>{
        console.log("Clear was clicked"+text);
        let newText=" ";
        setText(newText);
        props.showAlert("Text is Cleared","success");
        
    }
   const handleOnChange=(event)=>
   {
    console.log("On change");
    setText(event.target.value);
   }
   const handleCopy=()=>{
    console.log("I am copy");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Successfully Copied","success");
        
   }
   const handleExtraSpaces=()=>
   {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed","success");

   }
   const[text,setText]=useState('Enter text here');
    

    return(
        <>
        <div className="container">
    
           <h1>{props.heading}</h1>
            <div className="my-3">
                <label htmlFor="myBox" className="form-label"></label>
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="15" cols="50"></textarea>
            </div>
            <button className="btn-btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn-btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
               <button className="btn-btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn-btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
 <button className="btn-btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra Spaces</button>
   
        </div>
        <div className="container my-3">
            <h1>Your Sample Text Summary</h1>
            <p>{text.split(" ").length} words and{text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
    </>
    )

}