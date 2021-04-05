import { useHistory } from "react-router-dom";
const CategoryCard = ({ name, img, id, q }) => {
  const history = useHistory();
  const goToProductList = () => {
    history.push(`/product-list/${id}/${q}`);
  };
  return (
    <>
      <div className="product-card pointer" onClick={goToProductList}>
        <div className="product-image">
          {img && (
            <img
              src={process.env.REACT_APP_API + img}
              alt="Online Course"
              className="category-card-image"
            />
          )}
        </div>
      </div>
      <div className="product-info">
        <h4 className="text-center category-title">{name}</h4>
      </div>
    </>
  );
};

export default CategoryCard;
