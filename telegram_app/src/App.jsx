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
            test
        </div>
    );
}

export default App
