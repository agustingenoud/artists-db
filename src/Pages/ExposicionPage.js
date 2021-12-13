import ArtistaCard from "../Components/Cards/ArtistaCard";

function ExposicionPage() {
  return (
    <>
      <h1>Exposición Page</h1>
      <h2>ExPo</h2>

      <ArtistaCard
        nombre={`apu`}
        imgSrc={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F6a%2Fdb%2F5c%2F6adb5cb9ca27e48304b56ff5bdf55448.jpg&f=1&nofb=1`}
        imgAlt={`flash`}
        categorías={`lala`}
        bioSmall={`lkajd aldsk kdlskasdl`}
      />
    </>
  );
}

export default ExposicionPage;
