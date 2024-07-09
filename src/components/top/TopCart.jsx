import Tdata from "./Tdata";
import "./style.css";

const TopCart = () => {
  return (
    <div className='cat_container'>
      {Tdata.map((category, index) => (
        <div key={index} className='category_card'>
          {/* <div className='corner-ribbon'>New</div> */}
          <div className='nametop d_flex'>
            <span className='tright'>{category.desc}</span>
          </div>
          <div className='img'>
            <img src={category.cover} alt='' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCart;