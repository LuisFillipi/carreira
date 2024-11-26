import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('/fundo1.png') no-repeat center/cover;
  height: 180px;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  text-align: left;
  position: relative;
  padding: 20px;
`;

const TitleOverlay = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 10px;
  left: 15px;
`;


const Divider = styled.hr`
  border: 1px solid #000;
  margin: 20px 0;
`;


const EventContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`;

const EventImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 15px;
`;

const EventImagePlaceholder = styled.div`
  width: 120px;
  height: 120px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 15px;
  padding: 5px;
`;

const EventDetails = styled.div`
  margin-left: 15px;
  flex-grow: 1;
`;

const EventTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const EventDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 0;
`;

const Lista = () => {

  const [eventos, setEventos] = useState([
    {
      id: 1,
      nome: "Inovações em Inteligência Artificial",
      descricao: "Explorando as últimas inovações e aplicações da IA na indústria. Como empresas estão utilizando IA para melhorar produtos e processos.",
      imagem: "",
    },
    {
      id: 2,
      nome: "O Futuro da Computação Quântica",
      descricao: "A computação quântica está prestes a revolucionar a tecnologia. Vamos discutir as possibilidades e desafios dessa tecnologia emergente.",
      imagem: "",
    },
    {
      id: 3,
      nome: "Segurança Cibernética: A Nova Fronteira",
      descricao: "Como a segurança cibernética está evoluindo para combater as ameaças mais sofisticadas. Quais são as melhores práticas para proteger dados sensíveis?",
      imagem: "",
    },
  ]);

  return (
    <div>
      <HeaderSection>
        <TitleOverlay>Seminário</TitleOverlay>
      </HeaderSection>

      <Divider /> 

     
      <div>
        {eventos.length > 0 ? (
          eventos.map((evento) => (
            <EventContainer key={evento.id}>
              
              {evento.imagem ? (
                <EventImage
                  src={evento.imagem}
                  alt={evento.nome}
                />
              ) : (
                <EventImagePlaceholder>
                  <span>Sem imagem</span>
                </EventImagePlaceholder>
              )}

              <EventDetails>
                <EventTitle>{evento.nome}</EventTitle>
                <EventDescription>{evento.descricao}</EventDescription>
              </EventDetails>
            </EventContainer>
          ))
        ) : (
          <p>Nenhum evento disponível</p>
        )}
      </div>
    </div>
  );
};

export default Lista;