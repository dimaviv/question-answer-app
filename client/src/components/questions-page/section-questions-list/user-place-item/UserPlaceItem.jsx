import React from 'react';
import classes from "./UserPlaceItem.module.css";
import {ROUTE_LOGIN} from "../../../../utils/consts";
import top1Img from "../../../../static/questions-page/user-rate/top-1.svg";
import top2Img from "../../../../static/questions-page/user-rate/top-2.svg";
import top3Img from "../../../../static/questions-page/user-rate/top-3.svg";
import top4Img from "../../../../static/questions-page/user-rate/top-4.svg";
import top5Img from "../../../../static/questions-page/user-rate/top-5.svg";
import top6Img from "../../../../static/questions-page/user-rate/top-6.svg";
import top7Img from "../../../../static/questions-page/user-rate/top-7.svg";
import top8Img from "../../../../static/questions-page/user-rate/top-8.svg";
import top9Img from "../../../../static/questions-page/user-rate/top-9.svg";
import top10Img from "../../../../static/questions-page/user-rate/top-10.svg";

const UserPlaceItem = (props) => {
    const whichPlace = (place) => {
        switch (place) {
            case 1:
                return top1Img;
            case 2:
                return top2Img;
            case 3:
                return top3Img;
            case 4:
                return top4Img;
            case 5:
                return top5Img;
            case 6:
                return top6Img;
            case 7:
                return top7Img;
            case 8:
                return top8Img;
            case 9:
                return top9Img;
            case 10:
                return top10Img;
            default:
                return
        }
    }

    return (
        <div className={classes.userPlaceItem}>
            <div className={classes.leftBar__userInform}>
                <div className={classes.ratingBox}>
                    <img src={whichPlace(props.place)} alt='' />
                </div>
                <div className={classes.userBox}>
                    <div>
                        <img src={props.user.avatar} alt='' />
                    </div>
                    <a href={ROUTE_LOGIN}>{props.user.name}</a>
                </div>
            </div>
            <div className={classes.rightBar__userScore}>
                <p>{props.user.score}</p>
            </div>
        </div>
    );
};

export default UserPlaceItem;