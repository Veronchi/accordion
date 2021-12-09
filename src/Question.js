import React, { useState } from 'react';
import {ReactComponent as Plus} from './plus.svg'
import {ReactComponent as Minus} from './minus.svg'

const Question = ({ title, info }) => {

  const [isFullContent, setIsFullContent] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setIsFullContent(!isFullContent)} className="btn">
          {isFullContent ? <Minus /> : <Plus />}
        </button>
      </header>
      {isFullContent? <p>{info}</p> : null}
    </article>
  );
};

export default Question;