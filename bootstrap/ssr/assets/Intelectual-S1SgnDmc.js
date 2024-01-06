import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { A as Authenticated } from "./AuthenticatedLayout-cIMfjbdE.js";
import { Head } from "@inertiajs/react";
import * as tf from "@tensorflow/tfjs";
import { I as InputLabel } from "./InputLabel-OxGAYuNE.js";
import { T as TextInput } from "./TextInput-hH_3HmZo.js";
import "./ApplicationLogo-DRETeZBQ.js";
import "@headlessui/react";
function Intelectual({ auth }) {
  const [trainedModel, setTrainedModel] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isTraining, setIsTraining] = useState(false);
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  model.compile({ loss: "meanSquaredError", optimizer: "sgd" });
  const trainModel = async () => {
    setIsTraining(true);
    const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);
    await model.fit(xs, ys, { epochs: 200 });
    setTrainedModel(model);
    setIsTraining(false);
    makePrediction();
  };
  const makePrediction = () => {
    if (trainedModel) {
      const inputTensor = tf.tensor2d([number !== "" ? number : 5], [1, 1]);
      const predictionTensor = trainedModel.predict(inputTensor);
      const predictionValue = predictionTensor.dataSync()[0];
      setPrediction(predictionValue);
    }
  };
  useEffect(() => {
    trainModel();
  }, []);
  const [number, setNumber] = useState("");
  const handleNumber = (e) => {
    let input = e.target.value;
    if (input.match(/^([0-9]+)?(\.)?([0-9]+)?$/)) {
      setNumber(input);
    }
  };
  const handleFloat = () => {
    setNumber(parseFloat(number) || "");
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Intelectual" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Intelectual" }),
        /* @__PURE__ */ jsx("div", { className: "py-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900", children: [
          /* @__PURE__ */ jsx("div", { className: "p-6 text-xl", children: "JavaScript та інтелектуальні програмні компоненти інформаційних систем. підтримка засобів штучного інтелекту, експертних систем, розпізнавання образів, тощо." }),
          /* @__PURE__ */ jsx("div", { className: "p-6 text-xl", children: "Модель для обчислення виразу 2x - 1 з вибраним значенням за допомогою ШІ" }),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              for: "calc",
              value: "Значення (базове - 5)"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              placeholder: "Type number...",
              value: number,
              onChange: handleNumber,
              onBlur: handleFloat,
              name: "calc",
              className: "mr-5"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: trainModel,
              className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
              disabled: isTraining,
              children: isTraining ? "Тренування..." : "Запустити модель"
            }
          ),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-2", children: [
            "Result:",
            " ",
            prediction !== null ? prediction : "No prediction yet"
          ] }) })
        ] }) }) }) })
      ]
    }
  );
}
export {
  Intelectual as default
};
