import React from "react";

const INFO_USERS = props => {

    const resProps = props.name_country
    let CONTAINER_SHOW = document.getElementById('#idContent')

    if(props.name_country.length){
        CONTAINER_SHOW.style.display = 'flex'
    }

    return (
        <div className="container contPROPS dsPROPS" id="#idContent">
            <section className="container">
                <h1>UBICACIÓN</h1>
                <p className="flex-row m-0 p-2 justify-center text-center">
                    <i className='bx bxs-buildings p-1'></i>
                    Ciudad: {props.name_city}
                </p>
                <p className="flex-row m-0 p-2 justify-center text-center">
                <i class='bx bxs-flag-alt p-1'></i>
                    Pais: {props.name_country}
                </p>
                <p className="flex-row m-0 p-2 justify-center text-center">
                <i class='bx bx-reflect-horizontal p-1' ></i>
                    Latitud: {props.lat}
                </p>
                <p className="flex-row m-0 p-2 justify-center text-center">
                <i class='bx bx-reflect-vertical p-1'></i>
                     Longitud: {props.lon}
                </p>
            </section>


            <section className="container">
                <h1>CLIMA</h1>
                <p className="flex-row m-0 p-2 justify-center text-center">
                    <i class='bx bx-sun p-1'></i>
                    Temperatura actual: {props.temperature}°C
                </p>
                <p className="flex-row m-0 p-2 justify-center text-center">
                   <i class='bx bx-trending-up p-1'></i>
                    Temperatura max: {props.temperature_max}°C
                </p>
                <p className="flex-row m-0 p-2 justify-center text-center">
                <i class='bx bx-trending-down p-1'></i>
                    Temperatura min: {props.temperature_min}°C
                </p>
                <p className="flex-row m-0 p-2 justify-center text-center">
                    <i className='bx bx-coffee p-1'></i>
                    Humedad: {props.humidity}%
                </p>
                <p className="flex-row m-0 p-2 justify-center text-center">
                    <i class='bx bx-wind p-1'></i>
                    Velocidad del viento: {props.wind_speed} km/h
                </p>
            </section>
        </div>


    );
}

export default INFO_USERS;