import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function ToastCom({
  open,
  onClose,
  content,
  anchorOrigin,
  alertIcon,
  style,
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      <Alert
        onClose={onClose}
        icon={alertIcon}
        severity="success"
        variant="filled"
        style={style}
      >
        {content}
      </Alert>
    </Snackbar>
  );
}
