const allowedAvatarExtensions = ['.jpg', '.jpeg', '.png'];
const allowedFileExtensions = ['.jpg', '.jpeg', '.png', '.docx', '.pdf',
    '.txt', '.mp3', '.gif', '.svg', '.doc', '.wpd', '.wps', '.psd', '.tif', '.bmp', '.epc'];
const nicknameUpdateIntervalDays = 14;
const MAX_ALLOWED_FILE_SIZE_KB = 10000

module.exports = {
    allowedAvatarExtensions,
    allowedFileExtensions,
    nicknameUpdateIntervalDays,
    MAX_ALLOWED_FILE_SIZE_KB,
};
