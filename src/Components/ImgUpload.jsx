import { useState } from "react";
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
    <div className='App'>
      <form onSubmit={formHandler}>
        <input type='file' className='input' />
        <button type='submit'>Upload</button>
      </form>
      <h2>Uploading done {progress}%</h2>
    </div>
  );
}

export default ImgUpload;
