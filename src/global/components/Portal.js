import { useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Portal(props) {
  const { children, parent, className } = props;
  const rootEl = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    const target = parent && parent.appendChild ? parent : document.body;
    // const classList = ['portal-container', ...className.split(' ')];
    const classList = ['portal-container'];

    if (className) className.split(' ').forEach((item) => classList.push(item));

    classList.forEach((item) => rootEl.classList.add(item));

    target.appendChild(rootEl);

    return () => {
      target.removeChild(rootEl);
    };
  }, [rootEl, parent, className]);

  return createPortal(children, rootEl);
}
