import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import firebase from "../../Config/firebase";

function FSelect(props) {
  const [show, setShow] = React.useState("");

  const handleChange = (e) => {
    if (props.nodo == "True") {
      let nodoLetNodo = "";
      console.log("e.target.value");
      console.log(e.target.value);

      if (e.target.value == "FE") {
        nodoLetNodo = "Feminismos";
      } else if (e.target.value == "ES") {
        nodoLetNodo = "Escenas Subterráneas";
      } else if (e.target.value == "DS") {
        nodoLetNodo = "Disidencias Sexuales";
      } else if (e.target.value == "AG") {
        nodoLetNodo = "Acción Gráfica";
      }

      var suboData = {
        nodo: nodoLetNodo,
        idNodo: e.target.value,
      };
      setShow(e.target.value);

      console.log("suboData");
      console.log(suboData);
      props.changeInput(suboData);
    } else if (props.nodo == "False") {
      async function fetchArtista() {
        let f = [];
        try {
          const querySnapshotArtista = await firebase.db
            .collection("artistas")
            .doc(e.target.value)
            .get();

          if (querySnapshotArtista.data()) {
            var suboData = {
              nodo: querySnapshotArtista.data().nombre,
              idNodo: e.target.value,
            };
            setShow(e.target.value);
            /* props.changeInput(e.explicitOriginalTarget.innerText); */
            console.log("suboData");
            console.log(suboData);
            props.changeInput(suboData);
          }
        } catch (e) {
          console.log("ERROR fetchData: ", e);
        }
      }
      fetchArtista();
    }
  };

  const items = props.items;

  return (
    <>
      <InputLabel id='nodos'>{props.label}</InputLabel>
      <Select
        value={show}
        labelId='nodos'
        {...props.register}
        onChange={handleChange}
        sx={{
          width: "85%",
        }}
        variant='filled'
      >
        {items.map(({ nodo, value }) => (
          <MenuItem key={value} value={value}>
            {nodo}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default FSelect;
