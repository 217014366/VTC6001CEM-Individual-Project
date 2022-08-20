import { Box } from '@mui/material';
import ReactMapGL, {
  GeolocateControl,
  Marker,
  NavigationControl,
} from 'react-map-gl';
import { useValue } from '../../../context/ContextProvider';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';
import Geocoder from './Geocoder';
import Map, {Source, Layer} from 'react-map-gl';
import DCB from '../../data/hksar_18_district_boundary.json'

const AddLocation = () => {
  // const {
  //   state: {
  //     location: { lng, lat },
  //   },
  //   dispatch,
  // } = useValue();
  const mapRef = useRef();

  const MAPBOX_TOKEN = 'pk.eyJ1IjoiMjE3MDE0MzY2IiwiYSI6ImNsMmN2NWg1ZjBwMXIzcHA3NWJoenJwNjUifQ.1dvrbLezLwJCknKxzL7uEQ'; // Set your mapbox token here

  // useEffect(() => {
  //   if (!lng && !lat) {
  //     fetch('https://ipapi.co/json')
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         mapRef.current.flyTo({
  //           center: [data.longitude, data.latitude],
  //         });
  //         dispatch({
  //           type: 'UPDATE_LOCATION',
  //           payload: { lng: data.longitude, lat: data.latitude },
  //         });
  //       });
  //   }
  // }, []);
  const geojson = DCB;
  let lng = 114.147216, lat = 22.352711;

  const layerStyle = {
    id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'percentile',
      stops: [
        [0, '#3288bd'],
        [1, '#66c2a5'],
        [2, '#abdda4'],
        [3, '#e6f598'],
        [4, '#ffffbf'],
        [5, '#fee08b'],
        [6, '#fdae61'],
        [7, '#f46d43'],
        [8, '#d53e4f']
      ]
    },
    'fill-opacity': 0.8
  }
  };
  return (
    <Box
      sx={{
        height: 600,
        position: 'relative',
      }}
    >
      <ReactMapGL
        ref={mapRef}
        mapboxAccessToken='pk.eyJ1IjoiMjE3MDE0MzY2IiwiYSI6ImNsMmN2NWg1ZjBwMXIzcHA3NWJoenJwNjUifQ.1dvrbLezLwJCknKxzL7uEQ'
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 10.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {/* <Marker
          latitude={lat}
          longitude={lng}
          draggable
          onDragEnd={(e) =>
            dispatch({
              type: 'UPDATE_LOCATION',
              payload: { lng: e.lngLat.lng, lat: e.lngLat.lat },
            })
          }
        /> */}
        <NavigationControl position="bottom-right" />
        <GeolocateControl
          position="top-left"
          trackUserLocation
          // onGeolocate={(e) =>
          //   dispatch({
          //     type: 'UPDATE_LOCATION',
          //     payload: { lng: e.coords.longitude, lat: e.coords.latitude },
          //   })
          // }
        />
        <Geocoder />
        <Source type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </ReactMapGL>
    </Box>
  );
};

export default AddLocation;
