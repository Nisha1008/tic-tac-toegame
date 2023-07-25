function MyButton({ value, onSqureClick }) {

    return (
        <>
            <button className="button" style={{ height: 40, width: 40 }} onClick={onSqureClick}>{value}</button>
        </>
    )
}
export default MyButton;
