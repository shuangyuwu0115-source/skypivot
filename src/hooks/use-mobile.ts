import { useState, useEffect } from 'react';

// 断点定义（与 Tailwind 一致）
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// 检测是否为移动端
export function useIsMobile(breakpoint: keyof typeof BREAKPOINTS = 'md'): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < BREAKPOINTS[breakpoint];
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS[breakpoint]);
    };

    // 初始检查
    checkMobile();

    // 监听窗口大小变化
    window.addEventListener('resize', checkMobile);
    
    // 清理
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
}

// 检测是否为平板
export function useIsTablet(): boolean {
  const [isTablet, setIsTablet] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const width = window.innerWidth;
    return width >= BREAKPOINTS.md && width < BREAKPOINTS.lg;
  });

  useEffect(() => {
    const checkTablet = () => {
      const width = window.innerWidth;
      setIsTablet(width >= BREAKPOINTS.md && width < BREAKPOINTS.lg);
    };

    checkTablet();
    window.addEventListener('resize', checkTablet);
    
    return () => window.removeEventListener('resize', checkTablet);
  }, []);

  return isTablet;
}

// 检测是否为桌面端
export function useIsDesktop(breakpoint: keyof typeof BREAKPOINTS = 'lg'): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth >= BREAKPOINTS[breakpoint];
  });

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= BREAKPOINTS[breakpoint]);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, [breakpoint]);

  return isDesktop;
}

// 获取当前断点
export function useBreakpoint(): keyof typeof BREAKPOINTS | null {
  const [breakpoint, setBreakpoint] = useState<keyof typeof BREAKPOINTS | null>(null);

  useEffect(() => {
    const getBreakpoint = (): keyof typeof BREAKPOINTS | null => {
      const width = window.innerWidth;
      
      if (width >= BREAKPOINTS['2xl']) return '2xl';
      if (width >= BREAKPOINTS.xl) return 'xl';
      if (width >= BREAKPOINTS.lg) return 'lg';
      if (width >= BREAKPOINTS.md) return 'md';
      if (width >= BREAKPOINTS.sm) return 'sm';
      return null;
    };

    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}

// 获取窗口尺寸
export function useWindowSize(): { width: number; height: number } {
  const [size, setSize] = useState<{ width: number; height: number }>(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  }));

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// 检测是否支持触摸
export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-expect-error legacy msMaxTouchPoints
        navigator.msMaxTouchPoints > 0
      );
    };

    checkTouch();
  }, []);

  return isTouch;
}

// 检测屏幕方向
export function useOrientation(): 'portrait' | 'landscape' {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    typeof window !== 'undefined' && window.innerWidth > window.innerHeight 
      ? 'landscape' 
      : 'portrait'
  );

  useEffect(() => {
    const handleResize = () => {
      setOrientation(
        window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
      );
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return orientation;
}

// 导出默认 hook
export default useIsMobile;
