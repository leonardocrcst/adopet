import { Button } from "@mui/material";
import {
  List as PetList,
  Item,
  Photo,
  Information,
  PetName,
  PetHistory,
} from "./List.style";
import { Pet } from "../../../data/@types/Pet";
import { cropText } from "../../../data/services";

interface IPetList {
  list: Pet[];
  onSelect: (pet: Pet) => void;
}

export const List = (props: IPetList) => {
  const historyLength: number = 240;
  return (
    <PetList>
      {props.list.map((item) => {
        return (
          <Item key={item.id}>
            <Photo src={item.photo} alt={item.name} title={item.name} />
            <Information>
              <PetName>{item.name}</PetName>
              <PetHistory>{cropText(item.history, historyLength)}</PetHistory>
              <Button variant={"contained"} fullWidth onClick={() => props.onSelect(item)}>
                Adotar {item.name}!
              </Button>
            </Information>
          </Item>
        );
      })}
    </PetList>
  );
};
