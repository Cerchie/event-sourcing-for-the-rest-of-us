"use client";

import { PropsWithChildren } from "react";
import {
  toggleEventSourcedCheckbox,
} from "./actions";


export function ListItem({
  children,
  model,
  completed,
  id,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={async () => {
          if (model === "event-sourced") {
            await toggleEventSourcedCheckbox({ completed, id });
          } else {
            await toggleTraditionalCheckbox({ completed, id });
          }
          window.location.reload();
        }}
      />
      {children}
    </li>
  );
}
