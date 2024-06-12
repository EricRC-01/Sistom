import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Container,
  TableHead,
  TableRow,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import dayjs from "dayjs";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { formatPhoneNumber, formatDate } from "../utils/Format";

export const TabelaPaciente = ({ query }) => {
  const { isLoading, isError, error, data } = query;

  const navigate = useNavigate();

  const columns = [
    { field: "nome", headerName: "Nome", width: 150 },
    { field: "cns", headerName: "CNS", width: 200 },
    {
      field: "tel",
      headerName: "Telefone",
      width: 150,
      valueFormatter: (params) => formatPhoneNumber(params),
    },
    { field: "idade", headerName: "Idade", width: 70 },
    {
      field: "dataNasc",
      headerName: "Nascimento",
      width: 150,
      valueFormatter: (params) => formatDate(params),
    },
    {
      field: "dataInsc",
      headerName: "Inscrição",
      width: 150,
      valueFormatter: (params) => formatDate(params),
    },
    { field: "recadastro", headerName: "Recadastro", width: 150 },
    { field: "convenio", headerName: "Convenio", width: 150 },
    { field: "esf", headerName: "ESF", width: 150 },
    { field: "escolaridade", headerName: "Escolaridade", width: 150 },
    { field: "profissao", headerName: "Profissão", width: 150 },
    { field: "mobilidade", headerName: "Mobilidade", width: 150 },
    { field: "renda", headerName: "Renda", width: 150 },
    { field: "condicoes", headerName: "Condições", width: 150 },
    { field: "ativo", headerName: "Status", width: 150 },
  ];

  const handleRowClick = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    navigate(`/Paciente?userId=${params.id}`);
  };

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;

  return (
    <>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        onRowDoubleClick={handleRowClick}
        disableRowSelectionOnClick
        initialState={{
          ...data.initialState,
          columns: {
            ...data.initialState?.columns,
            columnVisibilityModel: {
              ativo: false,
              condicoes: false,
              renda: false,
              mobilidade: false,
              profissao: false,
              escolaridade: false,
              esf: false,
              convenio: false,
              recacdastro: false,
            },
          },
        }}
      />
    </>
  );
};
