import starFilled from "/src/assets/star-filled.png";
import starEmpty from "/src/assets/star-empty.png";

export default function Star(props) {
  let starIcon = props.isFilled ? starFilled : starEmpty;

  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={
        props.isFilled ? "Remove from favourites" : "Add to favourites"
      }
      className="favorite-button"
    >
      <img
        src={starIcon}
        alt={props.isFilled ? "Filled star icon" : "Empty star icon"}
        className="favorite"
      />
    </button>
  );
}
