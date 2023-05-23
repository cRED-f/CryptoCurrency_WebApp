
interface ExchangeCardProps {
  name: string;
  image: string
  rank: number;
  url: string;
}




export function ExchangeCard({ name, image, rank, url }: ExchangeCardProps) {
  return (
    <div className="card w-40 glass m-2">
      <div className="card-body text-center">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="card-content">
            <img className="m-auto" src={image} alt={name} />
            <h3>{name}</h3>
            <p>Rank: {rank}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
