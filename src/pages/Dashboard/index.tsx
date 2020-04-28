import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/8598578?s=460&u=de3642645b940885b6d4e5494b00eb3547930a31&v=4"
            alt="Rômulo Pereira"
          />
          <div>
            <strong>Rômulo Pereira</strong>
            <p>FullStack Developer</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/8598578?s=460&u=de3642645b940885b6d4e5494b00eb3547930a31&v=4"
            alt="Rômulo Pereira"
          />
          <div>
            <strong>Rômulo Pereira</strong>
            <p>FullStack Developer</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/8598578?s=460&u=de3642645b940885b6d4e5494b00eb3547930a31&v=4"
            alt="Rômulo Pereira"
          />
          <div>
            <strong>Rômulo Pereira</strong>
            <p>FullStack Developer</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
