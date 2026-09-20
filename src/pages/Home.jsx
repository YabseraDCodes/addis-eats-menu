import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { SpecialDish } from "../components/SpecialDish";

export function Home() {
  const { data, loading, error } = useFetch("dishes.json");

  if (loading) {
    return <p className="loading-state">Loading...</p>;
  }

  if (error) {
    return <p className="error-state">Error: {error}</p>;
  }

  const menu = data?.items ?? [];

  const specials = menu.slice(0, 3);

  const categories = [
    { name: "All", value: "ALL" },
    { name: "Main Dishes", value: "MAIN" },
    { name: "Breakfast", value: "BREAKFAST" },
    { name: "Drinks", value: "DRINK" },
    { name: "Desserts", value: "DESSERT" },
  ];

  return (
    <main className="home">

      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">WELCOME TO ADDIS EATS</p>
          <h1>
            Authentic Ethiopian food,
            <span> made with care.</span>
          </h1>

          <p className="hero-description">
            Discover traditional Ethiopian dishes, freshly prepared
            and ready to bring to your table.
          </p>

          <Link to="/menu" className="hero-button">Explore Menu</Link>
        </div>
      </section>

      <SpecialDish specials={specials} />

      <section className="home-section categories-section">
        <div className="section-heading centered">
          <p className="section-label">EXPLORE</p>

          <h2>What are you hungry for?</h2>

          <p>Browse our menu by category and find something you'll love. </p>
        </div>

        <div className="home-categories">
          {categories.map((category) => (
            <Link key={category.value}
              to={category.value === "ALL"
                ? "/menu"
                : `/menu?category=${category.value}`
              }
              className="home-category-button">
              {category.name}
            </Link>
          ))}
        </div>
      </section>


      <section className="home-cta">
        <div>
          <p className="section-label">READY TO ORDER?</p>
          <h2>Something delicious is waiting.</h2>
          <p> Explore our full menu and add your favorites to your order. </p>
        </div>

        <Link to="/menu" className="hero-button">Start Your Order </Link>
      </section>

    </main>
  );
}
