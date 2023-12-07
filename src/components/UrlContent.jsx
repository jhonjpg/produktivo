import React, { useState, useEffect } from 'react';

const UrlContent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://hello.dubsado.com/public/form/view/63f7a9bfbd8f13502e8fdec5', { mode: 'no-cors' });
        const data = await response.text();
        setContent(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Contenido de la URL:</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default UrlContent;
