import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-cIMfjbdE.js";
import { Head } from "@inertiajs/react";
import { MapContainer, LayersControl, TileLayer, Polygon, ImageOverlay } from "react-leaflet";
import { useState } from "react";
import "./ApplicationLogo-DRETeZBQ.js";
import "@headlessui/react";
function Geoinfo({ auth }) {
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
    [50.43829270599865, 30.42137861251831]
  ];
  const bounds = [
    [50.4407, 30.4305],
    [50.44, 30.4325]
  ];
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Geoinfo" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Geoinfo" }),
        /* @__PURE__ */ jsx("div", { className: "py-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "p-6 text-xl", children: "JavaScript для геоінформаційних систем" }),
          /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-xl", children: /* @__PURE__ */ jsx("div", { children: "Відображення території НАУ" }) }),
          /* @__PURE__ */ jsxs("div", { className: "block max-md:aspect-square md:h-[40rem] w-full overflow-hidden", children: [
            /* @__PURE__ */ jsx("span", { className: "p-3 text-lg", children: "Розташування" }),
            /* @__PURE__ */ jsxs(
              MapContainer,
              {
                center: position,
                zoom: 16,
                style: {
                  height: "100%",
                  width: "100%"
                },
                children: [
                  /* @__PURE__ */ jsxs(LayersControl, { position: "topright", children: [
                    /* @__PURE__ */ jsx(
                      LayersControl.BaseLayer,
                      {
                        checked: true,
                        name: "Base layer",
                        children: /* @__PURE__ */ jsx(TileLayer, { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" })
                      }
                    ),
                    /* @__PURE__ */ jsx(LayersControl.BaseLayer, { name: "Topo layer", children: /* @__PURE__ */ jsx(TileLayer, { url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" }) })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Polygon,
                    {
                      pathOptions: {
                        color: "#5755ff",
                        dashArray: [0, 10, 10, 10]
                      },
                      positions: polygon
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ImageOverlay,
                    {
                      attributes: { stroke: "red" },
                      url: "images/NAU.jpg",
                      bounds
                    }
                  )
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
  Geoinfo as default
};
