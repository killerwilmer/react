const StaticComponent = () => {
  const items = ["Manzana", "Banana", "Cereza"];

  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export { StaticComponent };
