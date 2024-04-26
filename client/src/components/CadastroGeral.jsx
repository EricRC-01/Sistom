import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

import { FormModal } from "./FormModal";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const CadastroGeral = ({ fieldsConfig, apiRef }) => {
  const [open, setOpen] = useState(false);
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    import(`../../api/${apiRef}`).then((module) => {
      setGetData(() => module.getData);
    });
  }, [])

  const { isLoading, isError, error, data } = useQuery({
    queryKey: [apiRef],
    queryFn: getData,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const renderCardData = (item) => {
    return fieldsConfig.map((field, index) => (
      <Typography key={index} color="textSecondary">
        {field.label}: {item[field.name]}
      </Typography>
    ));
  };

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Cadastrar Novo
      </Button>
      <FormModal
        open={open}
        setOpen={setOpen}
        fieldsConfig={fieldsConfig}
        apiRef={apiRef}
      />
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>{renderCardData(item)}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
