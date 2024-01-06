import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import CryptoJS from "crypto-js";
import { useState } from "react";

export default function Security({ auth }) {
    const [plainText, setPlaintext] = useState("Basic phrase");
    const [cipherText, setCipherText] = useState("");
    const [secretKeyEncode, setSecretKeyEncode] = useState("Secret key");
    const [secretKeyDecode, setSecretKeyDecode] = useState("Secret decode key");
    const [encryptedText, setEncryptedText] = useState("");
    const [decryptedText, setDecryptedText] = useState("");

    // Encrypt
    // const ciphertext = CryptoJS.AES.encrypt(plainText, secretKey).toString();

    // Decrypt
    // const decryptedText = CryptoJS.AES.decrypt(ciphertext, secretKey).toString(CryptoJS.enc.Utf8);

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

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Security
                </h2>
            }
        >
            <Head title="Security" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-xl">
                            JavaScript та безпека (криптографія, стеганографія,
                            резервне копіювання, та інше).
                        </div>
                        <div className="p-6 grid gap-6 lg:grid-cols-2">
                            <div className="grid gap-3">
                                <span>Шифрування тексту</span>
                                <InputLabel
                                    value="Текст який потрібно зашифрувати"
                                    for="plainText"
                                />
                                <TextInput
                                    type="text"
                                    name="plainText"
                                    value={plainText}
                                    onChange={(e) =>
                                        setPlaintext(e.target.value)
                                    }
                                />
                                <InputLabel
                                    value="Слово шифрування"
                                    for="secretKeyEncode"
                                />
                                <TextInput
                                    type="text"
                                    name="secretKeyEncode"
                                    value={secretKeyEncode}
                                    onChange={(e) =>
                                        setSecretKeyEncode(e.target.value)
                                    }
                                />
                                <PrimaryButton
                                    onClick={encryptMessage}
                                    className="bg-cyan-600 hover:bg-cyan-700"
                                >
                                    Зашифрувати
                                </PrimaryButton>
                                <small>Зашифроване повідомлення:</small>
                                {cipherText ? (
                                    <span>{cipherText}</span>
                                ) : (
                                    <span>Тексту немає</span>
                                )}
                            </div>
                            <hr className="lg:hidden h-0.5 bg-gray-900" />
                            <div className="grid gap-3">
                                <span>Дешифрування тексту</span>
                                <InputLabel
                                    value="Текст який потрібно розшифрувати"
                                    for="encryptedText"
                                />
                                <TextInput
                                    type="text"
                                    name="encryptedText"
                                    value={encryptedText}
                                    onChange={(e) =>
                                        setEncryptedText(e.target.value)
                                    }
                                />
                                <InputLabel
                                    value="Слово шифрування"
                                    for="secretKeyDecode"
                                />
                                <TextInput
                                    type="text"
                                    name="secretKeyDecode"
                                    value={secretKeyDecode}
                                    onChange={(e) =>
                                        setSecretKeyDecode(e.target.value)
                                    }
                                />
                                <PrimaryButton
                                    onClick={decryptMessage}
                                    className="bg-red-800 hover:bg-red-900"
                                >
                                    Розшифрувати
                                </PrimaryButton>
                                <small>Розшифорване повідомлення:</small>
                                {cipherText ? (
                                    <span>{decryptedText}</span>
                                ) : (
                                    <span>Тексту немає</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
