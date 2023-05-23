import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import Loader from "../layouts/Loader/Loader";
import { CoinsCard } from "../utils/Card/CoinsCard";
import ErrorLink from "../layouts/Error/ErrorLink";
import { currency } from "../utils/constants/constants";
import "../assets/styles/body.css";
interface CoinsData {
  id: string;
  name: string;
  image: string;
  market_cap_rank: number;
  current_price: number;
}
interface pageChangeProps {
  page: number;
}

function Coin() {
  const [coins, setCoins] = useState<CoinsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorLoad, setErrorLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const [input, setInput] = useState(false);

  const changePage = ({ page }: pageChangeProps) => {
    setPage(page);
    setLoading(true);
  };

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const numValue = Number(value);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get<CoinsData[]>(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setErrorLoad(true);
      }
    };

    fetchCoins();
  }, [currency, page]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : errorLoad ? (
        <ErrorLink message={"Error fetching exchanges"} />
      ) : (
        <div>
          <div className="flex flex-wrap justify-center mt-5 body-elements">
            {coins.map((coins) => (
              <CoinsCard
                key={coins.id}
                name={coins.name}
                image={coins.image}
                rank={coins.market_cap_rank}
                currentPrice={coins.current_price}
                id={coins.id}
              ></CoinsCard>
            ))}
          </div>
          <div className="flex justify-center items-center h-20 btn-group">
            <button
              className="btn glass text-black"
              key={page}
              onClick={() => changePage({ page: page - 1 })}
            >
              «
            </button>
            <button
              className="btn glass text-black "
              onClick={() => setInput(true)}
            >
              {page}
            </button>
            <button
              className="btn glass text-black "
              key={page + 1}
              onClick={() => changePage({ page: page + 1 })}
            >
              »
            </button>
          </div>

          {input && (
            <div className="flex justify-center h-20">
              <div className="form-control ">
                <div className="input-group">
                  <input
                    className=" glass w-20"
                    type="number"
                    onChange={handelChange}
                    value={value}
                  />

                  <button
                    className="btn glass w-10 text-black"
                    onClick={() => changePage({ page: numValue })}
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Coin;
