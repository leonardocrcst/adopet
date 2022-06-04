import { Title as STitle, SubTitle as SSubTitle } from "./Title.style";

interface ITitle {
  title: string;
  subtitle?: string | JSX.Element;
}

export const Title = (props: ITitle) => {
  return (
    <>
      <STitle>{props.title}</STitle>
      {props.subtitle ? <SSubTitle>{props.subtitle}</SSubTitle> : null}
    </>
  );
};
