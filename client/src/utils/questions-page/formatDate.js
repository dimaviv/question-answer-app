export const formatDate = (date) => {
    const currentDate = new Date();
    const addedDate = new Date(date);
    const timeDiff = currentDate.getTime() - addedDate.getTime();
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hourDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    const minuteDiff = Math.floor(timeDiff / (1000 * 60));
    const secondDiff = Math.floor(timeDiff / 1000);

    if (dayDiff === 0) {
        if (hourDiff === 0) {
            if (minuteDiff === 0) {
                return `- ${secondDiff} sec ago`;
            } else {
                return `- ${minuteDiff} min ago`;
            }
        } else {
            if (hourDiff === 1) {
                return `- 1 hour ago`;
            }
            return `- ${hourDiff} hours ago`;
        }
    } else {
        if (dayDiff === 1) {
            return `- 1 day ago`;
        }
        return `- ${dayDiff} days ago`;
    }
}