
const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <h1>{props.description}</h1>
      <img src= {props.image ? props.image : "https://picsum.photos/200"} alt={props.name} />
    </div>
  );
};

export default Pizza;
