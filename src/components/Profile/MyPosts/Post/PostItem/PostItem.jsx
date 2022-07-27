import React from 'react';
import classes from './PostItem.module.css';

const PostItem = (props) => {
    console.log(props)
    return <div className={classes.item}>
        <div>
            <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMpUS3NxMp4i7QkSKNn40Oax_w-mLBFsoPA&usqp=CAU" alt=""/>
            {props.name} {props.message}
        </div>
        <div>
            <button className={classes.button}>Like</button>
            {props.likes}
        </div>
    </div>

}

export default PostItem;