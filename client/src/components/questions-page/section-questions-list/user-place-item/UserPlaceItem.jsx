import React from 'react';
import classes from "./UserPlaceItem.module.css";
import {ROUTE_LOGIN} from "../../../../utils/consts";


const UserPlaceItem = ({user, img}) => {

    return (
        <div className={classes.userPlaceItem}>
            <div className={classes.leftBar__userInform}>
                <div className={classes.ratingBox}>
                    <img src={img} alt='' />
                </div>
                <div className={classes.userBox}>
                    <div>
                        <img src={user.avatar} alt={`${user.name} avatar`} />
                    </div>
                    <a href={ROUTE_LOGIN}>{user.name}</a>
                </div>
            </div>
            <div className={classes.rightBar__userScore}>
                <p>{user.score}</p>
            </div>
        </div>
    );
};

export default UserPlaceItem;