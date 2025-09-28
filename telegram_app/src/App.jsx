import WebApp from '@twa-dev/sdk'
import {useEffect} from "react";

function App() {
    useEffect(() => {
        // Инициализация Telegram Web App
        WebApp.ready();

        // Настройка темы
        WebApp.expand();
        WebApp.MainButton.show();

        // Обработка закрытия приложения
        WebApp.onEvent('mainButtonClicked', () => {
            WebApp.close();
        });
    }, []);

    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Добро пожаловать в мое Telegram Web App!</h1>
        </div>
    );
}

export default App
