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
    getValues,
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

  const [picSample, setPicSample] = useState();

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
        <ImgUpload
          label='img'
          changeInput={(lift) => setPicSample(lift)}
          register={{
            ...register("img", { value: picSample }, { required: true }),
          }}
        />
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
          imgSrc={picSample}
          imgAlt={`flash`}
          categorías={nodoSample}
          lugarNacimiento={lugarNacimientoSample}
          fechaNacimiento={fechaNacimientoSample}
          fechaFallecimiento={fechaFallecmientoSample}
          introSmall={introSample}
        />
        <button
          type='button'
          onClick={() => {
            const values = getValues(); // { test: "test-input", test1: "test1-input" }
            const singleValue = getValues("test"); // "test-input"
            const multipleValues = getValues(["test", "test1"]);
            console.log("VALORES");
            console.log(values);
            console.log(register);
          }}
        >
          Get Values
        </button>
      </Grid>
    </Grid>
  );
}

export default AltaArtista;
