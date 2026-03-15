'use client';

import Script from 'next/script';

export default function GHLContactForm() {
  return (
    <div
      className="fade-in-right"
      style={{
        background: '#fff',
        border: '1px solid #e8e3da',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        padding: '40px',
        height: '100%',
        minHeight: '743px',
        boxSizing: 'border-box',
      }}
    >
      <iframe
        src="https://link.creativelygrow.com/widget/form/oAXLLLwO2okC0H3znRTP"
        style={{ width: '100%', height: '743px', border: 'none', borderRadius: '3px', display: 'block' }}
        id="inline-oAXLLLwO2okC0H3znRTP"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-height="743"
        data-form-id="oAXLLLwO2okC0H3znRTP"
        title="Contact form"
      />
      <Script
        src="https://link.creativelygrow.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
