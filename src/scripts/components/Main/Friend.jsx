import React from 'react'
import friend_info from '../../config/friend.json'

export default (props) => {

    if (friend_info[0].id === "1") { friend_info.reverse() }

    const tBody = friend_info.map( item =>
        <tr key={item.id}>
            <img src={item.avatar} style={{ maxWidth: '60px', maxHeight: '60px' }}/>
            <td>{item.id}</td>
            <td>{item.time}</td>
            <td>{item.name}</td>
        </tr>
    )

    return (
        <section className="_glory">
            <div className="glory__open">
                <div className="text">Friend</div>
                <div className="coverage" />
            </div>
            <table className="glory__table">
                <thead>
                    <tr>
                        <th>头像</th>
                        <th>ID</th>
                        <th>链接</th>
                        <th>描述</th>
                    </tr>
                </thead>
                <tbody>
                    {tBody}
                </tbody>
            </table>
        </section>
    )
}
