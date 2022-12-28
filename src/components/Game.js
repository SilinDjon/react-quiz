import questions from "./questions";


function Game({ step, question, onClickVariant }) {

    const procetage = Math.round((step / questions.length) * 100);
    return (
        <>
            <div className="progress">
                <div style={{ width: `${procetage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) => (
                        <li key={index} onClick={() => onClickVariant(index)}>
                            {text}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default Game;