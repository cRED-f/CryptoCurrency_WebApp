import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import Loader from "../layouts/Loader/Loader";
import { ExchangeCard } from "../utils/Card/ExchangeCard";
import ErrorLink from "../layouts/Error/ErrorLink";
import "../assets/styles/body.css";
interface ExchangeData {
  id: string;
  name: string;
  image: string;
  trust_score_rank: number;
  url: string;
}

function Exchange() {
  const [exchanges, setExchanges] = useState<ExchangeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorLoad, setErrorLoad] = useState(false);
  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get<ExchangeData[]>(`${server}/exchanges`);
        setExchanges(data);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setErrorLoad(true);
      }
    };

    fetchExchanges();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : errorLoad ? (
        <ErrorLink message={"Error fetching exchanges"} />
      ) : (
        <div className="flex flex-wrap justify-center mt-5 body-elements">
          {exchanges.map((exchange) => (
            <ExchangeCard
              key={exchange.id}
              name={exchange.name}
              image={exchange.image}
              rank={exchange.trust_score_rank}
              url={exchange.url}
            ></ExchangeCard>
          ))}
        </div>
      )}
    </>
  );
}

export default Exchange;
