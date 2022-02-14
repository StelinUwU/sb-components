import './myLabel.css';

export interface Props {
  /**
   * Message to display in the label
   */

  label: string;

  /**
   * The size of the label
   */

  size: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Capitalize the label
   */
  AllCaps?: boolean;

  /**
   * The color of the label
   */
  color?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Custom font color
   */
  fontColor: string;
}

export const MyLabel = ({
  AllCaps = false,
  color = 'primary',
  label = 'Label Example',
  size = 'normal',
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {AllCaps ? label.toUpperCase() : label}
    </span>
  );
};
