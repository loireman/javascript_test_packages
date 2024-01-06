import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    MapContainer,
    TileLayer,
    useMapEvents,
    LayersControl,
    Polygon,
    ImageOverlay,
} from "react-leaflet";
import { useState } from "react";

export default function Geoinfo({ auth }) {
    const [position, setPosition] = useState([50.437, 30.429]);

    const polygon = [
        [50.441282176420835, 30.43225228786469],
        [50.43748978749204, 30.434650182724003],
        [50.43725403436531, 30.433770418167114],
        [50.43569598418144, 30.433137416839603],
        [50.43542605360896, 30.434156656265262],
        [50.4344385729574, 30.43348610401154],
        [50.43543630416516, 30.431817770004276],
        [50.43569940101427, 30.43197870254517],
        [50.43563789798569, 30.4329389333725],
        [50.43589074325884, 30.43296575546265],
        [50.437790456442805, 30.42651236057282],
        [50.434035374243294, 30.42398571968079],
        [50.43473926128847, 30.422075986862183],
        [50.43592149461887, 30.422912836074833],
        [50.43829270599865, 30.42137861251831],
    ];

    const bounds = [
        [50.4407, 30.4305],
        [50.4400, 30.4325],
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Geoinfo
                </h2>
            }
        >
            <Head title="Geoinfo" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-xl">
                            JavaScript для геоінформаційних систем
                        </div>
                        <div className="px-6 text-xl">
                            <div>Відображення території НАУ</div>
                        </div>
                        <div className="max-md:aspect-square md:h-[40rem] p-6 w-full overflow-hidden">
                            <MapContainer
                                center={position}
                                zoom={16}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <LayersControl position="topright">
                                    <LayersControl.BaseLayer
                                        checked
                                        name="Base layer"
                                    >
                                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    </LayersControl.BaseLayer>
                                    <LayersControl.BaseLayer name="Topo layer">
                                        <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
                                    </LayersControl.BaseLayer>
                                </LayersControl>
                                <Polygon
                                    pathOptions={{
                                        color: "#5755ff",
                                        dashArray: [0, 10, 10, 10],
                                    }}
                                    positions={polygon}
                                />
                                <ImageOverlay
                                    attributes={{ stroke: "red" }}
                                    url="images/NAU.jpg"
                                    bounds={bounds}
                                />
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
