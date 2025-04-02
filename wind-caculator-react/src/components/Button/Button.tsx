import  "./Button.css";

/**Atomizar un componente minimo de logica posible y la cual le pertenece al componente */

interface Props{
    label: string,
    parentMethod: () => void
}

export const Button = ({label, parentMethod}:Props) => {

    return (
        <button className="custom-button"  onClick={parentMethod}>
           El label es : {label}
        </button>
    )
}