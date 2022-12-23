import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Loader, Error, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shezamCore";

const SongDetails = () => {

    const { songid, id: artistId } =useParams();
    const dispatch =useDispatch();
    const { activeSong, isPlaying } = useSelector( (state) => state.player );
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery( { songid });
    const {data, isFetching: isFetchngRelatedSongs, error } = useGetSongRelatedQuery( { songid });

    const handlePauseClick =  () => {
        dispatch(playPause(false));
      };
    
      const handlePlayClick = ( song ,i ) => {
        dispatch(setActiveSong({ song, data, i}));
        dispatch(playPause(true));
      };

    if(isFetchingSongDetails || isFetchngRelatedSongs ) return
    <Loader title="Searching Song Details"/>

    if(error) return <Error/>

    return(
        <div className="felx flex-col">
            <DetailsHeader 
                artisId={ artistId } 
                songData={songData}
            />

            <div className="mb-8">
                <h2 className="font-bold text-white text-3xl">Lyrics</h2>

                <div className="mt-5">
                    {
                       songData?.sections[1].type === 'LYRICS' ?
                        songData?.sections[1]?.text.map(( line, i) => (
                            <p  key={`lyrics-${line}-${i}`}
                                className="text-gray-200 text-base my-1">{line}</p>
                        )) : <p className="text-gray-200 text-base my-1">Sorry, No Lyrics Available</p>
                    }
                </div>
            </div>
            <RelatedSongs
                data={data}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick }
            />
        </div>
    )
};

export default SongDetails;
