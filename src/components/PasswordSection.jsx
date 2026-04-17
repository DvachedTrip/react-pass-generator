const PasswordSection = ({ password, setPassword, service, setService }) => {
    return (
        <form className="password-section__form">
            <div className="password-section__form__inputs-container">
                <input
                    className="password-section__form__input"
                    type="text"
                    placeholder="Input your service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                ></input>
                <input
                    className="password-section__form__input"
                    type="text"
                    placeholder="Generate password..."
                    value={password}
                    readOnly
                ></input>
            </div>
        </form>
    );
};

export default PasswordSection;
