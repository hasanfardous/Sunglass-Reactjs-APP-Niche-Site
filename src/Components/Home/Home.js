import Slider from '../Slider/Slider';
import About from '../About/About';
import Products from '../Products/Products';
import Testimonials from '../Testimonials/Testimonials';

function Home() {
    return (
        <div className="Home">
            <Slider></Slider>
            <Products showPurchase="no"></Products>
            <About></About>
            <Testimonials></Testimonials>
        </div>
    );
}

export default Home;
