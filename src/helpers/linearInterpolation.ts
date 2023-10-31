export default function linearInterpolation(
  minPixelSize: number,
  maxPixelSize: number,
  minVp = 375,
  maxVp = 900
): string {
  function convertToREM(pixel: number): number {
    return pixel / 16;
  }

  const minPixelSizeRem = convertToREM(minPixelSize);
  const maxPixelSizeRem = convertToREM(maxPixelSize);
  const minVpRem = convertToREM(minVp);
  const maxVpRem = convertToREM(maxVp);

  const slope = (maxPixelSizeRem - minPixelSizeRem) / (maxVpRem - minVpRem);

  const yIntercept = minPixelSizeRem - slope * minVpRem;

  return `clamp(${minPixelSizeRem}rem, ${
    slope * 100
  }vw + ${yIntercept}rem, ${maxPixelSizeRem}rem)`;
}
