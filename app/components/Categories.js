// components/Categories.js
import Category from "./Category";

const Categories = () => {
  return (
    <section id="categories" className="md:pb-20 md:pt-32 gap-8 flex flex-col md:flex-row">
      <Category variant="slideInBottom" bgColor="bg-tertiary">
        <h3>Air</h3>
      </Category>
      <Category variant="slideInBottom" bgColor="bg-primary-dark">
        <h3>Sea</h3>
      </Category>
      <Category variant="slideInBottom" bgColor="bg-secondary">
        <h3>Land</h3>
      </Category>
    </section>
  );
};

export default Categories;
