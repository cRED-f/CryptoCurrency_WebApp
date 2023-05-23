import { FcCurrencyExchange } from "react-icons/fc";
import { Link } from "react-router-dom";

interface CoinsCardProps {
  name: string;
  image: string;
  rank: number;
  currentPrice: number;
  id: string;
}

export function CoinsCard({
  name,
  image,
  rank,
  currentPrice,
  id,
}: CoinsCardProps) {
  return (
    <Link to={`/coin-details/${id}`} className="card w-40  glass m-2">
      <div className="card-body text-center">
        <div className="card-content">
          <img className="m-auto w-11" src={image} alt={name} />
          <h3>{name}</h3>
          <p>Rank: {rank}</p>
          <p className="flex justify-center items-center">
            <FcCurrencyExchange />:{currentPrice}$
          </p>
        </div>
      </div>
    </Link>
  );
}
