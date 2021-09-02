import React,{useState} from 'react'

export default function TextUtilies(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied Text!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Space!", "success");
    }
    const handleClear=()=>
    {
        setText("")
        props.showAlert("Cleared!", "success");
    }

    const [text,setText] = useState("");
    return (
        <>
        <div className="container">
            <h3 className="my-3 d-flex justify-content-center text-info ">{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} id="myBox" value={text} rows="5"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3">
            <h3 className="d-flex justify-content-center text-success">Your Text Summary</h3>
            <p className="d-flex justify-content-center">{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p className="d-flex justify-content-center">{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h4 className="d-flex justify-content-center text-success">Preview</h4>
            <p className="d-flex justify-content-center">{text}</p>
        </div>
        </>
    )
}