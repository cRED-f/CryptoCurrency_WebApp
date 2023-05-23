import { FaGlobeAmericas } from "react-icons/fa";

interface ErrorLinkProps {
  message: string;
}
function ErrorLink({ message }: ErrorLinkProps) {
  return (
    <h1 className="flex justify-center items-center  h-[100vh] text-5xl">
      {message}...
      <FaGlobeAmericas />{" "}
    </h1>
  );
}

export default ErrorLink;
