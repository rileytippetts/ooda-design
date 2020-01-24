import React from "react";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Theme } from "../components/theme";

const Index = () => (
  <Theme>
    <div>
      <Card background="colorPrimary200" />
    </div>
    <h1>Buttons</h1>
    <Button>Button</Button>
  </Theme>
);

export default Index;
