import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputLabel } from "./InputLabel-OxGAYuNE.js";
import { P as PrimaryButton } from "./PrimaryButton-tCuq_nFx.js";
import { T as TextInput } from "./TextInput-hH_3HmZo.js";
import { A as Authenticated } from "./AuthenticatedLayout-cIMfjbdE.js";
import { Head } from "@inertiajs/react";
import CryptoJS from "crypto-js";
import { useState } from "react";
import "./ApplicationLogo-DRETeZBQ.js";
import "@headlessui/react";
function Security({ auth }) {
  const [plainText, setPlaintext] = useState("Basic phrase");
  const [cipherText, setCipherText] = useState("");
  const [secretKeyEncode, setSecretKeyEncode] = useState("Secret key");
  const [secretKeyDecode, setSecretKeyDecode] = useState("Secret decode key");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const encryptMessage = () => {
    setCipherText(
      CryptoJS.AES.encrypt(plainText, secretKeyEncode).toString()
    );
  };
  const decryptMessage = () => {
    setDecryptedText(
      CryptoJS.AES.decrypt(encryptedText, secretKeyDecode).toString(
        CryptoJS.enc.Utf8
      )
    );
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Security" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Security" }),
        /* @__PURE__ */ jsx("div", { className: "py-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "p-6 text-xl", children: "JavaScript та безпека (криптографія, стеганографія, резервне копіювання, та інше)." }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 grid gap-6 lg:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
              /* @__PURE__ */ jsx("span", { children: "Шифрування тексту" }),
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  value: "Текст який потрібно зашифрувати",
                  for: "plainText"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  type: "text",
                  name: "plainText",
                  value: plainText,
                  onChange: (e) => setPlaintext(e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  value: "Слово шифрування",
                  for: "secretKeyEncode"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  type: "text",
                  name: "secretKeyEncode",
                  value: secretKeyEncode,
                  onChange: (e) => setSecretKeyEncode(e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                PrimaryButton,
                {
                  onClick: encryptMessage,
                  className: "bg-cyan-600 hover:bg-cyan-700",
                  children: "Зашифрувати"
                }
              ),
              /* @__PURE__ */ jsx("small", { children: "Зашифроване повідомлення:" }),
              cipherText ? /* @__PURE__ */ jsx("span", { children: cipherText }) : /* @__PURE__ */ jsx("span", { children: "Тексту немає" })
            ] }),
            /* @__PURE__ */ jsx("hr", { className: "lg:hidden h-0.5 bg-gray-900" }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
              /* @__PURE__ */ jsx("span", { children: "Дешифрування тексту" }),
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  value: "Текст який потрібно розшифрувати",
                  for: "encryptedText"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  type: "text",
                  name: "encryptedText",
                  value: encryptedText,
                  onChange: (e) => setEncryptedText(e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  value: "Слово шифрування",
                  for: "secretKeyDecode"
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  type: "text",
                  name: "secretKeyDecode",
                  value: secretKeyDecode,
                  onChange: (e) => setSecretKeyDecode(e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                PrimaryButton,
                {
                  onClick: decryptMessage,
                  className: "bg-red-800 hover:bg-red-900",
                  children: "Розшифрувати"
                }
              ),
              /* @__PURE__ */ jsx("small", { children: "Розшифорване повідомлення:" }),
              cipherText ? /* @__PURE__ */ jsx("span", { children: decryptedText }) : /* @__PURE__ */ jsx("span", { children: "Тексту немає" })
            ] })
          ] })
        ] }) }) })
      ]
    }
  );
}
export {
  Security as default
};
