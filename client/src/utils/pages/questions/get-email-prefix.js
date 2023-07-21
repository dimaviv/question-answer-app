export const getEmailPrefix = (email) => {
    const [prefix] = email.split('@');

    return prefix;
}