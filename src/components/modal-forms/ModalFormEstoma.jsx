import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form-components/FormInputText";
import { FormInputDropdown } from "../form-components/FormInputDropdown";
import { FormInputDate } from "../form-components/FormInputDate";

import { useMutation } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { useState, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

import { RegisterButton } from "components/RegisterButton";
import { OpenModalButton } from "components/OpenModalButton";

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

  const { handleSubmit, reset, control } = useForm({
    defaultValues: defaultValues,
  });

  const modalRef = useRef(null);

  return (
    <>
      <OpenModalButton handleOpen={handleOpen} />

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
          ref={modalRef}
        >
          <FormInputDropdown
            label="Tipo de Estoma"
            control={control}
            name="tipoEstoma"
            required={true}
            options={[
              "Colostomia",
              "Ileostomia",
              "Urostomia",
              "Nefrectomia",
              "Outro",
            ]}
          />
          <FormInputText
            label="Diagnóstico Médico"
            control={control}
            name="diagnostico"
            required={true}
          />
          <FormInputRadio
            label="Demarcação"
            control={control}
            name="demarcacao"
            options={["Sim", "Não", "Não informado"]}
          />
          <FormInputDropdown
            label="Exteriorização"
            control={control}
            name="exteriorizacao"
            options={[
              "Terminal",
              "Derivação Urinária Bricker",
              "Em Alça",
              "Urostomia",
              "Duas bocas",
              "Não informado",
              "Outro",
            ]}
          />
          <FormInputRadio
            label="Abdome"
            control={control}
            name="abdome"
            options={[
              "Plano",
              "Globoso",
              "Escavado",
              "Semi Globoso",
              "Não informado",
              "Outro",
            ]}
          />
          <FormInputRadio
            label="Permanência"
            control={control}
            name="permanencia"
            options={["Permanente", "Temporário", "Indeterminado"]}
          />
          <FormInputRadio
            label="Localização"
            control={control}
            name="localizacao"
            options={["QSE", "QSD", "QIE", "QID", "Não informado", "Outro"]}
          />
          <FormInputRadio
            label="Higiene"
            control={control}
            name="higiene"
            options={["Boa", "Satisfatória", "Ruim", "Não informado", "Outro"]}
          />
          <FormInputText label="Medida" control={control} name="medida" />
          <FormInputRadio
            label="Formato"
            control={control}
            name="formato"
            options={["Circular", "Oval", "Não informado", "Outro"]}
          />
          <FormInputRadio
            label="Forma"
            control={control}
            name="forma"
            options={["Regular", "Irregular", "Outro", "Não informado"]}
          />
          <FormInputRadio
            label="Coloração"
            control={control}
            name="coloracao"
            options={["Rosado", "Vermelho vivo", "Não informado", "Outro"]}
          />
          <FormInputRadio
            label="Haste"
            control={control}
            name="haste"
            options={["Presente", "Ausente", "Não informado", "Outro"]}
          />
          <FormInputRadio
            label="Protusão do Estoma"
            control={control}
            name="protusao"
            options={[
              "Protuso-saliente",
              "Plano",
              "Retraído",
              "Não informado",
              "Outro",
            ]}
          />
          <FormInputRadio
            label="Função"
            control={control}
            name="funcao"
            options={[
              "Funcionante",
              "Não funcionante",
              "Não informado",
              "Outro",
            ]}
          />
          <FormInputDropdown
            label="Complicação"
            control={control}
            name="complicacao"
            options={[
              "Ausente",
              "Fungo",
              "Retração",
              "Sangramento",
              "Prolapso",
              "Edema",
              "Vazamento",
              "Estenose",
              "Hérnia",
              "Hérnia periestomal",
              "Hérnia umbilical",
              "Granuloma",
              "Infecção",
              "Deiscência",
              "Dermatite",
              "Tumor",
              "Necrose",
              "Lesão decorrente tubete",
              "Corte inadequado",
              "Maceração",
              "Descolamento",
              "Saída de fezes pela parte inferior",
              "Isquemia",
              "Não informado",
              "Outro",
            ]}
          />
          <FormInputDropdown
            label="Pele periestoma"
            control={control}
            name="periestoma"
            options={[
              "Integra",
              "Dermatite",
              "Hiperemiada",
              "Granuloma",
              "Macerada",
              "Hernia Paraestomal",
              "Lesao decorrente do tubete",
              "Infeccao fungica",
              "Friavel",
              "Pontos Escurecidos",
              "Deiscencia nos pontos",
            ]}
          />
          <FormInputText label="Diâmetro" control={control} name="diametro" />
          <FormInputText label="Sistema" control={control} name="sistema" />
          <FormInputRadio
            label="Tipo de Placa"
            control={control}
            name="tipoPlaca"
            options={["Plana", "Convexa", "Recortável"]}
          />
          <FormInputDropdown
            label="Adjuvante"
            control={control}
            name="adjuvante"
            options={[
              "Não utiliza",
              "Pasta de hidrocolóide",
              "Pó para estoma",
              "Creme para dermatite",
              "Spray barreira de pele",
              "Anel moldável",
              "Removedor de adesivo",
              "Creme barreira",
              "Fita adesiva circular",
              "Cinto",
              "PHMB",
              "Placa protetora",
              "Limpador para a pele",
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
          <IconButton
            variant="contained"
            sx={{
              color: "primary.main",
            }}
            onClick={() => {
              modalRef.current?.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <ArrowUpwardRoundedIcon fontSize="medium" />
          </IconButton>

          <RegisterButton
            table="estomas"
            handleSubmit={handleSubmit}
            handleClose={handleClose}
          />
          <Button color="inherit" onClick={handleClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};