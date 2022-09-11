function Header({setSearchText}) {
    return (
        <div className='header'>
        <div className='header__box'>
          <div className='header__box__backBtn'>
            <p>{"<"}</p>
          </div>
          <div className='header__box__name'>Your Name</div>
          <div className='header__box__location'>Bangkok, Thailand</div>
          <input className='header__box__searchBar' placeholder='Search' type='text' onChange={(e) => setSearchText(e.target.value.toLowerCase())}></input>
        </div>
      </div>
    )
}

export default Header;