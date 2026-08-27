'use client';

import { useRef } from 'react';
import Link from 'next/link';

export default function MagneticButton({ href, children, className = '', external = false, ...rest }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0, 0)';
  }

  const sharedProps = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className: `inline-block transition-transform duration-200 ease-out will-change-transform ${className}`,
    ...rest,
  };

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} {...sharedProps}>
        {children}
      </Link>
    );
  }

  return <button {...sharedProps}>{children}</button>;
}
