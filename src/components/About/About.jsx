import { Container, SubTitle, Text, Wrapper, List, ListItem, ListHeader, ListTitle, ListText, Img, StyledImg, StyledIcon1, StyledIcon2, StyledIcon3, StyledIcon4 } from './About.styled';

const About = () => {
    return (
        <Container id="about">
            <Wrapper>
            <SubTitle>Main values of our company</SubTitle>
            <Text>EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.</Text>
            </Wrapper>
            <List>
                <ListItem>
                    <ListHeader>
                        <StyledIcon1/>
                        <ListTitle>Openness</ListTitle>
                    </ListHeader>
                    <ListText>to the world, people, new ideas and projects</ListText>
                </ListItem>
                <ListItem>
                    <ListHeader>
                        <StyledIcon2/>
                        <ListTitle>Responsibility</ListTitle>
                    </ListHeader>
                    <ListText>we are aware that the results of our work have an impact on our lives and the lives of future generations</ListText>
                </ListItem>
                <li>
                <Img/>
                </li>
                <li>
               <StyledImg/>
               </li>
                <ListItem>
                    <ListHeader>
                        <StyledIcon3/>
                        <ListTitle>Innovation</ListTitle>
                    </ListHeader>
                    <ListText>we use the latest technology to implement non-standard solutions</ListText>
                </ListItem>
                <ListItem>
                    <ListHeader>
                      <StyledIcon4/> 
                        <ListTitle>Quality</ListTitle>
                    </ListHeader>
                    <ListText>we do not strive to be the first among others, but we want to be the best in our business</ListText>
                </ListItem>
            </List>
        </Container>
    )
}

export default About;