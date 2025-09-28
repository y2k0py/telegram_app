import WebApp from '@twa-dev/sdk'
import {useEffect, useState} from "react";

function App() {
    const [buttonText, setButtonText] = useState('Continue');
    const [buttonVisible, setButtonVisible] = useState(false);
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const [buttonColor, setButtonColor] = useState('#2481cc');
    const [lastAction, setLastAction] = useState('');

    useEffect(() => {
        // Инициализация WebApp
        WebApp.ready();
        WebApp.expand();

        // Настройка обработчика клика
        WebApp.onEvent('mainButtonClicked', () => {
            setLastAction('Кнопка нажата! 🎉');
            // Можете добавить любую логику
            // WebApp.close(); // Закрыть приложение
        });
    }, []);

    const showButton = () => {
        WebApp.MainButton.show();
        setButtonVisible(true);
        setLastAction('Кнопка показана');
    };

    const hideButton = () => {
        WebApp.MainButton.hide();
        setButtonVisible(false);
        setLastAction('Кнопка скрыта');
    };

    const changeButtonText = (newText) => {
        WebApp.MainButton.setText(newText);
        setButtonText(newText);
        setLastAction(`Текст изменён на: ${newText}`);
    };

    const toggleButtonState = () => {
        if (buttonEnabled) {
            WebApp.MainButton.disable();
            setButtonEnabled(false);
            setLastAction('Кнопка отключена');
        } else {
            WebApp.MainButton.enable();
            setButtonEnabled(true);
            setLastAction('Кнопка включена');
        }
    };

    const changeButtonColor = (color) => {
        WebApp.MainButton.setParams({
            color: color,
            text_color: '#ffffff'
        });
        setButtonColor(color);
        setLastAction(`Цвет изменён на: ${color}`);
    };

    const closeApp = () => {
        WebApp.close();
        setLastAction('Приложение закрыто');
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Управление Telegram MainButton
            </h1>

            {/* Статус кнопки */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h2 className="text-lg font-semibold mb-2">Статус кнопки:</h2>
                <p className="text-sm text-gray-600">Видима: {buttonVisible ? '✅' : '❌'}</p>
                <p className="text-sm text-gray-600">Активна: {buttonEnabled ? '✅' : '❌'}</p>
                <p className="text-sm text-gray-600">Текст: "{buttonText}"</p>
                <p className="text-sm text-gray-600">Цвет: {buttonColor}</p>
            </div>

            {/* Последнее действие */}
            {lastAction && (
                <div className="bg-blue-100 p-3 rounded-lg mb-6">
                    <p className="text-sm text-blue-800">{lastAction}</p>
                </div>
            )}

            {/* Управление видимостью */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <h3 className="font-semibold mb-3">Видимость</h3>
                <div className="flex gap-2">
                    <button
                        onClick={showButton}
                        className="flex-1 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Показать
                    </button>
                    <button
                        onClick={hideButton}
                        className="flex-1 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    >
                        Скрыть
                    </button>
                </div>
            </div>

            {/* Изменение текста */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <h3 className="font-semibold mb-3">Текст кнопки</h3>
                <div className="grid grid-cols-2 gap-2">
                    <button
                        onClick={() => changeButtonText('Продолжить')}
                        className="bg-blue-500 text-white py-2 px-3 rounded text-sm hover:bg-blue-600"
                    >
                        "Продолжить"
                    </button>
                    <button
                        onClick={() => changeButtonText('Готово')}
                        className="bg-blue-500 text-white py-2 px-3 rounded text-sm hover:bg-blue-600"
                    >
                        "Готово"
                    </button>
                    <button
                        onClick={() => changeButtonText('Отправить')}
                        className="bg-blue-500 text-white py-2 px-3 rounded text-sm hover:bg-blue-600"
                    >
                        "Отправить"
                    </button>
                    <button
                        onClick={() => changeButtonText('Закрыть')}
                        className="bg-blue-500 text-white py-2 px-3 rounded text-sm hover:bg-blue-600"
                    >
                        "Закрыть"
                    </button>
                </div>
            </div>

            {/* Состояние кнопки */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <h3 className="font-semibold mb-3">Состояние</h3>
                <button
                    onClick={toggleButtonState}
                    className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
                >
                    {buttonEnabled ? 'Отключить кнопку' : 'Включить кнопку'}
                </button>
            </div>

            {/* Цвет кнопки */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <h3 className="font-semibold mb-3">Цвет кнопки</h3>
                <div className="grid grid-cols-3 gap-2">
                    <button
                        onClick={() => changeButtonColor('#2481cc')}
                        className="bg-blue-500 text-white py-2 px-3 rounded text-sm hover:bg-blue-600"
                    >
                        Синий
                    </button>
                    <button
                        onClick={() => changeButtonColor('#22c55e')}
                        className="bg-green-500 text-white py-2 px-3 rounded text-sm hover:bg-green-600"
                    >
                        Зелёный
                    </button>
                    <button
                        onClick={() => changeButtonColor('#ef4444')}
                        className="bg-red-500 text-white py-2 px-3 rounded text-sm hover:bg-red-600"
                    >
                        Красный
                    </button>
                </div>
            </div>

            {/* Закрыть приложение */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-3">Управление приложением</h3>
                <button
                    onClick={closeApp}
                    className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
                >
                    Закрыть приложение
                </button>
            </div>

            {/* Инструкция */}
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                    💡 <strong>Примечание:</strong> В реальном Telegram Web App кнопка будет появляться внизу чата.
                    Здесь показано управление через консоль браузера.
                </p>
            </div>
        </div>
    );
}

export default App;