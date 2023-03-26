import hill2 from '../images/hill2.png';
import hill3 from '../images/hill3.png';
import hill4 from '../images/hill4.png';
import hill5 from '../images/hill5.png';
import leaf from '../images/leaf.png';
import plant from '../images/plant.png';
import Header from './Header';
import React from 'react';



function ParallaxImages() {
    /*
    React.useEffect(() => {
        var leaff = document.getElementById('leaf');
        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            // document.getElementById('hill5').style.left = value * 0.75 + 'px';
            // document.getElementById('hill4').style.left = -value + 'px';
            // document.getElementById('hill3').style.left = value * 2.75 + 'px';
            // document.getElementById('hill2').style.left = -value * 2 + 'px';
            leaff.style.top = -value - 70 + 'px';
            leaff.style.left = value + 'px';
        })
    }, []
    )*/
    return (
        <div className="parallax">
            {/* <img src={hill2} id="hill2" alt="hill2" />
            <img src={hill3} id="hill3" alt="hill3" />
            <img src={hill4} id="hill4" alt="hill4" />
            <img src={hill5} id="hill5" alt="hill5" />
            
            <img src={plant} id="plant" />
            <div className="gradient" /> */}
            <img src={leaf} id="leaf" alt='leaf_alt' />
        </div>
    );
}

export default ParallaxImages;