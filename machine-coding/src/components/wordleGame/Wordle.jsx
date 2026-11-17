import { useEffect, useState } from "react";

const words = ['crane', 'stare', 'mouse', 'plant', 'brick'];

const Wordle = () => {

    const [currentActiveRow, setCurrentActiveRow] = useState(0);
    const [wordleGrid, setWordleGrid] = useState(Array.from({length: 6}, () => Array(5).fill('')));
    const [answer, setAnswer] = useState(words[Math.floor(Math.random() * words.length)]);

    console.log("answer: ", answer);

    const handleWordValidation = (guessWord) => {
        return words.includes(guessWord);
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if(currentActiveRow > 5) return;

            if(event.key === 'Enter'){
                const guess = wordleGrid[currentActiveRow].join('');
                if(guess.length < 5 || !handleWordValidation(guess)) return;
                setCurrentActiveRow((row) => row + 1);
                return;
            }

            if(event.key === 'Backspace'){
                setWordleGrid((grid) => {
                    const nextGrid = grid.map((row) => [...row]);
                    const row = nextGrid[currentActiveRow];

                    const lastFilledIndex = row.findLastIndex((letter) => letter !== '');
                    if(lastFilledIndex === -1){
                        return grid;
                    }

                    row[lastFilledIndex] = '';
                    return nextGrid;
                })
                return;
            }

            if (!/^[a-zA-Z]$/.test(event.key)) return;

            setWordleGrid((grid) => {
                const nextGrid = grid.map((row) => [...row]);
                const row = nextGrid[currentActiveRow];
                const emptyIndex = row.indexOf('');
                if(emptyIndex === -1) return grid;
                row[emptyIndex] = event.key.toLowerCase();
                return nextGrid;
            })

        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);

    }, [currentActiveRow, wordleGrid]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            {wordleGrid.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex', gap: 8 }}>
                    {row.map((letter, letterIndex) => (
                        <div key={letterIndex} style={{ width: 52, height: 52, border: '1px solid black', display: "flex", textTransform: 'uppercase', cursor: 'pointer' }}>
                            {letter}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Wordle;