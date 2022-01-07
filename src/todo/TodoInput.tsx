import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface Props {
  onSubmit: (text: string) => void;
}

const TodoInput = (props: Props) => {
  const [text, setText] = useState<string | undefined>(undefined);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleAdd = () => {
    if (text) {
      props.onSubmit(text);
      setText("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
      }}
    >
      <TextField
        value={text}
        onChange={onChange}
        label="Add Task"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleAdd}>
        ADD
      </Button>
    </div>
  );
};
export default TodoInput;
