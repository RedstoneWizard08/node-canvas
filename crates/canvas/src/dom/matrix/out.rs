use napi::bindgen_prelude::{Float32Array, Float64Array};

use super::DomMatrix;

#[conditional_napi]
impl DomMatrix {
    #[cfg_attr(feature = "napi", napi(js_name = "toFloat32Array"))]
    pub fn to_f32_array(&self) -> Float32Array {
        Float32Array::new(
            self.values()
                .iter()
                .map(|v| *v as f32)
                .collect::<Vec<f32>>(),
        )
    }

    #[cfg_attr(feature = "napi", napi(js_name = "toFloat64Array"))]
    pub fn to_f64_array(&self) -> Float64Array {
        Float64Array::new(self.values().to_vec())
    }
}
