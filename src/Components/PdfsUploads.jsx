import { useState } from "react";
import {
  Button,
  Typography,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";

import { initializeApp } from "firebase/app";

import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCV_vDMnmWaFJ_KxtS7gXDS5cKRHgC1WE",
  authDomain: "devenir-otros-cuerpos.firebaseapp.com",
  projectId: "devenir-otros-cuerpos",
  messagingSenderId: "405184217522",
  appId: "1:405184217522:web:487d39ca29ea16e7f824ab",
  measurementId: "G-7XRLE6V3M0",
  storageBucket: "gs://devenir-otros-cuerpos.appspot.com",
};

const firebaseApp = initializeApp(firebaseConfig);

function PdfsUploads(props) {
  const [progress, setProgress] = useState(0);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
    props.changePie(e.target[2].value);
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, `pdfs/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("PDF available at", downloadURL);
          props.changeInput(downloadURL);
        });
      }
    );
  };

  return (
    <>
      <div
        className='App'
        style={{
          marginLeft: 0,
          marginBottom: 20,
          paddingLeft: 10,
          backgroundColor: "#eeeeee",
          borderStyle: "1 px solid black",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={formHandler}>
          <Input type='file' id='file_upload' className='input' sx={{ m: 1 }} />
          <Button color='secondary' type='submit'>
            cargar
          </Button>
          <Typography variant='body1' display='inline'>
            {progress}%
          </Typography>
          <TextField
            id='standard-basic'
            label='Pie IMG'
            variant='standard'
            alignItems='center'
            justify='center'
            sx={{ ml: 2, textAlign: "center", verticalAlign: "inherit" }}
          ></TextField>
        </form>
      </div>
    </>
  );
}

export default PdfsUploads;
