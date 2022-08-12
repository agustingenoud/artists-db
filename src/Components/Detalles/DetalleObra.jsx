import React from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import AuthContext from "../../Context/AuthContext";

import firebase from "../../Config/firebase";

import { useForm } from "react-hook-form";
import parse from "html-react-parser";

import FInput from "../../Components/Forms/FInput";
import FSelect from "../../Components/Forms/FSelect";
import FInputRich from "../../Components/Forms/FInputRich";
import FInputRichSlate from "../../Components/Forms/FInputRichSlate";
import ImagenesUploads from "../../Components/ImagenesUploads";
import ImgUpload from "../../Components/ImgUpload";

import VideosUploads from "../../Components/VideosUploads";
import SonidosUploads from "../../Components/SonidosUploads";
import PdfsUploads from "../../Components/PdfsUploads";

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
  Stack,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function DetalleObra() {
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

  const [open, setOpen] = useState(false);

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
      if (picSample) {
        data.img = picSample;
      } else {
        data.img = res.img;
      }

      if (images) {
        data.imgages = images;
      } else {
        data.imgages = res.images;
      }
      if (res.videos) {
        data.videos = res.videos;
      } else {
        data.videos = "";
      }

      if (res.pais) {
        data.pais = res.pais;
      } else {
        data.pais = "";
      }

      if (res.sonidos) {
        data.sonidos = res.sonidos;
      } else {
        data.sonidos = "";
      }

      if (res.pdfs) {
        data.pdfs = res.pdfs;
      } else {
        data.pdfs = "";
      }

      if (res.participantes) {
        data.participantes = res.participantes;
      } else {
        data.participantes = "";
      }

      if (bioSample) {
        data.txt_largo = bioSample;
      } else {
        data.txt_largo = res.txt_largo;
      }

      if (introSample) {
        data.bio_corta = introSample;
      } else {
        data.bio_corta = res.bio_corta;
      }
      data.nodos = nodos;
      console.log("Data a escribir: ", data);
      const artistasRef = await firebase.db
        .collection("obras")
        .doc(id)
        .set(data);
      setEnvio(
        parse(
          '<p>La carga se realizó correctamente. Querés cargar otro documento?</p><Link to="/altas"><Button>Reset</Button></Link>'
        )
      );
      setTimeout(() => navigate("/"), 2000);
    } catch (e) {
      console.error("Error adding document: ", e);
      setEnvio(
        "Por favor revisá el formulario, la carga no pudo hacerse correctamente"
      );
    }
  };

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
    /*  nodosArray.push(nodoSample); */
    /* setNodos(nodosArray); */
    setNodos((nodosArray) => [...nodosArray, nodoSample]);
    console.log("//////////////////////");
    console.log("nodoSample");
    console.log(nodoSample);
    console.log("nodosArray");
    console.log(nodosArray);
    console.log("nodos");
    console.log(nodos);
  };

  const handleAddParticipante = () => {
    setParticipantes((participantesArray) => [
      ...participantesArray,
      participanteSample,
    ]);
  };

  const handleBio = () => {
    console.log("bioSample  > ");
    console.log(bioSample);
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
  ////////////////////////////////////////////////////////////////////////////////////// END FORM EDIT

  const context = useContext(AuthContext);
  const { id } = useParams();
  const [res, setRes] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await firebase.db
          .collection("obras")
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
          setValue("images", querySnapshot.data().images);
          setValue("img", querySnapshot.data().img);
          setValue("inventario", querySnapshot.data().inventario);
          setValue("realizacion", querySnapshot.data().realizacion);
          setValue("nombre", querySnapshot.data().nombre);
          setValue("txt_largo", querySnapshot.data().txt_largo);

          setNodos(querySnapshot.data().nodos);
        }
      } catch (e) {
        console.log("ERROR fetchData: ", e);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      const document = await firebase.db.collection("obras").doc(id).delete();
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
    /*     const videos = res.videos;
    const sonidos = res.sonidos;
    const pdfs = res.pdfs; */

    console.log("res");
    console.log(imagenes);

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
      if (nodos) {
        return isNodos();
      } else {
        return notNodos();
      }
    }

    function imagenesHandled() {
      if (
        (imagenes === undefined && typeof imagenes == "undefined") ||
        imagenes.length <= 0
      ) {
      } else {
        return (
          <>
            <Typography variant='h6'>Galería</Typography>
            <Box sx={{ height: "80vh", overflowY: "scroll" }}>
              <ImageList variant='masonry' cols={3} gap={8}>
                {imagenes.map((imagen) => (
                  <Zoom>
                    <ImageListItem key={imagen.url}>
                      <img
                        src={`${imagen.url}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${imagen.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        loading='lazy'
                      />
                      <Typography
                        variant='body2'
                        sx={{
                          backgroundColor: "rgba(212, 212, 212, 0.4)",
                          color: "rgba(244, 244, 244, 0.8)",
                          transform: "translate(0, -4ex)",
                          textAlign: "right",
                          paddingRight: "8%",
                          fontSize: "0.4rem",
                        }}
                      >
                        {imagen.pie}
                      </Typography>
                    </ImageListItem>
                  </Zoom>
                ))}
              </ImageList>
            </Box>
          </>
        );
      }
    }

    function videosHandled() {
      if (
        (videos === undefined && typeof videos == "undefined") ||
        videos.length <= 0
      ) {
      } else {
        return (
          <>
            <Typography variant='h6'>Videos</Typography>
            <Box sx={{ height: "80vh", overflowY: "scroll" }}>
              <ImageList variant='masonry' cols={1}>
                {videos.map((video) => (
                  <ImageListItem key={video.url}>
                    <video width='90%' height='90%' controls>
                      <source src={`${video.url}`} type='video/mp4' />
                    </video>
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </>
        );
      }
    }

    function sonidosHandled() {
      if (
        (sonidos === undefined && typeof sonidos == "undefined") ||
        sonidos.length <= 0
      ) {
      } else {
        return (
          <>
            <Typography variant='h6'>Sonidos</Typography>
            <Typography variant='h6'>X</Typography>
            <Box sx={{ height: "80vh", overflowY: "scroll" }}>
              <ImageList variant='masonry' cols={1}>
                {sonidos.map((sonido) => (
                  <ImageListItem inline key={sonido.url}>
                    <audio controls>
                      <source src={`${sonido.url}`} type='audio/x-wav' />
                      <source src={`${sonido.url}`} type='audio/mpeg' />
                      Your browser does not support the audio tag.
                    </audio>
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </>
        );
      }
    }

    /*  function pdfsHandled() {
      if (
        (pdfs === undefined && typeof pdfs == "undefined") ||
        pdfs.length <= 0
      ) {
      } else {
        return (
          <>
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
                    ></object>
                  </>
                ))}
              </ImageList>
            </Grid>
          </>
        );
      }
    } */

    function pdfsHandled() {
      if (
        (pdfs === undefined && typeof pdfs == "undefined") ||
        pdfs.length <= 0
      ) {
      } else {
        return (
          <>
            <Grid item xs={12} sx={{ margin: "0", padding: "0" }}>
              <Typography
                variant='body'
                sx={{ marginBottom: "2vh", marginTop: "2vh" }}
              >
                Preview Pdfs
              </Typography>
              {pdfs.map((pdf) => (
                <>
                  <Collapse in={open}>
                    <Alert
                      action={
                        <IconButton
                          aria-label='close'
                          color='inherit'
                          size='big'
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize='inherit' />
                        </IconButton>
                      }
                      sx={{ mb: 2 }}
                    >
                      <object
                        data={`${pdf.url}?w=248&fit=crop&auto=format`}
                        width='969vw'
                        height='666vh'
                      ></object>
                    </Alert>
                  </Collapse>
                  <Button
                    variant='contained'
                    disabled={open}
                    onClick={() => {
                      setOpen(true);
                    }}
                    sx={{ width: "100%" }}
                  >
                    {pdf.pie}
                  </Button>
                </>
              ))}
            </Grid>
          </>
        );
      }
    }

    console.log("res.txt_largo");
    console.log(res.txt_largo);

    let txt_largo = JSON.parse(res.txt_largo).map((line) => (
      <p>{line.children[0].text}</p>
    ));

    let bio_corta = JSON.parse(res.bio_corta).map((line) => (
      <p>{line.children[0].text}</p>
    ));

    return (
      <>
        <Grid container>
          <Grid sx={{ mt: 6 }}>
            {nodosHandled()}
            <h1 style={{ margin: "2vh 0vh" }}>{res.nombre}</h1>
            <h2 style={{ color: "#bbbbbb", marginTop: "0%" }}>
              {res.realizacion}
            </h2>
          </Grid>

          <Grid xs={12} sx={{ marginTop: "8vh" }}>
            <img
              style={{ width: "50%", marginTop: "2vh" }}
              src={res.img}
              alt=''
            />
          </Grid>

          <Grid xs={10} sx={{ marginTop: "8vh" }}>
            <Typography>{bio_corta}</Typography>
          </Grid>
          <Grid xs={10} sx={{ marginBottom: "8vh" }}>
            <Typography>{txt_largo}</Typography>
          </Grid>

          <Grid sx={{ marginTop: "2vh", marginBottom: "8vh" }}>
            {imagenesHandled()}
          </Grid>

          <Grid sx={{ marginTop: "2vh", marginBottom: "8vh" }}>
            {videosHandled()}
          </Grid>

          <Grid sx={{ marginTop: "2vh", marginBottom: "8vh" }}>
            {sonidosHandled()}
          </Grid>

          <Grid sx={{ marginTop: "2vh", marginBottom: "8vh", width: "100%" }}>
            {pdfsHandled()}
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

                <Grid item xs={12} sx={{}}>
                  <Typography variant='h6' sx={{ margin: "2vh 0" }}>
                    Imagen principal
                  </Typography>
                  <ImgUpload
                    label='img'
                    register={{
                      ...register(
                        "img",
                        { value: picSample },
                        { required: true }
                      ),
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
                    label='Año de realización'
                    type='int'
                    register={{ ...register("realizacion") }}
                    changeInput={(lift) => setFechaRealizacionSample(lift)}
                  />

                  <div>
                    <FInputRichSlate
                      label='bio_corta'
                      fullwidth
                      register={{ ...register("bio_corta") }}
                      changeInput={(lift) => setIntroSample(lift)}
                      onChange={handleBio}
                      content={res.bio_corta}
                    />
                  </div>
                  <div>
                    <FInputRichSlate
                      label='Texto largo'
                      fullwidth
                      register={{ ...register("txt_largo") }}
                      changeInput={(lift) => setBioSample(lift)}
                      content={res.txt_largo}
                      sx={{ height: "80vh" }}
                    />
                  </div>
                  <div>
                    <Typography variant='h5' sx={{ margin: "2vh 0vw" }}>
                      Nodo
                    </Typography>
                    <Stack
                      direction='row'
                      spacing={2}
                      justifyContent='flex-start'
                    >
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
                    Modificar Obra
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

export default DetalleObra;
