import * as React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import Sortly, { useDrag, useDrop } from "react-sortly";

import data from "../data/data";
import "./DragAndDropList.scss";

const ItemRenderer = (props) => {
  const {
    id,
    data: { name, depth },
  } = props;
  const [, drag] = useDrag();
  const [, drop] = useDrop();

  return (
    <Flipped flipId={id}>
      <div ref={drop} className="item">
        <div ref={drag} className="itemBody" style={{ marginLeft: depth * 20 }}>
          {name}
        </div>
      </div>
    </Flipped>
  );
};

const DragAndDropList = () => {
  const [items, setItems] = React.useState(data);
 
  const handleChange = (newItems) => {
    setItems(newItems);
  };

  return (
    <Flipper
      className="container"
      flipKey={items.map(({ id }) => id).join(".")}
    >
      <h1 className="title">Simple Drag And Drop</h1>
      <Sortly items={items} maxDepth={3} onChange={handleChange}>
        {(props) => <ItemRenderer {...props} />}
      </Sortly>
    </Flipper>
  );
};

export default DragAndDropList;
