import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import dayjs from "dayjs";

import { RemoveButton } from "components/RemoveButton";

import { formatDate } from "../../utils/Format.js";
import { ModalForm } from "components/ModalForm.jsx";

export const DisplayCirurgia = ({ query }) => {
  const { isLoading, isError, error, data } = query;

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;
  return (
    <>
      <Grid container spacing={2} mt={1} aria-label="Lista de cirurgias">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.tipo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Data: {formatDate(item.data)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hospital: {item.hospital}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Médico: {item.medico}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  CRM/{item.uf} {item.crm}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <ModalForm
                  table="cirurgias"
                  mode="edit"
                  defaultValuesEdit={{ ...item, data: dayjs(item.data) }}
                />
                <RemoveButton table="cirurgias" id={item.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
