import { Button, TextInput } from "ui";
import { add, subtract } from "utils";

export default function Web() {
  return (
    <div>
      <h1>Web 2</h1>
      <Button />
      <TextInput />
      
      
      <p>{ add(20, 5) }</p>
      <p>{ subtract(10, 5) }</p>
    </div>
  );
}
