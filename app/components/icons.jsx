function Base({ children, className = '', strokeWidth = '1.5', ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export function IconGlobe(props) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z" />
    </Base>
  );
}

export function IconDevice(props) {
  return (
    <Base {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18h2" />
    </Base>
  );
}

export function IconGear(props) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v3M12 18.5v3M4.2 6.2l2.1 2.1M17.7 15.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 17.8l2.1-2.1M17.7 8.3l2.1-2.1" />
    </Base>
  );
}

export function IconBroadcast(props) {
  return (
    <Base {...props}>
      <path d="M12 16v6M8.5 22h7" />
      <path d="M6 10a6 6 0 0 1 12 0c0 3.5-2.5 5-3.5 6h-5c-1-1-3.5-2.5-3.5-6z" />
      <circle cx="12" cy="10" r="2" />
    </Base>
  );
}

export function IconPalette(props) {
  return (
    <Base {...props}>
      <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2s-.6-1.4-1-2c0-1 .8-1.5 2-1.5H17a4 4 0 0 0 4-4c0-4.4-4-8.5-9-8.5z" />
      <circle cx="7.5" cy="11.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function IconSearch(props) {
  return (
    <Base {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.5-4.5" />
    </Base>
  );
}

export function IconArrow(props) {
  return (
    <Base {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Base>
  );
}

export function IconBuilding(props) {
  return (
    <Base {...props}>
      <path d="M12 3l7 4.5H5L12 3z" />
      <rect x="5" y="7.5" width="14" height="13.5" rx="1" />
      <path d="M9.5 21v-4.5h5V21" />
      <path d="M8.2 11h1M14.8 11h1M8.2 14h1M14.8 14h1" />
    </Base>
  );
}

export function IconCheck(props) {
  return (
    <Base {...props}>
      <path d="M5 13l4 4L19 7" />
    </Base>
  );
}

export function IconTarget(props) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function IconEye(props) {
  return (
    <Base {...props}>
      <path d="M2 12s3.7-6.5 10-6.5S22 12 22 12s-3.7 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </Base>
  );
}

export function IconHeart(props) {
  return (
    <Base {...props}>
      <path d="M12 20.5c-.3 0-.6-.1-.8-.3C7.5 17.4 3 13.7 3 9.6 3 6.9 5.1 5 7.6 5c1.6 0 3.1.8 4 2.1.9-1.3 2.4-2.1 4-2.1C18.1 5 21 6.9 21 9.6c0 4.1-4.5 7.8-8.2 10.6-.2.2-.5.3-.8.3z" />
    </Base>
  );
}

export function IconSpark(props) {
  return (
    <Base {...props}>
      <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3z" />
    </Base>
  );
}

export function IconBolt(props) {
  return (
    <Base {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </Base>
  );
}

export function IconBulb(props) {
  return (
    <Base {...props}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
    </Base>
  );
}

export function IconMail(props) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </Base>
  );
}

export function IconChat(props) {
  return (
    <Base {...props}>
      <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1z" />
    </Base>
  );
}

export function IconPin(props) {
  return (
    <Base {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </Base>
  );
}

export function IconRocket(props) {
  return (
    <Base {...props}>
      <path d="M12 2c2.5 2 4 5.5 4 9 0 2-.5 3.7-1.2 5.1L12 19l-2.8-2.9C8.5 14.7 8 13 8 11c0-3.5 1.5-7 4-9z" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M8.5 15.5 6 18M15.5 15.5 18 18M10.5 19 9 22M13.5 19 15 22" />
    </Base>
  );
}

export function IconQuote(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
      <path d="M9.5 6C6.5 7.2 5 9.4 5 12.4c0 2.3 1.4 3.9 3.4 3.9 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-3 .3-1.5 1.5-2.7 3.2-3.3L9.5 6zm9 0c-3 1.2-4.5 3.4-4.5 6.4 0 2.3 1.4 3.9 3.4 3.9 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-3 .3-1.5 1.5-2.7 3.2-3.3L18.5 6z" />
    </svg>
  );
}
