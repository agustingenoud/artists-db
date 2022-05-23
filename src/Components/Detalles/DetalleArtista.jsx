import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import AuthContext from "../../Context/AuthContext";

import firebase from "../../Config/firebase";

import { useForm } from "react-hook-form";
import parse from "html-react-parser";

import FInput from "../../Components/Forms/FInput";
import FTexto from "../../Components/Forms/FTexto";
import FSelect from "../../Components/Forms/FSelect";
import FInputRich from "../../Components/Forms/FInputRich";
import Titulo from "../../Components/Styles/Titulo";
import ArtistaCard from "../../Components/Cards/ArtistaCard";
import ImgUpload from "../../Components/ImgUpload";
import ImagenesUploads from "../../Components/ImagenesUploads";

import {
  Button,
  ImageList,
  ImageListItem,
  Grid,
  Box,
  Typography,
} from "@mui/material";

function DetalleArtista() {
  ////////////////////////////////////////////////////////////////////////////////////// Form Edit

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {},
  });

  const imagesArray = [];

  const [nombreSample, setNombreSample] = useState("");
  const [lugarNacimientoSample, setLugarNacimientoSample] = useState("");
  const [fechaNacimientoSample, setFechaNacimientoSample] = useState("");
  const [fechaFallecmientoSample, setFechaFallecimientoSample] = useState("");
  const [nodoSample, setNodoSample] = useState("");
  const [bioSample, setBioSample] = useState("");
  const [introSample, setIntroSample] = useState("");
  const [idSample, setIdSample] = useState("");
  const [envio, setEnvio] = useState("");

  const [picSample, setPicSample] = useState("");

  const [images, setImages] = useState(imagesArray);
  const [uploadImg, setUploadImg] = useState("");
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

  const onSubmit = async (data) => {
    try {
      data.img = picSample;
      data.images = images;
      data.txt_largo = bioSample;
      data.bio_corta = introSample;
      console.log("Data a escribir: ", data);
      const artistasRef = await firebase.db
        .collection("artistas")
        .doc(id)
        .set(data);
      setEnvio(
        parse(
          '<p>La carga se realizó correctamente. Querés cargar otro documento?</p><Link to="/altas"><Button>Reset</Button></Link>'
        )
      );
    } catch (e) {
      console.error("Error adding document: ", e);
      setEnvio(
        "Por favor revisá el formulario, la carga no pudo hacerse correctamente"
      );
    }
  };

  const handleBio = () => {
    console.log("bioSample  > ");
    console.log(introSample);
  };

  ////////////////////////////////////////////////////////////////////////////////////// END FORM EDIT

  const context = useContext(AuthContext);
  const { id } = useParams();
  const [res, setRes] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await firebase.db
          .collection("artistas")
          .doc(id)
          .get();
        if (querySnapshot.data()) {
          console.log("EL Query > ");
          console.log(querySnapshot.data());
          setRes(querySnapshot.data());
          console.log("DATA que me traigo");
          console.log(querySnapshot.data().bio_corta);
          setLoading(false);
          /* setValue("bio_corta", querySnapshot.data().bio_corta); */
          setValue("ciudad", querySnapshot.data().ciudad);
          setValue("fallecimiento", querySnapshot.data().fallecimiento);
          setValue("images", querySnapshot.data().images);
          setValue("img", querySnapshot.data().img);
          setValue("inventario", querySnapshot.data().inventario);
          setValue("nacimiento", querySnapshot.data().nacimiento);
          setValue("nombre", querySnapshot.data().nombre);
          setValue("pais", querySnapshot.data().pais);
          setValue("txt_largo", querySnapshot.data().txt_largo);
        }
      } catch (e) {
        console.log("ERROR fetchData: ", e);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      const document = await firebase.db
        .collection("artistas")
        .doc(id)
        .delete();
      console.log("handleDelete ", document);
    } catch (e) {
      console.log("handleDelete()", e);
    }
  };

  if (loading) {
    return <div>Loading . . . </div>;
  } else {
    const imagenes = res.images;
    console.log("RES IMGS");
    console.log(imagenes);
    return (
      <>
        <Grid container>
          <Grid>
            <h1 style={{ margin: "2vh 0vh" }}>{res.nombre}</h1>
            <h2 style={{ color: "#bbbbbb", marginTop: "0%" }}>
              {res.nacimiento}
            </h2>
          </Grid>

          <Grid item xs={12}>
            <img
              style={{ width: "80vw", height: "auto", marginTop: "2vh" }}
              src={res.img}
              alt=''
            />
          </Grid>

          <Grid xs={10} sx={{ marginTop: "8vh" }}>
            {parse(res.bio_corta)}
          </Grid>
          <Grid xs={10} sx={{ marginBottom: "8vh" }}>
            {parse(res.txt_largo)}
          </Grid>

          <Grid sx={{ marginTop: "2vh", marginBottom: "8vh" }}>
            <Typography variant='h6'>Galería</Typography>
            <Box sx={{ height: "80vh", overflowY: "scroll" }}>
              {/* <ImageList cols={3} rowHeight={200}> */}
              <ImageList variant='masonry' cols={3} gap={8}>
                {imagenes.map((imagen) => (
                  <ImageListItem key={imagen.url}>
                    <img
                      src={`${imagen.url}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${imagen.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      loading='lazy'
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>

          <Grid>
            <Button sx={{ color: "black" }}>
              <Link to={"/"}> volver </Link>
            </Button>

            {context.userLogin && (
              <>
                <Button variant='outlined' color='error' onClick={handleDelete}>
                  <Link to={"/"}> Borrar entrada </Link>
                </Button>

                <h1>EDITAR ENTRADA</h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ width: "100%" }}
                >
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
                      label='bio_corta'
                      fullwidth
                      register={{ ...register("bio_corta") }}
                      changeInput={(lift) => setIntroSample(lift)}
                      onChange={handleBio}
                      content={res.bio_corta}
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
              </>
            )}
          </Grid>
        </Grid>
      </>
    );
  }
}

export default DetalleArtista;
