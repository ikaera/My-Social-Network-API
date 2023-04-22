const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      // minlength: 4,
      // default: 'Unnamed reaction',
    },
    // score: {
    //   type: Number,
    //   required: true,
    //   default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    // },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (timeStamp) {
        return dayjs(timeStamp).format('DD/MM/YYYY');
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  },
);

module.exports = reactionSchema;
