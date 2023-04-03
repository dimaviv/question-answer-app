import React from 'react';
import styles from './SectionInform.module.css';
import facebookImg from '../../../static/footer/social-networks/facebook.svg';
import instagramImg from '../../../static/footer/social-networks/instagram.svg';
import youtubeImg from '../../../static/footer/social-networks/youtube.svg';
import tiktokImg from '../../../static/footer/social-networks/tiktok.svg';
import appleAppImg from '../../../static/footer/apps/apple.svg';
import googleAppImg from '../../../static/footer/apps/google.svg';
import {ROUTE_HOME} from '../../../utils/consts';
import {useNavigate} from 'react-router-dom';

const SectionInform = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.sectionInform}>
            <div className={styles.sectionInform__container}>
                <div className={styles.container__leftBar_inform}>
                    <div className={styles.leftBar_inform__item}>
                        <p className={styles.item__titleText}>
                            FOLLOW US
                        </p>
                        <div className={styles.item__imgBox_logo}>
                            <button className={styles.imgBox_logo__btn_logo}>
                                <img src={facebookImg}
                                     alt="our-facebook"
                                     onClick={() => navigate(ROUTE_HOME)}
                                />
                            </button>
                            <button className={styles.imgBox_logo__btn_logo}>
                                <img src={instagramImg}
                                     alt="our-instagram"
                                     onClick={() => navigate(ROUTE_HOME)}
                                />
                            </button>
                            <button className={styles.imgBox_logo__btn_logo}>
                                <img src={youtubeImg}
                                     alt="our-youtube"
                                     onClick={() => navigate(ROUTE_HOME)}
                                />
                            </button>
                            <button className={styles.imgBox_logo__btn_logo}>
                                <img src={tiktokImg}
                                     alt="our-tiktok"
                                     onClick={() => navigate(ROUTE_HOME)}
                                />
                            </button>
                        </div>
                        <p className={styles.item__cookieWarningText}>
                            This site is using cookies under cookie policy. You
                            can specify conditions of storing and accessing cookies
                            in your browser.
                        </p>
                    </div>
                    <div className={styles.leftBar_inform__item}>
                        <p className={styles.item__titleText}>Company</p>
                        <ul className={styles.item__informMenu}>
                            <li><a href={ROUTE_HOME}>About us</a></li>
                            <li><a href={ROUTE_HOME}>Contact Us</a></li>
                            <li><a href={ROUTE_HOME}>Copyright Policy</a></li>
                            <li><a href={ROUTE_HOME}>Privacy Policy</a></li>
                            <li><a href={ROUTE_HOME}>Cookie Preferences</a></li>
                        </ul>
                    </div>
                    <div className={styles.leftBar_inform__item}>
                        <p className={styles.item__titleText}>Product</p>
                        <ul className={styles.item__informMenu}>
                            <li><a href={ROUTE_HOME}>Honor code</a></li>
                            <li><a href={ROUTE_HOME}>Community Guidelines</a></li>
                            <li><a href={ROUTE_HOME}>Study Guides</a></li>
                            <li><a href={ROUTE_HOME}>Terms of Use</a></li>
                            <li><a href={ROUTE_HOME}>FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.container__rightBar_apps}>
                    <div className={styles.rightBar_apps__item}>
                        <p className={styles.item__titleText}>Download our app</p>
                        <div className={styles.item__imgBox_apps}>
                            <img src={appleAppImg}
                                 alt="our-app-apple"
                                 onClick={() => navigate(ROUTE_HOME)}
                            />
                            <img src={googleAppImg}
                                 alt="our-app-google"
                                 onClick={() => navigate(ROUTE_HOME)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionInform;