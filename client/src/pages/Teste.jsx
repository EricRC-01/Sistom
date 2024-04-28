import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

export function Teste({ title, content, onActionClick }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Título
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Conteúdo
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onActionClick}>Action</Button>
      </CardActions>
    </Card>
  );
}
