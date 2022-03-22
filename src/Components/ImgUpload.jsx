import { useState } from "react";
import { Button, Grid, Typography, Box, Input } from "@mui/material";

import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";

import firebaseApp from "../Config/firebase";

function ImgUpload(props) {
  const [progress, setProgress] = useState(0);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, `images/${file.name}`);
    /*     uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
    */
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
          console.log("File available at", downloadURL);
          props.changeInput(downloadURL);
        });
      }
    );
  };

  return (
    <div className='App' style={{ marginLeft: 10, marginBottom: 20 }}>
      <form onSubmit={formHandler}>
        <Input type='file' className='input' sx={{ m: 1 }} />
        <Button color='secondary' type='submit'>
          Upload
        </Button>
        <Typography variant='body1' display='inline'>
          Uploading done {progress}%
        </Typography>
      </form>
    </div>
  );
}

export default ImgUpload;
