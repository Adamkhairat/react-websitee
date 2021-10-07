import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { 
    FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText, 
    Form, 
    FormInput, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinksItems, 
    FooterLinksTitle, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink, 
} from './Footer.elements';
import { Button } from '../../globalStyles';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubscription>
                   <FooterSubHeading>
                       Join our exclusive membership to receive the latest news and trends
                   </FooterSubHeading> 
                   <FooterSubText>You can unsubscribe at any time.</FooterSubText>
                   <Form>
                        <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button fontBig>Subscribe</Button>
                   </Form>
                </FooterSubscription>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>About Us</FooterLinksTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink> 
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinksTitle>Contact Us</FooterLinksTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink> 
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>Videos</FooterLinksTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink> 
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinksTitle>Social Media</FooterLinksTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink> 
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                       
                </FooterLinksContainer>
                 
                <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to="/">
                           ULTRA
                       </SocialLogo>

                       <WebsiteRights>ULTRA @ 2021</WebsiteRights>

                       <SocialIcons>
                       <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                           <FaFacebook />
                       </SocialIconLink>

                       <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                           <FaInstagram />
                       </SocialIconLink>

                       <SocialIconLink href='/' target="_blank" aria-label="YouTube" rel="noopener noreferrer">
                           <FaYoutube />
                       </SocialIconLink>

                       <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                           <FaTwitter />
                       </SocialIconLink>

                       <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                           <FaLinkedin />
                       </SocialIconLink> 
                       </SocialIcons>
                   </SocialMediaWrap> 
                </SocialMedia>
            </FooterContainer>
        </>
    )
}

export default Footer;
