import styled from 'styled-components';

export const MsgBoxContainer = styled.div`
    @keyframes zoominoutsinglefeatured {
        0% {transform: scale(0,0);}
        100% {transform: scale(1,1);}
    }
    .modal {
        color: ${({theme}) => theme.text};
        background-color: ${({theme}) => theme.background};
        animation: 0.2s ease-out 0s 1 zoominoutsinglefeatured;
    }
    .modal .header {
        border-bottom: 1px solid ${({theme}) => theme.text};
        font-size: 0.8em;
        text-align: center;
        padding: 5px;
      }
      .modal .content {
        padding: 10px 5px;
        text-align: center;
    }
    .modal .actions {
        padding: 1em;
        margin: auto;
        text-align: center;
    }

    .modal .close {
        cursor: pointer;
        position: absolute;
        display: block;
        padding: 0em 0.8em 0.2em 0.8em;
        right: -1px;
        top: -1px;
        font-size: 0.8em;
        background: #990000;
        color: #FFFFFF;
        border-radius: 2px;
        border: 2px solid #000000;
    }
`;