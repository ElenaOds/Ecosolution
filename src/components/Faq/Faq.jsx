import { useState, useEffect } from 'react';
import { Container, SubTitle, Styledlink, StyledArrow, List, Item, Question, Answer, Text, StyledPlus, StyledMinus, QuestionWrapper, GridItemsWrapper } from './Faq.styled';
import { faqList } from './FaqList';

const Faq = () => {
    const [openItemIndex, setOpenItemIndex] = useState(0);
    const [isTablet, setTablet] = useState(window.innerWidth > 768);

    const updateMedia = () => {
        setTablet(window.innerWidth > 768);
      };

      useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      });

    return (
      
        <Container>
            {isTablet ? (
        <>
            <List>
               {faqList.map((item, index) => {
                return (
                <Item key={index}>
                    <QuestionWrapper>
                    {openItemIndex === index ? <StyledMinus/> : <StyledPlus/> }
                    <Question onClick={() => setOpenItemIndex(index)}>{item.question}</Question>
                    </QuestionWrapper>

                {openItemIndex === index && <Answer>{item.anwser}</Answer> }
                </Item>
               )
               })}
            </List>
            <GridItemsWrapper> 
                <SubTitle>Frequently Asked <br/>Questions</SubTitle>
            <div>
            <Text>Didn't find the answer to your question?</Text>
            <Styledlink to="#">Contact Us
                    <StyledArrow />
                </Styledlink>
            </div>
             </GridItemsWrapper> 
         
        </>
        ) : (
            <>
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
            <div>
            <Text>Didn't find the answer to your question?</Text>
            <Styledlink to="#">Contact Us
                    <StyledArrow />
                </Styledlink>
            </div>
            </>
)}
        </Container>
    )
}

export default Faq;