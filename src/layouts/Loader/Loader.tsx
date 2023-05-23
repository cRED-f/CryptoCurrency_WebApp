import img from "../../assets/Images/loading.gif"
import "../../assets/styles/Loader.css"
function Loader() {
  return (
    <div className="h-[100vh] flex justify-center items-center element">
      <img className=" w-20 " src={img} alt="Loader image" />
    </div>
  )
}

export default Loader
