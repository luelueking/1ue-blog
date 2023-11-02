import React from 'react'
import glory_info from '../../config/glory'

export default (props) => {

    if (glory_info[0].id === "1") { glory_info.reverse() }

    const tBody = glory_info.map( item =>
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
