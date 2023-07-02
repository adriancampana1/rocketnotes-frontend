import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea';
import { Input } from '../../components/Input';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Container, Form } from './styles';

export function New() {
    return (
        <Container>
            <Header></Header>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título"></Input>

                    <Textarea placeholder="Observações"></Textarea>

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br"></NoteItem>
                        <NoteItem isNew placeholder="Novo link"></NoteItem>
                    </Section>

                    <Button title="Salvar"></Button>
                </Form>
            </main>
        </Container>
    );
}
