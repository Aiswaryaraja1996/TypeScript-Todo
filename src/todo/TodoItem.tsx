import React from "react";
import { TodoItemProps } from "./Todo";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface Props {
  data: TodoItemProps;
  onDelete: (id: string | number) => void;
  onToggle: (id: string | number) => void;
  onEdit: (id: string | number, text: string) => void;
}

const TodoItem = ({ data, onDelete, onToggle, onEdit }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState(data.title);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (id: string | number) => {
    onDelete(id);
  };

  const handleToggle = (id: string | number) => {
    onToggle(id);
  };

  const handleEdit = (id: string | number, text: string) => {
    onEdit(id, text);
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{data.title}</p>
      <p>{data.status ? "Done" : "Not Done"}</p>
      <img
        style={{ cursor: "pointer" }}
        src="./delete.png"
        alt="delete"
        width="24px"
        height="24px"
        onClick={() => handleDelete(data.id)}
      />
      {data.status ? (
        <img
          src="./on-button.png"
          alt="on-button"
          width="24px"
          height="24px"
          style={{ cursor: "pointer" }}
          onClick={() => handleToggle(data.id)}
        />
      ) : (
        <img
          style={{ cursor: "pointer" }}
          src="./off-button.png"
          alt="on-button"
          width="24px"
          height="24px"
          onClick={() => handleToggle(data.id)}
        />
      )}
      <img
        src="./edit.png"
        width="24px"
        height="24px"
        style={{ cursor: "pointer" }}
        alt="edit"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",

            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <TextField
              id="outlined-basic"
              label="Edit the task"
              variant="outlined"
              onChange={(e) => setText(e.target.value)}
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button
              variant="contained"
              onClick={() => handleEdit(data.id, text)}
            >
              EDIT
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default TodoItem;
