import { Typography, Button, Box } from "@mui/material";
import styles from "./styles.module.css";
import { ReactComponent as Icon } from "../assets/icon-cart.svg";

const ProductPreviewCardComponent = () => {
  return (
    <Box className={styles["container"]}>
      <Box className={styles["img"]} />
      {/* <img src={require("../assets/image-product-desktop.jpg")} /> */}
      <Box className={styles["section"]}>
        <Typography variant="body1" className={styles["header"]}>
          Perfume
        </Typography>
        <Typography variant="h1" className={styles["title"]}>
          Gabrielle Essence Eau De Parfum
        </Typography>
        <Typography variant="body1" className={styles["text"]}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </Typography>
        <Box className={styles["price"]}>
          <Typography variant="h1" className={styles["price-current"]}>
            $149.99
          </Typography>
          <Typography variant="body1" className={styles["price-old"]}>
            $169.99
          </Typography>
        </Box>
        <Button
          startIcon={<Icon />}
          className={styles["btn"]}
          sx={{ gap: "0.3rem" }}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductPreviewCardComponent;
