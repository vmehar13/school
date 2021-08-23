const mongoose = require('mongoose');


var homeSchema = new mongoose.Schema({

banner1:{
    type: String,
},
banner2:{
    type: String,
},
banner3:{
    type: String,
}
},{timestamps: true})

const Home = mongoose.model("Home", homeSchema)

var sliderSchema = new mongoose.Schema({
    slider1: {
        type: String
    },
    slider2: {
        type: String
    },
    slider3: {
        type: String
    },
    slider4: {
        type: String
    },
    slider5: {
        type: String
    },
    slider6: {
        type: String
    },
    slider7: {
        type: String
    },
    slider8: {
        type: String
    },
    slider9: {
        type: String
    },
    slider10: {
        type: String
    }
})

const Slider = mongoose.model("Slider", sliderSchema);

module.exports = {Home, Slider}
