import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-cIMfjbdE.js";
import { Head } from "@inertiajs/react";
import { MapContainer, LayersControl, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "./ApplicationLogo-DRETeZBQ.js";
import "@headlessui/react";
function Cartography({ auth }) {
  const [position, setPosition] = useState([50.439, 30.43]);
  const handleMapClick = (e) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
  };
  const MapClickHandler = () => {
    useMapEvents({
      click: handleMapClick
    });
    return null;
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Cartography" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Cartography" }),
        /* @__PURE__ */ jsx("div", { className: "py-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "p-6 text-xl", children: "JavaScript для картографії" }),
          /* @__PURE__ */ jsxs("div", { className: "px-6 pb-6 text-xl", children: [
            "Вибрана позиція: ",
            position[0],
            ", ",
            position[1]
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "block max-md:aspect-square md:h-[40rem] w-full overflow-hidden", children: [
            /* @__PURE__ */ jsx("span", { className: "p-3 text-lg", children: "Розташування" }),
            /* @__PURE__ */ jsxs(
              MapContainer,
              {
                center: position,
                zoom: 17,
                style: {
                  height: "100%",
                  width: "100%"
                },
                children: [
                  /* @__PURE__ */ jsxs(LayersControl, { position: "topright", children: [
                    /* @__PURE__ */ jsx(
                      LayersControl.BaseLayer,
                      {
                        name: "Base layer",
                        children: /* @__PURE__ */ jsx(TileLayer, { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" })
                      }
                    ),
                    /* @__PURE__ */ jsx(LayersControl.BaseLayer, { name: "Topo layer", checked: true, children: /* @__PURE__ */ jsx(TileLayer, { url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" }) })
                  ] }),
                  /* @__PURE__ */ jsx(MapClickHandler, {}),
                  /* @__PURE__ */ jsx(Marker, { position, children: /* @__PURE__ */ jsx(Popup, { children: "Позиція вибрана користувачем" }) })
                ]
              }
            )
          ] })
        ] }) }) })
      ]
    }
  );
}
export {
  Cartography as default
};
