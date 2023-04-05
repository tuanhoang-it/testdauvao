const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const thamgiaSchema = mongoose.Schema(
    {   
        matv: String,
        mahd: String,
        ngaygiodk: {
            type: Date
        },
        diemtruongdoan: {
            type: Number
        },
        diemtieuchi1: Number,
        diemtieuchi2: Number,
        diemtieuchi3: Number,
        nhanxetkhac: String
    }
);

thamgiaSchema.plugin(toJSON);
thamgiaSchema.plugin(paginate);


/**
 * @typedef Thamgia
 */
const Thamgia = mongoose.model('Thamgia', thamgiaSchema);

module.exports = Thamgia;
