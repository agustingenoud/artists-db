import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid, Typography, Box } from "@mui/material";

import firebase from "../../Config/firebase";
import FInput from "../../Components/Forms/FInput";
import FTexto from "../../Components/Forms/FTexto";
import FSelect from "../../Components/Forms/FSelect";
import Titulo from "../../Components/Styles/Titulo";
import ArtistaCard from "../../Components/Cards/ArtistaCard";
import ImgUpload from "../../Components/ImgUpload";

import FormArtista from "../../Components/Forms/FormArtista";

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
      //const document = await firebase.db.collection("artistas").add(data);
      console.log("INSIDE > onSubmit()");
      console.log(data);
    } catch (e) {}
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

  const [nombreSample, setNombreSample] = useState("");
  const [lugarNacimientoSample, setLugarNacimientoSample] = useState();
  const [fechaNacimientoSample, setFechaNacimientoSample] = useState();
  const [fechaFallecmientoSample, setFechaFallecimientoSample] = useState();
  const [nodoSample, setNodoSample] = useState();
  const [bioSample, setBioSample] = useState();
  const [introSample, setIntroSample] = useState();
  const [idSample, setIdSample] = useState();

  const handleNombre = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleNodo = (e) => {};

  return (
    /* GridRoot */
    <Grid container>
      {/* Elem1 */}
      <Grid item xs={12}>
        <Titulo txt='Alta de Artista' onKeyPress={handleNombre} />
      </Grid>
      {/* Elem2 */}
      <Grid item xs={12}>
        <ImgUpload />
      </Grid>
      {/* Elem3 */}
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
              label='intro'
              fullwidth
              register={{ ...register("intro") }}
              changeInput={(lift) => setIntroSample(lift)}
            />
          </div>
          <div>
            <FTexto
              label='Bio'
              fullwidth
              register={{ ...register("bio") }}
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

      {/* Elem 4*/}
      <Grid item xs={12} md={6}>
        <ArtistaCard
          title={nombreSample}
          nodo={nodoSample}
          imgSrc={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F6a%2Fdb%2F5c%2F6adb5cb9ca27e48304b56ff5bdf55448.jpg&f=1&nofb=1`}
          imgAlt={`flash`}
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
