const path = require('path');
const uuid = require('uuid');
const {File} = require('../models/models')

const handleFileUpload = async (uploadedFile, allowedExtensions, prefix = '') => {
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


module.exports = {
    handleFileUpload,
    handleFilesUpload
};
