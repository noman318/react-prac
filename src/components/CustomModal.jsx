import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
} from "@mui/material";

import axios from "axios";
import { useState } from "react";

const CustomModal = ({
  open,
  onClose,
  onConfirm,
  title,
  content,
  apiEndpoint,
}) => {
  const [doNotAskAgain, setDoNotAskAgain] = useState(false);

  const handleCloseConfirm = (confirmed) => {
    if (confirmed && onConfirm) {
      axios
        .post(apiEndpoint, {})
        .then((response) => {
          console.log("Post request successful:", response.data);
          onConfirm();
        })
        .catch((error) => {
          console.error("Error making post request:", error);
        })
        .finally(() => {
          onClose();
        });
    } else {
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={() => handleCloseConfirm(false)}>
      <DialogTitle>
        {title}
        <Button onClick={() => handleCloseConfirm(false)}>close</Button>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
        <FormControlLabel
          control={
            <Checkbox
              checked={doNotAskAgain}
              onChange={() => setDoNotAskAgain(!doNotAskAgain)}
            />
          }
          label="Do not ask again"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleCloseConfirm(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={() => handleCloseConfirm(true)} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
