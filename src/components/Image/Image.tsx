import styles from "./Image.module.scss";

interface ImageProps {
  src: string;
  radius?: boolean;
  size: number;
}

export const Image: React.FC<ImageProps> = ({ src, radius, size }) => {
  const imageRadius = {
    borderRadius: radius ? "50%" : "0",
    width: size && `${size}px`,
    height: size && `${size}px`,
  };
  return <img className={styles.logo} src={src} style={imageRadius} />;
};
