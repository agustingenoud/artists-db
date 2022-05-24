import { React, useState, useEffect, useContext } from "react";
import { Editor } from "react-draft-wysiwyg";
import { clearEditorContent } from "draftjs-utils";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import parse from "html-react-parser";

import { Typography } from "@mui/material";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function FInputRich(props) {
  console.log("props content - FInput   >  ");
  console.log(props);
  const [editorState, setEditorState] = useState(() =>
    /* EditorState.createEmpty() */
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(" "))
    )
  );

  useEffect(() => {
    props.childReset.current = alertUser;
  }, []);

  function alertUser() {
    setEditorState(EditorState.createEmpty());
  }

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

  const handleReset = (e) => {
    setEditorState(EditorState.createEmpty());
  };

  return (
    <>
      <Typography variant='h5' sx={{ margin: "2vh 0vw" }}>
        {props.titulo}
      </Typography>
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
      {/* <Button variant='contained' onClick={handleReset}>
        {" "}
        Borrar txt{" "}
      </Button> */}
    </>
  );
}

export default FInputRich;
