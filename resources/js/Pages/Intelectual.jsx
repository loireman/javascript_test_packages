import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import * as tf from "@tensorflow/tfjs";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function Intelectual({ auth }) {
    const [trainedModel, setTrainedModel] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [isTraining, setIsTraining] = useState(false);

    // Create a simple model.
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

    const trainModel = async () => {
        setIsTraining(true);

        // Generate some synthetic data for training. (y = 2x - 1)
        const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
        const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

        // Train the model using the data.
        await model.fit(xs, ys, { epochs: 200 });

        // Set the trained model to the state
        setTrainedModel(model);

        setIsTraining(false);

        // Make prediction after training
        makePrediction();
    };

    const makePrediction = () => {
        if (trainedModel) {
            // Use the trained model to make predictions or display relevant information
            const inputTensor = tf.tensor2d([number !== "" ? number : 5 ], [1, 1]);
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
        // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
        setNumber(parseFloat(number) || "");
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Intelectual
                </h2>
            }
        >
            <Head title="Intelectual" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="p-6 text-xl">
                                JavaScript та інтелектуальні програмні
                                компоненти інформаційних систем. підтримка
                                засобів штучного інтелекту, експертних систем,
                                розпізнавання образів, тощо.
                            </div>
                            <div className="p-6 text-xl">
                                Модель для обчислення виразу 2x - 1 з вибраним
                                значенням за допомогою ШІ
                            </div>
                            <InputLabel
                                for="calc"
                                value="Значення (базове - 5)"
                            />
                            <TextInput
                                placeholder="Type number..."
                                value={number}
                                onChange={handleNumber}
                                onBlur={handleFloat}
                                name="calc"
                                className="mr-5"
                            />
                            <button
                                onClick={trainModel}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                disabled={isTraining}
                            >
                                {isTraining
                                    ? "Тренування..."
                                    : "Запустити модель"}
                            </button>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Result:{" "}
                                    {prediction !== null
                                        ? prediction
                                        : "No prediction yet"}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
