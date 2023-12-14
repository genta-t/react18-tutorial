import React from 'react';
import './button.css';

interface HelloButtonProps {
  /**
   * 黒かしろか
   */
  primary?: boolean;
  /**
   * 好きな色を選んで
   */
  backgroundColor?: string;
  /**
   * サイズは以下のサイズを指定
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 好きな文字を入れて
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const HelloButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
//...props（スプレッド構文）は、Buttonコンポーネントに渡された全てのプロパティをボタン要素に適用します。
// 具体的には、Buttonコンポーネントに渡されたonClick、disabledなどのプロパティが、この...propsを通じて<button>要素に適用されます。
}: HelloButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
