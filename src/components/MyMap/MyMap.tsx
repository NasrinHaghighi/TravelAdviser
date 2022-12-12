import React from 'react'

interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
  }

const MyMap: React.FC<MapProps> = ({
    onClick,
    onIdle,
   
    style,
    ...options
}) => {
const ref = React.useRef<HTMLDivElement>(null);
const [map, setMap] = React.useState<google.maps.Map>();

React.useEffect(() => {
  if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {}));
  }
}, [ref, map]);
return <div ref={ref} style={style}/>
  };

export default MyMap