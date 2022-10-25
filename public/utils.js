export const units = {
  nan: { kanji: '何', kana: 'なん' },
  // digits
  n0: { kanji: '零', kana: 'れい' },
  n0z: { kanji: '〇', kana: 'ゼロ' },
  n1: { kanji: '一', kana: 'いち' },
  n2: { kanji: '二', kana: 'に' },
  n3: { kanji: '三', kana: 'さん' },
  n4: { kanji: '四', kana: 'よん' },
  n4t: { kanji: '四', kana: 'よっ', isAlt: true },
  n4s: { kanji: '四', kana: 'よ', isAlt: true },
  n4a: { kanji: '四', kana: 'し', isAlt: true },
  n5: { kanji: '五', kana: 'ご' },
  n6: { kanji: '六', kana: 'ろく' },
  n6t: { kanji: '六', kana: 'ろっ', isAlt: true },
  n7: { kanji: '七', kana: 'なな' },
  n7a: { kanji: '七', kana: 'しち', isAlt: true },
  n8: { kanji: '八', kana: 'はち' },
  n8t: { kanji: '八', kana: 'はっ', isAlt: true },
  n9: { kanji: '九', kana: 'きゅう' },
  n9a: { kanji: '九', kana: 'く', isAlt: true },
  // old digits
  n1o: { kanji: '一', kana: 'ひ' },
  n2o: { kanji: '二', kana: 'ふ' },
  n3o: { kanji: '三', kana: 'み' },
  n4o: { kanji: '四', kana: 'よ' },
  n5o: { kanji: '五', kana: 'いつ' },
  n6o: { kanji: '六', kana: 'む' },
  n7o: { kanji: '七', kana: 'なな' },
  n8o: { kanji: '八', kana: 'や' },
  n9o: { kanji: '九', kana: 'ここの' },
  n10o: { kanji: '十', kana: 'とお' },
  // delimiters
  e1: { kanji: '十', kana: 'じゅう' },
  e1t: { kanji: '十', kana: 'じっ', isAlt: true },
  e1tc: { kanji: '十', kana: 'じゅっ', isAlt: true },
  e2: { kanji: '百', kana: 'ひゃく' },
  e2p: { kanji: '百', kana: 'ぴゃく', isAlt: true },
  e2b: { kanji: '百', kana: 'びゃく', isAlt: true },
  e3: { kanji: '千', kana: 'せん' },
  e3z: { kanji: '千', kana: 'ぜん', isAlt: true },
  // e4 delimiters
  e4: { kanji: '万', kana: 'まん', isDelimiter: true },
  e8: { kanji: '億', kana: 'おく', isDelimiter: true },
  e12: { kanji: '兆', kana: 'ちょう', isDelimiter: true },
  e16: { kanji: '京', kana: 'けい', isDelimiter: true },
  e20: { kanji: '垓', kana: 'がい', isDelimiter: true },
  e24: { kanji: '𥝱', kana: 'じょ', isDelimiter: true },
  e28: { kanji: '穣', kana: 'じょう', isDelimiter: true },
  e32: { kanji: '溝', kana: 'こう', isDelimiter: true },
  e36: { kanji: '澗', kana: 'かん', isDelimiter: true },
  e40: { kanji: '正', kana: 'せい', isDelimiter: true },
  e44: { kanji: '載', kana: 'さい', isDelimiter: true },
  e48: { kanji: '極', kana: 'ごく', isDelimiter: true },
  e52: { kanji: '恒河沙', kana: 'ごうがしゃ', isDelimiter: true },
  e56: { kanji: '阿僧祇', kana: 'あそうぎ', isDelimiter: true },
  e60: { kanji: '那由他', kana: 'なゆた', isDelimiter: true },
  e64: { kanji: '不可思議', kana: 'ふかしぎ', isDelimiter: true },
  e68: { kanji: '無量大数', kana: 'むりょうたいすう', isDelimiter: true },
};
export const digits = [
  [
    units.n0,
    units.n1,
    units.n2,
    units.n3,
    units.n4,
    units.n5,
    units.n6,
    units.n7,
    units.n8,
    units.n9,
  ],
  [
    undefined,
    undefined,
    units.n2,
    units.n3,
    units.n4,
    units.n5,
    units.n6,
    units.n7,
    units.n8,
    units.n9,
  ],
  [
    undefined,
    undefined,
    units.n2,
    units.n3,
    units.n4,
    units.n5,
    units.n6t,
    units.n7,
    units.n8t,
    units.n9,
  ],
  [
    undefined,
    undefined,
    units.n2,
    units.n3,
    units.n4,
    units.n5,
    units.n6,
    units.n7,
    units.n8t,
    units.n9,
  ],
];
export const minorDelimiters = [
  undefined,
  [
    undefined,
    units.e1,
    units.e1,
    units.e1,
    units.e1,
    units.e1,
    units.e1,
    units.e1,
    units.e1,
    units.e1,
  ],
  [
    undefined,
    units.e2,
    units.e2,
    units.e2b,
    units.e2,
    units.e2,
    units.e2p,
    units.e2,
    units.e2p,
    units.e2,
  ],
  [
    undefined,
    units.e3,
    units.e3,
    units.e3z,
    units.e3,
    units.e3,
    units.e3,
    units.e3,
    units.e3,
    units.e3,
  ],
];
export const majorDelimiters = [
  undefined,
  units.e4,
  units.e8,
  units.e12,
  units.e16,
  units.e20,
  units.e24,
  units.e28,
  units.e32,
  units.e36,
  units.e40,
  units.e44,
  units.e48,
  units.e52,
  units.e56,
  units.e60,
  units.e64,
  units.e68,
];

export function numberToJp(num) {
  const n = BigInt(num);

  const d = [...String(n)].map((c) => Number(c)).reverse();

  if (n < 0n) return undefined;

  if (n < 10n) return [
    digits[0][d[0]],
  ];

  const minorScale = 10n;
  for (const [i, delimiterAfter] of minorDelimiters.entries()) {
    if (delimiterAfter === undefined) continue;
    const currentDivider = minorScale ** BigInt(i);
    if (n < currentDivider * minorScale) return [
      ...(d[i] !== 1 ? [digits[i][d[i]]] : []),
      delimiterAfter[d[i]],
      ...(n % currentDivider !== 0n ? numberToJp(n % currentDivider) : []),
    ];
  }

  const majorScale = 10n**BigInt(minorDelimiters.length);
  for (const [i, delimiter] of majorDelimiters.entries()) {
    if (delimiter === undefined) continue;
    const currentDivider = majorScale ** BigInt(i);
    if (n < currentDivider * majorScale) return [
      ...(numberToJp(n / currentDivider)),
      delimiter,
      ...(n % currentDivider !== 0n ? numberToJp(n % currentDivider) : []),
    ];
  }

  return undefined;
}
