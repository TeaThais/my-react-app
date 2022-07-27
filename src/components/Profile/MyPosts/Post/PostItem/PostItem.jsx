import React from 'react';
import classes from './PostItem.module.css';

const PostItem = () => {
    return <div>
        <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMpUS3NxMp4i7QkSKNn40Oax_w-mLBFsoPA&usqp=CAU" alt=""/>
        <div className={classes.item}>Post Item</div>
    </div>
}
export default PostItem;