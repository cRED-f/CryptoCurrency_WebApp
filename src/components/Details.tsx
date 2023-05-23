import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import Loader from "../layouts/Loader/Loader";
import "../assets/styles/Details.css";
import { useParams } from "react-router-dom";
import { currency } from "../utils/constants/constants";
import ErrorLink from "../layouts/Error/ErrorLink";
import Chart from "../components/Chart";

interface CoinsData {
  id: string;
  name: string;
  image: string;
  market_cap_rank: number;
  current_price: number;
  max_supply: number;
  total_supply: number;
  price_change_percentage_24h: number;
  prices: [];
}
function Details() {
  const { id } = useParams<{ id: string }>();
  const [coin, setCoin] = useState<CoinsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorLoad, setErrorLoad] = useState(false);
  const [days, setDays] = useState("24h");
  const [chartArr, setChartArr] = useState([]);
  const btns = ["24h", "7d", "14d", "30d", "60d", "1y", "max"];

  const handelClick = (key: string) => {
    switch (key) {
      case "24h":
        setDays("24h");

        break;
      case "7d":
        setDays("7d");

        break;
      case "14d":
        setDays("14d");

        break;
      case "30d":
        setDays("30d");

        break;
      case "60d":
        setDays("60d");

        break;
      case "1y":
        setDays("1y");

        break;
      case "max":
        setDays("max");

        break;
      default:
        break;
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(false);
  };

  useEffect(() => {
    const fetchCoinsDetails = async () => {
      try {
        const { data } = await axios.get<CoinsData>(`${server}/coins/${id}`);

        const { data: chartData } = await axios.get<CoinsData>(
          `${server}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        console.log(coin);
        setCoin(data);
        setChartArr(chartData.prices);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setErrorLoad(true);
      }
    };
    fetchCoinsDetails();
  }, [id, currency, days]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : errorLoad ? (
        <ErrorLink message={"Page Does Not Exists"} />
      ) : (
        <div className="body-elements h-[100vh]">
          <form onSubmit={handleSubmit}>
            <div className="flex-col  w-screen">
              <div className="DetailsChart w-3/5 m-auto my-5">
                <div className="m-auto">
                  <Chart arr={chartArr} currency={currency} days={days} />
                </div>
              </div>
              <div className="m-auto h-20 w-[50%] DetailsBtns my-10">
                <div className="flex justify-center ">
                  {btns.map((i) => (
                    <button
                      className="btn detailsBtn2 m-3 glass w-10 text-black  "
                      key={i}
                      onClick={() => handelClick(i)}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </form>
        </div>
      )}

      {}
    </>
  );
}

export default Details;
