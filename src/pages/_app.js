import '../styles/globals.scss';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from 'components/CodeBlock';

const components = {
  code: CodeBlock,
};

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />{' '}
    </MDXProvider>
  );
}

export default MyApp;
