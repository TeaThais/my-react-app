import React from "react";
import axios from "axios";
import userPhoto from '../../assets/images/normal_user.jpeg'
import styles from './Users.module.css'

class Users extends React.Component {
        componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
    }

        render() {

            let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

            let pages = [];
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i);
            }

            return <div>
                <div className={styles.pages}>
                    {pages.map(p => {
                       return <span className={this.props.currentPage === p && styles.selectedPage}
                       onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {/*<button onClick={this.getUsers}>Get UsersPast</button>*/}
                {
                    this.props.users.map(u => <div key={u.id} id={u.id}>
                        <div>
                    <span>
                    <img className='img' src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        {u.name}
                        {/*{u.location.country}*/}
                    </span>
                            <span>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                            {u.status}
                            {/*{u.location.city}*/}
                        </div>
                    </span>
                        </div>
                    </div>)
                }
            </div>
        }
    }


export default Users;