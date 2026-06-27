import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export default function MapLocation() {
  if (!hasValidKey) {
    return (
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'300px',fontFamily:'sans-serif',backgroundColor:'#0B1F3A',color:'#fff',borderRadius:'1rem',padding:'1rem',textAlign:'center'}}>
        <div>
          <h2>Google Maps API Key Required</h2>
          <p>Please add your GOOGLE_MAPS_PLATFORM_KEY in AI Studio secrets.</p>
        </div>
      </div>
    );
  }

  // Example location: Jakarta Barat
  const position = {lat: -6.1754, lng: 106.7274};

  return (
    <APIProvider apiKey={API_KEY} version="weekly">
      <div style={{height: '300px', width: '100%', borderRadius: '1rem', overflow: 'hidden'}}>
        <Map
          defaultCenter={position}
          defaultZoom={14}
          mapId="DEMO_MAP_ID"
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          style={{width: '100%', height: '100%'}}
        >
          <AdvancedMarker position={position}>
            <Pin background="#4285F4" glyphColor="#fff" />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}
