import React from 'https://cdn.skypack.dev/react';
import htm from 'https://cdn.skypack.dev/htm';
import * as JpUtils from './utils.js';

const html = htm.bind(React.createElement);

const Word = (props) => {
  return (html`
    <ruby>
      <rb style=${{ color: props.baseColor }}>${props.base}</rb>
      <rp>(</rp>
      <rt style=${{ color: props.rubyColor }}>${props.ruby}</rt>
      <rp>)</rp>
    </ruby>
  `);
};

const SubWord = (props) => {
  return (html`
    <sub style=${{ fontSize: '0.5em' }}>
      <${Word} ...${props} />
    </sub>
  `);
};

const JpWord = (props) => {
  return (html`
    <${Word}
      base=${props.word.kanji} baseColor=${props.word.isDelimiter ? 'blue' : undefined}
      ruby=${props.word.kana} rubyColor=${props.word.isAlt ? 'red' : undefined}
    />
  `);
};

const Nav = (props) => {
  return (html`
    <nav>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link disabled">
            Japanese Numerals
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/zetaraku/JapaneseNumerals" target="_blank">
            <i class="bi-github me-2" />
            Source
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.free-counter.jp/" target="_blank">
            <img src="https://www.f-counter.net/j/49/1667103931/" alt="アクセスカウンター" />
          </a>
        </li>
      </ul>
    </nav>
  `);
};

const App = (props) => {
  const [currentNumber, setCurrentNumber] = React.useState(12345n);

  const currentNumberLength = String(currentNumber).length;
  const currentWords = JpUtils.numberToJp(currentNumber) ?? [JpUtils.units.nan];
  const numberInputFontSize = `calc(${currentNumberLength <= 8 ? '90vw' : '120vw'} / (${Math.ceil(currentNumberLength / 8) * 8 + 4}))`;

  function handleNumberInput(event) {
    const n = BigInt(event.target.value);
    if (n < 0n || n >= 10n ** 72n) return;
    setCurrentNumber(n);
  }

  function handleButtonClick(event) {
    const n = BigInt(Math.trunc(Math.random() * 10000));
    setCurrentNumber(n);
  }

  return (html`
    <div class="container">
      <div class="py-4">
        <${Nav} />
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center text-center"
        style=${{ minHeight: '90vh' }}
      >
        <div class="my-4">
          <input
            type="number"
            class="text-center"
            style=${{
              fontSize: numberInputFontSize,
              letterSpacing: '0.1em',
              width: '80vw',
            }}
            value=${String(currentNumber)}
            onInput=${handleNumberInput}
          />
        </div>
        <div class="my-4">
          <span
            style=${{
              fontSize: '2.5em',
              letterSpacing: '0.2em',
              width: '100%',
            }}
          >
            ${currentWords.map((word) => (html`<${JpWord} word=${word} />`))}
          </span>
        </div>
        <div class="my-4">
          <button
            class="btn btn-lg btn-primary"
            onClick=${handleButtonClick}
          >
            Try another number!
          </button>
        </div>
      </div>
    </div>
  `);
};

export default App;
