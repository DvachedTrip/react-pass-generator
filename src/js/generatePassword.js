export function generatePassword(options) {
    const uppercase = options.includeUppercase
        ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
        : [];
    const spec = options.Symbols ? "!@#$%^&*()".split("") : [];
    const digits = options.includeNumbers ? "0123456789".split("") : [];

    const allSymbols = [
        ..."abcdefghijklmnopqrstuvwxyz",
        ...uppercase,
        ...spec,
        ...digits,
    ];

    const arr = new Uint32Array(options.length);
    crypto.getRandomValues(arr);
    let password = "";

    for (let i = 0; i < options.length; i++) {
        password += allSymbols[arr[i] % allSymbols.length];
    }

    return password;
}
