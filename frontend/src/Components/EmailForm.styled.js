import styled from 'styled-components';

export const EmailFormContainer = styled.div`
    color: ${({theme}) => theme.text};
    margin: 20px;
    input[type=text], select {
        width: 100%;
        padding: 20px;
    }

    textarea {
        width: 100%;
        padding: 20px;
        height: 200px;
        resize: none;
    }
    button {
        color: ${({theme}) => theme.text};
        background-color: ${({theme}) => theme.background};
        height: 4em;
        width: 8em;
    }
}
`;