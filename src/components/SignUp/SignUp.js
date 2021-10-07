import React from 'react';
import { Container, } from '../../globalStyles';
import {
    SignUpContainer,
    SignUpRow,
    SignupColumn,
    Form,
    FormInput,
    ImgWrapper,
    Img
} from './SignUp.elements';

const SignUp = ({img, start, alt, lightBg}) => {
    return (
        <>
          <SignUpContainer lightBg={lightBg}>
              <Container>
                  <SignUpRow>
                      <SignupColumn>
                      <Form>
                        <FormInput name="email" type="email" placeholder="Your Email" />
                        {/* <Button fontBig>Subscribe</Button> */}
                      </Form>
                      <Form>
                        <FormInput name="email" type="email" placeholder="Your Email" />
                        {/* <Button fontBig>Subscribe</Button> */}
                      </Form>
                      <Form>
                        <FormInput name="email" type="email" placeholder="Your Email" />
                        {/* <Button fontBig>Subscribe</Button> */}
                      </Form>
                      </SignupColumn>

                      <SignupColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                      </SignupColumn>
                  </SignUpRow>
              </Container>
          </SignUpContainer>  
        </>
    )
}

export default SignUp;
