import { useState } from 'react';
import './PromptInput.css';
import { Button } from '@chakra-ui/react';

import Spinner from '../Spinner/Spinner';

function PromptInput() {
  const [isFetching, setIsFetching] = useState(false);
  const [promptInput, setPromptInput] = useState('');

  function processPromptInput() {
    setIsFetching(true);
    console.log(promptInput);
    setIsFetching(false);
  }

  return (
    <form className="promptForm" onSubmit={processPromptInput}>
    <input
      placeholder="Your prompt goes here"
      type="text"
      required
      onChange={(e) => setPromptInput(e.target.value)}
    ></input>
    <button>{isFetching ? <Spinner /> : 'Guess'}</button>
  </form>
  )
}

export default PromptInput;
