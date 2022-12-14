export const units = {
  nan: { kanji: '何', kana: 'なん' },
  // digits
  n0: { kanji: '零', kana: 'れい' },
  n0z: { kanji: '〇', kana: 'ゼロ' },
  n1: { kanji: '一', kana: 'いち' },
  n1t: { kanji: '一', kana: 'いっ', isAlt: true },
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
  // 一
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
  // 十
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
  // 百
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
  // 千
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
export const digitsKH = [
  units.n0,
  units.n1t,
  units.n2,
  units.n3,
  units.n4,
  units.n5,
  units.n6t,
  units.n7,
  units.n8t,
  units.n9,
  units.e1tc,
];
export const digitsST = [
  units.n0,
  units.n1t,
  units.n2,
  units.n3,
  units.n4,
  units.n5,
  units.n6,
  units.n7,
  units.n8t,
  units.n9,
  units.e1tc,
];
export const digitsOther = [
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
  units.e1,
];
export const minorDelimiters = [
  // 一
  undefined,
  // 十
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
  // 百
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
  // 千
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
  // 一
  undefined,
  // 万
  units.e4,
  // 億
  units.e8,
  // 兆
  units.e12,
  // 京
  units.e16,
  // 垓
  units.e20,
  // 𥝱
  units.e24,
  // 穣
  units.e28,
  // 溝
  units.e32,
  // 澗
  units.e36,
  // 正
  units.e40,
  // 載
  units.e44,
  // 極
  units.e48,
  // 恒河沙
  units.e52,
  // 阿僧祇
  units.e56,
  // 那由他
  units.e60,
  // 不可思議
  units.e64,
  // 無量大数
  units.e68,
];

function digitBefore(digit, unit) {
  const nextKana = unit.kana[0];
  if ([...'かきくけこがぎぐげごはひふへほぱぴぷぺぽばびぶべぼ'].includes(nextKana)) return digitsKH[digit];
  if ([...'さしすせそざじずぜぞたちつてとだぢづでど'].includes(nextKana)) return digitsST[digit];
  return digitsOther[digit];
}

function numberToJpMinor(num, majorDelimiterIndex) {
  const minorScale = 10n;

  const n = BigInt(num);
  const d = [...String(n)].map((c) => Number(c)).reverse();

  if (n < 0n) return undefined;

  if (n === 0n) return [units.n0];

  if (n <= 10n && majorDelimiterIndex > 0) return [
    digitBefore(Number(n), majorDelimiters[majorDelimiterIndex]),
  ];

  if (n === 1000n && majorDelimiterIndex > 0) return [units.n1t, units.e3];

  for (const [i, delimiterAfter] of minorDelimiters.entries()) {
    const currentDivider = minorScale ** BigInt(i);
    if (n < currentDivider * minorScale) return [
      ...(d[i] !== 1 || i === 0 ? [digits[i][d[i]]] : []),
      ...(i !== 0 ? [delimiterAfter[d[i]]] : []),
      ...(n % currentDivider !== 0n ? numberToJpMinor(n % currentDivider, majorDelimiterIndex) : []),
    ];
  }

  return undefined;
}

export function numberToJp(num) {
  const majorScale = 10n ** BigInt(minorDelimiters.length);

  const n = BigInt(num);
  const d = [...String(n)].map((c) => Number(c)).reverse();

  if (n < 0n) return undefined;

  if (n === 0n) return [units.n0];

  for (const [i, delimiter] of majorDelimiters.entries()) {
    const currentDivider = majorScale ** BigInt(i);
    if (n < currentDivider * majorScale) return [
      ...(numberToJpMinor(n / currentDivider, i)),
      ...(i !== 0 ? [delimiter] : []),
      ...(n % currentDivider !== 0n ? numberToJp(n % currentDivider) : []),
    ];
  }

  return undefined;
}
