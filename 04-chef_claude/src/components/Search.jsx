import React from "react";

export default function Search() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientElements = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <section className="search">
      <form className="add-ingredient-form" action={handleSubmit}>
        <input
          type="text"
          aria-label="Add ingredient"
          className="search-input"
          placeholder="e.g oregano"
          name="ingredient"
        />
        <button type="submit" className="search-button">
          Add ingredient
        </button>
      </form>

      <ul>{ingredientElements}</ul>
    </section>
  );
}
