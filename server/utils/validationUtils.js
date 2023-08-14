const {User} = require('../models/models');


const isNicknameUnique = async (nickname) => {
    const count = await User.count({
        where: {
            nickname: nickname
        }
    });

    return count === 0;
};

module.exports = {
    isNicknameUnique,

};
