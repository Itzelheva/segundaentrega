
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AlertPurchase = ({ transactionId }) => {
  return (
    <Stack sx={{ width: "100%"}} spacing={2}>
      <Alert severity="success">
        Tu orden se ha generado con éxito. Tu ID de transacción es: {transactionId}
      </Alert>
    </Stack>
  );
};

export default AlertPurchase;
