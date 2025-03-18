"use client"

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  flexGrow: 1,
  boxShadow: "none",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));


export default function SobreNos() {
  return (
    <Container maxWidth="lg" sx={{ paddingY: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: { xs: 2, sm: 4, md: 6 } }}>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          sx={{
            width: 1000, 
            height: 400,
            "@media (max-width: 1068px)": {
              display: "inline"
            }
          }}
        >
          <Item>
            <Typography variant="h5" gutterBottom>
              QUEM SOMOS
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "justify" }} gutterBottom>
              
              Uma sociedade mais justa e igualitária. 
              O ESPERANÇA tem como um dos seus principais valores a inclusão social e a diversidade. 
              Nós acreditamos que todas as pessoas merecem as mesmas oportunidades, 
              e que devemos trabalhar juntos para criar uma sociedade mais justa e igualitária.

              Em particular, a inclusão de pessoas com deficiência é um tema de extrema importância para nós.
              Infelizmente, a discriminação e a exclusão ainda são comuns em nossa sociedade, 
              o que pode dificultar muito a vida dessas pessoas. 
              É fundamental que trabalhemos para mudar essa realidade,
              e garantir que as pessoas com deficiência tenham acesso aos mesmos direitos 
              e oportunidades que todos os demais.

              Para isso, o ESPERANÇA Inclusão tem trabalhado incansavelmente para conscientizar 
              a sociedade sobre a importância da inclusão e da diversidade, bem como para criar 
              iniciativas que garantam que todas as pessoas, independentemente de sua condição, possam se sentir acolhidas e valorizadas.

            </Typography>
            <Button variant="contained" sx={{ marginY: 1 }}>VEJA QUEM SOMOS</Button>
          </Item>
          <Image
            src='/images/sobreNos.jpg'
            alt="Descrição da imagem"
            width={600} 
            height={150} 
            layout="responsive"
        
          />
        </Stack>
      </Box>
    </Container>

  );
}
