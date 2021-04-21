import { useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Portal(props) {
  const { children, parent, classNames = [] } = props;
  const rootEl = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    const target = parent && parent.appendChild ? parent : document.body;

    if (classNames.length > 0)
      classNames.forEach((className) => rootEl.classList.add(className));

    target.appendChild(rootEl);

    return () => {
      target.removeChild(rootEl);
    };
  }, [rootEl, parent, classNames]);

  return createPortal(children, rootEl);
}
