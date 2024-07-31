// components/Categories.js
import CategoryItem from "./CategoryItem";
import FlyingPlane from "./FlyingPlane";
import SailingShip from "./SailingShip";

const Categories = () => {
  return (
    <section
      id="categories"
      className="md:pb-20 md:pt-32 gap-8 flex flex-col md:flex-row"
      style={{ perspective: "2500px" }}
    >
      <CategoryItem
        title="Air"
        AnimatedComponent={FlyingPlane}
        description="Fast and efficient transportation of goods by aircraft for long distances."
        bgColor="bg-tertiary"
      />
      <CategoryItem
        title="Sea"
        AnimatedComponent={SailingShip} // Replace with actual animated component
        description="Reliable and cost-effective shipping of large volumes of goods by sea."
        bgColor="bg-primary-dark"
      />
      <CategoryItem
        title="Land"
        AnimatedComponent={() => <div />} // Replace with actual animated component
        description="Convenient and flexible transportation of goods by road and rail."
        bgColor="bg-secondary"
      />
    </section>
  );
};

export default Categories;
