export default function ViewToggle({ view, setView }) {
    return (
        <div className="toggle">
            <button onClick={() => setView("list")}>List</button>
            <button onClick={() => setView("card")}>Card</button>
        </div>
    );
}
