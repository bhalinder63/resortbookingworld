import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/gsap.js';

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (prefersReducedMotion()) {
      gsap.set(node, { opacity: 1, y: 0 });
      return undefined;
    }

    gsap.set(node, { opacity: 0, y: 28 });

    const tween = gsap.to(node, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: delay / 1000,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: node,
        start: 'top 90%',
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
