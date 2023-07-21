import {useEffect} from 'react';
import {COMPANY_NAME} from 'utils/consts';

const Meta = ({title, description, children}) => {
    const getTitle = (title) => `${title} | ${COMPANY_NAME}`;

    useEffect(() => {
        document.title = getTitle(title);
    }, []);
    return (
        <>
            {description ? (
                <>
                    <meta name='description'
                          content={description}
                    />
                    <meta name='og:title'
                          content={getTitle(title)}
                    />
                    <meta name='og:description'
                          content={description}
                    />
                </>
            ) : (
                <meta name='robots'
                      content='noindex, nofollow'
                />
            )}
            {children}
        </>
    );
};

export default Meta;
