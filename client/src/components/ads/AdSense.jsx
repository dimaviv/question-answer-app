import React from 'react';

const AdSenseAd = () => {
    const adCode = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4958848492317397"\n' +
        '     crossorigin="anonymous"></script>';

    return (
        <div dangerouslySetInnerHTML={{__html: adCode}}/>
    );
};

export default AdSenseAd;
