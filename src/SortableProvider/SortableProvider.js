import React from 'react';
import { ReactSortable } from "react-sortablejs";
import Sortable, { MultiDrag, Swap } from "sortablejs";

Sortable.mount(new MultiDrag(), new Swap());
export const SortableProvider = (props) => {
  const {
    onChange = () => { },
    items,
    children,
    style,
    className,
  } = props;
  return (
    <div>
      <ReactSortable
        animation={200}
        delayOnTouchStart={true}
        delay={2}
        list={items}
        setList={(val) => onChange(val)}
        style={style}
        className={className}
      >
        {children}
      </ReactSortable>
    </div>
  );
};