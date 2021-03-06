import {
  Container,
  Wrapper,
  Heading,
  Summary,
  Body,
  Skills,
  TagList,
  Tag
} from './styles'

function Header({ summary }) {
  return (
    <Container>
      <Wrapper>
        <Summary>
          <Heading>Summary</Heading>
          <Body>{summary}</Body>
        </Summary>
        <Skills>
          <Heading>Interests / Chops</Heading>
          <TagList>
            <Tag>React</Tag>
            <Tag>Javascript</Tag>
            <Tag>Solidity</Tag>
            <Tag>Ethereum</Tag>
            <Tag>GraphQL</Tag>
            <Tag>Node.js</Tag>
            <Tag>Git</Tag>
            <Tag>Livestreaming</Tag>
            <Tag>MySQL</Tag>
            <Tag>NoSQL</Tag>
            <Tag>UX/UI Design</Tag>
            <Tag>Sketch</Tag>
            <Tag>Photoshop</Tag>
            <Tag>Docker</Tag>
          </TagList>
        </Skills>
      </Wrapper>
    </Container>
  )
}

export default Header
