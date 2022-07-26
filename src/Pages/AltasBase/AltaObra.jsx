import React, { useState, useRef, useEffect } from "react";

import { useForm } from "react-hook-form";
import { EditorState } from "draft-js";

import {
  Button,
  Grid,
  Typography,
  ImageList,
  ImageListItem,
  Input,
  Stack,
} from "@mui/material";

import { getFirestore } from "firebase/firestore";
import firebase from "../../Config/firebase";

import parse from "html-react-parser";

import FInput from "../../Components/Forms/FInput";
import FInputMultiple from "../../Components/Forms/FInputMultiple";
import FTexto from "../../Components/Forms/FTexto";
import FSelect from "../../Components/Forms/FSelect";
import FInputRichSlate from "../../Components/Forms/FInputRichSlate";
import Titulo from "../../Components/Styles/Titulo";
import ObraCard from "../../Components/Cards/ObraCard";
import ImgUpload from "../../Components/ImgUpload";
import ImagenesUploads from "../../Components/ImagenesUploads";

import VidUpload from "../../Components/VidUpload";
import VideosUploads from "../../Components/VideosUploads";
import SonidosUploads from "../../Components/SonidosUploads";

import PdfsUploads from "../../Components/PdfsUploads";

import FormArtista from "../../Components/Forms/FormArtista";

const firestore = getFirestore();

