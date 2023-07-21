// export const getTextColorBasedOnShade = (color) => {
//     let c = color.substring(1);
//     let rgb = parseInt(c, 16);
//     let r = (rgb >> 16) & 0xff;
//     let g = (rgb >> 8) & 0xff;
//     let b = rgb & 0xff;
//
//     let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
//
//     if (luma < 40) {
//         return 'white';
//     } else {
//         return 'black';
//     }
// }

export const wc_hex_is_light = (color) => {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substring(0, 2), 16);
    const c_g = parseInt(hex.substring(2, 2 + 2), 16);
    const c_b = parseInt(hex.substring(4, 4 + 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 155;
}