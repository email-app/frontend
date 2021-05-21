import { useMemo } from 'react';
import DOMPurify from 'dompurify';

const useSanitize = (dangerous: string): string =>
  useMemo(() => DOMPurify.sanitize(dangerous), [dangerous]);
export default useSanitize;
