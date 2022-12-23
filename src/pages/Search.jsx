import { Error, Loader, SongCard } from "../components";
import { useSelector } from "react-redux";
import { useGetSongsBySearchQuery } from "../redux/services/shezamCore";
import { useParams } from "react-router-dom";

const Search = () => {
  const { searchTerm } =useParams();
  const { activeSong, isPlaying } =useSelector(( state ) => state.player );
  const { data, isFetching, error } =useGetSongsBySearchQuery(searchTerm);
  const songs = data?.tracks?.hits?.map((song) => song.track)


  if(isFetching ) return <Loader title='Loading Top Songs'/>

  if(error) return <Error/>

  return(
    
    <div className="flex flex-col">
      <h2 className="font-bold text-white text-3xl text-left mt-3 mb-8">Showing Results <span className="font-black text-cyan-700">{searchTerm}</span></h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map( ( song ,i ) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
            />
        ))}
      </div>
    </div>
  )};

export default Search;

