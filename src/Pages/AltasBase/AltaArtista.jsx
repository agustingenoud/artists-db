import React, { useState, useEffect, createContext } from "react";
import { ReactDOM } from "react-dom";

import { useForm } from "react-hook-form";
import {
  Button,
  Grid,
  Typography,
  Avatar,
  Stack,
  ImageList,
  ImageListItem,
} from "@mui/material";

import { getFirestore } from "firebase/firestore";
import firebase from "../../Config/firebase";

import FInput from "../../Components/Forms/FInput";
import FTexto from "../../Components/Forms/FTexto";
import FSelect from "../../Components/Forms/FSelect";
import FInputRich from "../../Components/Forms/FInputRich";
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
      data.images = images;
      data.txt_largo = bioSample;
      data.bio_corta = introSample;
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

  const imagesArray = [];

  const [nombreSample, setNombreSample] = useState("");
  const [lugarNacimientoSample, setLugarNacimientoSample] = useState("");
  const [fechaNacimientoSample, setFechaNacimientoSample] = useState("");
  const [fechaFallecmientoSample, setFechaFallecimientoSample] = useState("");
  const [nodoSample, setNodoSample] = useState("");
  const [bioSample, setBioSample] = useState("");
  const [introSample, setIntroSample] = useState("");
  const [idSample, setIdSample] = useState("");

  const [picSample, setPicSample] = useState("");

  const [images, setImages] = useState(imagesArray);
  const [uploadImg, setUploadImg] = useState("");

  const handleNombre = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleAddImage = () => {
    if (Boolean(uploadImg)) {
      setImages((imagesArray) => [...imagesArray, { url: uploadImg }]);
      console.log("imagen CARGADA");
      setUploadImg("");
    } else {
      console.log("Aguardá a que termine la carga un segundo");
    }
  };

  const handleBio = () => {
    console.log("bioSample  > ");
    console.log(introSample);
  };

  let cargaInicial = (
    <ImagenesUploads changeInput={(lift) => setUploadImg(lift)} />
  );
  let cargasSecundarias;

  if (images.length > 0) {
    cargasSecundarias = images.map((imagen, index) => (
      <li key={index}>
        <ImagenesUploads changeInput={(lift) => setUploadImg(lift)} />
      </li>
    ));
  }

  return (
    /* GridRoot */
    <Grid container>
      <Grid item xs={12}>
        <Titulo txt='Alta de Artista' onKeyPress={handleNombre} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5' sx={{ margin: "2vh 0" }}>
          Carga de materiales
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{}}>
        <Typography variant='h6' sx={{ margin: "2vh 0" }}>
          Imagen principal
        </Typography>
        <ImgUpload
          label='img'
          register={{
            ...register("img", { value: picSample }, { required: true }),
          }}
          changeInput={(lift) => setPicSample(lift)}
          principal='true'
        />
      </Grid>

      <Grid item xs={12} sx={{ margin: "0", padding: "0" }}>
        <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
          <Typography variant='h6' sx={{ margin: "2vh 0" }}>
            Galería
          </Typography>
          {cargaInicial}
          {cargasSecundarias}
          {/* <img style={{ width: "auto", height: "33vh" }} src={uploadImg}></img>
          <br /> */}
        </ul>

        <Button
          variant='contained'
          type='submit'
          sx={{ m: 2 }}
          onClick={handleAddImage}
        >
          Añadir a galería
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ margin: "0", padding: "0" }}>
        <Typography variant='h6' sx={{ marginBottom: "2vh", marginTop: "2vh" }}>
          Galería
        </Typography>
        <ImageList variant='masonry' cols={3} gap={8}>
          {images.map((imagen) => (
            <>
              <ImageListItem key={imagen.url}>
                <img
                  src={`${imagen.url}?w=248&fit=crop&auto=format`}
                  srcSet={`${imagen.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  loading='lazy'
                />
              </ImageListItem>
            </>
          ))}
        </ImageList>
        {/* <Stack spacing={1} xs={2} sx={{ marginBottom: "6vh" }}>
          {images.map((imagen) => (
            <>
              <Avatar
                src={imagen.url}
                sx={{ width: "10vw", height: "10vh" }}
                variant='square'
              />
            </>
          ))}
        </Stack> */}

        {/* <ImgUpload
                label='img'
                register={{
                  ...register("img", { value: picSample }, { required: true }),
                }}
                changeInput={(lift) => setPicSample(lift)}
                principal='true'
              /> */}
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant='h5' sx={{ margin: "2vh 0" }}>
          FICHA
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <FInput
            xs={6}
            label='Número de inventario'
            type='Inventario'
            register={{ ...register("inventario", { required: true }) }}
            changeInput={(lift) => setIdSample(lift)}
          />

          <FInput
            label='Nombre'
            type='text'
            register={{ ...register("nombre", { required: true }) }}
            changeInput={(lift) => setNombreSample(lift)}
          />

          <FInput
            label='Ciudad de nacimiento'
            type='text'
            register={{ ...register("ciudad") }}
            changeInput={(lift) => setLugarNacimientoSample(lift)}
          />

          <FInput
            label='País de nacimiento'
            type='text'
            register={{ ...register("pais") }}
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
            <FInputRich
              label='Bio corta'
              fullwidth
              register={{ ...register("bio_corta") }}
              changeInput={(lift) => setIntroSample(lift)}
              onChange={handleBio}
            />
          </div>
          <div>
            <FInputRich
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
