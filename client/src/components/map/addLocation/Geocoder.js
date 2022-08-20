import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useControl } from 'react-map-gl';
import { useValue } from '../../../context/ContextProvider';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const Geocoder = () => {
  const { dispatch } = useValue();
  const ctrl = new MapBoxGeocoder({
    accessToken: 'pk.eyJ1IjoiMjE3MDE0MzY2IiwiYSI6ImNsMmN2NWg1ZjBwMXIzcHA3NWJoenJwNjUifQ.1dvrbLezLwJCknKxzL7uEQ',
    marker: false,
    collapsed: true,
  });
  useControl(() => ctrl);
  ctrl.on('result', (e) => {
    const coords = e.result.geometry.coordinates;
    dispatch({
      type: 'UPDATE_LOCATION',
      payload: { lng: coords[0], lat: coords[1] },
    });
  });
  return null;
};

export default Geocoder;
