const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const thanhvienSchema = mongoose.Schema(
    {   
        matv: String,
        hoten: {
            type: String,
            required: true,
            trim: true
        },
        gioitinh: {
            type: String,
            required: true,
            trim: true
        },
        ngaysinh: Date,
        diachiemail: String,
        sodienthoai: Number

    }
);

thanhvienSchema.plugin(toJSON);
thanhvienSchema.plugin(paginate);


/**
 * @typedef Thanhvien
 */
const Thanhvien = mongoose.model('Thanhien', thanhvienSchema);

module.exports = Thanhvien;