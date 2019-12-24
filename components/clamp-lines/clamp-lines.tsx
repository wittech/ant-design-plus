import React, { FC } from 'react';
import { Popover } from 'antd';
import classNames from '@pansy/classnames';

interface ClampLinesProps {
  prefixCls?: string;
  className?: string;
  text?: string;
  lines?: number;
  // 是否显示Pop提示
  showPopover?: boolean;
  trigger?: 'click' | 'focus';
  // 是否响应窗口的resize
  resizable?: boolean;
}

const ClampLines: FC<ClampLinesProps> = (props) => {
  const { prefixCls, className, showPopover } = props;

  const renderClampedText = () => {
    <div
      className={classNames(className, {
        [`${prefixCls}`]: true
      })}
    ></div>;
  };

  return (
    <div
      className={classNames(className, {
        [`${prefixCls}`]: true
      })}
    ></div>
  );
};

ClampLines.defaultProps = {
  prefixCls: 'ant-plus-clamp-lines',
  showPopover: true,
  lines: 2,
  trigger: 'focus',
  resizable: true
};

export default ClampLines;
