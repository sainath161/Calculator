import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const validateInputs = () => {
        if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
            setError('Invalid input. Please enter valid numbers.');
            return false;
        }

        setError('');
        return true;
    };

    const handleOperation = (operation) => {
        if (!validateInputs()) {
            return;
        }

        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        switch (operation) {
            case 'add':
                setResult(number1 + number2);
                break;
            case 'subtract':
                setResult(number1 - number2);
                break;
            case 'multiply':
                setResult(number1 * number2);
                break;
            case 'divide':
                if (number2 === 0) {
                    setError('Cannot divide by zero.');
                    setResult(null);
                } else {
                    setResult(number1 / number2);
                }
                break;
            default:
                break;
        }
    };

    return (
        <div className="calculator-container" style={{width: "100%"}}>
            <h1>React Calculator</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Enter number 1"
                />
                <input
                    type="text"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Enter number 2"
                />
            </div>
            <div>
                <button onClick={() => handleOperation('add')}>+</button>
                <button onClick={() => handleOperation('subtract')}>-</button>
                <button onClick={() => handleOperation('multiply')}>*</button>
                <button onClick={() => handleOperation('divide')}>/</button>
            </div>
            {error && <div className="error-message">{error}</div>}
            {result !== null && <div className="success-message">Result: {result.toFixed(2)}</div>}
        </div>
    );
};

export default Calculator;
