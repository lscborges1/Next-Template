import * as S from './styles'

const Main = ({
  title = 'Next Template',
  description = ' TypeScript, ReactJS, NextJS and StyledComponents'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.LogosWrapper>
      <S.Logo src="/img/ts-logo.svg" alt="React Logo" />
      <S.Logo src="/img/react-logo.svg" alt="React Logo" />
      <S.Logo src="/img/next-logo.svg" alt="Next Logo" />
      <S.Logo src="/img/styledcomponents-icon.png" alt="React Logo" />
    </S.LogosWrapper>
  </S.Wrapper>
)

export default Main
