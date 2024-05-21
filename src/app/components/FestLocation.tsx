"use client"

import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: 55.6754463,
    lng: 12.5415651
  };

export default function FestLocation() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <h2>
                        Lokation
                    </h2>
                    <p>
                        Denne års FooFest skyder i gang i København, Adressevej 12, Bynavn 1234. Der kører en shuttle bus fra Hovedbanegården hver dag mellem 10:00-22:00
                    </p>
                    <p>
                        Der er en begrænset antal af parkeringspladser. Du skal kunne fremvise en billet hvis du vil benytte festivalens parkeringspladser.
                    </p>
                </div>
                <div className="col-md">
                <LoadScript googleMapsApiKey={"" + process.env.API_KEY_GOOGLEMAPS}>
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                    </GoogleMap>
                </LoadScript>
                </div>
            </div>
        </div>
    )
}