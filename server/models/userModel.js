const mongoose = require("mongoose");

// short_introduction
// brief_introduction
// profile_picture
// profile_thumbnail
// education: [{
//      program_title: 'MBBS, MD, DM rheumatology',
//      institute_name:'University of Florida',
//      institute_city:'San Francisco',
//      institute_country:'US',
//      starting_from:'2008 June',
//      ending_to:'2012 June',
//      description:`Accusamus et iusto odio dignissie corrupti quos dolores etolestias excepo officiale deserunt mollitia animi idendication estame laborum.Accusamus etae iusto odioignissie corrupti quos dolores etolestias excepto officiale deserunt mollitia animi endication estame laborum.`            
//  },{
//  gallery:[
//     {thumbnail:'img-01.png'  , image: 'img-01.jpg' },
//     {thumbnail:'img-02.png'  , image: 'img-02.jpg' },
//     {thumbnail:'img-03.png'  , image: 'img-03.jpg' },
//     {thumbnail:'img-04.png'  , image: 'img-04.jpg' },
//     {thumbnail:'img-05.png'  , image: 'img-05.jpg' },
//     {thumbnail:'img-06.png'  , image: 'img-06.jpg' },
//     ],




const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    max: 20,
  },last_name: {
    type: String,
    required: true,
    max: 20,
  },tagline: {
    type: String,
    max: 120,
    default: "",
  },
  hourly_rate: {
    type: Number,
    max: 8,
    default: "",
  },
  city: {
    type: String,
    max: 30,
    default: "",
  },
  country: {
    type: String,
    max: 30,
    default: "",
  },
  profile_thumbnail: {
    type: String,
    default: "img-01.png",
  },
  profile_picture: {
    type: String,
    default: "img-01.jpg",
  },
  brief_introduction: {
    type: String,
    max: 3000,
    default: "",
  },
  short_introduction: {
    type: String,
    min: 3,
    max: 1000,
    default: "",
  },
  education: [],
  gallery: [],
  languages: [],
  user_type: {
    type: String,
    required: true,
    max: 12,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 100,
  },
  password: {
    type: String,
    required: true,
    max: 30,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Users", userSchema);
