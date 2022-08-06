import CreateForm from "../components/createForm";
import MainContainer from "../components/mainContainer";
import { useEffect } from "react";

import useReducerApp from "../store/store";
import ItemsContainer from "../components/itemsContainer";
import Item from "../components/item";

const Create = () => {
  const [state, dispatch] = useReducerApp();

  useEffect(() => {
    dispatch({ type: "LOAD" });
  }, []);

  return (
    <MainContainer>
      <CreateForm dispatch={dispatch} />

      <ItemsContainer>
        {state.items.map((item) => (
          <Item item={item} key={crypto.randomUUID()} />
        ))}
      </ItemsContainer>
    </MainContainer>
  );
};

export default Create;
