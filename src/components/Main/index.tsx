import * as S from './styles'

const Main = ({
  title = 'Next Template',
  description = ' TypeScript, ReactJS, NextJS and StyledComponents'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.LogosWrapper>
      <S.Logo src="/img/next-logo.svg" alt="Next Logo" />
    </S.LogosWrapper>
  </S.Wrapper>
)

export default Main
