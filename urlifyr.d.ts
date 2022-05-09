declare module urlifyr {
  type ExtendArgs = {
    [key: string]: any;
  }

  export function extend (args: ExtendArgs): void;
}

declare function urlifyr(
  str: string,
  cfg?: {
    accept?: string;
    whiteSpace?: string;
    special?: string;
    lowerCase?: boolean;
    trim?: boolean;
    sz?: boolean;
  } | string,
): string;

export default urlifyr;
