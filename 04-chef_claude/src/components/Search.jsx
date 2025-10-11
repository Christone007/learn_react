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
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientElements}
        </ul>
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>
      </section>
    </section>
  );
}