function AltaObra(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = async (data) => {
    try {
      data.img = picSample;
      data.images = images;
      data.videos = videos;
      data.sonidos = sonidos;
      data.pdfs = pdfs;
      data.nodos = nodos;
      data.txt_largo = bioSample;
      data.txt_corto = introSample;
      data.bio_corta = introSample;
      data.participantes = participantes;
      console.log("Data a escribir: ", data);
      const obrasRef = await firebase.db.collection("obras").add(data);
      reset();
      setEnvio(
        parse(
          " <p>La carga de OBRA se realizó correctamente. Reset para cargar otro documento</p>"
        )
      );
    } catch (e) {
      console.error("Error adding document: ", e);
      setEnvio(
        "Por favor revisá el formulario, la carga no pudo hacerse correctamente"
      );
    }
  };

  const [loading, setLoading] = useState(true);
  const [participantesSelect, setParticipantesSelect] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let f = [];
      try {
        const querySnapshotArtistas = await firebase.db
          .collection("artistas")
          .get();

        if (querySnapshotArtistas.docs) {
          let artistasTemp = [];
          querySnapshotArtistas.docs.map((query) => {
            console.log(query.data().nombre);
            artistasTemp.push({
              value: query.id,
              nodo: query.data().nombre,
            });
          });

          setParticipantesSelect(artistasTemp);
          setLoading(false);
          console.log("participantesSelect");
          console.log(participantesSelect);
        }
      } catch (e) {
        console.log("ERROR fetchData: ", e);
      }
    }
    fetchData();
  }, []);

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

  const imagesArray = [];
  const videosArray = [];
  const sonidosArray = [];
  const pdfsArray = [];
  const nodosArray = [];
  const participantesArray = [];

  const [nombreSample, setNombreSample] = useState("");
  const [fechaRealizacionSample, setFechaRealizacionSample] = useState("");
  const [bioSample, setBioSample] = useState("");
  const [introSample, setIntroSample] = useState("");
  const [idSample, setIdSample] = useState("");
  const [envio, setEnvio] = useState("");

  const [picSample, setPicSample] = useState("");

  const [images, setImages] = useState(imagesArray);
  const [uploadImg, setUploadImg] = useState("");
  const [pieImg, setPieImg] = useState("");

  const [videos, setVideos] = useState(videosArray);
  const [uploadVid, setUploadVid] = useState("");

  const [sonidos, setSonidos] = useState(sonidosArray);
  const [uploadSon, setUploadSon] = useState("");

  const [pdfs, setPdfs] = useState(pdfsArray);
  const [uploadPdf, setUploadPdf] = useState("");
  const [piePdf, setPiePdf] = useState("");

  const [nodos, setNodos] = useState(nodosArray);
  const [nodoSample, setNodoSample] = useState("");

  const [participantes, setParticipantes] = useState(participantesArray);
  const [participanteSample, setParticipanteSample] = useState("");

  const childReset = useRef(null);

  const handleNombre = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleAddImage = () => {
    if (Boolean(uploadImg)) {
      setImages((imagesArray) => [
        ...imagesArray,
        { url: uploadImg, pie: pieImg },
      ]);
      setUploadImg("");
      setPieImg("");
    } else {
      console.log("Aguardá a que cargue la imagen");
    }
  };

  const handleAddVid = () => {
    if (Boolean(uploadVid)) {
      setVideos((videosArray) => [...videosArray, { url: uploadVid }]);
      console.log("VIDEO CARGADO");
      setUploadVid("");
    } else {
      console.log("Aguardá a que cargue el video");
    }
  };

  const handleAddSon = () => {
    if (Boolean(uploadSon)) {
      setSonidos((sonidosArray) => [...sonidosArray, { url: uploadSon }]);
      console.log("SONIDO CARGADO");
      setUploadSon("");
    } else {
      console.log("Aguardá a que cargue el sonido");
    }
  };

  const handleAddPdf = () => {
    if (Boolean(uploadPdf)) {
      setPdfs((pdfsArray) => [...pdfsArray, { url: uploadPdf, pie: piePdf }]);
      setUploadPdf("");
      setPiePdf("");
    } else {
      console.log("Aguardá a que cargue la imagen");
    }
  };

  const handleAddNodo = () => {
    setNodos((nodosArray) => [...nodosArray, nodoSample]);
  };

  const handleAddParticipante = () => {
    setParticipantes((participantesArray) => [
      ...participantesArray,
      participanteSample,
    ]);
  };

  const handleBio = () => {
    console.log("bioSample  > ");
    console.log(introSample);
  };

  const handleReset = () => {
    console.log("ADENTRO DE RESET");
    /* childReset.current(); */
    props.changeInput(0);
  };

  let cargaInicial = (
    <ImagenesUploads
      changeInput={(lift) => setUploadImg(lift)}
      changePie={(lift) => setPieImg(lift)}
    />
  );

  let cargasSecundarias;
  if (images.length > 0) {
    cargasSecundarias = images.map((imagen, index) => (
      <li key={index}>
        <ImagenesUploads
          changeInput={(lift) => setUploadImg(lift)}
          changePie={(lift) => setPieImg(lift)}
        />
      </li>
    ));
  }

  let cargasVideoInicial = (
    <VideosUploads changeInput={(lift) => setUploadVid(lift)} />
  );

  let cargasVideosSecundarios;
  if (videos.length > 0) {
    cargasVideosSecundarios = videos.map((video, index) => (
      <li key={index}>
        <VideosUploads changeInput={(lift) => setUploadVid(lift)} />
      </li>
    ));
  }

  let cargasSonidoInicial = (
    <SonidosUploads changeInput={(lift) => setUploadSon(lift)} />
  );

  let cargasSonidosSecundarios;
  if (sonidos.length > 0) {
    cargasSonidosSecundarios = sonidos.map((sonido, index) => (
      <li key={index}>
        <SonidosUploads changeInput={(lift) => setUploadSon(lift)} />
      </li>
    ));
  }

  let cargasPdfsInicial = (
    <PdfsUploads
      changeInput={(lift) => setUploadPdf(lift)}
      changePie={(lift) => setPiePdf(lift)}
    />
  );

  let cargasPdfsSecundarios;
  if (pdfs.length > 0) {
    cargasPdfsSecundarios = pdfs.map((pdf, index) => (
      <li key={index}>
        <PdfsUploads changeInput={(lift) => setUploadPdf(lift)} />
      </li>
    ));
  }

  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      /* GridRoot */
      <Grid container>
        <Grid item xs={12}>
          <Titulo txt='Alta de Obra' onKeyPress={handleNombre} />
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
        {/* ////////////////////////////// Galería IMGs */}
        <Grid item xs={12} sx={{ margin: "0", padding: "0" }}>
          <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
            <Typography variant='h6' sx={{ margin: "2vh 0" }}>
              Galería Imágenes
            </Typography>
            {cargaInicial}
            {cargasSecundarias}
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
          <Typography
            variant='body'
            sx={{ marginBottom: "2vh", marginTop: "2vh" }}
          >
            Preview img
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
        </Grid>
        {/* ////////////////////////////// Galería VIDs */}
        <Grid item xs={12} sx={{ margin: "0", padding: "0" }}>
          <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
            <Typography variant='h6' sx={{ margin: "2vh 0" }}>
              Galería Videos
            </Typography>
            {cargasVideoInicial}
            {cargasVideosSecundarios}
          </ul>

          <Button
            variant='contained'
            type='submit'
            sx={{ m: 2 }}
            onClick={handleAddVid}
          >
            Añadir a galería
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ margin: "0", padding: "0" }}>
          <Typography
            variant='body'
            sx={{ marginBottom: "2vh", marginTop: "2vh" }}
          >
            Preview vids
          </Typography>
          <ImageList variant='masonry' cols={2}>
            {videos.map((video) => (
              <>
                <ImageListItem key={video.url}>
                  <video width='320' height='240' controls>
                    <source
                      src={`${video.url}?w=248&fit=crop&auto=format`}
                      type='video/mp4'
                    />
                  </video>
                </ImageListItem>
              </>
            ))}
          </ImageList>
        </Grid>

        {/* ////////////////////////////// Galería SONs */}
        <Grid item xs={12} sx={{ margin: "0", padding: "0" }}>
          <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
            <Typography variant='h6' sx={{ margin: "2vh 0" }}>
              SONIDOS
            </Typography>
            {cargasSonidoInicial}
            {cargasSonidosSecundarios}
          </ul>

          <Button
            variant='contained'
            type='submit'
            sx={{ m: 2 }}
            onClick={handleAddSon}
          >
            Añadir a Sonidos
          </Button>
        </Grid>

        {/* ////////////////////////////// Archivos */}
        <Grid item xs={12} sx={{ margin: "0", padding: "0" }}>
          <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
            <Typography variant='h6' sx={{ margin: "2vh 0" }}>
              Archivo
            </Typography>
            {cargasPdfsInicial}
            {cargasPdfsSecundarios}
          </ul>

          <Button
            variant='contained'
            type='submit'
            sx={{ m: 2 }}
            onClick={handleAddPdf}
          >
            Añadir a Archivo
          </Button>
        </Grid>

        <Grid item xs={12} sx={{ margin: "0", padding: "0" }}>
          <Typography
            variant='body'
            sx={{ marginBottom: "2vh", marginTop: "2vh" }}
          >
            Preview Pdfs
          </Typography>
          <ImageList variant='masonry' cols={1}>
            {pdfs.map((pdf) => (
              <>
                <Typography>{pdf.pie}</Typography> <br />
                <object
                  data={`${pdf.url}?w=248&fit=crop&auto=format`}
                  width='80%'
                  height='400px'
                ></object>
              </>
            ))}
          </ImageList>
        </Grid>

        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <FInput
              xs={6}
              label='Número de inventario'
              type='Inventario'
              register={{ ...register("inventario", { required: true }) }}
              changeInput={(lift) => setIdSample(lift)}
            />

            <FInput
              label='Nombre de Obra'
              type='text'
              register={{ ...register("nombre", { required: true }) }}
              changeInput={(lift) => setNombreSample(lift)}
            />

            <FInput
              label='Año de realización'
              type='int'
              register={{ ...register("realizacion") }}
              changeInput={(lift) => setFechaRealizacionSample(lift)}
            />

            <div>
              <Typography variant='h5' sx={{ margin: "2vh 0vw" }}>
                Artista(s)
              </Typography>
              <Stack direction='row' spacing={2} justifyContent='flex-start'>
                <FSelect
                  display='inline'
                  value='participante'
                  id='participante'
                  items={participantesSelect}
                  register={{ ...register("participantes") }}
                  changeInput={(lift) => setParticipanteSample(lift)}
                  nodo='False'
                />
                <Button
                  variant='contained'
                  display='inline'
                  onClick={handleAddParticipante}
                >
                  +
                </Button>
              </Stack>
              {participantes.map((nodo) => (
                <Typography sx={{ margin: "2vh 0vw" }} key={nodo.nodo}>
                  {nodo.nodo}
                </Typography>
              ))}
            </div>

            <div>
              <FInputRichSlate
                titulo='Bio corta'
                label='Bio corta'
                fullwidth
                register={{ ...register("bio_corta") }}
                changeInput={(lift) => setIntroSample(lift)}
                childReset={childReset}
              />
            </div>
            <div>
              <FInputRichSlate
                titulo='Texto largo'
                label='Texto largo'
                fullwidth
                register={{ ...register("txt_largo") }}
                changeInput={(lift) => setBioSample(lift)}
                childReset={childReset}
              />
            </div>
            <div>
              <Typography variant='h5' sx={{ margin: "2vh 0vw" }}>
                Nodo
              </Typography>
              <Stack direction='row' spacing={2} justifyContent='flex-start'>
                <FSelect
                  display='inline'
                  value='nodo'
                  id='nodo'
                  items={nodosSelect}
                  register={{ ...register("nodo") }}
                  changeInput={(lift) => setNodoSample(lift)}
                  nodo='True'
                />
                <Button
                  variant='contained'
                  display='inline'
                  onClick={handleAddNodo}
                >
                  +
                </Button>
              </Stack>
              {nodos.map((nodo) => (
                <Typography sx={{ margin: "2vh 0vw" }} key={nodo.nodo}>
                  {nodo.nodo}
                </Typography>
              ))}
            </div>

            <Button variant='contained' type='submit' sx={{ m: 2 }}>
              Ingresar Obra
            </Button>
            <br />
            <Input type='reset' onClick={handleReset} sx={{ m: 2 }} />
          </form>
          {envio}
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <ObraCard
            title={nombreSample}
            nodo={nodoSample}
            imgSrc={picSample}
            imgAlt={`preview-img`}
            categorías={nodoSample}
            fechaNacimiento={fechaRealizacionSample}
            introSmall={introSample}
          />
        </Grid>
      </Grid>
    );
  }
}

export default AltaObra;
