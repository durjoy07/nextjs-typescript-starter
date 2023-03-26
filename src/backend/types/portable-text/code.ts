export interface ISanityCode {
  _type: 'code';
  language: string;
  highlightedLines?: number[];
  code: string;
  filename: string;
}
