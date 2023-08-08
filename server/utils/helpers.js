const generateNickname = async (email) => {
    const atId = email.indexOf('@');
    let baseNickname = email.slice(0, atId);
    const randomSuffix = Math.floor(Math.random() * 10000);
    const uniqueNickname = `${baseNickname}#${randomSuffix}`;
    return uniqueNickname;

}

module.exports = {
    generateNickname
}