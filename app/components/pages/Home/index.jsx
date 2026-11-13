import Categories from "./Categories";

const item = 10;
const Home = () => {
  return (
    <section className="section">
      <h2 className="section-title">Shop By Category</h2>
      <Categories item={item} abc={20} />
    </section>
  );
};

export default Home;
