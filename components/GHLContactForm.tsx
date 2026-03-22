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
        minHeight: '584px',
        boxSizing: 'border-box',
      }}
    >
      <iframe
        src="https://link.creativelygrow.com/widget/form/dBPpBB7G9CtXJy75qYwm"
        style={{ width: '100%', height: '584px', border: 'none', borderRadius: '3px', display: 'block' }}
        id="inline-dBPpBB7G9CtXJy75qYwm"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Form"
        data-height="584"
        data-layout-iframe-id="inline-dBPpBB7G9CtXJy75qYwm"
        data-form-id="dBPpBB7G9CtXJy75qYwm"
        title="Contact Form"
      />
      <Script
        src="https://link.creativelygrow.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
