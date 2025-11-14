import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface EChartsWrapperProps {
  option: echarts.EChartsOption;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * ECharts Wrapper Component
 * Provides a React wrapper for Apache ECharts
 */
export default function EChartsWrapper({ option, style, className }: EChartsWrapperProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize chart
    if (!chartInstance.current) {
      chartInstance.current = echarts.init(chartRef.current);
    }

    // Set option
    chartInstance.current.setOption(option);

    // Handle resize
    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [option]);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      chartInstance.current?.dispose();
      chartInstance.current = null;
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{ width: '100%', height: '400px', ...style }}
      className={className}
    />
  );
}
