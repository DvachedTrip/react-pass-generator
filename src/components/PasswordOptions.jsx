const PasswordOptions = ({ options, setOptions }) => {
    return (
        <form className="password__options">
            <div className="password__options__length-container">
                <label htmlFor="Password Length">Password length</label>
                <div className="password__options__length-input-container">
                    <input
                        className="password__options__input"
                        type="range"
                        min="4"
                        max="20"
                        id="Password Length"
                        value={options.length}
                        onChange={(e) =>
                            setOptions({
                                ...options,
                                length: Number(e.target.value),
                            })
                        }
                    ></input>
                    <span className="password__options__length-value">
                        {options.length}
                    </span>
                </div>
            </div>
            <div className="password__options__checkboxes-container">
                <label className="password__options__checkbox-label">
                    <input
                        className="password__options__checkbox"
                        type="checkbox"
                        label="Uppercase"
                        checked={options.includeUppercase}
                        onChange={() =>
                            setOptions((prev) => ({
                                ...prev,
                                includeUppercase: !prev.includeUppercase,
                            }))
                        }
                    ></input>
                    Uppercase
                </label>
                <label className="password__options__checkbox-label">
                    <input
                        className="password__options__checkbox"
                        type="checkbox"
                        label="Numbers"
                        checked={options.includeNumbers}
                        onChange={() =>
                            setOptions((prev) => ({
                                ...prev,
                                includeNumbers: !prev.includeNumbers,
                            }))
                        }
                    ></input>
                    Numbers
                </label>
                <label className="password__options__checkbox-label">
                    <input
                        className="password__options__checkbox"
                        type="checkbox"
                        label="Symbols"
                        checked={options.includeSymbols}
                        onChange={() =>
                            setOptions((prev) => ({
                                ...prev,
                                includeSymbols: !prev.includeSymbols,
                            }))
                        }
                    ></input>
                    Symbols
                </label>
            </div>
        </form>
    );
};

export default PasswordOptions;
