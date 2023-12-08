import React, { useEffect } from 'react';

const InquiryForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
        <iframe
        title="Inquiry Form"
        src="https://hello.dubsado.com/public/form/view/63f7a9bfbd8f13502e8fdec5"
        frameBorder="0"
        className=" form-page w-full  p-5   gap-5 md:w-full"
      ></iframe>
 
    </>
  );
};

export default InquiryForm;
