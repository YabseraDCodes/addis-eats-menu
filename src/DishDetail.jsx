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
    function traverse() {
        navigate("/", { replace: true });
    }

    return (
        <main className="dish-detail-page">
            <section className="dish-detail-card">
                <div className="dish-detail-header">
                    <div className="dish-category">
                        <span className={`catagory catagory-${meal.category}`}>
                            {meal.category}
                        </span>

                        {meal.spicy && (
                            <span className="spicy-badge">
                                🌶 Spicy
                            </span>
                        )}
                    </div>

                    <h1>{meal.name}</h1>

                    <p className="dish-detail-description">
                        {meal.description}
                    </p>
                </div>

                <div className="dish-detail-divider"></div>

                <div className="dish-detail-info">
                    <div className="dish-info-box">
                        <span className="dish-info-label">Price</span>

                        <span className="dish-detail-price">
                            {meal.price} {meal.currency}
                        </span>
                    </div>

                    <div className="dish-info-box">
                        <span className="dish-info-label">Category</span>

                        <span className="dish-info-value">
                            {meal.category}
                        </span>
                    </div>
                </div>

                <div className="dish-detail-actions">
                    <button
                        className="back-menu-btn"
                        onClick={traverse}
                    >
                        ← Back to Menu
                    </button>
                </div>

            </section>
        </main>
    );
}

export default DishDetail;