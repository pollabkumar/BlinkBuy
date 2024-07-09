import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Search = () => {

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            {/* <img src={logo} alt='' /> */}
            <span className="title">BlinkBuy</span>
          </div>

          {/* SearchBox */}
          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' className="input" />
          </div>

          {/* Icons */}
          <div className='icon f_flex width'>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', }}>
              <div className="search-icon"><FiSearch /></div>
              <div className="account-icon"><FiUser /></div>
              <div className="cart-icon"><HiOutlineShoppingBag /></div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Search;