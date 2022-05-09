import { React, useState, useEffect, useContext } from "react";
import { InputLabel, Input, Box } from "@mui/material";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function FInput(props) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onInputChange = (e) => {
    /* props.changeInput(e.target.value); */
    props.changeInput(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  useEffect(() => {
    props.changeInput(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  }, [editorState]);

  return (
    <>
      <div
        style={{
          border: "1px solid #bbbbbb",
          padding: "2px",
          minHeight: "400px",
        }}
      >
        <Editor
          label={props.label}
          editorState={editorState}
          defaultValue={props.defaultValue}
          onEditorStateChange={setEditorState}
          {...props.register}
          onChange={onInputChange}
        />
      </div>
    </>
  );
}

export default FInput;
