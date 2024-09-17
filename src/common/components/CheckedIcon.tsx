const CheckedIcon = ({ newid }: { newid?: string }) => (
  <svg
    className="checked"
    viewBox="0 0 17 16"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
  >
    <use xlinkHref={`#checked-${newid}`} x="1023" y="255" width="19" height="18" transform="translate(-1024 -256)" />
    <defs>
      <image
        id={`checked-${newid}`}
        width="19"
        height="18"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACWUlEQVQ4ja3UTWhUZxTG8d87M8lMokati9CAGxOKuBBFEFcigVZLoRaNiFpaEV24UUNtoQVhIhQUWlHrwnYjpKBQBEUkoCCYD1CkpXQRcSPi1xCwSIxGZ+LNXBd3xpmJwZUHLvdy7nv+53nO+97LB4wwWzLOdyzHFmxAF8p4jBFx+VzoGxuG+Epfs8J/P4iKvWHPwKIwA9KEn9GLzKzt4zJR6Q9d3RekMvvcv/G5znVnwo7+XaEO1IJ+9LzXS3GCrnW0LGD0Emv2nAxf/rrfjO6H0SMu8/oVmSypJsSEwPQUL8dZtYOvTiT54sRoFQSpiqqVOCiEBNTWQek5xXFCimiK509Y9TU9p8m1cW+Eh393xj/N39wAwzeg9ILVu9h5ni+OMO9jxh8x+T8rtrL5VKJ47DYXe4lKOc1zdsf5juZ6m92gPE12Lu3LkuuTzxj4kajIlt9pak2eL3/Ps0e0LIS1WIy7VdhikJvH4LFkNptO0r6Ub88zNZlYg5FT3LlC60dVd61oq7f5OrkFMjlunubSwcog0jXQ2G2Gf0vWpJvf2egq7PHbTCZLbj5DJ7h6uLYyLjN8nKcPkmMhrr55iYl62GBDi0yW1oVcO8qtM0nu7nX+OUtbez0IhvCQ2gb040BNRZwAyxFX+xKr//6VnLd0U6KyFv0hX5iqDKlSn+/4Bd81KAyBqERIE0+Tzs5UNYCNIV+I6m3CIVxsgMVxbdDVr6EWo9hbBTXAQr7wCttwDFF9lVQ6UVmLs1gf8oUHDUbMEpVf0HZ8iiVIo4Bh/BnyhaHZ6j5ovAHaKr6+NeG7oQAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);

export default CheckedIcon;
