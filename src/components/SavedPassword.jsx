const SavedPassword = ({ savedPasswords }) => {
    return (
        <div className="save-container">
            <h2 className="save-header">Saved passwords</h2>
            <ul className="save-list">
                {savedPasswords.map((elem, index) => (
                    <li className="save-item" key={index}>
                        {elem.service} : {elem.password}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SavedPassword;
