import { NavLink } from "react-router-dom";

const Product = (props) => {
    console.log(props);
    const { _id, title, img_url, text } = props.data;

    return (
        <div className="single_Burger_President">
            <div className="room_thumb">
                <img src={img_url} alt={title} />
                <div className="room_heading d-flex justify-content-center align-items-center">
                    <div className="room_heading_inner">
                        <h3>{title}</h3>
                        <p>{text.substring(0, 50)}..</p>
                        <NavLink className="popup-with-form" to={`/product/${_id}`}>Purchase</NavLink>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;