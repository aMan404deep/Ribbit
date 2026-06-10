import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // High-end smooth spring physics for the Awwwards-style feel
  const springConfig = { damping: 32, stiffness: 350, mass: 0.25 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    // Only show custom cursor on devices with pointing device (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isClickable = 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('button') ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer');

      const isImage = 
        target.tagName.toLowerCase() === 'img' || 
        target.closest('img') || 
        target.closest('.image-container') ||
        target.getAttribute('data-cursor') === 'image';

      const isText = 
        target.tagName.toLowerCase() === 'input' || 
        target.tagName.toLowerCase() === 'textarea' ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[contenteditable="true"]');

      if (isImage) {
        setCursorVariant('image');
      } else if (isClickable) {
        setCursorVariant('pointer');
      } else if (isText) {
        setCursorVariant('text');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hidden md:block pointer-events-none z-[10000] fixed inset-0 w-full h-full"
    >
      {/* Outer physics-driven ring */}
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center rounded-full overflow-hidden"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          default: {
            width: 36,
            height: 36,
            backgroundColor: "rgba(0, 0, 0, 0)",
            border: "1px solid var(--color-primary)",
            opacity: 0.8,
            scale: 1,
          },
          pointer: {
            width: 52,
            height: 52,
            backgroundColor: "var(--color-primary)",
            border: "0px solid var(--color-primary)",
            opacity: 0.15,
            scale: 1,
          },
          image: {
            width: 80,
            height: 80,
            backgroundColor: "var(--color-primary)",
            border: "0px solid var(--color-primary)",
            opacity: 1,
            scale: 1,
          },
          text: {
            width: 36,
            height: 36,
            backgroundColor: "rgba(0, 0, 0, 0)",
            border: "1px solid var(--color-primary)",
            opacity: 0.3,
            scale: 0.8,
          }
        }}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 450, damping: 35, mass: 0.3 }}
      >
        {cursorVariant === 'image' && (
          <motion.span 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="font-mono font-bold text-[10px] tracking-[0.2em] pl-[0.2em] uppercase"
            style={{ color: "var(--color-primary-foreground)" }}
          >
            VIEW
          </motion.span>
        )}
      </motion.div>

      {/* Inner instant dot */}
      <motion.div
        className="absolute top-0 left-0 rounded-full origin-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "var(--color-primary)"
        }}
        variants={{
          default: { width: 6, height: 6, opacity: 1 },
          pointer: { width: 8, height: 8, opacity: 1 },
          image: { width: 0, height: 0, opacity: 0 },
          text: { width: 2, height: 24, borderRadius: 2, opacity: 1 }
        }}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.1 }}
      />
    </motion.div>
  );
}
