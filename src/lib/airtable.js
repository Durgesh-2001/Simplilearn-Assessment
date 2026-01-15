import Airtable from "airtable"

// Singleton Airtable base – reused across requests in the same server instance
let _base = null
function getBase() {
  if (!_base) {
    _base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_BASE_ID
    )
  }
  return _base
}

export function createRSVP(email) {
  getBase()("RSVPs")
    .create({ Email: email })
    .catch((err) => {
      console.error("Airtable createRSVP error", err)
    })
}
