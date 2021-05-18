import React, { useState } from "react";
import Autosuggest from 'react-autosuggest';

const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const getSuggestionValue = (suggestion) => {
    return suggestion.title;
}

const renderSuggestion = suggestion => (
    <div>
        {suggestion.title}
    </div>
);

export default function Autocomplete({ data, hadlesubmit }) {
    const [value, setvalue] = useState('');
    const [suggestions, setsuggestions] = useState([]);

    const onChange = (event, { newValue, method }) => {
        if (method == "click") {
            hadlesubmit(newValue)
        }
        setvalue(newValue)
    };

    const getSuggestions = (value) => {
        const escapedValue = escapeRegexCharacters(value.trim());
        if (escapedValue === '') {
            return [];
        }
        const regex = new RegExp('^' + escapedValue, 'i');

        return data.filter(language => regex.test(language.title));
    }
    const keyPress = (e) => {
        if (e.keyCode == 13) {
            hadlesubmit(e.target.value)
        }
    }

    const onSuggestionsFetchRequested = ({ value }) => {
        setsuggestions(getSuggestions(value,))
    };

    const inputProps = {
        placeholder: "Search Channel",
        value,
        onChange: onChange,
        onKeyDown: keyPress
    };

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={() => setsuggestions([])}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
        />
    );

}