import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function SobreNos() {
  return (
    <Container maxWidth="sm">

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                <Item>
                    
                </Item>
                </Grid>
                <Grid item xs={8}>
                <Item>
                    <Image
                        src='/images/sobreNos.jpg'
                        alt="Descrição da imagem"
                        width={1920} 
                        height={1080} 
                        layout="responsive"
                        priority 
                    />
                </Item>
                </Grid>
            </Grid>
        </Box>
    </Container>
  );
}
