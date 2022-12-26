import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const LogosWrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  background-color: #fff;
  border-radius: 16px;
  padding: 1rem;

  width: min(115rem, 100%);
  overflow-y: auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`

export const Logo = styled.img`
  width: 25rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img``
