import { useState } from 'react';
import { Container, SubTitle, Styledlink, StyledArrow, List, Item, Question, Answer, Text, StyledPlus, StyledMinus, QuestionWrapper } from './Faq.styled';
import { faqList } from './FaqList';

const Faq = () => {
    const [openItemIndex, setOpenItemIndex] = useState(0);
    
    return (
        <Container>
            <SubTitle>Frequently Asked <br/>Questions</SubTitle>
            <List>
               {faqList.map((item, index) => {
                return (
                <Item key={index}>
                    <QuestionWrapper>
                    {openItemIndex === index ? <StyledMinus/> : <StyledPlus/> }
                    <Question onClick={() => setOpenItemIndex(index)}>{item.question}</Question>
                    </QuestionWrapper>

                {openItemIndex === index &&  <Answer>{item.anwser}</Answer> }
                </Item>
               )
               })}
            </List>
            <Text>Didn't find the answer to your question?</Text>
            <Styledlink to="#">Contact Us
                    <StyledArrow />
                </Styledlink>
        </Container>
    )
}

export default Faq;