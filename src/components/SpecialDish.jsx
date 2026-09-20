import { Link } from "react-router-dom";

export function SpecialDish({ specials }) {
  return (
    <section className="home-section">
      <div className="section-heading">
        <div>
          <p className="section-label">TODAY'S PICKS</p>
          <h2>Today's Specials</h2>
        </div>
      </div>

      <div className="special-grid">
        {specials.map((dish) => (
          <article className="special-card" key={dish.id}>
            <div className="special-card-content">
              <div className="special-top">
                <span className={`catagory catagory-${dish.category}`}>
                  {dish.category}
                </span>

                {dish.spicy && (
                  <span className="spicy-badge">
                    Spicy
                  </span>
                )}
              </div>

              <h3>{dish.name}</h3>

              <p>{dish.description}</p>

              <div className="special-bottom">
                <span className="price">
                  {dish.price} ETB
                </span>

                <Link
                  to={`/menu/${dish.id}`}
                  className="details-link"
                >
                  View Dish →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
