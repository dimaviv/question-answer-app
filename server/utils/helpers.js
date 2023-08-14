const generateNickname = async (email) => {
    const atId = email.indexOf('@');
    let baseNickname = email.slice(0, atId);
    const randomSuffix = Math.floor(Math.random() * 10000);
    const uniqueNickname = `${baseNickname}#${randomSuffix}`;
    return uniqueNickname;

}
const containsCyrillic = async (text) => {
    const cyrillicRegex = /[\u0400-\u04FF\u0500-\u052F\u2DE0-\u2DFF\uA640-\uA69F]/;
    return cyrillicRegex.test(text);
}

const formatQuestionWithNestedUser = async (result) => {
    return result.map(result => ({
        id: result.id,
        text: result.text,
        isAnswered: result.isAnswered,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
        userId: result.userId,
        categoryId: result.categoryId,
        user: {
            id: result['user.id'],
            nickname: result['user.nickname'],
            avatar: result['user.avatar'],
            score: result['user.score'],
        },
    }));
}


module.exports = {
    generateNickname,
    containsCyrillic,
    formatQuestionWithNestedUser,
}