import React from 'react';
import './home.css';
import banner from '../assets/banner.svg'

class Home extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-5 col-xs-5">
                        <div className="heading-div">
<h1 className="display-3 heading1" > Want an easier way to invest in Property ?</h1>
                        </div>
                        <div>
                            <h2 className="heading2">
                            "India’s 1st Fractional Property
Ownership Platform with AI &
Blockchain Technologies"

                            </h2>
                        </div>
                        <div className="heading3">
                            <h4>BrickBerry is an award-winning platform
that provides a simple and low cost way
to access the property market.


</h4>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-7 col-sm-7">
                    <img className="img-fluid" src={banner} alt="banner" />

                    </div>


                </div>
                <div className="home-btn">
                <button type="button" class="btn properties-btn  btn-lg">View Properties</button>

                </div>

            </div>
        )
    }
}
export default Home;