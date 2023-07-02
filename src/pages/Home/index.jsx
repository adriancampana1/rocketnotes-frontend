import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header></Header>

            <Menu>
                <li>
                    <ButtonText title="Todos" isActive></ButtonText>
                </li>
                <li>
                    <ButtonText title="React"></ButtonText>
                </li>
                <li>
                    <ButtonText title="Nodejs"></ButtonText>
                </li>
            </Menu>

            <Search>
                <Input
                    placeholder="Pesquisar pelo Título"
                    icon={FiSearch}
                ></Input>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note
                        data={{
                            title: 'React',
                            tags: [
                                {
                                    id: '1',
                                    name: 'react',
                                },
                                { id: '2', name: 'rocketseat' },
                            ],
                        }}
                    ></Note>
                    <Note
                        data={{
                            title: 'React',
                            tags: [
                                {
                                    id: '1',
                                    name: 'react',
                                },
                                { id: '2', name: 'rocketseat' },
                            ],
                        }}
                    ></Note>
                    <Note
                        data={{
                            title: 'React',
                            tags: [
                                {
                                    id: '1',
                                    name: 'react',
                                },
                                { id: '2', name: 'rocketseat' },
                            ],
                        }}
                    ></Note>
                    <Note
                        data={{
                            title: 'React',
                            tags: [
                                {
                                    id: '1',
                                    name: 'react',
                                },
                                { id: '2', name: 'rocketseat' },
                            ],
                        }}
                    ></Note>
                    <Note
                        data={{
                            title: 'React',
                            tags: [
                                {
                                    id: '1',
                                    name: 'react',
                                },
                                { id: '2', name: 'rocketseat' },
                            ],
                        }}
                    ></Note>
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus></FiPlus>Criar Nota
            </NewNote>
        </Container>
    );
}
