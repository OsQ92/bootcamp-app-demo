import styled from 'styled-components';

export const NavBarContainer = styled.nav`
    color: ${({theme}) => theme.text};
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-decoration: none;

    a {
        color: ${({theme}) => theme.text};     
        text-decoration: none;
    }

    li {
        background: ${({ theme }) => theme.navbar};
        float: left;
        list-style-type: none;
        padding: 1em;
        text-align: center;
        cursor: pointer;
    }
    li: hover {
        background: ${({ theme }) => theme.hover};
    }
}
`;