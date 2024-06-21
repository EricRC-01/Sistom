import {
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

import dayjs from "dayjs";

import { RemoveButton } from "components/RemoveButton";

import { formatPhoneNumber, formatDate } from "../../utils/Format";
import { ModalForm } from "components/ModalForm";

export const DisplayPaciente = ({ query }) => {
  const { isLoading, isError, error, data } = query;

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;

  console.log(
    `https://sistom.pockethost.io/api/files/pacientes/${data.id}/${data.pfp}`
  );
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sx={{ width: "100%" }}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={`https://sistom.pockethost.io/api/files/pacientes/${data.id}/${data.pfp}`}
              alt="Foto do Paciente"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="h4" component="div" mb={2}>
                {data.name}
              </Typography>
              <Typography variant="h5" mb={2}>
                {data.ativo ? "Ativo" : `Inativo - ${data.motivoInatividade}`}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                CNS: {data.sus_card}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Sexo: {data.gender}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Telefone: {formatPhoneNumber(data.tel)}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Data de Nascimento: {formatDate(data.birth_date)}
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
                Convênio: {data.health_insurance ? data.health_insurance : "Não informado"}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Escolaridade:{" "}
                {data.education ? data.education : "Não informado"}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Profissão: {data.profession ? data.profession : "Não informado"}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Renda: {data.renda ? data.renda : "Não informado"}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Condições clínicas:{" "}
                {data.condicoes.length ? data.condicoes.join(", ") : "Nenhuma"}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Mobilidade: {data.mobility}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Território: {data.territorio.nome}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Mesorregião: {data.mesorregiao.nome}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Microrregião: {data.microrregiao.nome}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Município: {data.municipio.nome}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <ModalForm
                table="pacientes"
                mode="edit"
                defaultValuesEdit={{
                  ...data,
                  territorio: JSON.stringify(data.territorio),
                  mesorregiao: JSON.stringify(data.mesorregiao),
                  microrregiao: JSON.stringify(data.microrregiao),
                  municipio: JSON.stringify(data.municipio),
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
