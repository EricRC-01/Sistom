import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import { RemoveButton } from "components/RemoveButton";

import { formatDateTime } from "../../utils/Format";

export const DisplayConsulta = ({ query }) => {
  const { isLoading, isError, error, data } = query;

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;
  return (
    <>
      <Grid container spacing={2} mt={1}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card key={item.key} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {formatDateTime(item.data)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hospital: {item.hospital}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  status: {item.status}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button size="small" variant="contained" color="primary">
                  Editar
                </Button>
                <RemoveButton table="consultas" id={item.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
