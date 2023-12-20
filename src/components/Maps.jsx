import React from "react";
import { useMemo } from "react";
import config from "../Config/config";

import { GoogleMap,useLoadScript, Marker } from "@react-google-maps/api";

const key = config.API_KEY

function Maps(){
    const {isLoaded} = useLoadScript({
       googleMapsApiKey: key,
    });
    if (!isLoaded) return <div>Loading...</div>;

    return <Map />
}

function Map(){

    const center = useMemo(() => ({lat:43.69,lng:-72.43}), []);

    return <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={{lat:43.69434,lng:-72.43567}}/>
    </GoogleMap>
}


export default Maps