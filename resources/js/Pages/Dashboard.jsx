import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Огляд Javascript бібліотек для роботи
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="w-full grid gap-6 md:grid-cols-2">
                        <div className="bg-white w-full overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 h-full grid gap-6 content-between">
                                <div className="p-3 grid grid-cols-5 gap-3 items-center">
                                    <h3 className="col-span-4 text-2xl font-semibold">
                                        Картографія
                                    </h3>
                                    <Icon
                                        icon="gravity-ui:geo"
                                        className="text-orange-400 col-span-1 ml-auto h-16 w-16"
                                    />
                                </div>

                                <span>Включає в себе:</span>
                                <ul className="list-disc">
                                    <li>
                                        <b>Можливості Керування Шарами:</b>{" "}
                                        Забезпечує компоненти для легкого
                                        управління різними шарами на карті,
                                        такими як тайлові шари, векторні шари
                                        тощо.{" "}
                                    </li>
                                    <li>
                                        <b>Реагування на Зміни Стану:</b>{" "}
                                        Забезпечує можливість динамічно
                                        змінювати та оновлювати вміст карти у
                                        відповідь на події або зміни у стані
                                        додатка.{" "}
                                    </li>
                                    <li>
                                        <b>Робота з Геоданими:</b> Зручні
                                        інструменти для взаємодії з геоданими,
                                        додавання маркерів, ліній, полігонів та
                                        інших об'єктів на карті.
                                    </li>
                                </ul>
                                <div className="flex justify-between items-center">
                                    <a
                                        className="text-orange-400 hover:text-orange-500 underline"
                                        href="https://react-leaflet.js.org/"
                                    >
                                        react-leaflet.js
                                    </a>
                                    <a href={route("cartography")}>
                                        <PrimaryButton className="bg-orange-400 hover:bg-orange-500 focus:bg-orange-500 active:bg-orange-500">
                                            <span className="text-lg">
                                                Переглянути
                                            </span>
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-full overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 h-full grid gap-6 content-between">
                                <div className="p-3 grid grid-cols-5 gap-3 items-center">
                                    <h3 className="col-span-4 text-2xl font-semibold">
                                        Геоінформаційні системи
                                    </h3>
                                    <Icon
                                        icon="material-symbols:map"
                                        className="text-green-600 col-span-1 ml-auto h-16 w-16"
                                    />
                                </div>

                                <span>Включає в себе:</span>
                                <ul className="list-disc">
                                    <li>
                                        <b>Векторні Шари та Геооб'єкти:</b>{" "}
                                        Додавання та робота з векторними шарами
                                        для відображення геооб'єктів на карті.{" "}
                                    </li>
                                    <li>
                                        <b>
                                            Підтримка Різноманітних
                                            Картографічних Джерел:
                                        </b>{" "}
                                        Підтримка різноманітних картографічних
                                        джерел, включаючи OpenStreetMap, Mapbox,
                                        Bing Maps, Esri та інші. Користувач може
                                        вибирати картографічний шар, який
                                        найкраще відповідає його потребам.{" "}
                                    </li>
                                    <li>
                                        <b>
                                            Інтеграція з Іншими Візуалізаційними
                                            Бібліотеками:
                                        </b>{" "}
                                        Розширення можливостей візуалізації за
                                        допомогою комбінації різних бібліотек.
                                    </li>
                                </ul>
                                <div className="flex justify-between items-center">
                                    <a
                                        className="text-green-600 hover:text-green-700 underline"
                                        href="https://react-leaflet.js.org/"
                                    >
                                        react-leaflet.js
                                    </a>
                                    <a href={route("cartography")}>
                                        <PrimaryButton className="bg-green-600 hover:bg-green-700 focus:bg-green-700 active:bg-green-700">
                                            <span className="text-lg">
                                                Переглянути
                                            </span>
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-full overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 h-full grid gap-6 content-between">
                                <div className="p-3 grid grid-cols-5 gap-3 items-center">
                                    <h3 className="col-span-4 text-2xl font-semibold">
                                        Штучний інтелект
                                    </h3>
                                    <Icon
                                        icon="mdi:chip"
                                        className="text-cyan-600 col-span-1 ml-auto h-16 w-16"
                                    />
                                </div>

                                <span>Включає в себе:</span>
                                <ul className="list-disc">
                                    <li>
                                        <b>
                                            Можливість побудови та навчання
                                            моделей машинного навчання:
                                        </b>{" "}
                                        Створення та навчання моделі машинного
                                        навчання безпосередньо у веб-середовищі.{" "}
                                    </li>
                                    <li>
                                        <b>
                                            Підтримка різних типів моделей,
                                            включаючи нейронні мережі:
                                        </b>{" "}
                                        Забезпечує розширений функціонал для
                                        побудови різних типів моделей, зокрема
                                        нейронних мереж, які використовуються в
                                        глибокому навчанні.{" "}
                                    </li>
                                    <li>
                                        <b>
                                            Інтеграція з бібліотеками для
                                            машинного навчання:
                                        </b>{" "}
                                        Взаємодія з популярними бібліотеками для
                                        машинного навчання, що розширює
                                        можливості використання різноманітних
                                        алгоритмів та інструментів.
                                    </li>
                                </ul>
                                <div className="flex justify-between items-center">
                                    <a
                                        className="text-cyan-600 hover:text-cyan-700 underline"
                                        href="https://www.tensorflow.org/js"
                                    >
                                        tensorflow.js
                                    </a>

                                    <a href={route("cartography")}>
                                        <PrimaryButton className="bg-cyan-600 hover:bg-cyan-700 focus:bg-cyan-700 active:bg-cyan-700">
                                            <span className="text-lg">
                                                Переглянути
                                            </span>
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-full overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 h-full grid gap-6 content-between">
                                <div className="p-3 grid grid-cols-5 gap-3 items-center">
                                    <h3 className="col-span-4 text-2xl font-semibold">
                                        Шифрування даних
                                    </h3>
                                    <Icon
                                        icon="mdi:lock"
                                        className="text-red-500 col-span-1 ml-auto h-16 w-16"
                                    />
                                </div>

                                <span>Включає в себе:</span>
                                <ul className="list-disc">
                                    <li>
                                        <b>Широкий Вибір Алгоритмів:</b>{" "}
                                        Підтримка різноманітних криптографічних
                                        алгоритмів, таких як SHA-1, SHA-256,
                                        SHA-512, MD5, AES, Triple DES, Rabbit
                                        тощо.{" "}
                                    </li>
                                    <li>
                                        <b>Реалізація AES та DES:</b> вбудовані
                                        Реалізація алгоритмів AES (Advanced
                                        Encryption Standard) та DES (Data
                                        Encryption Standard) для симетричного
                                        шифрування.{" "}
                                    </li>
                                    <li>
                                        <b>
                                            Шифрування та Дешифрування З Ключем:
                                        </b>{" "}
                                        Можливість використовувати ключі для
                                        шифрування та дешифрування даних,
                                        забезпечуючи контроль доступу до
                                        зашифрованої інформації.
                                    </li>
                                </ul>
                                <div className="flex justify-between items-center">
                                    <a
                                        className="text-red-500 hover:text-red-600 underline"
                                        href="https://cryptojs.gitbook.io/docs/"
                                    >
                                        react-leaflet.js
                                    </a>

                                    <a href={route("cartography")}>
                                        <PrimaryButton className="bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-600">
                                            <span className="text-lg">
                                                Переглянути
                                            </span>
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
