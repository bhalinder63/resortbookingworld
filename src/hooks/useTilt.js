import { useEffect, useRef } from 'react';
import { gsap, hasHover, prefersReducedMotion } from '../lib/gsap.js';

export default function useTilt({ max = 7, lift = 8, scale = 1.03 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion() || !hasHover()) return undefined;

    gsap.set(node, { transformPerspective: 800 });
    const rotateX = gsap.quickTo(node, 'rotationX', { duration: 0.5, ease: 'power2.out' });
    const rotateY = gsap.quickTo(node, 'rotationY', { duration: 0.5, ease: 'power2.out' });
    const liftY = gsap.quickTo(node, 'y', { duration: 0.5, ease: 'power2.out' });
    const scaleTo = gsap.quickTo(node, 'scale', { duration: 0.5, ease: 'power2.out' });

    const handleMove = (e) => {
      const rect = node.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY(px * max * 2);
      rotateX(-py * max * 2);
      liftY(-lift);
      scaleTo(scale);
    };

    const handleLeave = () => {
      rotateX(0);
      rotateY(0);
      liftY(0);
      scaleTo(1);
    };

    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);
    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
      gsap.killTweensOf(node);
    };
  }, [max, lift, scale]);

  return ref;
}
