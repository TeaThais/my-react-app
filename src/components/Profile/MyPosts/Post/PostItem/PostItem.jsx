import React from 'react';
import classes from './PostItem.module.css';

const PostItem = (props) => {

    return <div className={classes.item}>
        <div>
            {props.pic} {props.name} {props.message}
        </div>
        <div>
            <button className={classes.button}>Like</button>
            {props.likes}
        </div>
    </div>

}

export default PostItem;