import { useState, useEffect } from "react";
import { Error, Loader, SongCard } from "../components";
import { useSelector } from "react-redux";
import axios from "axios";
import { useGetSongsByCountryQuery } from "../redux/services/shezamCore";

const CountryTracks = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } =useSelector(( state ) => state.player );
    const { data, isFetching, error } =useGetSongsByCountryQuery(country);

    useEffect( () => {
        axios
        .get(`https://geo.ipify.org/api/v2/country?apiKey=at_sU2WBCAwy90qg5LjribWFpqWEOD60`)
        // .then((res) => setCountry(res?.data?.location?.country))
        .then((res) => setCountry('IN'))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
        
    },[country])

    if(isFetching && loading ) return <Loader title='Loading Songs By Your Country'/>

    if(error && country) return <Error/>

    return(
        <div className="flex flex-col">
            <h2 className="font-bold text-white text-3xl text-left mt-3 mb-8">Top Songs In <span className="font-black">{country}</span></h2>

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

export default CountryTracks;
