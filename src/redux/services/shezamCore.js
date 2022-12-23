import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shezamCoreApi = createApi({
        reducerPath: 'shezamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: ( headers ) => {
                headers.set('X-RapidAPI-Key', '1b62a7b143mshf35bfbd0fa931e0p1f2f55jsncb619bed98ca');
                return headers;
            },
        }),
        endpoints: (builder) => ({
            getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),        
            getTopCharts: builder.query({ query: () => '/charts/world'}),
            getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
            getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}`}),
            getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}`}),
            getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}`}),
            getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`})
        }),
    }
    );

    export const {
        useGetSongsByGenreQuery,
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongsByCountryQuery,
        useGetSongsBySearchQuery,
    } = shezamCoreApi