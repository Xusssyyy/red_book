import styled from 'styled-components'

export const FooterWrapper = styled.div`
    width: 100%;
    height:2.5rem;
    background: #fffafa;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    a {
        font-size: 17px;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: #313131;
        &.active {
            color: #2f2f2f;
            font-weight: bold;
            font-size: 20px;
        }
    }
` 