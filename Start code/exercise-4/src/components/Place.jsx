export default function Place({ image }) {
  return (
    <li key={image} className="place-item">
      <button>
        <img src={image.src} alt={image.alt} />
        <h3>in the place</h3>
      </button>
    </li>
  );
}