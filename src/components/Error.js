import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>{err.data}</h1>
      <h1>Opps!!!</h1>
      <h2>Something Went Wrong</h2>
    </div>
  );
};

export default Error;
