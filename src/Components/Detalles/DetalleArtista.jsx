import React from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
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
  Alert,
  Collapse,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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

  const navigate = useNavigate();

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

  const [open, setOpen] = useState(false);

  const [picSample, setPicSample] = useState("");

  const [images, setImages] = useState(imagesArray);
  const [uploadImg, setUploadImg] = useState("");
  const nodosSelect = [
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
          /*setValue("nodos", querySnapshot.data().nodos);*/
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
      navigate("/");
    } catch (e) {
      console.log("handleDelete()", e);
    }
  };

  if (loading) {
    return <div>Loading . . . </div>;
  } else {
    const imagenes = res.images;

    function isNodos() {
      return res.nodos.map((nodo) => (
        <>
          <Typography
            display='inline'
            sx={{
              mr: 1,
              padding: "0px 0.4vw",
              color: "white",
              backgroundColor: context.color[nodo.idNodo],
            }}
          >
            {nodo.nodo}
          </Typography>
        </>
      ));
    }

    function notNodos() {
      return (
        <>
          <Typography
            display='inline'
            sx={{
              mr: 1,
              padding: "0px 0.4vw",
              color: "white",
              backgroundColor: context.color[res.nodo],
            }}
          >
            {res.nodo}
          </Typography>
        </>
      );
    }

    function nodosHandled() {
      const dataNodos = res.nodos;

      if (dataNodos) {
        return isNodos();
      } else {
        return notNodos();
      }
    }

    return (
      <>
        <Grid container>
          <Grid sx={{ mt: 6 }}>
            {nodosHandled()}
            <h1 style={{ margin: "2vh 0vh" }}>{res.nombre}</h1>
            <h2 style={{ color: "#bbbbbb", marginTop: "0%" }}>
              {res.nacimiento}
            </h2>
          </Grid>

          <Grid item xs={12}>
            <img
              style={{ width: "auto", height: "74vh", marginTop: "2vh" }}
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
                  <Zoom>
                    <ImageListItem key={imagen.url}>
                      <img
                        src={`${imagen.url}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${imagen.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        loading='lazy'
                      />
                    </ImageListItem>
                  </Zoom>
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
                <p>
                  <Box sx={{ width: "100%" }}>
                    <Collapse in={open}>
                      <Alert
                        action={
                          <IconButton
                            aria-label='close'
                            color='inherit'
                            size='small'
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            <CloseIcon fontSize='inherit' />
                          </IconButton>
                        }
                        sx={{ mb: 2 }}
                      >
                        Confirmar &ensp;
                        <Button
                          variant='outlined'
                          color='error'
                          onClick={() => {
                            handleDelete();
                            setOpen(true);
                          }}
                        >
                          {" "}
                          eliminar{" "}
                        </Button>
                        &ensp; entrada.
                      </Alert>
                    </Collapse>
                    <Button
                      variant='outlined'
                      color='error'
                      disabled={open}
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      Borrar Entrada
                    </Button>
                  </Box>
                </p>

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
                      items={nodosSelect}
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
