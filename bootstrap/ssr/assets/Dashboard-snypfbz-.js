import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-cIMfjbdE.js";
import { Head } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import { P as PrimaryButton } from "./PrimaryButton-tCuq_nFx.js";
import "react";
import "./ApplicationLogo-DRETeZBQ.js";
import "@headlessui/react";
function Dashboard({ auth }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Огляд Javascript бібліотек для роботи" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "w-full grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white w-full overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900 h-full grid gap-6 content-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 grid grid-cols-5 gap-3 items-center", children: [
              /* @__PURE__ */ jsx("h3", { className: "col-span-4 text-2xl font-semibold", children: "Картографія" }),
              /* @__PURE__ */ jsx(
                Icon,
                {
                  icon: "gravity-ui:geo",
                  className: "text-orange-400 col-span-1 ml-auto h-16 w-16"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("span", { children: "Включає в себе:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("b", { children: "Можливості Керування Шарами:" }),
                " ",
                "Забезпечує компоненти для легкого управління різними шарами на карті, такими як тайлові шари, векторні шари тощо.",
                " "
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("b", { children: "Реагування на Зміни Стану:" }),
                " ",
                "Забезпечує можливість динамічно змінювати та оновлювати вміст карти у відповідь на події або зміни у стані додатка.",
                " "
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("b", { children: "Робота з Геоданими:" }),
                " Зручні інструменти для взаємодії з геоданими, додавання маркерів, ліній, полігонів та інших об'єктів на карті."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: "text-orange-400 hover:text-orange-500 underline",
                  href: "https://react-leaflet.js.org/",
                  children: "react-leaflet.js"
                }
              ),
              /* @__PURE__ */ jsx("a", { href: route("cartography"), children: /* @__PURE__ */ jsx(PrimaryButton, { className: "bg-orange-400 hover:bg-orange-500 focus:bg-orange-500 active:bg-orange-500", children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "Переглянути" }) }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white w-full overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900 h-full grid gap-6 content-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 grid grid-cols-5 gap-3 items-center", children: [
              /* @__PURE__ */ jsx("h3", { className: "col-span-4 text-2xl font-semibold", children: "Геоінформаційні системи" }),
              /* @__PURE__ */ jsx(
                Icon,
                {
                  icon: "material-symbols:map",
                  className: "text-green-600 col-span-1 ml-auto h-16 w-16"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("span", { children: "Включає в себе:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("b", { children: "Векторні Шари та Геооб'єкти:" }),
                " ",
                "Додавання та робота з векторними шарами для відображення геооб'єктів на карті.",
                " "
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("b", { children: "Підтримка Різноманітних Картографічних Джерел:" }),
                " ",
                "Підтримка різноманітних картографічних джерел, включаючи OpenStreetMap, Mapbox, Bing Maps, Esri та інші. Користувач може вибирати картографічний шар, який найкраще відповідає його потребам.",
                " "
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("b", { children: "Інтеграція з Іншими Візуалізаційними Бібліотеками:" }),
                " ",
                "Розширення можливостей візуалізації за допомогою комбінації різних бібліотек."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: "text-green-600 hover:text-green-700 underline",
                  href: "https://react-leaflet.js.org/",
                  children: "react-leaflet.js"
                }
              ),
              /* @__PURE__ */ jsx("a", { href: route("cartography"), children: /* @__PURE__ */ jsx(PrimaryButton, { className: "bg-green-600 hover:bg-green-700 focus:bg-green-700 active:bg-green-700", children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "Переглянути" }) }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white w-full overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900 h-full grid gap-6 content-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 grid grid-cols-5 gap-3 items-center", children: [
              /* @__PURE__ */ jsx("h3", { className: "col-span-4 text-2xl font-semibold", children: "Штучний інтелект" }),
              /* @__PURE__ */ jsx(
                Icon,
                {
                  icon: "mdi:chip",
                  className: "text-cyan-600 col-span-1 ml-auto h-16 w-16"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("span", { children: "Включає в себе:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("b", { children: "Можливість побудови та навчання моделей машинного навчання:" }),
                " ",
                "Створення та навчання моделі машинного навчання безпосередньо у веб-середовищі.",
                " "
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("b", { children: "Підтримка різних типів моделей, включаючи нейронні мережі:" }),
                " ",
                "Забезпечує розширений функціонал для побудови різних типів моделей, зокрема нейронних мереж, які використовуються в глибокому навчанні.",
                " "
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("b", { children: "Інтеграція з бібліотеками для машинного навчання:" }),
                " ",
                "Взаємодія з популярними бібліотеками для машинного навчання, що розширює можливості використання різноманітних алгоритмів та інструментів."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: "text-cyan-600 hover:text-cyan-700 underline",
                  href: "https://www.tensorflow.org/js",
                  children: "tensorflow.js"
                }
              ),
              /* @__PURE__ */ jsx("a", { href: route("cartography"), children: /* @__PURE__ */ jsx(PrimaryButton, { className: "bg-cyan-600 hover:bg-cyan-700 focus:bg-cyan-700 active:bg-cyan-700", children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "Переглянути" }) }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white w-full overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900 h-full grid gap-6 content-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 grid grid-cols-5 gap-3 items-center", children: [
              /* @__PURE__ */ jsx("h3", { className: "col-span-4 text-2xl font-semibold", children: "Шифрування даних" }),
              /* @__PURE__ */ jsx(
                Icon,
                {
                  icon: "mdi:lock",
                  className: "text-red-500 col-span-1 ml-auto h-16 w-16"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("span", { children: "Включає в себе:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("b", { children: "Широкий Вибір Алгоритмів:" }),
                " ",
                "Підтримка різноманітних криптографічних алгоритмів, таких як SHA-1, SHA-256, SHA-512, MD5, AES, Triple DES, Rabbit тощо.",
                " "
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("b", { children: "Реалізація AES та DES:" }),
                " вбудовані Реалізація алгоритмів AES (Advanced Encryption Standard) та DES (Data Encryption Standard) для симетричного шифрування.",
                " "
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("b", { children: "Шифрування та Дешифрування З Ключем:" }),
                " ",
                "Можливість використовувати ключі для шифрування та дешифрування даних, забезпечуючи контроль доступу до зашифрованої інформації."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: "text-red-500 hover:text-red-600 underline",
                  href: "https://cryptojs.gitbook.io/docs/",
                  children: "react-leaflet.js"
                }
              ),
              /* @__PURE__ */ jsx("a", { href: route("cartography"), children: /* @__PURE__ */ jsx(PrimaryButton, { className: "bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-600", children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "Переглянути" }) }) })
            ] })
          ] }) })
        ] }) }) })
      ]
    }
  );
}
export {
  Dashboard as default
};
