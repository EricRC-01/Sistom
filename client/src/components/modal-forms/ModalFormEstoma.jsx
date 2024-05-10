import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form-components/FormInputText";
import { FormInputDropdown } from "../form-components/FormInputDropdown";
import { FormInputDate } from "../form-components/FormInputDate";
import dayjs, { Dayjs } from "dayjs";

import { useMutation } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";


import { useQueryClient } from "@tanstack/react-query";

import { Form, useLocation } from "react-router-dom";
import { FormInputRadio } from "components/form-components/FormInputRadio";

const defaultValues = {
  tipoEstoma: "",
  diagnostico: "",
  demarcacao: "",
  exteriorizacao: "",
  abdome: "",
  permanencia: "",
  localizacao: "",
  higiene: "",
  medida: "",
  formato: "",
  forma: "",
  coloracao: "",
  haste: "",
  protusao: "",
  funcao: "",
  complicacao: "",
  periestoma: "",
  diametro: "",
  sistema: "",
  tipoPlaca: "",
  adjuvante: "",
  custoExtra: "",
  adaptacao: "",
  equipamento: "",
};

export const ModalFormEstoma = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  // Usando useLocation para obter a localização (URL)
  const location = useLocation();
  // Obtendo os parâmetros da URL
  const searchParams = new URLSearchParams(location.search);
  // Obtendo o valor do parâmetro 'userId'
  const userId = searchParams.get("userId");

  const queryClient = useQueryClient();

  const { registerField, pb } = usePocket();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: registerField,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["estomas"] });
      handleClose();
    },
    onError: () => {
      alert("ERROR");
    },
  });

  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = async (data) => {
    mutate({
      data: {
        diagnostico: data.diagnostico,
        tipoEstoma: data.tipoEstoma,
        demarcacao: data.demarcacao,
        exteriorizacao: data.exteriorizacao,
        abdome: data.abdome,
        permanencia: data.permanencia,
        localizacao: data.localizacao,
        higiene: data.higiene,
        medida: data.medida,
        formato: data.formato,
        forma: data.forma,
        coloracao: data.coloracao,
        haste: data.haste,
        protusao: data.protusao,
        funcao: data.funcao,
        complicacao: data.complicacao,
        periestoma: data.periestoma,
        diametro: data.diametro,
        sistema: data.sistema,
        tipoPlaca: data.tipoPlaca,
        adjuvante: data.adjuvante,
        custoExtra: data.custoExtra,
        adaptacao: data.adaptacao,
        equipamento: data.equipamento,
        paciente: userId,
      },
      tabela: "estomas",
    });
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        variant="contained"
        sx={{
          borderRadius: 5,
          marginRight: 1,
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        <AddCircleRoundedIcon />
        <Typography sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          Adicionar
        </Typography>
      </IconButton>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          Registrar Novo Paciente
          <IconButton onClick={handleClose} sx={{ float: "right" }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            display: "grid",
            gridRowGap: "20px",
            padding: "20px",
            margin: "10px 10px",
          }}
        >
          <FormInputText
            label="Diagnóstico Médico"
            control={control}
            name="diagnostico"
          />
          <FormInputDropdown
            label="Tipo de Estoma"
            control={control}
            name="tipoEstoma"
            options={[
              { label: "Colostomia", value: "colostomia" },
              { label: "Ileostomia", value: "ileostomia" },
              { label: "Urostomia", value: "urostomia" },
              { label: "Nefrectomia", value: "nefrectomia" },
              { label: "Outro", value: "outro" },
            ]}
          />
          <FormInputRadio
            label="Demarcação"
            control={control}
            name="demarcacao"
            options={[
              { label: "Sim", value: "sim" },
              { label: "Não", value: "nao" },
              { label: "Não informado", value: "naoInformado" },
            ]}
          />
          <FormInputDropdown
            label="Exteriorização"
            control={control}
            name="exteriorizacao"
            options={[
              { label: "Terminal", value: "terminal" },
              {
                label: "Derivação Urinária Bricker",
                value: "derivaçãoUrináriaBricker",
              },
              { label: "Em Alça", value: "alca" },
              { label: "Uro", value: "uro" },
              { label: "Duas bocas", value: "duasBocas" },
              { label: "Não informado", value: "naoInformado" },
              { label: "Outro", value: "outro" },
            ]}
          />
          <FormInputRadio
            label="Abdome"
            control={control}
            name="abdome"
            options={[
              { label: "Plano", value: "plano" },
              { label: "Globoso", value: "globoso" },
              { label: "Escavado", value: "escavado" },
              { label: "Semi Globoso", value: "semiGloboso" },
              { label: "Não informado", value: "naoInformado" },
              { label: "Outro", value: "outro" },
            ]}
          />
          <FormInputRadio
            label="Permanência"
            control={control}
            name="permanencia"
            options={[
              { label: "Permanente", value: "permanente" },
              { label: "Temporário", value: "temporario" },
              { label: "Indeterminado", value: "indeterminado" },
            ]}
          />
          <FormInputRadio
            label="Localização"
            control={control}
            name="localizacao"
            options={[
              { label: "QSE", value: "qse" },
              { label: "QSD", value: "qsd" },
              { label: "QIE", value: "qie" },
              { label: "QID", value: "qid" },
              { label: "Não informado", value: "naoInformado" },
              { label: "Outro", value: "outro" },
            ]}
          />
          <FormInputRadio
            label="Higiene"
            control={control}
            name="higiene"
            options={[
              { label: "Boa", value: "boa" },
              { label: "Satisfatória", value: "satisfatoria" },
              { label: "Ruim", value: "ruim" },
              { label: "Não informado", value: "naoInformado" },
              { label: "Outro", value: "outro" },
            ]}
          />
          <FormInputText label="Medida" control={control} name="medida" />
          <FormInputRadio
            label="Formato"
            control={control}
            name="formato"
            options={[
              { label: "Circular", value: "circula" },
              { label: "Oval", value: "oval" },
              { label: "Não informado", value: "naoInformado" },
              { label: "Outro", value: "outro" },
            ]}
          />
          <FormInputRadio label="Forma" control={control} name="forma" options={[
                { label: "Regular", value: "regular" },
                { label: "Irregular", value: "irregular" },
                { label: "Outro", value: "outro" },
                { label: "Não informado", value: "naoInformado" },
                
          ]} />
          <FormInputRadio
            label="Coloração"
            control={control}
            name="coloracao"
            options={[
              { label: "Rosado", value: "rosado" },
              { label: "Vermelho vivo", value: "vermelhoVivo" },
              { label: "Não informado", value: "naoInformado" },
              { label: "Outro", value: "outro" },
            ]}
          />
          <FormInputRadio
            label="Haste"
            control={control}
            name="haste"
            options={[
              { label: "Presente", value: "presente" },
              { label: "Ausente", value: "ausente" },
              { label: "Não informado", value: "naoInformado" },
              { label: "Outro", value: "outro" },
            ]}
          />
          <FormInputRadio
            label="Protusão do Estoma"
            control={control}
            name="protusao"
            options={[
              { label: "Protuso-saliente", value: "saliente" },
              { label: "Plano", value: "plano" },
              { label: "Retraído", value: "retraido" },
              { label: "Não informado", value: "naoInformado" },
              { label: "Outro", value: "outro" },
            ]}
          />
          <FormInputRadio
            label="Função"
            control={control}
            name="funcao"
            options={[
              { label: "Funcionante", value: "Funcionante" },
              { label: "Não funcionante", value: "naoFuncionante" },
              { label: "Não informado", value: "naoInformado" },
              { label: "Outro", value: "outro" },
            ]}
          />
          <FormInputDropdown
            label="Complicação"
            control={control}
            name="complicacao"
            options={[
              { label: "Ausente", value: "ausente" },
              { label: "Fungo", value: "fungo" },
              { label: "Retração", value: "retracao" },
              { label: "Sangramento", value: "sangramento" },
              { label: "Prolapso", value: "prolapso" },
              { label: "Edema", value: "edema" },
              { label: "Vazamento", value: "vazamento" },
              { label: "Estenose", value: "estenose" },
              { label: "Hérnia", value: "hernia" },
              { label: "Hérnia periestomal", value: "herniaPeriestomal" },
              { label: "Hérnia umbilical", value: "herniaUmbilical" },
              { label: "Granuloma", value: "granuloma" },
              { label: "Infecção", value: "infeccao" },
              { label: "Deiscência", value: "deiscencia" },
              { label: "Dermatite", value: "dermatite" },
              { label: "Tumor", value: "tumor" },
              { label: "Necrose", value: "necrose" },
              {
                label: "Lesão decorrente tubete",
                value: "lesaoDecorrenteTubete",
              },
              { label: "Corte inadequado", value: "corteInadequado" },
              { label: "Maceracao", value: "maceracao" },
              { label: "Descolamento", value: "descolamento" },
              {
                label: "Saída de fezes pela parte inferior",
                value: "saidaDeFezesPelaParteInferior",
              },
              { label: "Isquemia", value: "isquemia" },
              { label: "Não informado", value: "naoInformado" },
              { label: "Outro", value: "outro" },
            ]}
          />
          <FormInputDropdown
            label="Pele periestoma"
            control={control}
            name="periestoma"
            options={[
              { label: "Integra", value: "integra" },
              { label: "Dermatite", value: "dermatite" },
              { label: "Hiperemiada", value: "hiperemiada" },
              { label: "Granuloma", value: "granuloma" },
              { label: "Macerada", value: "macerada" },
              { label: "Hernia Paraestomal", value: "herniaParaestomal" },
              {
                label: "Lesao decorrente do tubete",
                value: "lesaoDecorrenteDoTubete",
              },
              { label: "Infeccao fungica", value: "infeccaoFungica" },
              { label: "Friavel", value: "friavel" },
              { label: "Pontos Escurecidos", value: "pontosEscurecidos" },
              { label: "Deiscencia nos pontos", value: "deiscenciaNosPontos" },
            ]}
          />
          <FormInputText label="Diâmetro" control={control} name="diametro" />
          <FormInputText label="Sistema" control={control} name="sistema" />
          <FormInputRadio
            label="Tipo de Placa"
            control={control}
            name="tipoPlaca"
            options={[
              { label: "Plana", value: "plana" },
              { label: "Convexa", value: "convexa" },
              { label: "Recortável", value: "recortavel" },
            ]}
          />
          <FormInputDropdown
            label="Adjuvante"
            control={control}
            name="adjuvante"
            options={[
              { label: "Não utiliza", value: "naoUtiliza" },
              { label: "Pasta de hidrocolóide", value: "pastaDeHidrocoloide" },
              { label: "Pó para estoma", value: "poParaEstoma" },
              { label: "Creme para dermatite", value: "cremeParaDermatite" },
              { label: "Spray barreira de pele", value: "sprayBarreiraDePele" },
              { label: "Anel moldável", value: "anelMoldavel" },
              { label: "Removedor de adesivo", value: "removedorDeAdesivo" },
              { label: "Creme barreira", value: "cremeBarreira" },
              { label: "Fita adesiva circular", value: "fitaAdesivaCircular" },
              {
                label: "Elástico para improvisação",
                value: "elasticoParaImprovisacao",
              },
              { label: "Cinto", value: "cinto" },
              { label: "PHMB", value: "phmb" },
              {
                label: "Desodorante/lubrificante",
                value: "desodoranteLubrificante",
              },
              { label: "Placa protetora", value: "placaProtetora" },
              { label: "Limpador para a pele", value: "limpadorParaAPele" },
            ]}
          />
          <FormInputText
            label="Custo Extra"
            control={control}
            name="custoExtra"
          />
          <FormInputText label="Adaptação" control={control} name="adaptacao" />
          <FormInputText
            label="Equipamento"
            control={control}
            name="equipamento"
          />
        </DialogContent>
        <DialogActions>
          <Button color="success" onClick={handleSubmit(onSubmit)}>
            Registrar
          </Button>
          <Button color="inherit" onClick={handleClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
