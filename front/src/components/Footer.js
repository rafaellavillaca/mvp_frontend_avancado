import "./NavbarStyles.css";
import * as React from 'react';


const Footer =() =>{
    
    return(
        <div className="footer">
            <div className="top"> 
                <div> 
                    <h1 className='footer-text'>© 2023 Copyright: rvillaca</h1>
                </div>
                <div>
                    <a href="https://www.facebook.com/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://twitter.com/">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com/">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                </div>

            
            </div>            
            <div className="bottom"> </div>         
        </div>
    )
}
export default Footer