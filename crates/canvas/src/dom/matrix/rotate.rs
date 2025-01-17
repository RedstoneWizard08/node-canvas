use crate::fix_zero;

use super::{DomMatrix, DEG_TO_RAD, PI_360, RAD_TO_DEG};

#[napi]
impl DomMatrix {
    #[napi]
    pub fn rotate(&self, rx: f64, ry: Option<f64>, rz: Option<f64>) -> Self {
        self.clone().rotate_self(rx, ry, rz)
    }

    #[napi]
    pub fn rotate_self(&mut self, mut rx: f64, o_ry: Option<f64>, o_rz: Option<f64>) -> Self {
        let mut ry = o_ry.unwrap_or(0.0);
        let mut rz = o_rz.unwrap_or(0.0);

        if o_ry.is_none() && o_rz.is_none() {
            rz = rx;
            rx = 0.0;
            ry = 0.0;
        }

        let rad_x = rx * DEG_TO_RAD;
        let rad_y = ry * DEG_TO_RAD;
        let rad_z = rz * DEG_TO_RAD;

        let cos_x = rad_x.cos();
        let sin_x = -rad_x.sin();
        let cos_y = rad_y.cos();
        let sin_y = -rad_y.sin();
        let cos_z = rad_z.cos();
        let sin_z = -rad_z.sin();

        let mut tmp = Self::identity();

        tmp.m11 = fix_zero!(cos_y * cos_z);
        tmp.m12 = fix_zero!(-cos_y * sin_z);
        tmp.m13 = fix_zero!(sin_y);
        tmp.m21 = fix_zero!(sin_x * sin_y * cos_z + cos_x * sin_z);
        tmp.m22 = fix_zero!(cos_x * cos_z - sin_x * sin_y * sin_z);
        tmp.m23 = fix_zero!(-sin_x * cos_y);
        tmp.m31 = fix_zero!(sin_x * sin_z - cos_x * sin_y * cos_z);
        tmp.m32 = fix_zero!(sin_x * cos_z + cos_x * sin_y * sin_z);
        tmp.m33 = fix_zero!(cos_x * cos_y);

        *self = tmp * *self;
        *self
    }

    #[napi]
    pub fn rotate_axis_angle(&self, x: f64, y: f64, z: f64, alpha: f64) -> Self {
        self.clone().rotate_axis_angle_self(x, y, z, alpha)
    }

    #[napi]
    pub fn rotate_axis_angle_self(&mut self, x: f64, y: f64, z: f64, alpha: f64) -> Self {
        let mut tmp = Self::identity();
        let len = (x * x + y * y + z * z).sqrt();

        if len == 0.0 {
            return tmp;
        }

        let x = x / len;
        let y = y / len;
        let z = z / len;

        let angle = alpha * PI_360;
        let sin_a = angle.sin();
        let cos_a = angle.cos();
        let sin_a2 = sin_a * sin_a;

        let x2 = x * x;
        let y2 = y * y;
        let z2 = z * z;

        tmp.m11 = 1.0 - 2.0 * (y2 + z2) * sin_a2;
        tmp.m12 = 2.0 * (x * y * sin_a2 + z * sin_a * cos_a);
        tmp.m13 = 2.0 * (x * z * sin_a2 - y * sin_a * cos_a);
        tmp.m21 = 2.0 * (y * x * sin_a2 - z * sin_a * cos_a);
        tmp.m22 = 1.0 - 2.0 * (z2 + x2) * sin_a2;
        tmp.m23 = 2.0 * (y * z * sin_a2 + x * sin_a * cos_a);
        tmp.m31 = 2.0 * (z * x * sin_a2 + y * sin_a * cos_a);
        tmp.m32 = 2.0 * (z * y * sin_a2 - x * sin_a * cos_a);
        tmp.m33 = 1.0 - 2.0 * (x2 + y2) * sin_a2;

        *self = tmp * *self;
        *self
    }

    #[napi]
    pub fn rotate_from_vector(&self, x: Option<f64>, y: Option<f64>) -> Self {
        self.clone().rotate_from_vector_self(x, y)
    }

    #[napi]
    pub fn rotate_from_vector_self(&mut self, x: Option<f64>, y: Option<f64>) -> Self {
        let x = x.unwrap_or(0.0);
        let y = y.unwrap_or(0.0);

        if x == 0.0 && y == 0.0 {
            self.rotate_self(0.0, None, None)
        } else {
            self.rotate_self(y.atan2(x) * RAD_TO_DEG, None, None)
        }
    }
}
