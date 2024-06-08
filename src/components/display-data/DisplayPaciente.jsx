import {
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";

import dayjs from "dayjs";

import { RemoveButton } from "components/RemoveButton";

import { formatPhoneNumber, formatDate } from "../../utils/Format";
import { ModalForm } from "components/ModalForm";

export const DisplayPaciente = ({ query }) => {
  const { isLoading, isError, error, data } = query;

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sx={{ width: "100%" }}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="div" mb={2}>
                {data.nome}
              </Typography>
              <Typography variant="h5" mb={2}>
                {data.ativo ? "Ativo" : `Inativo - ${data.motivoInatividade}`}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                CNS: {data.cns}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Sexo: {data.sexo}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Telefone: {formatPhoneNumber(data.tel)}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Data de Nascimento: {formatDate(data.dataNasc)}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Utiliza ESF: {data.esf ? "Sim" : "Não"}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Data de Inscrição: {formatDate(data.dataInsc)}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Forma de Recadastro: {data.recadastro}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Convênio: {data.convenio}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Escolaridade:{" "}
                {data.escolaridade ? data.escolaridade : "Não informado"}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Profissão: {data.profissao ? data.profissao : "Não informado"}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Renda: {data.renda ? data.renda : "Não informado"}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Condições clínicas:{" "}
                {data.condicoes.length ? data.condicoes.join(", ") : "Nenhuma"}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Mobilidade: {data.mobilidade}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <ModalForm
                table="pacientes"
                mode="edit"
                defaultValuesEdit={{
                  ...data,
                  dataNasc: dayjs(data.dataNasc),
                  dataInsc: dayjs(data.dataInsc),
                }}
              />
              <RemoveButton table="pacientes" id={data.id} />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
