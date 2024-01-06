import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
    LayersControl,
} from "react-leaflet";
import { useState } from "react";

export default function Cartography({ auth }) {
    const [position, setPosition] = useState([50.439, 30.43]);

    const handleMapClick = (e) => {
        setPosition([e.latlng.lat, e.latlng.lng]);
    };

    const MapClickHandler = () => {
        const map = useMapEvents({
            click: handleMapClick,
        });
        return null;
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Cartography
                </h2>
            }
        >
            <Head title="Cartography" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-xl">
                            JavaScript для картографії
                        </div>
                        <div className="px-6 pb-6 text-xl">
                            Вибрана позиція: {position[0]}, {position[1]}
                        </div>
                        <div className="block max-md:aspect-square md:h-[40rem] w-full overflow-hidden">
                            <span className="p-3 text-lg">Розташування</span>
                            <MapContainer
                                center={position}
                                zoom={17}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <LayersControl position="topright">
                                    <LayersControl.BaseLayer
                                        
                                        name="Base layer"
                                    >
                                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    </LayersControl.BaseLayer>
                                    <LayersControl.BaseLayer name="Topo layer" checked>
                                        <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
                                    </LayersControl.BaseLayer>
                                </LayersControl>
                                <MapClickHandler />
                                <Marker position={position}>
                                    <Popup>Позиція вибрана користувачем</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
