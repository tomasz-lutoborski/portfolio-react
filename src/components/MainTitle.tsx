import { Header, Subheader } from "./styled/Typography";
import { Title } from "./styled/Layout";

const MainTitle = ({
  header,
  subheader,
}: {
  header: string;
  subheader: string;
}) => {
  return (
    <Title>
      <Header>{header}</Header>
      <Subheader>{subheader}</Subheader>
    </Title>
  );
};

export default MainTitle;
