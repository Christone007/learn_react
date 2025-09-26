export default function Search() {
  return (
    <section className="search">
      <form action="" className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add ingredient"
          className="search-input"
          placeholder="e.g oregano"
        />
        <button type="submit" className="search-button">
          Add ingredient
        </button>
      </form>
    </section>
  );
}
