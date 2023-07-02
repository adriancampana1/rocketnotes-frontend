import { Container } from '../Textarea/styles';

export function Textarea({ value, ...rest }) {
    return <Container {...rest}>{value}</Container>;
}
