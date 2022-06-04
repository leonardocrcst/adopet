import { shallow } from "enzyme";
import { ClickCounter } from "../src/ui/components/ClickCounter";

it("Total de cliques igual a 2", () => {
  const componente = shallow(<ClickCounter />);
  componente.find("input").simulate("change").simulate("change");
  expect(componente.state().counter).toEqual(2);
});
