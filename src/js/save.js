export function save(password, service, setSavedPassword) {
    if (!password || !service) {
        return;
    }

    const newPassword = { password, service };

    setSavedPassword((prev) => [...prev, newPassword]);
}
