import { useContext } from "react";
import Cards from "../../components/Cards/Cards";
import { TarjetasDeClimaContext } from "../../context/TarjetasDeClimaContext";

const Home = () => {
  const { tarjetasDeClima } = useContext(TarjetasDeClimaContext);

  return (
    <>
      <div>
        <h1>Home</h1>
        <Cards cards={tarjetasDeClima} />
      </div>
    </>
  );
};

export default Home;
