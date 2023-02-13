import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/normal_user.jpeg";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pages}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
        {/*<button onClick={this.getUsers}>Get UsersPast</button>*/}
        {
            props.users.map(u => <div key={u.id} id={u.id}>
                <div>
                    <span>
                        <NavLink to={'/profile/2' + u.id}>
                            <img className='img' src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </NavLink>
                            {u.name}
                        {/*{u.location.country}*/}
                    </span>
                    <span>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {withCredentials: true})
                                        .then(response => {
                                           if (response.data.resultCode === 0)
                                               props.unfollow(u.id)
                                        })
                                        }}>

                                    Unfollow</button>

                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {withCredentials: true})
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}>
                                    Follow</button>}
                            {u.status}
                            {/*{u.location.city}*/}
                        </div>
                    </span>
                </div>
            </div>)
        }
    </div>
}

export default Users;