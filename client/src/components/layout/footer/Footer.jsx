import {useLocation} from 'react-router-dom';

import SectionInform from './SectionInform/SectionInform';
import {shouldDisplayFooter} from 'utils/path-display';
import {StyledFooter} from './StyledFooter';

const Footer = () => {
    const {pathname} = useLocation();

    return (
        <>
            {shouldDisplayFooter(pathname) && (
                <StyledFooter>
                    <SectionInform />
                </StyledFooter>
            )}
        </>
    );
};

export default Footer;