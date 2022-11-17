import React from "react";
import axios from "axios";
import userPhoto from '../../assets/images/normal_user.jpeg'

class Users extends React.Component {
        componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

        render() {
            return <div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
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