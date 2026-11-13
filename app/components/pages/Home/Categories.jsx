function Categories(props) {
  const { item, abc } = props;
  return (
    <>
      <div className="categories">
        {item}
        <div className="category">
          <span>👕</span>
          <h3>Fashion</h3>
        </div>

        <div className="category">
          <span>📱</span>
          <h3>Electronics</h3>
        </div>

        <div className="category">
          <span>⌚</span>
          <h3>Accessories</h3>
        </div>

        <div className="category">
          <span>🏠</span>
          <h3>Home Decor</h3>
        </div>
      </div>
    </>
  );
}

export default Categories;
