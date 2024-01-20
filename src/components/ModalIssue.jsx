import { useState } from "react";
import CustomModal from "./CustomModal";
import { Button } from "@mui/material";

const ModalIssue = () => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleOpenConfirm = () => {
    setIsConfirmOpen(true);
  };

  return (
    <div>
      <Button variant={"contained"} onClick={handleOpenConfirm}>
        Open Confirm Dialog
      </Button>

      {isConfirmOpen && (
        <CustomModal
          description="This is a modal example"
          apiEndpoint="https://jsonplaceholder.typicode.com/users/1"
          onClose={() => setIsConfirmOpen(false)}
          onConfirm={() => console.log("Confirmed!")}
          open={isConfirmOpen}
          title="Confirm Action"
          content="Are you sure you want to perform this action?"
        />
      )}
    </div>
  );
};

export default ModalIssue;
