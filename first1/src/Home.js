import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillThunderbolt } from "react-icons/ai";
import { BsFillPinFill,BsSearch ,BsFillBagFill} from "react-icons/bs";
import { BiAlignJustify } from "react-icons/bi";

function Home() {

    return(
        <>
        
        <div className='bg-black py-2 dis'>
            <div className='container'>
                <div className='row fs-12 t1'>
                    <div className='col-xl-3'>
                        <AiFillThunderbolt className='icon'></AiFillThunderbolt> First Five 30% Discount
                    </div>
                    <div className='col-xl-2'>
                        <BsFillPinFill className='icon'></BsFillPinFill> Our Stone Location
                    </div>
                    <div className='col-xl-3'>
                        Mid-season Sale up to 70% Off
                    </div>
                    <div className='col-xl-1'>
                         Deal
                    </div>
                    <div className='col-xl-1'>
                        FAQ
                    </div>
                    <div className='col-xl-2'>
                        Get Certification
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row py-3">
                <div className="col-xl-2 col-sm-6 ">
                    <img src={require('./image/1.png')} className='img1'></img>
                </div>
                <div className="col-xl-2 shop">
                    <p className='py-3'>Shop By Category <BiAlignJustify ></BiAlignJustify></p>
                </div>
                    <ul className='col-xl-6 menu '>
                    <li>Home</li>
                   <li>Shop</li>
                   <li>Product</li>
                   <li>Lastest News</li>
                   <li>Pages</li>
                   <li>Blog</li>
                    </ul>
                <div className='d-flex col-xl-2 col-sm-6 justify-content-end py-3 icon1' >
                    <p className='pe-3'><BsSearch></BsSearch></p>
                    <p><BsFillBagFill></BsFillBagFill> My Bag(0)</p>
                </div>
            </div>
        </div>
        
        </>
    );
    
}
export default Home;