import { useState } from "react";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";

import firebaseApp from "../Config/firebase";

import {
  Button,
  Input,
  Typography,
  Grid,
  UploadFile,
  Stack,
} from "@mui/material";

function ImgUploaDos() {
  const [progress, setProgress] = useState(0);

  const formHandler = (e) => {
    console.log("FORM HANDLRER");
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
        });
      }
    );
  };

  return (
    <form onSubmit={formHandler} sx={{ width: "auto" }}>
      <Stack spacing={2} direction='row'>
        <Typography variant='h5'>Imagen de cabecera</Typography>
        <Button variant='contained' component='label'>
          <Input type='file' classes='' style={{ display: "none" }} />
          Select img
        </Button>

        <Button variant='contained' type='submit'>
          Upload {progress}%
        </Button>
      </Stack>
    </form>
  );
}

export default ImgUploaDos;