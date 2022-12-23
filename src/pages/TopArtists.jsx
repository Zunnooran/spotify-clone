import { Error, Loader, ArtistCard } from "../components";

import { useGetTopChartsQuery } from "../redux/services/shezamCore";


const TopArtists = () => {
    const { data, isFetching, error } =useGetTopChartsQuery();


    if(isFetching ) return <Loader title='Loading Top Songs'/>

    if(error) return <Error/>

    return(
        <div className="flex flex-col">
            <h2 className="font-bold text-white text-3xl text-left mt-3 mb-8">Top Artists</h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data?.map( ( track ) => (
                    <ArtistCard
                    key={track.key}
                    track={track}
                    />
                ))}
            </div>
        </div>
    )};

export default TopArtists;

