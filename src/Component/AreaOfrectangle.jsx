import { rectanglehave } from "../utility/formula";
function AreaOfrectangle() {
  const length = 8;
  const width = 7;
  const newarea = rectanglehave(length, width);

  return (
    <div>
      <h1>
        
        area of rectangle will be {newarea} where length is {length} and width
        is {width}{" "}
      </h1>
      <p>new types of rectangle</p>
      <rectanglehave />
    </div>
  );
}

export default AreaOfrectangle;
