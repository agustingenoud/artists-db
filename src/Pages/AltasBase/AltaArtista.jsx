import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid, Typography, Avatar, Paper } from "@mui/material";

import { getFirestore } from "firebase/firestore";
import firebase from "../../Config/firebase";

import FInput from "../../Components/Forms/FInput";
import FTexto from "../../Components/Forms/FTexto";
import FSelect from "../../Components/Forms/FSelect";
import Titulo from "../../Components/Styles/Titulo";
import ArtistaCard from "../../Components/Cards/ArtistaCard";
import ImgUpload from "../../Components/ImgUpload";
import ImagenesUploads from "../../Components/ImagenesUploads";

import FormArtista from "../../Components/Forms/FormArtista";

const firestore = getFirestore();

function AltaArtista() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = async (data) => {
    try {
      data.img = picSample;
      console.log("Data a escribir: ", data);
      console.log("Las imágenes que van: ");
      console.log(images);
      const artistasRef = await firebase.db.collection("artistas").add(data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const nodos = [
    {
      value: "FE",
      nodo: "Feminismos",
    },
    {
      value: "ES",
      nodo: "Escenas Subterráneas",
    },
    {
      value: "DS",
      nodo: "Disidencias Sexuales",
    },
    {
      value: "AG",
      nodo: "Acción Gráfica",
    },
  ];

  const imagesArray = [
    {
      url: "test",
    },
  ];

  const [nombreSample, setNombreSample] = useState("");
  const [lugarNacimientoSample, setLugarNacimientoSample] = useState();
  const [fechaNacimientoSample, setFechaNacimientoSample] = useState();
  const [fechaFallecmientoSample, setFechaFallecimientoSample] = useState();
  const [nodoSample, setNodoSample] = useState();
  const [bioSample, setBioSample] = useState();
  const [introSample, setIntroSample] = useState();
  const [idSample, setIdSample] = useState();

  const [picSample, setPicSample] = useState();

  const [images, setImages] = useState(imagesArray);
  const [uploadImg, setUploadImg] = useState("");

  const handleNombre = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleAddImage = () => {
    setImages((imagesArray) => [...imagesArray, { url: uploadImg }]);
    console.log("IMAGESARRAY");
    console.log(imagesArray);
    console.log("images");
    console.log(images);
  };

  return (
    /* GridRoot */
    <Grid container>
      <Grid item xs={12}>
        <Titulo txt='Alta de Artista' onKeyPress={handleNombre} />
      </Grid>

      <Grid item xs={12} sx={{}}>
        <ImgUpload
          label='img'
          register={{
            ...register("img", { value: picSample }, { required: true }),
          }}
          changeInput={(lift) => setPicSample(lift)}
          principal='true'
        />
      </Grid>

      <Grid item xs={12} sx={{}}>
        <ul>
          <Typography>Cargar imágenes complementarias</Typography>
          {images.map((imagen, index) => (
            <li key={index}>
              <span>URL: {imagen.url}</span>
              <ImagenesUploads changeInput={(lift) => setUploadImg(lift)} />
            </li>
          ))}
          <img style={{ width: "40%" }} src={uploadImg}></img> <br />
          <Button
            variant='contained'
            type='submit'
            sx={{ m: 2 }}
            onClick={handleAddImage}
          >
            Añadir imágen
          </Button>
        </ul>
        {/* <ImgUpload
                label='img'
                register={{
                  ...register("img", { value: picSample }, { required: true }),
                }}
                changeInput={(lift) => setPicSample(lift)}
                principal='true'
              /> */}
      </Grid>

      <Grid container xs={12} md={6}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <FInput
            xs={6}
            label='id'
            type='Inventario'
            register={{ ...register("id", { required: true }) }}
            changeInput={(lift) => setIdSample(lift)}
          />

          <FInput
            label='Nombre'
            type='text'
            register={{ ...register("nombre", { required: true }) }}
            changeInput={(lift) => setNombreSample(lift)}
          />

          <FInput
            label='Lugar de nacimiento'
            type='text'
            register={{ ...register("lugar de nacimiento") }}
            changeInput={(lift) => setLugarNacimientoSample(lift)}
          />
          <div>
            <FInput
              label='Fecha de nacimiento'
              type='int'
              register={{ ...register("nacimiento") }}
              changeInput={(lift) => setFechaNacimientoSample(lift)}
            />
            <FInput
              label='Fecha de Fallecimiento'
              type='int'
              register={{ ...register("fallecimiento") }}
              changeInput={(lift) => setFechaFallecimientoSample(lift)}
            />
          </div>
          <div>
            <FTexto
              label='Texto corto'
              fullwidth
              register={{ ...register("txt_corto") }}
              changeInput={(lift) => setIntroSample(lift)}
            />
          </div>
          <div>
            <FTexto
              label='Texto largo'
              fullwidth
              register={{ ...register("txt_largo") }}
              changeInput={(lift) => setBioSample(lift)}
            />
          </div>
          <div>
            <FSelect
              value='nodo'
              id='nodo'
              label='nodo'
              items={nodos}
              register={{ ...register("nodo") }}
              changeInput={(lift) => setNodoSample(lift)}
            />
          </div>

          <Button variant='contained' type='submit' sx={{ m: 2 }}>
            Ingresar Artista
          </Button>
        </form>
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <ArtistaCard
          title={nombreSample}
          nodo={nodoSample}
          imgSrc={picSample}
          imgAlt={`preview-img`}
          categorías={nodoSample}
          lugarNacimiento={lugarNacimientoSample}
          fechaNacimiento={fechaNacimientoSample}
          fechaFallecimiento={fechaFallecmientoSample}
          introSmall={introSample}
        />
      </Grid>
    </Grid>
  );
}

export default AltaArtista;
