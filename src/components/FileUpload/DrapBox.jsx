import styled from 'styled-components'

const DragBox = styled.div(({ isVisible }) =>
  isVisible
    ? `
        position: fixed;
        display: flex;
        border: 2px dashed white;
        width: 100%;
        height: 100%;
        z-index: 2000;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        flex: 1;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 30px;
        font-weight: 600;
        color: white;
        letter-spacing: 1px;
        margin: auto;
`
    : 'display: none;'
)
