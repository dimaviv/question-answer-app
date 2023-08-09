const path = require('path');
const uuid = require('uuid');
const {File} = require('../models/models')
const {MAX_ALLOWED_FILE_SIZE_KB} = require("../config/config");

const handleFileUpload = async (uploadedFile, allowedExtensions, prefix = '') => {
    await checkFileSize(uploadedFile)
    const extension = path.extname(uploadedFile.name).toLowerCase();

    if (!allowedExtensions.includes(extension)) {
        throw new Error('Invalid file format. Please upload a valid file.');
    }

    const fileName = prefix + uuid.v4() + extension;

    const destination = path.resolve(__dirname, '..', 'static', fileName);
    await uploadedFile.mv(destination);

    return fileName;
};

const handleFilesUpload = async (files, relatedModel, relatedItemId, allowedExtensions) => {
    if (!files) return; // No files to upload

    if (!Array.isArray(files)) {
        files = [files];
    }

    await Promise.all(files.map(async (file) => {
        await checkFileSize(file)

        const extension = path.extname(file.name).toLowerCase();

        if (!allowedExtensions.includes(extension)) {
            throw new Error('Invalid file format. Please upload a valid file.');
        }

        const fileName = uuid.v4() + extension;

        await file.mv(path.resolve(__dirname, '..', 'static', fileName));

        await File.create({
            name: fileName,
            extension: extension,
            [relatedModel]: relatedItemId
        });
    }));
};

const checkFileSize = async (file, maxSizeKB = MAX_ALLOWED_FILE_SIZE_KB) => {
    const fileSizeInKB = file.size / 1024;
    if (fileSizeInKB > maxSizeKB) {
        throw new Error(`Uploaded file is too large. ${file.name}`);
    }
};

module.exports = {
    handleFileUpload,
    handleFilesUpload,
    checkFileSize
};
