import React, {useEffect, useState} from 'react';
import styles from './LiftUpBtn.module.css';
import arrowUpImg from 'static/icons/arrow-up.svg';
import arrowUpHoverImg from 'static/icons/arrow-up-hover.svg';

const LiftUpBtn = ({footerRef}) => {
    const [isVisible, setIsVisible] = useState(false);

    const [hoveredLiftUp, setHoveredLiftUp] = useState(false);


    const handleMouseEnter = () => {
        setHoveredLiftUp(true);
    };

    const handleMouseLeave = () => {
        setHoveredLiftUp(false);
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;

        const isPageLongEnough = scrollHeight > windowHeight;

        setIsVisible(isPageLongEnough && scrollTop > 0);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {isVisible && (
                <button className={styles.liftUpBtn}
                        onClick={scrollToTop}
                >
                    <img src={(hoveredLiftUp ? arrowUpHoverImg : arrowUpImg)}
                         alt="lift up"
                         onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave}
                    />
                </button>
            )}
        </>
    );
};

export default LiftUpBtn;