const ButtonForm = ({ generatorPassword, savePassword }) => {
    return (
        <form className="buttons-form">
            <button
                className="buttons-form__button"
                type="button"
                onClick={() => generatorPassword()}
            >
                Generate
            </button>
            <button
                className="buttons-form__button"
                type="button"
                onClick={() => savePassword()}
            >
                Save
            </button>
        </form>
    );
};

export default ButtonForm;
