import React from "react";
import { Button } from "../components/Button";
import { Divisao } from "../components/Divisao";

const App = () => {
  return (
    <>
      <h1>Automatização de JS</h1>
      <Button type="clear" data-fruta="banana">
        Clique-me
      </Button>
      <Divisao />
    </>
  );
};

export { App };
