import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
    return (
        <Container>
            <Header></Header>

            <main>
                <Content>
                    <ButtonText title="Excluir nota"></ButtonText>

                    <h1>Introdução ao React</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Necessitatibus corrupti voluptas porro, aspernatur
                        impedit in possimus labore sit? Molestias deserunt porro
                        aliquid animi pariatur dolorem cupiditate dolores
                        recusandae quas quae.
                    </p>
                    <Section title="Links úteis">
                        <Links>
                            <li>
                                <a href="#">https://www.rocketseat.com.br</a>
                            </li>
                            <li>
                                <a href="#">https://www.rocketseat.com.br</a>
                            </li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="Express"></Tag>
                        <Tag title="Node.js"></Tag>
                    </Section>

                    <Button title="Voltar"></Button>
                </Content>
            </main>
        </Container>
    );
}
