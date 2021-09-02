// import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';
// import React from 'react';
// import { stateToHTML } from "draft-js-export-html";
// import '../App.css';
// import {
//   ItalicButton,
//   BoldButton,
//   UnderlineButton,
//   CodeButton,
//   HeadlineOneButton,
//   HeadlineTwoButton,
//   HeadlineThreeButton,
//   UnorderedListButton,
//   OrderedListButton,
//   BlockquoteButton,
//   CodeBlockButton,
// } from '@draft-js-plugins/buttons';


// function App() {
//   const [editorState,setEditorState] = React.useState(EditorState.createEmpty())
//   const boldText = () => {
//     const nextState = RichUtils.toggleInlineStyle(editorState, "BOLD");
//     setEditorState(nextState);
//   };
//   const italicText = () => {
//     const nextState = RichUtils.toggleInlineStyle(editorState, "ITALIC");
//     setEditorState(nextState);
//   };
//   const underLineText = () => {
//     const nextState = RichUtils.toggleInlineStyle(editorState, "UNDERLINE");
//     setEditorState(nextState);
//   };
//   const changeMonospace = () => {
//     const nextState = RichUtils.toggleInlineStyle(editorState, "CODE");
//     setEditorState(nextState);
//   };
//   const headlineOneButton = () => {
//     const nextState = RichUtils.toggleInlineStyle(editorState, "HEADLINEONEBUTTON");
//     setEditorState(nextState);
//   };
//   const headlineTwoButton = () => {
//     const nextState = RichUtils.toggleInlineStyle(editorState, "HEADLINETWOBUTTON");
//     setEditorState(nextState);
//   };
//   const headlineThreeButton = () => {
//     const nextState = RichUtils.toggleInlineStyle(editorState, "HEADLINETHREEBUTTON");
//     setEditorState(nextState);
//   };
//   const unorderedListButton = () => {
//     const nextState = RichUtils.toggleInlineStyle(editorState, "UNORDEREDLISTBUTTON");
//     setEditorState(nextState);
//   };
//   const orderedListButton = () => {
//     const nextState = RichUtils.toggleInlineStyle(editorState, "ORDEREDLISTBUTTON");
//     setEditorState(nextState);
//   };
//   const blockquoteButton = () => {
//     const nextState = RichUtils.toggleInlineStyle(editorState, "BLOCKQUOTEBUTTON");
//     setEditorState(nextState);
//   };
//   const codeBlockButton = () => {
//     const nextState = RichUtils.toggleInlineStyle(editorState, "CODEBLOCKBUTTON");
//     setEditorState(nextState);
//   };
//   const saveState = () =>{
//     // const contentState = editorState.getCurrentContent();
//     // console.log('content state', convertToRaw(contentState));
//     // const contentStateJsObject = ContentState.toJS();
//     //  const contentStateJsonString = JSON.stringify(contentStateJS);

//     // var contentRaw = convertToRaw(this.state.editorState.getCurrentContent());

//     //   localStorage.setItem('draftRaw', JSON.stringify(contentRaw));


//     console.log( stateToHTML(editorState.getCurrentContent()))
//   }
//   return (
//     <div className="App">
//       <button type="button" onClick={boldText}><b>B</b></button>
//       <button type="button" onClick={italicText}><b>I</b></button>
//       <button type="button" onClick={underLineText}><b>U</b></button>
//       <button type="button" onClick={changeMonospace}><b>ms</b></button>
//       <button type="button" onClick={headlineOneButton}><b>HeadlineOneButton</b></button>
//       <button type="button" onClick={headlineTwoButton}><b>HeadlineTwoButton</b></button>
//       <button type="button" onClick={headlineThreeButton}><b>HeadlineThreeButton</b></button>
//       <button type="button" onClick={unorderedListButton}><b>UnorderedListButton</b></button>
//       <button type="button" onClick={orderedListButton}><b>OrderedListButton</b></button>
//       <button type="button" onClick={blockquoteButton}><b>BlockquoteButton</b></button>
//       <button type="button" onClick={codeBlockButton}><b>CodeBlockButton</b></button>
//        <Editor editorState={editorState}  onChange={setEditorState} />
//        <button onClick={saveState}>Save</button>
//     </div>
//   );
// }

// export default App;
































// function TextEditor() {
//     const [editorState, setEditorState] = React.useState(EditorState.createEmpty())
    
//     const boldText = () => {
//         const nextState = RichUtils.toggleInlineStyle(editorState, "BOLD");
//         setEditorState(nextState);
//       };
//       const italicText = () => {
//         const nextState = RichUtils.toggleInlineStyle(editorState, "ITALIC");
//         setEditorState(nextState);
//       };
//       const underLineText = () => {
//         const nextState = RichUtils.toggleInlineStyle(editorState, "UNDERLINE");
//         setEditorState(nextState);
//       };
//       const changeMonospace = () => {
//         const nextState = RichUtils.toggleInlineStyle(editorState, "CODE");
//         setEditorState(nextState);
//       };
//       const saveState = () =>{
//     //   console.log(editorState.getCurrentContent())
//     const contentState = editorState.getCurrentContent();
//     console.log('content state', convertToRaw(contentState));
//       }
//     return (
//         <div className="application">
//             <button type="button" onClick={boldText}><b>B</b></button>
//             <button type="button" onClick={italicText}><b>I</b></button>
//             <button type="button" onClick={underLineText}><b>U</b></button>
//             <button type="button" onClick={changeMonospace}><b>MS</b></button>
//             <Editor editorState={editorState} onChange={setEditorState} />
//             <button onClick={saveState}>Save</button>
//         </div>
//     )
// }


// export default TextEditor



import React, { useState } from 'react';
import { EditorState,convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../App.css';
import PostData from './PostData';
import { stateToHTML } from "draft-js-export-html";



function TextEditor(){
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const  [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
    // console.log(currentContentAsHTML)
  }
  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }
  const cancelAll = () =>{
    setEditorState();
    let currentState = ""
    setConvertedContent(currentState);
  }
  const saveData = () =>{
    const contentState = editorState.getCurrentContent();
    // const content = convertToRaw(contentState);
    // const data = content.blocks.[0].text;
    // console.log('content state', convertToRaw(contentState));
    // console.log("Data is  ",data)
    // const contenTState = editorState.getCurrentContent();
    console.log('content state', convertToRaw(contentState));
    console.log( stateToHTML(editorState.getCurrentContent()))
    // const data = stateToHTML(editorState.getCurrentContent())
    // console.log("State to html  ",data)
    console.log(JSON.stringify(convertToRaw(contentState)))
          //  setConvertedContent(stateToHTML(editorState.getCurrentContent()))

  }
  return (
    <div className="App">
      <header className="App-header">
        Rich Text Editor Example
      </header>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <div className="outer">
         <div class="inner"><button type="submit" className="cancel" onClick={cancelAll}>Cancel</button></div>
         <div class="inner"><button type="submit" className="publish" onClick={saveData}>Publish</button></div>
        </div>
      <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
      <div className="preview"></div>
    </div>
  )
}

export default TextEditor