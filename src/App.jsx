import { useEffect, useEffectEvent, useState } from "react";
import PasswordSection from "./components/PasswordSection";
import PasswordOptions from "./components/PasswordOptions";
import ButtonForm from "./components/ButtonForm";
import Header from "./components/Header";
import { generatePassword } from "./js/generatePassword";
import { save } from "./js/save";
import SavedPassword from "./components/SavedPassword";

function App() {
    const [password, setPassword] = useState("");
    const [service, setService] = useState("");

    const [options, setOptions] = useState({
        length: 8,
        includeUppercase: true,
        includeNumbers: true,
        includeSymbols: true,
    });

    const [savedPasswords, setSavedPasswords] = useState(() => {
        const savedPass = localStorage.getItem("passwords");
        return savedPass ? JSON.parse(savedPass) : [];
    });

    const handleGeneratePassword = () => {
        const newPassword = generatePassword(options);
        setPassword(newPassword);
    };

    const handleSavePassword = () => {
        save(password, service, setSavedPasswords);
    };

    useEffect(() => {
        const savedPass = localStorage.getItem("passwords");
        if (savedPass) {
            setSavedPasswords(JSON.parse(savedPass));
        }
    }, []);

    useEffect(() => {
        if (savedPasswords) {
            localStorage.setItem("passwords", JSON.stringify(savedPasswords));
        }
    }, [savedPasswords]);

    return (
        <>
            <main className="main">
                <SavedPassword savedPasswords={savedPasswords} />
                <Header />
                <PasswordSection
                    password={password}
                    setPassword={setPassword}
                    service={service}
                    setService={setService}
                />
                <PasswordOptions options={options} setOptions={setOptions} />
                <ButtonForm
                    generatorPassword={handleGeneratePassword}
                    savePassword={handleSavePassword}
                />
            </main>
        </>
    );
}

export default App;
