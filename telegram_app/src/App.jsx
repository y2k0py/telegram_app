import WebApp from '@twa-dev/sdk'
import {useEffect, useState} from "react";

function App() {
    const [Text, setText] = useState()
    useEffect(() => {
        WebApp.ready();

        WebApp.expand();
        WebApp.MainButton.show();
        WebApp.onEvent('mainButtonClicked', () => {
            WebApp.close();
            setText('closed')
        });
    }, []);

    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Добро пожаловать в мое Telegram Web App! {Text}</h1>
        </div>
    );
}

export default App
