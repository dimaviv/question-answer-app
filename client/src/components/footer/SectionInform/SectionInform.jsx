import React from 'react';
import classes from "./SectionInform.module.css";
import facebookImg from "../../../static/footer/social-networks/facebook.svg";
import instagramImg from "../../../static/footer/social-networks/instagram.svg";
import youtubeImg from "../../../static/footer/social-networks/youtube.svg";
import tiktokImg from "../../../static/footer/social-networks/tiktok.svg";
import appleAppImg from "../../../static/footer/apps/apple.svg";
import googleAppImg from "../../../static/footer/apps/google.svg";
import {ROUTE_HOME} from "../../../utils/consts";
import {useNavigate} from "react-router-dom";

const SectionInform = () => {
    const navigate = useNavigate()

    return (
        <div className={classes.sectionInform}>
            <div className={classes.informContainer}>
                <div className={classes.leftBar__inform}>
                    <div className={classes.contentContainer}>
                        <p className={classes.titleText}>FOLLOW US</p>
                        <div className={classes.imgBox}>
                            <button className={classes.logoBtn}>
                                <img src={facebookImg} alt='our-facebook' onClick={() => navigate(ROUTE_HOME)}/>
                            </button>
                            <button className={classes.logoBtn}>
                                <img src={instagramImg} alt='our-instagram' onClick={() => navigate(ROUTE_HOME)}/>
                            </button>
                            <button className={classes.logoBtn}>
                                <img src={youtubeImg} alt='our-youtube' onClick={() => navigate(ROUTE_HOME)}/>
                            </button>
                            <button className={classes.logoBtn}>
                                <img src={tiktokImg} alt='our-tiktok' onClick={() => navigate(ROUTE_HOME)}/>
                            </button>
                        </div>
                        <p className={classes.cookieWarningText}>This site is using cookies under cookie policy. You
                            can specify conditions of storing and accessing cookies in your browser.</p>
                    </div>
                    <div className={classes.contentContainer}>
                        <p className={classes.titleText}>Company</p>
                        <ul className={classes.textBox}>
                            <li><a href={ROUTE_HOME}>About us</a></li>
                            <li><a href={ROUTE_HOME}>Contact Us</a></li>
                            <li><a href={ROUTE_HOME}>Copyright Policy</a></li>
                            <li><a href={ROUTE_HOME}>Privacy Policy</a></li>
                            <li><a href={ROUTE_HOME}>Cookie Preferences</a></li>
                        </ul>
                    </div>
                    <div className={classes.contentContainer}>
                        <p className={classes.titleText}>Product</p>
                        <ul className={classes.textBox}>
                            <li><a href={ROUTE_HOME}>Honor code</a></li>
                            <li><a href={ROUTE_HOME}>Community Guidelines</a></li>
                            <li><a href={ROUTE_HOME}>Study Guides</a></li>
                            <li><a href={ROUTE_HOME}>Terms of Use</a></li>
                            <li><a href={ROUTE_HOME}>FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className={classes.rightBar__apps}>
                    <div className={classes.contentContainer}>
                        <p className={classes.titleText}>Download our app</p>
                        <div className={classes.imgBox}>
                            <img src={appleAppImg} alt='our-app-apple' onClick={() => navigate(ROUTE_HOME)}/>
                            <img src={googleAppImg} alt='our-app-google' onClick={() => navigate(ROUTE_HOME)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionInform;