import React, { useState } from 'react';
import { capitalize, upperCase, capitalizeWords, removeExtraSpaces, kebabCase, snakeCase, camelCase, shift, makeHashTag, isEmpty } from 'string-lib-rocko';

function StringFunctions() {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState({});

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    setResults({
      capitalize: capitalize(text),
      upperCase: upperCase(text),
      capitalizeWords: capitalizeWords(text),
      removeExtraSpaces: removeExtraSpaces(text),
      kebabCase: kebabCase(text),
      snakeCase: snakeCase(text),
      camelCase: camelCase(text),
      shift: shift(text),
      makeHashTag: makeHashTag(text),
      isEmpty: isEmpty(text).toString(),
    });
  };

  return (
    <div>
      <h1>String Library Demo</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text here"
        style={{ width: '300px', marginBottom: '20px' }}
      />
      <div>
        {Object.entries(results).map(([functionName, result]) => (
          <p key={functionName}>
            <strong>{functionName}:</strong> {result}
          </p>
        ))}
      </div>
    </div>
  );
}

export default StringFunctions;