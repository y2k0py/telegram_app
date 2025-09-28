import WebApp from '@twa-dev/sdk'
import React, { useEffect, useState } from 'react';

function App() {
    const [text, setText] = useState('Добро пожаловать в мое Telegram Web App!');
    const [buttonText, setButtonText] = useState('Continue');
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    // Симуляция Telegram WebApp API (для демонстрации)
    const mockWebApp = {
        ready: () => console.log('WebApp ready'),
        expand: () => console.log('WebApp expanded'),
        close: () => {
            setText('Приложение закрывается...');
            setTimeout(() => setText('Закрыто!'), 1000);
        },
        MainButton: {
            show: () => setIsButtonVisible(true),
            hide: () => setIsButtonVisible(false),
            setText: (newText) => setButtonText(newText),
            setParams: (params) => {
                if (params.text) setButtonText(params.text);
            }
        },
        onEvent: (event, callback) => {
            if (event === 'mainButtonClicked') {
                // Сохраняем колбэк для использования
                window.mainButtonCallback = callback;
            }
        }
    };

    useEffect(() => {
        // Инициализация WebApp
        mockWebApp.ready();
        mockWebApp.expand();

        // Показать главную кнопку
        mockWebApp.MainButton.show();

        // Настроить обработчик нажатия
        mockWebApp.onEvent('mainButtonClicked', () => {
            mockWebApp.close();
            setText('Кнопка нажата! Закрываем приложение...');
        });
    }, []);

    const handleMainButtonClick = () => {
        if (window.mainButtonCallback) {
            window.mainButtonCallback();
        }
    };

    const changeButtonText = (newText) => {
        mockWebApp.MainButton.setText(newText);
    };

    const toggleButton = () => {
        if (isButtonVisible) {
            mockWebApp.MainButton.hide();
        } else {
            mockWebApp.MainButton.show();
        }
    };

    return (
        <div className="min-h-screen bg-slate-800 text-white">
            {/* Заголовок как в Telegram */}
            <div className="bg-slate-700 p-4 flex justify-between items-center">
                <h1 className="text-lg font-medium">test telegram app</h1>
                <div className="flex gap-2">
                    <button className="text-slate-400">⋮</button>
                    <button className="text-slate-400">✕</button>
                </div>
            </div>

            {/* Основное содержимое */}
            <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-8">{text}</h2>

                {/* Кнопки управления */}
                <div className="space-y-4 mb-8">
                    <button
                        onClick={() => changeButtonText('Закрыть')}
                        className="block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Изменить текст на "Закрыть"
                    </button>

                    <button
                        onClick={() => changeButtonText('Готово')}
                        className="block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Изменить текст на "Готово"
                    </button>

                    <button
                        onClick={() => changeButtonText('Continue')}
                        className="block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Вернуть "Continue"
                    </button>

                    <button
                        onClick={toggleButton}
                        className="block w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                    >
                        {isButtonVisible ? 'Скрыть' : 'Показать'} главную кнопку
                    </button>
                </div>
            </div>

            {/* Главная кнопка Telegram (внизу экрана) */}
            {isButtonVisible && (
                <div className="fixed bottom-0 left-0 right-0 p-4">
                    <button
                        onClick={handleMainButtonClick}
                        className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors"
                    >
                        {buttonText}
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;