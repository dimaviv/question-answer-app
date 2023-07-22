import {StyledHomePage} from './StyledHomePage';
import CategoriesLoading from '../categories/Categories';

const HomePageLoading = () => {
    const numNavItems = 3;

    const navItemsElements = Array.from({length: numNavItems}, (_, index) => (
        <div key={index}></div>
    ));
    return (
        <StyledHomePage>
            <div className={'header-maquette'}>
                <div className={'navbar'}>
                    <div className={'container'}>
                        <div className={'logo'}></div>
                        <div className={'nav-list'}>
                            {navItemsElements}
                        </div>
                    </div>
                </div>
                <div className={'categories'}>
                    <div className={'container'}>
                        <CategoriesLoading />
                    </div>
                </div>
            </div>
            <div className={'main-maquette'}>
                <div className={'container'}>

                </div>
            </div>
            <div className={'footer-maquette'}>
                <div className={'container'}>

                </div>
            </div>
        </StyledHomePage>
    );
};

export default HomePageLoading;
