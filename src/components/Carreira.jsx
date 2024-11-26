import React from 'react';
import styled from 'styled-components';

const CarreiraContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
  text-align: justify;
`;

function Carreira() {
  return (
    <CarreiraContainer>
      <Title>Nossa História</Title>
      <Paragraph>
        Somos alunos do SESI SENAI de Alagoas, da turma do 3º ano F, e escolhemos este projeto para desenvolver com o objetivo de divulgar eventos e criar conexões. Durante nossa trajetória acadêmica, buscamos aplicar os conhecimentos adquiridos de forma prática e significativa, e este projeto representa um marco nessa jornada.
      </Paragraph>
      <Paragraph>
        Por ser nosso último grande trabalho antes da conclusão do ensino médio, ele carrega um peso especial. É uma oportunidade de demonstrar o que aprendemos, trabalhar em equipe e deixar uma contribuição relevante. Este projeto simboliza o encerramento de uma etapa importante, refletindo nosso aprendizado e nosso esforço ao longo desses anos.
      </Paragraph>
      <Paragraph>
        Agradecemos a todos que fizeram parte dessa caminhada e nos ajudaram a chegar até aqui.
      </Paragraph>
    </CarreiraContainer>
  );
}

export default Carreira;