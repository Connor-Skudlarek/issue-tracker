const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketRequestSchema = new Schema({
  submittedBy: String,
  priority: String,
  requestID: Number,
  projectID: { type: String, default: "Other" },
  description: String,
  comments: [
    {
      comment: String,
      commentDate: { type: Date, default: Date.now },
      userName: String,
    },
  ],
  dateCreated: { type: Date, default: Date.now },
  commitDate: {
    type: Date,
    default: () => new Date(Date.now + 7 * 24 * 60 * 1000),
  },
  assignedTo: String,
  ticketRequestStatus: { type: String, default: "Pending" },
  requestedCompleteDate: { type: Date },
});

const TicketRequest = mongoose.model("TicketTequest", ticketRequestSchema);

module.exports = TicketRequest;
