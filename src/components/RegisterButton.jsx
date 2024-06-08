import LoadingButton from "@mui/lab/LoadingButton";

export const RegisterButton = ({ onSubmit, handleSubmit, isPending }) => {
  return (
    <div>
      <LoadingButton
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
        loading={isPending}
      >
        Submeter
      </LoadingButton>
    </div>
  );
};
