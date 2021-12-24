function Artista(props) {
  const { datos } = props;

  return (
    <>
      <h3>{datos.nombre}</h3>
      <img src={datos.imgSrc} alt={datos.imgAlt} />
      <p>{datos.bio}</p>
    </>
  );
}

export default Artista;
