import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 60px 0;
    display: grid;
    grid-gap: 20px;
    width: 100%;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    max-width: 500px;
    color: #486791;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 350px;
        font-size: 16px;
        font-weight: 500;
    }

`

const Button = styled.button`
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0 10px 20px rgba(101 41 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 22px;
    justify-self: center;
    cursor: pointer;
    transition: 0.8s cubic-bezier(0.23, 1, 0.320, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        transform: translateY(-3px);
    }

    @media (max-width: 640px) {
        font-size: 14px;
        font-weight: 500;
        padding: 10px 40px;
        border-radius: 20px;
    }

`

const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    a {
        transition: 0.8s;
    }

    a:hover {
        color: #000;
    }

    @media (max-width: 640px) {

        width: 350px;

        a {
            font-size: 12px;
        }
    }

`

const Copyright =  styled.div`
    color: #486791;
    max-width: 700px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 640px) {
        padding: 0 12px;
        font-size: 10px;
    }

`

const Footer = ({data, children}) => (
    <FooterGroup>
        <Text>Tweet "Prototype and build apps with React and Swift. New courses by @MengTo"</Text>
        <Button>Tweet</Button>
        <LinkGroup>
            {data.allContentfulLink.edges.map(edge=>(
                <a href={edge.node.url}>{edge.node.title}</a>
            ))}
        </LinkGroup>
        <Copyright>
            {children}
        </Copyright>
    </FooterGroup>
)

export default Footer