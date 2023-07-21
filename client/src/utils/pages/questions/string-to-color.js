import {desaturate, lighten, mix} from 'polished';

export const stringToColor = (str) => {
    let hash = 0;
    str.split('').forEach(char => {
        hash = char.charCodeAt(0) + ((hash << 5) - hash)
    })

    let color = '#'
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff
        color += value.toString(16).padStart(2, '0')
    }

    let pastelColor
    const desaturatedColor = desaturate(0.5, color); // Уменьшаем насыщенность цвета
    const lightenedColor = lighten(0.4, desaturatedColor); // Увеличиваем яркость цвета
    // Создаем пастельную вариацию путем смешивания с оригинальным цветом
    pastelColor = mix(0.5, color, lightenedColor);

    return pastelColor;
}

