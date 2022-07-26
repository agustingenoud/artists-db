import { React, useState, useEffect, useContext, useMemo } from "react";

// Import the Slate editor factory.
import { createEditor } from "slate";
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

import draftToHtml from "draftjs-to-html";
import parse from "html-react-parser";

import { Typography, Box } from "@mui/material";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "Introducir Texto" }],
  },
];

function FInputRich(props) {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <>
      <Typography variant='h5' sx={{ margin: "2vh 0vw" }}>
        {props.titulo}
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "333px",
          color: "rgb(0,0,0)",
          padding: "2vmin",
          border: " 1px solid black",
          backgroundColor: "primary",
          opacity: [0.2, 0.2, 0.2],
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Slate
          editor={editor}
          value={initialValue}
          onChange={(value) => {
            const isAstChange = editor.operations.some(
              (op) => "set_selection" !== op.type
            );
            if (isAstChange) {
              // Save the value to Local Storage.
              const content = JSON.stringify(value);
              localStorage.setItem("content", content);
              /*  JSON.parse(localStorage.content).map((line) =>
              console.log(line.children[0].text)
            ); */
              props.changeInput(localStorage.content);
            }
          }}
        >
          <Editable />
        </Slate>
      </Box>
    </>
  );
}

export default FInputRich;
