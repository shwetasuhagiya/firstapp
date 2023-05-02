function Sec1() {

    return(
        <>
        <div className="row">
            <div className="col-12 heading ">
                Explore Our Furniture
            </div>
        </div>
        <div className="contain">
        <div className="row justify-content-around">
            <div className="col-lg-2 box d-flex  col-md-6 col-12">
                <div >
                    <p className='s1'>Chair</p>
                    <p className='s2'>(3 items)</p>
                </div>
                <div>
                    <img src={require('./image/4.png')}  className='img3'></img>
                </div>
            </div>
            <div className="col-lg-2  col-md-6 col-12 box d-flex ">
                <div >
                    <p className='s1'>Dining</p>
                    <p className='s2'>(9 item)</p>
                </div>
                <div>
                    <img src={require('./image/5.png')}  className='img3'></img>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12 box d-flex ">
                <div >
                    <p className='s1'>Furniture</p>
                    <p className='s2'>(1 items)</p>
                </div>
                <div>
                    <img src={require('./image/6.png')}  className='img3'></img>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12 box d-flex">
                <div >
                    <p className='s1'>Lamp</p>
                    <p className='s2'>(3 items)</p>
                </div>
                <div>
                    <img src={require('./image/7.png')}  className='img3'></img>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12 box d-flex">
                <div >
                    <p className='s1'>Shoe</p>
                    <p className='s2'>(3item)</p>
                </div>
                <div>
                    <img src={require('./image/8.png')}  className='img3'></img>
                </div>
            </div>     
        </div>
        </div>
        
        <div className="containe">
            <div className="row justify-content-around">
                <div className="col-lg-3  col-md-6 col-12 box1 d-flex">
                <div >
                    <p className='s3'>Sofa Set</p>
                    <p className='s4'>(3 items)</p>
                </div>
                <div>
                    <img src={require('./image/10.png')}  className='img4 '></img>
                </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12  box1 d-flex">
                <div >
                    <p className='s5'>Table</p>
                    <p className='s6'>(1item)</p>
                </div>
                <div>
                    <img src={require('./image/11.png')}  className='img5 '></img>
                </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12  box1 d-flex">
                <div >
                    <p className='s5'> Unit</p>
                    <p className='s6'>(3item)</p>
                </div>
                <div>
                    <img src={require('./image/12.png')}  className='img5 '></img>
                </div>
                </div>
                <div className="col-lg-3  col-md-6 col-12  box1 d-flex">
                <div >
                    <p className='s3'>Wardrobes</p>
                    <p className='s4'>(1 items)</p>
                </div>
                <div>
                    <img src={require('./image/13.png')}  className='img4 '></img>
                </div>
                </div>
            </div>
        </div>
        </>

    );
    
}
export default Sec1;
