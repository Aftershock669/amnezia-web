/* eslint-disable import/no-extraneous-dependencies,import/no-absolute-path */
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Instruction1Page = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  const [read, setRead] = useState('');

  useEffect(() => {
    const instructionHref = `${i18n.language}/${location.pathname.split('/')[1]}`;

    const gitLink =
      'https://github.com/Aftershock669/react-vite-abnb-boilerplate/blob/1a65ff7f488a7d36a2f76174b337b793f994d3ee/README.md';

    console.log(instructionHref);

    // const fetchData = () => {
    //   return fetch(gitLink)
    //     .then((response) => response.json())
    //     .then((data) => setRead(data.data));
    // };

    // axios.get(gitLink).then((response) => {
    //   setRead(response.data);
    //   console.log(read);
    // });
    // fetchData();

    import('/docs/en/manual-install/manual-install.md').then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => setRead(text));
    });
  }, [location, i18n.language]);

  return (
    <div>
      {/* <ReactMarkdown>{read}</ReactMarkdown> */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{read}</ReactMarkdown>
    </div>
  );
};

export default Instruction1Page;
