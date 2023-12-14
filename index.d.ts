/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export const enum LineCap {
  Butt = 0,
  Round = 1,
  Square = 2
}
export const enum FillRule {
  EvenOdd = 0,
  NonZero = 1
}
export const enum PixelFormat {
  Rgba32 = 0,
  Rgb24 = 1,
  A8 = 2,
  Rgb16_565 = 3,
  A1 = 4,
  Rgb30 = 5
}
export const enum LineJoin {
  Bevel = 0,
  Miter = 1,
  Round = 2
}
export const enum AliasingMode {
  Default = 0,
  None = 1,
  Gray = 2,
  Subpixel = 3
}
export const enum GlobalCompositeOperation {
  Clear = 0,
  Copy = 1,
  Destination = 2,
  SourceOver = 3,
  DestinationOver = 4,
  SourceIn = 5,
  DestinationIn = 6,
  SourceOut = 7,
  DestinationOut = 8,
  SourceAtop = 9,
  DestinationAtop = 10,
  Xor = 11,
  Lighter = 12,
  Normal = 13,
  Multiply = 14,
  Screen = 15,
  Overlay = 16,
  Darken = 17,
  Lighten = 18,
  ColorDodge = 19,
  ColorBurn = 20,
  HardLight = 21,
  SoftLight = 22,
  Difference = 23,
  Exclusion = 24,
  Hue = 25,
  Saturation = 26,
  Color = 27,
  Luminosity = 28,
  Saturate = 29
}
export const enum ImageKind {
  Image = 0,
  Pdf = 1,
  Svg = 2
}
export const enum Quality {
  Fast = 0,
  Good = 1,
  Best = 2,
  Nearest = 3,
  Bilinear = 4
}
export const enum Repetition {
  Repeat = 0,
  RepeatX = 1,
  RepeatY = 2,
  NoRepeat = 3,
  None = 4
}
export const enum TextAlign {
  Center = 0,
  End = 1,
  Left = 2,
  Right = 3,
  Start = 4
}
export const enum TextBaseline {
  Alphabetic = 0,
  Bottom = 1,
  Hanging = 2,
  Ideographic = 3,
  Middle = 4,
  Top = 5
}
export interface TextMetrics {
  /** actualBoundingBoxAscent */
  actualBoundingBoxAscent: number
  /** actualBoundingBoxDescent */
  actualBoundingBoxDescent: number
  /** actualBoundingBoxLeft */
  actualBoundingBoxLeft: number
  /** actualBoundingBoxRight */
  actualBoundingBoxRight: number
  /** fontBoundingBoxAscent */
  fontBoundingBoxAscent: number
  /** fontBoundingBoxDescent */
  fontBoundingBoxDescent: number
  width: number
}
export const enum TextDrawingMode {
  Path = 0,
  Glyph = 1
}
export class ContextSettings {
  alpha: boolean
  pixelFormat?: PixelFormat
  constructor(alpha?: boolean | undefined | null, pixelFormat?: PixelFormat | undefined | null)
}
export class DomMatrix {
  is2D: boolean
  m11: number
  m12: number
  m13: number
  m14: number
  m21: number
  m22: number
  m23: number
  m24: number
  m31: number
  m32: number
  m33: number
  m34: number
  m41: number
  m42: number
  m43: number
  m44: number
  translate(tx?: number | undefined | null, ty?: number | undefined | null, tz?: number | undefined | null): void
  scale3D(scale?: number | undefined | null, ox?: number | undefined | null, oy?: number | undefined | null, oz?: number | undefined | null): void
  scale(sx?: number | undefined | null, sy?: number | undefined | null, sz?: number | undefined | null, ox?: number | undefined | null, oy?: number | undefined | null, oz?: number | undefined | null): void
  rotateFromVector(x?: number | undefined | null, y?: number | undefined | null): void
  rotate(rx?: number | undefined | null, ry?: number | undefined | null, rz?: number | undefined | null): void
  rotateAxisAngle(x: number | undefined | null, y: number | undefined | null, z: number | undefined | null, angle: number): void
  skewX(sx?: number | undefined | null): void
  skewY(sy?: number | undefined | null): void
  flipX(): void
  flipY(): void
  inverse(): void
  setMatrixValue(transformList: Array<number>): void
  
  
  
  
  
  
  
  
  
  
  constructor(init: Array<number>)
  constructor(init: string)
  get values(): number[]
  setValues(values: Array<number>): void
  transformPoint(point: DomPoint): DomPoint
  toFloat32Array(): Float32Array
  toFloat64Array(): Float64Array
  get isIdentity(): boolean
  get aNapiAlias(): number
  set aNapiAlias(newVal: number)
  get bNapiAlias(): number
  set bNapiAlias(newVal: number)
  get cNapiAlias(): number
  set cNapiAlias(newVal: number)
  get dNapiAlias(): number
  set dNapiAlias(newVal: number)
  get eNapiAlias(): number
  set eNapiAlias(newVal: number)
  get fNapiAlias(): number
  set fNapiAlias(newVal: number)
}
export class DomPoint {
  w: number
  x: number
  y: number
  z: number
  constructor(w?: number | undefined | null, x?: number | undefined | null, y?: number | undefined | null, z?: number | undefined | null)
}
export class PngFilters { }
export class ImageMode { }
