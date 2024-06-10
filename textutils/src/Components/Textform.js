import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "Success");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "Success");
  }
  const handleReClick = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra saces removed!", "Success");
  }
  const copyText = () => {
    navigator.clipboard.writeText(text);
    //alert("copied");
    props.showAlert("Copied to clipboard!", "Success");
  }
  const handleclearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text cleared!", "Success");
  }
  const speak = () => {
  let newText = new SpeechSynthesisUtterance();
  newText.text = text;
  window.speechSynthesis.speak(newText);
  props.showAlert("Text read!", "Success");
}
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
      <label htmlFor="My box" className="form-label">TextArea</label>
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color:props.mode === 'dark'?'white':'#042743'}}id="my Box" rows="8"></textarea>
      </div>
      <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleReClick}>Remove Extra Space</button>
      <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy</button>
      <button disabled={text.length===0}type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
      <button disabled={text.length===0}className="btn btn-primary" onClick={handleclearClick}>Clear text</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
     <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
