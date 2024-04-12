const HOCComponent = (Component) => {
  const users = {
    name: "sam",
    age: 25,
    city: "cbe",
    state: "cbe",
  };
  return () => <Component value={users} />;
};
export default HOCComponent;
