import React, { useEffect } from 'react';

const SchedulerEmbeddedCode = () => {
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
        title="Scheduler Embedded Code"
        src="https://hello.dubsado.com:443/public/appointment-scheduler/656a34b28b362056dffe942e/schedule?isIframe=true"
        frameBorder="0"
        style={{ width: '1px', minWidth: '100%' }}
      ></iframe>
      <script type="text/javascript">
        {`setTimeout(function(){iFrameResize({checkOrigin: false, heightCalculationMethod: "taggedElement"});}, 30)`}
      </script>
    </>
  );
};

export default SchedulerEmbeddedCode;
