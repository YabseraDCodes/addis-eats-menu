import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";
import { Link, NavLink, useNavigate } from "react-router-dom";

function DishDetail() {
    const navigate = useNavigate();
    const { id } = useParams();

    const { data, loading, error } = useFetch("/dishes.json");

    if (loading) {
        return <p className="loading-state">Loading Food...</p>;
    }

    if (error) {
        return <p className="error-state">Error: {error}</p>;
    }

    const menu = data?.items ?? [];

    const meal = menu.find((item) => String(item.id) === id);
    function traverse(){
        navigate("/", {replace: true});
    }

    return (
        <div>
            <div>
                <h3>{meal.name}</h3>
                <p>{meal.description}</p>
                {meal.spicy && (
                    <span className="spicy-badge">Spicy</span>
                )}
            </div>

            <div className="food-bottom">
                <span className="price">
                    Price:  {meal.price} {meal.currency}
                </span>

                <span className={`catagory catagory-${meal.category}`}>
                    {meal.category}
                </span>
            </div>
            {/* <Link to="/">{`<- `}Back to Menu</Link> */}
            <button onClick={traverse}>Back</button>

            {/* <NavLink to="/"
                className={({ isActive }) => isActive ? "on" : ""}>Back</NavLink> */}
        </div>
    );
}

export default DishDetail;