import { useQuery } from "@tanstack/react-query";
import { usePocket } from "contexts/PocketContext";

import { Grid, Card, CardContent, Typography } from "@mui/material";

export const DisplayDataCards = ({ tabela }) => {
  const { getAllData, pb } = usePocket();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["cirurgias"],
    queryFn: () => getAllData("cirurgias"),
  });

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>{error}</div>;

  return (
    <>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card key={index} style={{ marginBottom: 10 }}>
              <CardContent>
                {Object.entries(item).map(([key, value]) => (
                  <div key={key}>
                    <Typography variant="h6" component="h2">
                      {key}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {value}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
