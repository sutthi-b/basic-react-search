function UserList({showData}) {
    return (
        <div className='user-list'>
        {showData.map((user) => {
          return (
            <div>
              <div className='user-list__user'>
                <img src={user.avatar} alt='avatar'></img>
                <div className='user-list__user__name'>
                  <p>{user.first_name} {user.last_name}</p>
                  <p>{user.email}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#c3c3c3" d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586L9.414 16H5V4h14v12z"></path><path fill="#c3c3c3" d="M7 7h10v2H7zm0 4h7v2H7z"></path></svg>
              </div>
              <hr></hr>
            </div>
          )
        })}
      </div>
    )
}

export default UserList;