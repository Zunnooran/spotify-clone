import { Error, Loader, SongCard } from "../components";
import { useSelector } from "react-redux";
import { useGetTopChartsQuery } from "../redux/services/shezamCore";

const TopCharts = () => {
    const { activeSong, isPlaying } =useSelector(( state ) => state.player );
    const { data, isFetching, error } =useGetTopChartsQuery();


    if(isFetching ) return <Loader title='Loading Top Songs'/>

    if(error) return <Error/>

    return(
        <div className="flex flex-col">
            <h2 className="font-bold text-white text-3xl text-left mt-3 mb-8">Top Songs</h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data?.map( ( song ,i ) => (
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

export default TopCharts;

