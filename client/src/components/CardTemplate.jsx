import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";

export const CardCirurgia = ({data}) => {
  return (
    <Card key={data.key} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {data.tipo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hospital: {data.hospital}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Data: {data.data.split(' ')[0]}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent:"flex-end" }}>
        <Button size="small" variant="contained" color="info">Editar</Button>
        <Button size="small" >Remover</Button>
      </CardActions>
    </Card>
  );
};

export const CardPaciente = ({data}) => {
    return (
      <Card key={data.key} sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {data.nome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            RG: {data.rg}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            CPF: {data.cpf}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            CNS: {data.cns}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sexo: {data.sexo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Data de nascimento: {data.dataNasc.split(' ')[0]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Forma de recadastro: {data.recadastro}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Telefone: {data.tel}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Convênio: {data.convenio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Escolaridade: {data.escolaridade}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Profissão: {data.profissao}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Data de inscrição: {data.dataInsc.split(' ')[0]}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent:"flex-end" }}>
          <Button size="small" variant="contained" color="info">Editar</Button>
          <Button size="small" >Remover</Button>
        </CardActions>
      </Card>
    );
  };