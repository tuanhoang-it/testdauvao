const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const hoatdongSchema = mongoose.Schema(
    {
        mahd: String,
        tenhd: {
            type: String,
            required: true,
            trim: true
        },
        motahd: String,
        ngaygiobd: Date,
        ngaygiokt: Date,
        sltoithieuyc: Number,
        sltoidayc: Number,
        thoihandk: Date,
        trangthai: String,
        matv: String,
        lydohuyhd: String
    }
);

hoatdongSchema.plugin(toJSON);
hoatdongSchema.plugin(paginate);


/**
 * @typedef Hoatdong
 */
const Hoatdong = mongoose.model('Hoatdong', hoatdongSchema);

module.exports = Hoatdong;
