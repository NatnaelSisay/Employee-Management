// import styled from "styled-components";

// const Button = styled.button`
//     background: transparent;
//     border-radius: 3px;
//     border: 2px solid palevioletred;
//     color: palevioletred;
//     margin: 0 1em;
//     padding: 0.25em 1em;
// `;
const Button = (props) => {
    const { onButtonClick, children } = props;
    return (
        <div>
            <button onClick={onButtonClick}>{children}</button>
        </div>
    );
};
export default Button;
