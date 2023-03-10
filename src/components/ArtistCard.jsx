import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();
  return(
    <div className="flex flex-col w-[240px] p-4 bg-white/5  bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    onClick={()=> navigate(`/artists/${track?.artists[0].adamid}`)}>
      <img src={track?.images?.coverart} alt="artist image" className="w-full h-46 rounded-lg" />
      <p className="font-semibold text-white mt-4 text-lg truncate">{track?.subtitle}</p>
    </div> 
  )
  
};

export default ArtistCard;
