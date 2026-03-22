'use client';

import { useState } from 'react';

export default function GHLContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'Website Contact Form' }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div
      className="fade-in-right"
      style={{
        background: '#fff',
        border: '1px solid #e8e3da',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        padding: '40px',
        boxSizing: 'border-box',
      }}
    >
      {status === 'success' ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✓</div>
          <h3 style={{ color: '#2d2d2d', marginBottom: '12px' }}>Message Sent!</h3>
          <p style={{ color: '#6b6b6b' }}>
            Thank you for reaching out. I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <h3 style={{ marginBottom: '24px', color: '#2d2d2d', fontSize: '1.4rem' }}>
            Send Me A Message
          </h3>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={labelStyle}>Full Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={labelStyle}>Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="phone" style={labelStyle}>Phone Number *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="(251) 000-0000"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '28px' }}>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me a little about your situation or ask any questions you have..."
              style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
            />
          </div>

          {status === 'error' && (
            <p style={{ color: '#c0392b', marginBottom: '16px', fontSize: '0.9rem' }}>
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              width: '100%',
              padding: '14px 24px',
              background: status === 'loading' ? '#999' : '#c9a84c',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              textTransform: 'uppercase',
              transition: 'background 0.2s',
            }}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message →'}
          </button>
        </form>
      )}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '6px',
  fontSize: '0.875rem',
  fontWeight: '600',
  color: '#2d2d2d',
  letterSpacing: '0.02em',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  border: '1px solid #e8e3da',
  borderRadius: '6px',
  fontSize: '1rem',
  color: '#2d2d2d',
  background: '#fafaf8',
  boxSizing: 'border-box',
  outline: 'none',
  transition: 'border-color 0.2s',
};
