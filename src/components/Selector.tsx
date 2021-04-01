import React, { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

interface ISelectorProps {
  label: string;
  value: string;
  values: string[];
  onChange: (value: string) => void;
}
export const Selector = (props: ISelectorProps) => {
  return (
    <TextField
      select
      label={props.label}
      value={props.value}
      onChange={(
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => {
        props.onChange(event.target.value);
      }}
    >
      {props.values.map((val, index) => {
        return (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        );
      })}
    </TextField>
  );
};
