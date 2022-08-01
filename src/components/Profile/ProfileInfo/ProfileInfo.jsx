import React from "react";
import classes from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return <div>
        <div>
            <img className={classes.picture} src="https://images.all-free-download.com/images/graphiclarge/beach_cloud_dawn_horizon_horizontal_landscape_ocean_601821.jpg" alt="pic"/>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4aC4cPo8HWhUVKG2iKUxhOAl9aGKqflRBg&usqp=CAU" alt=""/>
        </div>
    </div>
};

export default ProfileInfo;