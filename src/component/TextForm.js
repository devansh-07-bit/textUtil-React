  import React, { useState } from "react"; //using the use state

  function TextForm(props) {

    const handleUPClick = () => {
      console.log("Uppercase was Clicked");
      let NewText = text.toUpperCase();
      setText(NewText);
      props.showAlert("Converted to uppercase", "success")
    };
    const handleLPClick = () => { 
      console.log("Lowercase was Clicked");
      let NewText = text.toLowerCase();
      setText(NewText);
      props.showAlert("Converted to lowercase " , "success")
    };

    const handleclearClick = () => {
      console.log("Clear the text");
      let NewText = "";
      setText(NewText);
      props.showAlert("Text is cleared " , "success")
    };

    const handleCaptilizeClick = () => {
      console.log("Capitalized the Text"); 
       let wordsArray = text.split(" ");
      let capitalizedtext = wordsArray.map(
        (word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
      setText(capitalizedtext.join(" "));
      props.showAlert("Text is Capatalized " , "success")
    };


    const handleOnchange = (event) => {
      console.log("onChange");
      setText(event.target.value); // it will allow us to change the value in textarea along with previous value .
      // by using this we are able to type the text in the textarea
    };

    const [text, setText] = useState(""); // here we are using the state that will call before clicking the button
    // useState is use to create the state , here we have created two state one is text and setText.
    //text = "newText" ; wrong way to update the  state
    //setText("NewText");  // by using the set function we can update the state
    return (
      <>
        <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}> 
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnchange} // without using this we can't type the text in textarea.
              style={{backgroundColor:props.mode === 'dark' ? '#9b90b9' : 'white'}} // using ternary operator for defining the condition
              id="exampleFormControlTextarea1"
              rows="8"
            ></textarea>
            <button className="btn btn-primary mx-2" onClick={handleUPClick}>
              Convert To Uppercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleLPClick}>
              Convert To Lowercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>
              Clear
            </button>
            <button className="btn btn-primary mx-2" onClick={handleCaptilizeClick}>
              Captalized 
            </button>


          </div>
        </div>
        <div className= "Contianer my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").length} words and {text.length} Character</p>
          <p>{0.008 *text.split(" ").length}minutes Read</p>
          {/* TO calculate the words in the sentence we use text.split(" ") function in javascript */}
          <h2>Preview Text</h2>
          <p>{text}</p>
        </div>
      </>
    );
  }

  export default TextForm;
